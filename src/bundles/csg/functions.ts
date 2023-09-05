/**
 * The `csg` module provides functions for drawing Constructive Solid Geometry (CSG), called
 * `Shape`s.
 *
 * A *Shape* is defined by its polygons and vertices.
 *
 * @module csg
 * @author Joel Leow
 * @author Liu Muchen
 * @author Ng Yin Joe
 * @author Yu Chenbo
 */



/* [Imports] */
import { primitives } from '@jscad/modeling';
import { colorize as colorSolid } from '@jscad/modeling/src/colors';
import {
  measureBoundingBox,
  type BoundingBox,
} from '@jscad/modeling/src/measurements';
import {
  intersect as _intersect,
  subtract as _subtract,
  union as _union,
} from '@jscad/modeling/src/operations/booleans';
import { extrudeLinear } from '@jscad/modeling/src/operations/extrusions';
import { serialize } from '@jscad/stl-serializer';
import {
  type List,
} from 'js-slang/dist/stdlib/list';
import save from 'save-file';
import { Core } from './core.js';
import type { Solid } from './jscad/types.js';
import {
  Group,
  Shape,
  hexToColor,
  type Operable,
  type RenderGroup,
  alignOrigin,
} from './utilities';
import { degreesToRadians } from '../../common/utilities.js';



/* [Exports] */

// [Variables - Primitive]
/**
 * Returns a cube Shape in the specified color.
 *
 * Side length: 1
 * Center: (0.5, 0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function cube(hex: string): Shape {
  let solid: Solid = primitives.cube({ size: 1 });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns a rounded cube Shape in the specified color.
 *
 * Side length: 1
 * Center: (0.5, 0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function rounded_cube(hex: string): Shape {
  let solid: Solid = primitives.roundedCuboid({ size: [1, 1, 1] });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns an upright cylinder Shape in the specified color.
 *
 * Height: 1
 * Radius: 0.5
 * Center: (0.5, 0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function cylinder(hex: string): Shape {
  let solid: Solid = primitives.cylinder({
    height: 1,
    radius: 0.5,
  });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns a rounded, upright cylinder Shape in the specified color.
 *
 * Height: 1
 * Radius: 0.5
 * Center: (0.5, 0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function rounded_cylinder(hex: string): Shape {
  let solid: Solid = primitives.roundedCylinder({
    height: 1,
    radius: 0.5,
  });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns a sphere Shape in the specified color.
 *
 * Radius: 0.5
 * Center: (0.5, 0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function sphere(hex: string): Shape {
  let solid: Solid = primitives.sphere({ radius: 0.5 });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns a geodesic sphere Shape in the specified color.
 *
 * Radius: 0.5
 * Center: (0.5, 0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function geodesic_sphere(hex: string): Shape {
  let solid: Solid = primitives.geodesicSphere({ radius: 0.5 });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns a square pyramid Shape in the specified color.
 *
 * Height: 1
 * Side length: 1
 * Base center: (0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function pyramid(hex: string): Shape {
  let pythagorasSide: number = Math.sqrt(2); // sqrt(1^2 + 1^2)
  let solid: Solid = primitives.cylinderElliptic({
    height: 1,
    // Base starting radius
    startRadius: [pythagorasSide, pythagorasSide],
    // Radius by the time the top is reached
    endRadius: [0, 0],
    segments: 4,
  });
  let shape: Shape = new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
  return rotate(shape, 0, 0, degreesToRadians(45)) as Shape;
}

/**
 * Returns a cone Shape in the specified color.
 *
 * Height: 1
 * Radius: 0.5
 * Base center: (0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function cone(hex: string): Shape {
  let solid: Solid = primitives.cylinderElliptic({
    height: 1,
    startRadius: [1, 1],
    endRadius: [0, 0],
  });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns an upright triangular prism Shape in the specified color.
 *
 * Height: 1
 * Side length: 1
 * Alignment: A flat face against the X axis
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function prism(hex: string): Shape {
  let solid: Solid = extrudeLinear(
    { height: 1 },
    primitives.triangle(),
  );
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns an upright extruded star Shape in the specified color.
 *
 * Height: 1
 * Alignment: Both "feet" against the Y axis
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function star(hex: string): Shape {
  let solid: Solid = extrudeLinear(
    { height: 1 },
    primitives.star({ outerRadius: 0.5 }),
  );
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

/**
 * Returns a torus (donut) Shape in the specified color.
 *
 * Inner radius: 0.15 (ring is 0.3 thick)
 * Total radius: 0.5 (from the hole to "outside")
 * Alignment: Rests atop the xy plane, centered around (0.5, 0.5)
 *
 * @param hex hex color code
 *
 * @category Primitive
 */
export function torus(hex: string): Shape {
  let solid: Solid = primitives.torus({
    innerRadius: 0.15,
    outerRadius: 0.35,
  });
  return new Shape(
    colorSolid(
      hexToColor(hex),
      solid,
    ),
  );
}

// [Variables - Colors]

/**
 * A hex color code for black (#000000).
 *
 * @category Color
 */
export const black: string = '#000000';

/**
 * A hex color code for dark blue (#0000AA).
 *
 * @category Color
 */
export const navy: string = '#0000AA';

/**
 * A hex color code for green (#00AA00).
 *
 * @category Color
 */
export const green: string = '#00AA00';

/**
 * A hex color code for dark cyan (#00AAAA).
 *
 * @category Color
 */
export const teal: string = '#00AAAA';

/**
 * A hex color code for dark red (#AA0000).
 *
 * @category Color
 */
export const crimson: string = '#AA0000';

/**
 * A hex color code for purple (#AA00AA).
 *
 * @category Color
 */
export const purple: string = '#AA00AA';

/**
 * A hex color code for orange (#FFAA00).
 *
 * @category Color
 */
export const orange: string = '#FFAA00';

/**
 * A hex color code for light gray (#AAAAAA).
 *
 * @category Color
 */
export const silver: string = '#AAAAAA';

/**
 * A hex color code for dark gray (#555555).
 *
 * @category Color
 */
export const gray: string = '#555555';

/**
 * A hex color code for blue (#5555FF).
 *
 * @category Color
 */
export const blue: string = '#5555FF';

/**
 * A hex color code for light green (#55FF55).
 *
 * @category Color
 */
export const lime: string = '#55FF55';

/**
 * A hex color code for cyan (#55FFFF).
 *
 * @category Color
 */
export const cyan: string = '#55FFFF';

/**
 * A hex color code for light red (#FF5555).
 *
 * @category Color
 */
export const rose: string = '#FF5555';

/**
 * A hex color code for pink (#FF55FF).
 *
 * @category Color
 */
export const pink: string = '#FF55FF';

/**
 * A hex color code for yellow (#FFFF55).
 *
 * @category Color
 */
export const yellow: string = '#FFFF55';

/**
 * A hex color code for white (#FFFFFF).
 *
 * @category Color
 */
export const white: string = '#FFFFFF';

// [Functions]

/**
 * Union of the two provided shapes to produce a new shape.
 *
 * @param {Shape} a - The first shape
 * @param {Shape} b - The second shape
 * @returns {Shape} The resulting unioned shape
 */
export function union(a: Shape, b: Shape): Shape {
  let newSolid: Solid = _union(a.solid, b.solid);
  return new Shape(newSolid);
}

/**
 * Subtraction of the second shape from the first shape to produce a new shape.
 *
 * @param {Shape} a - The shape to be subtracted from
 * @param {Shape} b - The shape to remove from the first shape
 * @returns {Shape} The resulting subtracted shape
 */
export function subtract(a: Shape, b: Shape): Shape {
  let newSolid: Solid = _subtract(a.solid, b.solid);
  return new Shape(newSolid);
}

/**
 * Intersection of the two shape to produce a new shape.
 *
 * @param {Shape} a - The first shape
 * @param {Shape} b - The second shape
 * @returns {Shape} The resulting intersection shape
 */
export function intersect(a: Shape, b: Shape): Shape {
  let newSolid: Solid = _intersect(a.solid, b.solid);
  return new Shape(newSolid);
}

/**
 * Scales the shape in the x, y and z direction with the specified factor.
 * Factors must be non-zero.
 * For example, scaling the shape by 1 in x, y and z directions results in
 * the original shape.
 * Scaling the shape by -1 in x direction and 1 in y and z directions results
 * in the reflection
 *
 * @param {Operable} entity - The Group or Shape to be scaled
 * @param {number} x - Scaling in the x direction
 * @param {number} y - Scaling in the y direction
 * @param {number} z - Scaling in the z direction
 * @returns {Shape} Resulting Shape
 */
export function scale(entity: Operable, x: number, y: number, z: number): Operable {
  if (x <= 0 || y <= 0 || z <= 0) {
    throw new Error('factors must be non-zero');
  }
  return entity.scale([x, y, z]);
}

/**
 * Translate / Move the shape by the provided x, y and z units from negative
 * infinity to infinity.
 *
 * @param {Operable} entity - The Group or Shape to be translated
 * @param {number} x - The number to shift the shape in the x direction
 * @param {number} y - The number to shift the shape in the y direction
 * @param {number} z - The number to shift the shape in the z direction
 * @returns {Shape} The translated shape
 */
export function translate(
  entity: Operable,
  x: number,
  y: number,
  z: number,
): Operable {
  return entity.translate([x, y, z]);
}

/**
 * Rotate the shape by the provided angles in the x, y and z direction.
 * Angles provided are in the form of radians (i.e. 2π represent 360
 * degrees). Note that the order of rotation is from the x direction first,
 * followed by the y and z directions.
 *
 * @param {Operable} entity - The Group or Shape to be rotated
 * @param {number} x - Angle of rotation in the x direction
 * @param {number} y - Angle of rotation in the y direction
 * @param {number} z - Angle of rotation in the z direction
 * @returns {Shape} The rotated shape
 */
export function rotate(
  entity: Operable,
  x: number,
  y: number,
  z: number,
): Operable {
  return entity.rotate([x, y, z]);
}

/**
 * Returns a lambda function that contains the coordinates of the bounding box.
 * Provided with the axis 'x', 'y' or 'z' and value 'min' for minimum and 'max'
 * for maximum, it returns the coordinates of the bounding box.
 *
 * For example,
 * ````
 * const a = bounding_box(sphere);
 * a('x', 'min'); // Returns the minimum x coordinate of the bounding box
 * ````
 *
 * @param {Shape} shape - The scale to be measured
 * @returns {(String, String) => number} A lambda function providing the
 * Shape's bounding box coordinates
 */
export function bounding_box(
  shape: Shape,
): (axis: String, min: String) => number {
  let bounds: BoundingBox = measureBoundingBox(shape.solid);
  return (axis: String, min: String): number => {
    let i: number = axis === 'x' ? 0 : axis === 'y' ? 1 : axis === 'z' ? 2 : -1;
    let j: number = min === 'min' ? 0 : min === 'max' ? 1 : -1;
    if (i === -1 || j === -1) {
      throw Error(
        'bounding_box returned function expects a proper axis and min String.',
      );
    } else {
      return bounds[j][i];
    }
  };
}

/**
 * Returns a hex color code representing the color specified by the given RGB values.
 * @param {number} redComponent Red component of the color
 * @param {number} greenComponent Green component of the color
 * @param {number} blueComponent Blue component of the color
 * @returns {string} The hex color code
 */
export function rgb(
  redComponent: number,
  greenComponent: number,
  blueComponent: number,
): string {
  if (
    redComponent < 0
    || redComponent > 255
    || greenComponent < 0
    || greenComponent > 255
    || blueComponent < 0
    || blueComponent > 255
  ) {
    throw new Error('invalid argument value: expects [0, 255]');
  }
  return `#${redComponent.toString(16)}${greenComponent.toString(16)}
    ${blueComponent.toString(16)}`;
}

/**
 * Checks if the specified entity is a Shape.
 *
 * @param {unknown} entity - The entity to check
 * @returns {boolean} Whether the entity is a Shape
 */
export function is_shape(entity: unknown): boolean {
  return entity instanceof Shape;
}

/**
 * Checks if the specified entity is a Group.
 *
 * @param {unknown} entity - The entity to check
 * @returns {boolean} Whether the entity is a Group
 */
export function is_group(entity: unknown): boolean {
  return entity instanceof Group;
}

/**
 * Initializes a group of shapes, which is represented
 * as a hierarchical tree structure, with groups as
 * internal nodes and shapes as leaf nodes.
 *
 * @param {List} children - The Groups and/or Shapes
 * to be placed inside this new Group
 * @returns {Group} The newly created Group
 */
export function group(children: List): Group {
  return new Group(children);
}

/**
 * Renders a Group of Shapes, along with a grid and axes.
 *
 * @param {Group} groupToRender The Group to be rendered
 */
export function render_grid_axes(groupToRender: Group): RenderGroup {
  groupToRender.store();
  // Render group is returned for REPL text only; do not document
  return Core.getRenderGroupManager()
    .nextRenderGroup(true, true);
}

/**
 * Renders a Group of Shapes, along with a grid.
 *
 * @param {Group} groupToRender The Group to be rendered
 */
export function render_grid(groupToRender: Group): RenderGroup {
  groupToRender.store();
  return Core.getRenderGroupManager()
    .nextRenderGroup(true);
}

/**
 * Renders a Group of Shapes, along with X, Y and Z axes.
 *
 * @param {Group} groupToRender The Group to be rendered
 */
export function render_axes(groupToRender: Group): RenderGroup {
  groupToRender.store();
  return Core.getRenderGroupManager()
    .nextRenderGroup(undefined, true);
}

/**
 * Renders a Group of Shapes.
 *
 * @param {Group} groupToRender The Group to be rendered
 */
export function render(groupToRender: Group): RenderGroup {
  groupToRender.store();
  return Core.getRenderGroupManager()
    .nextRenderGroup();
}

/**
 * Converts a shape to an downloadable STL file, which can be used for 3D printing.
 */
export async function shape_to_stl(shape: Shape): Promise<void> {
  await save(
    new Blob(serialize({ binary: true }, shape.solid)),
    'Source Academy CSG.stl',
  );
}
