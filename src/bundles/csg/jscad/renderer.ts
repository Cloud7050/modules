/* [Imports] */
import measureBoundingBox from '@jscad/modeling/src/measurements/measureBoundingBox.js';
import {
  cameras,
  controls,
  drawCommands,
  entitiesFromSolids,
  prepareRender,
} from '@jscad/regl-renderer';
import {
  ACE_GUTTER_BACKGROUND_COLOR,
  ACE_GUTTER_TEXT_COLOR,
  BP_TEXT_COLOR,
  GRID_PADDING,
  MAIN_TICKS,
  ROUND_UP_INTERVAL,
  SUB_TICKS,
} from '../constants.js';
import { hexToAlphaColor, RenderGroup, Shape } from '../utilities.js';
import {
  AlphaColor,
  AxisEntityType,
  BoundingBox,
  ControlsState,
  EntitiesFromSolidsOptions,
  Entity,
  GeometryEntity,
  MultiGridEntityType,
  PerspectiveCameraState,
  Solid,
  WrappedRenderer,
  WrappedRendererData,
} from './types.js';

/* [Main] */
function solidsToGeometryEntities(solids: Solid[]): GeometryEntity[] {
  //TODO apply silver default here instead, see if works
  let options: EntitiesFromSolidsOptions = {};
  return (entitiesFromSolids(
    options,
    ...solids
  ) as unknown) as GeometryEntity[];
}

function neatGridDistance(rawDistance: number) {
  let paddedDistance: number = rawDistance + GRID_PADDING;
  let roundedDistance: number =
    Math.ceil(paddedDistance / ROUND_UP_INTERVAL) * ROUND_UP_INTERVAL;
  return roundedDistance;
}

class MultiGridEntity implements MultiGridEntityType {
  visuals: {
    drawCmd: 'drawGrid';
    show: boolean;

    color?: AlphaColor;
    subColor?: AlphaColor;
  } = {
    drawCmd: 'drawGrid',
    show: true,

    color: hexToAlphaColor(BP_TEXT_COLOR),
    subColor: hexToAlphaColor(ACE_GUTTER_TEXT_COLOR),
  };

  ticks: [number, number] = [MAIN_TICKS, SUB_TICKS];

  size: [number, number];

  constructor(size: number) {
    this.size = [size, size];
  }
}

class AxisEntity implements AxisEntityType {
  visuals: {
    drawCmd: 'drawAxis';
    show: boolean;
  } = {
    drawCmd: 'drawAxis',
    show: true,
  };

  alwaysVisible: boolean = false;

  constructor(public size?: number) {}
}

function makeExtraEntities(
  renderGroup: RenderGroup,
  solids: Solid[]
): Entity[] {
  let { hasGrid, hasAxis } = renderGroup;
  // Run calculations for grid and/or axis only if needed
  if (!(hasAxis || hasGrid)) return [];

  let boundingBoxes: BoundingBox[] = solids.map(
    (solid: Solid): BoundingBox => measureBoundingBox(solid)
  );
  let minMaxXys: number[][] = boundingBoxes.map(
    (boundingBox: BoundingBox): number[] => {
      let minX = boundingBox[0][0];
      let minY = boundingBox[0][1];
      let maxX = boundingBox[1][0];
      let maxY = boundingBox[1][1];
      return [minX, minY, maxX, maxY];
    }
  );
  let xys: number[] = minMaxXys.flat(1);
  let distancesFromOrigin: number[] = xys.map(Math.abs);
  let furthestDistance: number = Math.max(...distancesFromOrigin);
  let neatDistance: number = neatGridDistance(furthestDistance);

  let extraEntities: Entity[] = [];
  if (hasGrid) extraEntities.push(new MultiGridEntity(neatDistance * 2));
  if (hasAxis) extraEntities.push(new AxisEntity(neatDistance));
  return extraEntities;
}

/* [Exports] */
export function makeWrappedRendererData(
  renderGroup: RenderGroup,
  cameraState: PerspectiveCameraState
): WrappedRendererData {
  let solids: Solid[] = renderGroup.shapes.map(
    (shape: Shape): Solid => shape.solid
  );
  let geometryEntities: GeometryEntity[] = solidsToGeometryEntities(solids);
  let extraEntities: Entity[] = makeExtraEntities(renderGroup, solids);
  let allEntities: Entity[] = [...geometryEntities, ...extraEntities];

  return {
    entities: allEntities,

    camera: cameraState,

    rendering: {
      background: hexToAlphaColor(ACE_GUTTER_BACKGROUND_COLOR),
    },

    drawCommands,
  };
}

export function makeWrappedRenderer(
  canvas: HTMLCanvasElement
): WrappedRenderer {
  return prepareRender({
    // Used to initialise Regl from the REGL package constructor
    glOptions: { canvas },
  });
}

export function cloneCameraState(): PerspectiveCameraState {
  return { ...cameras.perspective.defaults };
}
export function cloneControlsState(): ControlsState {
  return { ...controls.orbit.defaults };
}
