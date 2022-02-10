import {
  cameras,
  entitiesFromSolids,
  prepareRender,
  drawCommands,
  controls,
} from '@jscad/regl-renderer';
import { measureBoundingBox } from '@jscad/modeling/src/measurements';
import { Shape } from './utilities';
import { Entities } from './types';

export default function render(canvas: HTMLCanvasElement, shape: Shape) {
  // Prepare Renderer
  const prepareRenderOptions = {
    glOptions: {
      gl: canvas.getContext('webgl2') ?? undefined,
    },
  };
  const preparedRenderer = prepareRender(prepareRenderOptions);

  // Setting up Camera
  const perspectiveCamera = cameras.perspective;
  const camera = perspectiveCamera.defaults;
  const width = 512;
  const height = 512;
  perspectiveCamera.setProjection(camera, camera, {
    width,
    height,
  });
  perspectiveCamera.update(camera, camera);

  // Setting up Camera Controller
  const orbitControls = controls.orbit;
  let viewControls = orbitControls.defaults;

  // Getting CSG Objects
  // @ts-ignore
  const geometries: Entities[] = entitiesFromSolids({}, shape.getObject());

  const shapeBoundingBox = measureBoundingBox(shape.getObject());
  const maxSize = Math.max(
    shapeBoundingBox[0][1],
    shapeBoundingBox[1][1],
    shapeBoundingBox[1][2]
  );

  // Setting up Renderer
  const grid = {
    visuals: {
      drawCmd: 'drawGrid',
      show: shape.grid,
      color: [0, 0, 0, 1],
      subColor: [0, 0, 1, 0.5],
      fadeOut: false,
      transparent: true,
    },
    size: [maxSize, maxSize],
    ticks: [1, 1],
  };

  const axis = {
    visuals: {
      drawCmd: 'drawAxis',
      show: shape.axis,
    },
    size: maxSize * 1.5,
  };

  const renderOptions = {
    camera,
    drawCommands: {
      drawAxis: drawCommands.drawAxis,
      drawGrid: drawCommands.drawGrid,
      drawLines: drawCommands.drawLines,
      drawMesh: drawCommands.drawMesh,
    },
    entities: [grid, axis, ...geometries],
  };

  // Running Renderer and Mouse Events to Control Camera
  let lastX = 0;
  let lastY = 0;

  const rotateSpeed = 0.002;
  const panSpeed = 1;
  const zoomSpeed = 0.08;
  let rotateDelta = [0, 0];
  let panDelta = [0, 0];
  let zoomDelta = 0;
  let pointerDown = false;
  let zoomToFit = true;
  let updateView = true;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function test(a, x) {
    console.log(a, JSON.stringify(x, null, 4))
  }
  const updateAndRender = (timestamp: DOMHighResTimeStamp) => {
    test("viewControls", viewControls);
    test("camera", camera);

    const updated = orbitControls.zoomToFit({
      controls: viewControls,
      camera,
      entities: geometries,
    });
    test("updated", updated);
    viewControls = { ...viewControls, ...updated.controls };
    test("viewControls", viewControls);

    const updates = orbitControls.update({
      controls: viewControls,
      camera,
    });
    test("updates", updates);
    viewControls = { ...viewControls, ...updates.controls };
    test("viewControls", viewControls);

    test("camera.position", camera.position);
    camera.position = updates.camera.position;
    test("camera.position", camera.position);
    perspectiveCamera.update(camera);

    preparedRenderer(renderOptions);
    // window.requestAnimationFrame(updateAndRender);
  };
  window.requestAnimationFrame(updateAndRender);
}
