/* [Imports] */
import vec3 from '@jscad/modeling/src/maths/vec3';
import {
  ControlsState,
  ControlsUpdate,
  ControlsZoomToFit,
  Entity,
  GeometryEntity,
  PerspectiveCameraState,
  PrepareRender,
  WrappedRenderer,
} from './types';
import {
  AxisEntity,
  CameraViewportDimensions,
  controls,
  controlsStateDefaults,
  entitiesFromSolids,
  FrameTracker,
  MultiGridEntity,
  perspectiveCamera,
  perspectiveCameraStateDefaults,
  prepareDrawCommands,
  prepareRender,
  Shape,
} from './utilities';

/* [Main] */
function makeWrappedRenderer(
  canvas: HTMLCanvasElement
): WrappedRenderer.Function {
  const prepareRenderOptions: PrepareRender.AllOptions = {
    glOptions: { canvas },
  };
  return prepareRender(prepareRenderOptions);
}

function addEntities(shape, geometryEntities): Entity[] {
  const allEntities: Entity[] = [...geometryEntities];

  if (shape.addAxis) allEntities.push(new AxisEntity.Class());
  if (shape.addMultiGrid) allEntities.push(new MultiGridEntity.Class());

  return allEntities;
}

function adjustCameraAngle(
  perspectiveCameraState: PerspectiveCameraState,
  controlsState: ControlsState | null = null
): void {
  if (controlsState === null) {
    // Modify the position & view of the passed camera state,
    // based on its existing position of the viewer (eye),
    // target point the viewer is looking at (centre) & up axis
    perspectiveCamera.update(perspectiveCameraState);
    return;
  }

  const output: ControlsUpdate.Output = controls.update({
    controls: controlsState,
    camera: perspectiveCameraState,
  });

  // Manually apply unlike perspectiveCamera.update()
  controlsState.thetaDelta = output.controls.thetaDelta;
  controlsState.phiDelta = output.controls.phiDelta;
  controlsState.scale = output.controls.scale;

  perspectiveCameraState.position = output.camera.position;
  perspectiveCameraState.view = output.camera.view;
}

function doDynamicResize(
  canvas: HTMLCanvasElement,
  perspectiveCameraState: PerspectiveCameraState
): void {
  const canvasBounds: DOMRect = canvas.getBoundingClientRect();
  const devicePixelRatio: number = window.devicePixelRatio;

  // Account for display scaling
  const width: number = canvasBounds.width * devicePixelRatio;
  const height: number = canvasBounds.height * devicePixelRatio;

  canvas.width = width;
  canvas.height = height;

  // Modify the projection, aspect ratio & viewport
  perspectiveCamera.setProjection(
    perspectiveCameraState,
    perspectiveCameraState,
    new CameraViewportDimensions(width, height)
  );
}

function doZoom(
  zoomTicks: number,
  perspectiveCameraState: PerspectiveCameraState,
  controlsState: ControlsState
) {
  while (zoomTicks !== 0) {
    const currentTick = Math.sign(zoomTicks);
    zoomTicks -= currentTick;

    const scaleChange: number = currentTick * 0.1;
    const potentialNewScale: number = controlsState.scale + scaleChange;
    const potentialNewDistance: number =
      vec3.distance(
        perspectiveCameraState.position,
        perspectiveCameraState.target
      ) * potentialNewScale;

    if (
      potentialNewDistance > controlsState.limits.minDistance &&
      potentialNewDistance < controlsState.limits.maxDistance
    ) {
      controlsState.scale = potentialNewScale;
    } else break;
  }

  adjustCameraAngle(perspectiveCameraState, controlsState);
}

function doZoomToFit(
  geometryEntities: GeometryEntity[],
  perspectiveCameraState: PerspectiveCameraState,
  controlsState: ControlsState
) {
  const options: ControlsZoomToFit.Options = {
    controls: controlsState,
    camera: perspectiveCameraState,
    entities: geometryEntities,
  };
  const output: ControlsZoomToFit.Output = controls.zoomToFit(options);

  perspectiveCameraState.target = output.camera.target;
  controlsState.scale = output.controls.scale;

  adjustCameraAngle(perspectiveCameraState, controlsState);
}

function registerEvents(canvas: HTMLCanvasElement, frameTracker: FrameTracker) {
  canvas.addEventListener('wheel', (wheelEvent: WheelEvent) => {
    frameTracker.changeZoomTicks(wheelEvent.deltaY);
  });

  canvas.addEventListener('dblclick', (_mouseEvent: MouseEvent) => {
    frameTracker.setZoomToFit();
  });
}

/* [Exports] */
export default function render(canvas: HTMLCanvasElement, shape: Shape): void {
  const wrappedRenderer: WrappedRenderer.Function = makeWrappedRenderer(canvas);

  // Create our own state to modify based on the defaults
  const perspectiveCameraState: PerspectiveCameraState = {
    ...perspectiveCameraStateDefaults,
    position: [1000, 1000, 1500],
  };
  const controlsState: ControlsState = {
    ...controlsStateDefaults,
  };

  const geometryEntities: GeometryEntity[] = entitiesFromSolids(
    undefined,
    shape.getSolid()
  );

  // Data to pass to the wrapped renderer we made, below
  const wrappedRendererData: WrappedRenderer.AllData = {
    entities: addEntities(shape, geometryEntities),
    drawCommands: prepareDrawCommands,
    camera: perspectiveCameraState,
  };

  // Custom object to track processing
  const frameTracker: FrameTracker = new FrameTracker();

  // Create a callback function.
  // Request animation frame with it once; it will loop itself from there
  function animationCallback(_timestamp: DOMHighResTimeStamp) {
    doDynamicResize(canvas, perspectiveCameraState);

    if (frameTracker.shouldZoom()) {
      doZoom(
        frameTracker.getZoomTicks(),
        perspectiveCameraState,
        controlsState
      );
      frameTracker.didZoom();
    }

    if (frameTracker.shouldZoomToFit()) {
      doZoomToFit(geometryEntities, perspectiveCameraState, controlsState);
      frameTracker.didZoomToFit();
    }

    // Trigger render once processing for the current frame is done
    wrappedRenderer(wrappedRendererData);

    window.requestAnimationFrame(animationCallback);
  }
  window.requestAnimationFrame(animationCallback);

  registerEvents(canvas, frameTracker);
}
