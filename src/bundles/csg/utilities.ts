/* [Imports] */
import { cssColors, RGBA } from '@jscad/modeling/src/colors';
import { Geom3 } from '@jscad/modeling/src/geometries/types';
import {
  cameras,
  drawCommands,
  entitiesFromSolids as _entitiesFromSolids,
  prepareRender as _prepareRender,
} from '@jscad/regl-renderer';
import {
  EntitiesFromSolids,
  Entity,
  GridEntity,
  PerspectiveCamera,
  PerspectiveCameraState,
  PrepareRender,
  WrappedRenderer,
} from './types';

/* [Exports] */

// [Proper typing for JS in regl-renderer]
export const prepareRender: PrepareRender.Function = _prepareRender;

export const perspectiveCamera: PerspectiveCamera = cameras.perspective;
export const perspectiveCameraStateDefaults: PerspectiveCameraState =
  perspectiveCamera.defaults;

export const entitiesFromSolids: EntitiesFromSolids.Function = (_entitiesFromSolids as unknown) as EntitiesFromSolids.Function;
export const prepareDrawCommands: WrappedRenderer.PrepareDrawCommands = drawCommands;

// [Custom]
export namespace AxisEntity {
  // @jscad\regl-renderer\src\rendering\commands\drawAxis\index.js
  // @jscad\regl-renderer\demo-web.js
  export type Type = Entity & {
    xColor?: RGBA;
    yColor?: RGBA;
    zColor?: RGBA;
    size?: number;
    alwaysVisible?: boolean;

    // Deprecated
    lineWidth?: number;
  };

  export class Class implements Type {
    public visuals: {
      drawCmd: 'drawAxis' | 'drawGrid' | 'drawLines' | 'drawMesh';
      show: boolean;
    } = {
      drawCmd: 'drawAxis',
      show: true,
    };

    public alwaysVisible: boolean = true;
  }
}

export namespace MultiGridEntity {
  // @jscad\regl-renderer\src\rendering\commands\drawGrid\multi.js
  // @jscad\regl-renderer\demo-web.js
  // @jscad\web\src\ui\views\viewer.js
  // @jscad\regl-renderer\src\index.js
  export type Type = Omit<GridEntity, 'ticks'> & {
    // Entity#visuals gets stuffed into the nested DrawCommand as Props.
    // The Props get passed on wholesale by makeDrawMultiGrid()'s returned lambda,
    // where the following properties then get used
    // (rather than while setting up the DrawCommands)
    visuals: {
      subColor?: RGBA; // As color
    };

    // First number used on the main grid, second number on sub grid
    ticks?: [number, number];
  };

  export class Class implements Type {
    public visuals: {
      drawCmd: 'drawAxis' | 'drawGrid' | 'drawLines' | 'drawMesh';
      show: boolean;
      color?: RGBA;
      subColor?: RGBA;
    } = {
      drawCmd: 'drawGrid',
      show: true,
      color: [0, 0, 0, 1],
      subColor: [0.5, 0.5, 0.5, 1],
    };

    public size: [number, number] = [1000, 1000];

    public ticks: [number, number] = [10, 1];
  }
}

export class Shape {
  public constructor(
    public getSolid: () => Geom3,

    // Whether a Source program that results in this Shape should spawn the CSG
    // tab
    public spawnsTab: boolean = false,

    // Whether to add the axis entity when rendering
    public addAxis: boolean = false,
    // Whether to add the multi grid entity when rendering
    public addMultiGrid: boolean = false
  ) {}

  // Needs to be instance method for REPL
  // eslint-disable-next-line class-methods-use-this
  public toReplString(): string {
    return '<Shape>';
  }
}

// To track the processing to be done between frames
export class FrameTracker {
  public constructor(
    // Start off the first frame by initially zooming to fit
    public zoomToFit: boolean = true
  ) {}
}

// Used as options when setting camera projection
export class CameraViewportDimensions {
  public constructor(public width: number, public height: number) {}
}

// When the object's class and the class used for comparison are from different
// contexts, they may appear identical, but are not recognised as such.
// This check acts as a useful but unconfirmed instanceOf
export function looseInstanceOf(object: Object, c: any): boolean {
  const objectName: string | undefined = object?.constructor?.name;
  const className: string | undefined = c?.name;
  return (
    objectName !== undefined &&
    className !== undefined &&
    objectName === className
  );
}

//
export const {
  black,
  navy,
  green,
  teal,
  purple,
  orange,
  silver,
  grey,
  blue,
  lime,
  cyan,
  pink,
  yellow,
  white,
} = cssColors;
