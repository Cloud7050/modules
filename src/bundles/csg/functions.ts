/**
 * The module `csg` provides functions for drawing Constructive Solid Geometry (CSG) called `Shape`.
 *
 * A *Shape* is defined by its polygons and vertices.
 *
 * @module csg
 * @author Liu Muchen
 * @author Joel Leow
 */

import { geometries, primitives } from '@jscad/modeling';
import { colorize as _colorize, hexToRgb } from '@jscad/modeling/src/colors';
import { RGB } from '@jscad/modeling/src/colors/types';
import { Geom3 } from '@jscad/modeling/src/geometries/types';
import {
  measureArea,
  measureBoundingBox,
  measureVolume,
} from '@jscad/modeling/src/measurements';
import {
  intersect as _intersect,
  subtract as _subtract,
  union as _union,
} from '@jscad/modeling/src/operations/booleans';
import { extrudeLinear } from '@jscad/modeling/src/operations/extrusions';
import {
  align,
  center,
  mirror,
  rotate as _rotate,
  scale as _scale,
  translate as _translate,
} from '@jscad/modeling/src/operations/transforms';
import {
  black as _black,
  blue as _blue,
  cyan as _cyan,
  green as _green,
  gray as _gray,
  lime as _lime,
  looseInstanceOf,
  navy as _navy,
  orange as _orange,
  pink as _pink,
  purple as _purple,
  Shape,
  silver as _silver,
  teal as _teal, 
  white as _white,
  yellow as _yellow,
} from './utilities';
import { BoundingBox, CoordinatesXYZ } from './types';

// =============================================================================
// Colors
// =============================================================================

/**
 * Black attribute for colorize function
 *
 * @category Colour
 */
export const black: RGB = _black;

/**
 * Navy attribute for colorize function
 *
 * @category Colour
 */
export const navy: RGB = _navy;

/**
 * Green attribute for colorize function
 *
 * @category Colour
 */
export const green: RGB = _green;

/**
 * Teal attribute for colorize function
 *
 * @category Colour
 */
export const teal: RGB = _teal;

/**
 * Purple attribute for colorize function
 *
 * @category Colour
 */
export const purple: RGB = _purple;

/**
 * Orange attribute for colorize function
 *
 * @category Colour
 */
export const orange: RGB = _orange;

/**
 * Silver attribute for colorize function
 *
 * @category Colour
 */
export const silver: RGB = _silver;

/**
 * Grey attribute for colorize function
 *
 * @category Colour
 */
export const gray: RGB = _gray;

/**
 * Blue attribute for colorize function
 *
 * @category Colour
 */
export const blue: RGB = _blue;

/**
 * Lime attribute for colorize function
 *
 * @category Colour
 */
export const lime: RGB = _lime;

/**
 * Cyan attribute for colorize function
 *
 * @category Colour
 */
export const cyan: RGB = _cyan;

/**
 * Pink attribute for colorize function
 *
 * @category Colour
 */
export const pink: RGB = _pink;

/**
 * Yellow attribute for colorize function
 *
 * @category Colour
 */
export const yellow: RGB = _yellow;

/**
 * White attribute for colorize function
 *
 * @category Colour
 */
export const white: RGB = _white;

// =============================================================================
// Functions
// =============================================================================

/**
 * Generates a new Shape object with the given geometry.
 *
 * @param {Geom3} geom
 * @returns {Shape} New shape based on input geometry
 */
function generate_shape(geom: Geom3): Shape {
  return new Shape(() => geom);
}

/**
 * Union of the two provided shapes to produce a new shape.
 *
 * @param {Shape} a - The first shape
 * @param {Shape} b - The second shape
 * @returns {Shape} The resulting unioned shape
 */
export function union(a: Shape, b: Shape): Shape {
  const newShape: Geom3 = _union(a.getSolid(), b.getSolid());
  return generate_shape(newShape);
}

/**
 * Subtraction of the second shape from the first shape to produce a new shape.
 *
 * @param {Shape} a - The shape to be subtracted from
 * @param {Shape} b - The shape to remove from the first shape
 * @returns {Shape} The resulting subtracted shape
 */
export function subtract(a: Shape, b: Shape): Shape {
  const newShape: Geom3 = _subtract(a.getSolid(), b.getSolid());
  return generate_shape(newShape);
}

/**
 * Intersection of the two shape to produce a new shape.
 *
 * @param {Shape} a - The first shape
 * @param {Shape} b - The second shape
 * @returns {Shape} The resulting intersection shape
 */
export function intersect(a: Shape, b: Shape): Shape {
  const newShape: Geom3 = _intersect(a.getSolid(), b.getSolid());
  return generate_shape(newShape);
}

/**
 * Colours the given shape with the colour provided.
 *
 * @param {Shape} shape - The shape to be coloured
 * @param {RGB} color - The colour to colour the shape with
 * @returns {Shape} Resulting Shape
 */
export function colorize(shape: Shape, color: RGB): Shape {
  try {
    const newShape: Geom3 = _colorize(color, shape.getSolid());
    return generate_shape(newShape);
  } catch {
    throw Error(`colorize expects a shape color`);
  }
}

/**
 * Colours the given shape by specifying the red, green, blue (RGB) value,
 * ranging from 0.0 to 1.0.
 * For example RGB value of (1.0, 1.0, 1.0) is white while the RGB value of
 * (0.0, 0.0, 0.0) is black.
 *
 * @param {Shape} shape - The shape to be coloured
 * @param {number} r - Red value [0.0 - 1.0]
 * @param {number} g - Green value [0.0 - 1.0]
 * @param {number} b - Blue value [0.0 - 1.0]
 * @returns {Shape} Resulting Shape
 */
export function colorize_rgb(
  shape: Shape,
  r: number,
  g: number,
  b: number
): Shape {
  if (r > 1.0 || r < 0) {
    throw Error(`colorize_rgb expects red value to be between 0 and 1.0`);
  }
  if (g > 1.0 || g < 0) {
    throw Error(`colorize_rgb expects green value to be between 0 and 1.0`);
  }
  if (b > 1.0 || b < 0) {
    throw Error(`colorize_rgb expects blue value to be between 0 and 1.0`);
  }
  const newShape: Geom3 = _colorize([r, g, b], shape.getSolid());
  return generate_shape(newShape);
}

/**
 * Colours the given shape by specifying the hex, in the form of #xxxxxx or
 * xxxxxx.
 * For example hex value of #FFFFFF is white while the hex value of #000000
 * is black.
 *
 * @param {Shape} shape - The shape to be coloured
 * @param {string} hex - The hex value to colour the shape with
 * @returns {Shape} Resulting Shape
 */
export function colorize_hex(shape: Shape, hex: string): Shape {
  if (hex.replace('#', '').length === 6) {
    const newShape: Geom3 = _colorize(hexToRgb(hex), shape.getSolid());
    return generate_shape(newShape);
  }
  throw Error(
    `colorize_hex expects a hex value of the form "#000000" or "000000"`
  );
}

/**
 * Scales the shape in the x, y and z direction with the specified factor,
 * ranging from 0 to infinity.
 * For example scaling the shape by 1 in x, y and z direction results in
 * the original shape.
 *
 * @param {Shape} shape - The shape to be scaled
 * @param {number} x - Scaling in the x direction
 * @param {number} y - Scaling in the y direction
 * @param {number} z - Scaling in the z direction
 * @returns {Shape} Resulting Shape
 */
export function scale(shape: Shape, x: number, y: number, z: number): Shape {
  const newShape: Geom3 = _scale([x, y, z], shape.getSolid());
  return generate_shape(newShape);
}

/**
 * Scales the shape in the x direction with the specified factor,
 * ranging from 0 to infinity.
 * For example scaling the shape by 1 in x direction results in the
 * original shape.
 *
 * @param {Shape} shape - The shape to be scaled
 * @param {number} x - Scaling in the x direction
 * @returns {Shape} Resulting Shape
 */
export function scale_x(shape: Shape, x: number): Shape {
  return scale(shape, x, 1, 1);
}

/**
 * Scales the shape in the y direction with the specified factor,
 * ranging from 0 to infinity.
 * For example scaling the shape by 1 in y direction results in the
 * original shape.
 *
 * @param {Shape} shape - The shape to be scaled
 * @param {number} y - Scaling in the y direction
 * @returns {Shape} Resulting Shape
 */
export function scale_y(shape: Shape, y: number): Shape {
  return scale(shape, 1, y, 1);
}

/**
 * Scales the shape in the z direction with the specified factor,
 * ranging from 0 to infinity.
 * For example scaling the shape by 1 in z direction results in the
 * original shape.
 *
 * @param {Shape} shape - The shape to be scaled
 * @param {number} z - Scaling in the z direction
 * @returns {Shape} Resulting Shape
 */
export function scale_z(shape: Shape, z: number): Shape {
  return scale(shape, 1, 1, z);
}

/**
 * Returns a lambda function that contains the center of the given shape in the
 * x, y and z direction. Providing 'x', 'y', 'z' as input would return x, y and
 * z coordinates of shape's center
 *
 * For example
 * ````
 * const a = shape_center(sphere);
 * a('x'); // Returns the x coordinate of the shape's center
 * ````
 *
 * @param {Shape} shape - The scale to be measured
 * @returns {(String) => number} A lambda function providing the shape's center
 * coordinates
 */
export function shape_center(shape: Shape): (axis: String) => number {
  const bounds: BoundingBox = measureBoundingBox(shape.getSolid());
  const centerCoords: CoordinatesXYZ = [
    bounds[0][0] + (bounds[1][0] - bounds[0][0]) / 2,
    bounds[0][1] + (bounds[1][1] - bounds[0][1]) / 2,
    bounds[0][2] + (bounds[1][2] - bounds[0][2]) / 2,
  ];
  return (axis: String): number => {
    const i: number =
      axis === 'x' ? 0 : axis === 'y' ? 1 : axis === 'z' ? 2 : -1;
    if (i === -1) {
      throw Error(`shape_center's returned function expects a proper axis.`);
    } else {
      return centerCoords[i];
    }
  };
}

/**
 * Set the center of the shape with the provided x, y and z coordinates.
 *
 * @param {Shape} shape - The scale to have the center set
 * @param {nunber} x - The center with the x coordinate
 * @param {nunber} y - The center with the y coordinate
 * @param {nunber} z - The center with the z coordinate
 * @returns {Shape} The shape with the new center
 */
export function shape_set_center(
  shape: Shape,
  x: number,
  y: number,
  z: number
): Shape {
  const newShape: Geom3 = center({ relativeTo: [x, y, z] }, shape.getSolid());
  return generate_shape(newShape);
}

/**
 * Measure the area of the provided shape.
 *
 * @param {Shape} shape - The shape to measure the area from
 * @returns {number} The area of the shape
 */
export function area(shape: Shape): number {
  return measureArea(shape.getSolid());
}

/**
 * Measure the volume of the provided shape.
 *
 * @param {Shape} shape - The shape to measure the volume from
 * @returns {number} The volume of the shape
 */
export function volume(shape: Shape): number {
  return measureVolume(shape.getSolid());
}

/**
 * Mirror / Flip the provided shape by the plane with normal direction vector
 * given by the x, y and z components.
 *
 * @param {Shape} shape - The shape to mirror / flip
 * @param {number} x - The x coordinate of the direction vector
 * @param {number} y - The y coordinate of the direction vector
 * @param {number} z - The z coordinate of the direction vector
 * @returns {Shape} The mirrored / flipped shape
 */
function shape_mirror(shape: Shape, x: number, y: number, z: number) {
  const newShape: Geom3 = mirror({ normal: [x, y, z] }, shape.getSolid());
  return generate_shape(newShape);
}

/**
 * Mirror / Flip the provided shape in the x direction.
 *
 * @param {Shape} shape - The shape to mirror / flip
 * @returns {Shape} The mirrored / flipped shape
 */
export function flip_x(shape: Shape): Shape {
  return shape_mirror(shape, 1, 0, 0);
}

/**
 * Mirror / Flip the provided shape in the y direction.
 *
 * @param {Shape} shape - The shape to mirror / flip
 * @returns {Shape} The mirrored / flipped shape
 */
export function flip_y(shape: Shape): Shape {
  return shape_mirror(shape, 0, 1, 0);
}

/**
 * Mirror / Flip the provided shape in the z direction.
 *
 * @param {Shape} shape - The shape to mirror / flip
 * @returns {Shape} The mirrored / flipped shape
 */
export function flip_z(shape: Shape): Shape {
  return shape_mirror(shape, 0, 0, 1);
}

/**
 * Translate / Move the shape by the provided x, y and z units from negative
 * infinity to infinity.
 *
 * @param {Shape} shape
 * @param {number} x - The number to shift the shape in the x direction
 * @param {number} y - The number to shift the shape in the y direction
 * @param {number} z - The number to shift the shape in the z direction
 * @returns {Shape} The translated shape
 */
export function translate(
  shape: Shape,
  x: number,
  y: number,
  z: number
): Shape {
  const newShape: Geom3 = _translate([x, y, z], shape.getSolid());
  return generate_shape(newShape);
}

/**
 * Translate / Move the shape by the provided x units from negative infinity
 * to infinity.
 *
 * @param {Shape} shape
 * @param {number} x - The number to shift the shape in the x direction
 * @returns {Shape} The translated shape
 */
export function translate_x(shape: Shape, x: number): Shape {
  return translate(shape, x, 0, 0);
}

/**
 * Translate / Move the shape by the provided y units from negative infinity
 * to infinity.
 *
 * @param {Shape} shape
 * @param {number} y - The number to shift the shape in the y direction
 * @returns {Shape} The translated shape
 */
export function translate_y(shape: Shape, y: number): Shape {
  return translate(shape, 0, y, 0);
}

/**
 * Translate / Move the shape by the provided z units from negative infinity
 * to infinity.
 *
 * @param {Shape} shape
 * @param {number} z - The number to shift the shape in the z direction
 * @returns {Shape} The translated shape
 */
export function translate_z(shape: Shape, z: number): Shape {
  return translate(shape, 0, 0, z);
}

/**
 * Places the second shape `b` beside the first shape `a` in the positive x direction,
 * centering the `b`'s y and z on the `a`'s y and z center.
 *
 * @param {Shape} a - The shape to be placed beside with
 * @param {Shape} b - The shape placed beside
 * @returns {Shape} The final shape
 */
export function beside_x(a: Shape, b: Shape): Shape {
  const aBounds: BoundingBox = measureBoundingBox(a.getSolid());
  const newX: number = aBounds[1][0];
  const newY: number = aBounds[0][1] + (aBounds[1][1] - aBounds[0][1]) / 2;
  const newZ: number = aBounds[0][2] + (aBounds[1][2] - aBounds[0][2]) / 2;
  const newShape: Geom3 = _union(
    a.getSolid(), // @ts-ignore
    align(
      {
        modes: ['min', 'center', 'center'],
        relativeTo: [newX, newY, newZ],
      },
      b.getSolid()
    )
  );
  return generate_shape(newShape);
}

/**
 * Places the second shape `b` beside the first shape `a` in the positive y direction,
 * centering the `b`'s x and z on the `a`'s x and z center.
 *
 * @param {Shape} a - The shape to be placed beside with
 * @param {Shape} b - The shape placed beside
 * @returns {Shape} The final shape
 */
export function beside_y(a: Shape, b: Shape): Shape {
  const aBounds: BoundingBox = measureBoundingBox(a.getSolid());
  const newX: number = aBounds[0][0] + (aBounds[1][0] - aBounds[0][0]) / 2;
  const newY: number = aBounds[1][1];
  const newZ: number = aBounds[0][2] + (aBounds[1][2] - aBounds[0][2]) / 2;
  const newShape: Geom3 = _union(
    a.getSolid(), // @ts-ignore
    align(
      {
        modes: ['center', 'min', 'center'],
        relativeTo: [newX, newY, newZ],
      },
      b.getSolid()
    )
  );
  return generate_shape(newShape);
}

/**
 * Places the second shape `b` beside the first shape `a` in the positive z direction,
 * centering the `b`'s x and y on the `a`'s x and y center.
 *
 * @param {Shape} a - The shape to be placed beside with
 * @param {Shape} b - The shape placed beside
 * @returns {Shape} The final shape
 */
export function beside_z(a: Shape, b: Shape): Shape {
  const aBounds: BoundingBox = measureBoundingBox(a.getSolid());
  const newX: number = aBounds[0][0] + (aBounds[1][0] - aBounds[0][0]) / 2;
  const newY: number = aBounds[0][1] + (aBounds[1][1] - aBounds[0][1]) / 2;
  const newZ: number = aBounds[1][2];
  const newShape: Geom3 = _union(
    a.getSolid(), // @ts-ignore
    align(
      {
        modes: ['center', 'center', 'min'],
        relativeTo: [newX, newY, newZ],
      },
      b.getSolid()
    )
  );
  return generate_shape(newShape);
}

/**
 * Returns a lambda function that contains the coordinates of the bounding box.
 * Provided with the axis 'x', 'y' or 'z' and value 'min' for minimum and 'max'
 * for maximum, it returns the coordinates of the bounding box.
 *
 * For example
 * ````
 * const a = bounding_box(sphere);
 * a('x', 'min'); // Returns the maximum x coordinate of the bounding box
 * ````
 *
 * @param {Shape} shape - The scale to be measured
 * @returns {(String, String) => number} A lambda function providing the
 * shape's bounding box coordinates
 */

export function bounding_box(
  shape: Shape
): (axis: String, min: String) => number {
  const bounds: BoundingBox = measureBoundingBox(shape.getSolid());
  return (axis: String, min: String): number => {
    const i: number =
      axis === 'x' ? 0 : axis === 'y' ? 1 : axis === 'z' ? 2 : -1;
    const j: number = min === 'min' ? 0 : min === 'max' ? 1 : -1;
    if (i === -1 || j === -1) {
      throw Error(
        `bounding_box returned function expects a proper axis and min String.`
      );
    } else {
      return bounds[j][i];
    }
  };
}

/**
 * Rotate the shape by the provided angles in the x, y and z direction.
 * Angles provided are in the form of radians (i.e. 2π represent 360
 * degrees)
 *
 * @param {Shape} shape - The shape to be rotated
 * @param {number} x - Angle of rotation in the x direction
 * @param {number} y - Angle of rotation in the y direction
 * @param {number} z - Angle of rotation in the z direction
 * @returns {Shape} The rotated shape
 */
export function rotate(shape: Shape, x: number, y: number, z: number): Shape {
  const newShape: Geom3 = _rotate([x, y, z], shape.getSolid());
  return generate_shape(newShape);
}

/**
 * Rotate the shape by the provided angles in the x direction. Angles
 * provided are in the form of radians (i.e. 2π represent 360 degrees)
 *
 * @param {Shape} shape - The shape to be rotated
 * @param {number} x - Angle of rotation in the x direction
 * @returns {Shape} The rotated shape
 */
export function rotate_x(shape: Shape, x: number): Shape {
  return rotate(shape, x, 0, 0);
}

/**
 * Rotate the shape by the provided angles in the y direction. Angles
 * provided are in the form of radians (i.e. 2π represent 360 degrees)
 *
 * @param {Shape} shape - The shape to be rotated
 * @param {number} y - Angle of rotation in the y direction
 * @returns {Shape} The rotated shape
 */
export function rotate_y(shape: Shape, y: number): Shape {
  return rotate(shape, 0, y, 0);
}

/**
 * Rotate the shape by the provided angles in the z direction. Angles
 * provided are in the form of radians (i.e. 2π represent 360 degrees)
 *
 * @param {Shape} shape - The shape to be rotated
 * @param {number} z - Angle of rotation in the z direction
 * @returns {Shape} The rotated shape
 */
export function rotate_z(shape: Shape, z: number): Shape {
  return rotate(shape, 0, 0, z);
}

/**
 * Center the provided shape with the middle base of the shape at (0, 0, 0).
 *
 * @param {Shape} shape - The shape to be centered
 * @returns {Shape} The shape that is centered
 */
function shapeSetOrigin(shape: Shape) {
  const newShape: Geom3 = align(
    { modes: ['min', 'min', 'min'] },
    shape.getSolid()
  );
  return generate_shape(newShape);
}

/**
 * Checks whether the given shape is a Shape.
 *
 * @param {Shape} shape - The shape to be checked
 * @returns {boolean} Boolean on whether shape provided is a Shape
 */
export function is_shape(shape: Shape): boolean {
  if (looseInstanceOf(shape, Shape)) {
    if (!geometries.geom3.isA(shape.getSolid())) {
      return false;
    }
    return true;
  }
  return false;
}

/**
 * Clones the given shape, stating whether axis and grid needs to be rendered.
 *
 * @param {Shape} shape - The shape to be cloned
 * @param {boolean} axis - Whether axis needs to be rendered
 * @param {boolean} grid - Whether grid needs to be rendered
 * @returns {Shape} Cloned shape
 */
function shape_clone(shape: Shape, axis: boolean, grid: boolean): Shape {
  return new Shape(
    () => geometries.geom3.clone(shape.getSolid()),
    true,
    axis,
    grid
  );
}

/**
 * Returns a copy of the specified Shape that will get rendered in a tab,
 * if your Source program results in that Shape.
 * I.e., use this function as the last statement in your program to render the
 * specified shape.
 *
 * @param {Shape} shape - The Shape to render.
 * @returns {Shape} A copy of the specified Shape, marked for rendering.
 */
export function render(shape: Shape): Shape {
  if (!is_shape(shape)) {
    throw Error(`render expects a Shape as argument.`);
  }
  return shape_clone(shape, false, false);
}

/**
 * Returns a copy of the specified Shape that will get rendered in a tab with axis,
 * if your Source program results in that Shape.
 * I.e., use this function as the last statement in your program to render the
 * specified shape.
 *
 * @param {Shape} shape - The Shape to render.
 * @returns {Shape} A copy of the specified Shape, marked for rendering.
 */
export function render_axis(shape: Shape): Shape {
  if (!is_shape(shape)) {
    throw Error(`render_axis expects a Shape as argument.`);
  }
  return shape_clone(shape, true, false);
}

/**
 * Returns a copy of the specified Shape that will get rendered in a tab with grid,
 * if your Source program results in that Shape.
 * I.e., use this function as the last statement in your program to render the
 * specified shape.
 *
 * @param {Shape} shape - The Shape to render.
 * @returns {Shape} A copy of the specified Shape, marked for rendering.
 */
export function render_grid(shape: Shape): Shape {
  if (!is_shape(shape)) {
    throw Error(`render_grid expects a Shape as argument.`);
  }
  return shape_clone(shape, false, true);
}

/**
 * Returns a copy of the specified Shape that will get rendered in a tab with axis and
 * grid, if your Source program results in that Shape.
 * I.e., use this function as the last statement in your program to render the
 * specified shape.
 *
 * @param {Shape} shape - The Shape to render.
 * @returns {Shape} A copy of the specified Shape, marked for rendering.
 */
export function render_axis_grid(shape: Shape): Shape {
  if (!is_shape(shape)) {
    throw Error(`render_axis_grid expects a Shape as argument.`);
  }
  return shape_clone(shape, true, true);
}

// =============================================================================
// Primitives
// =============================================================================

/**
 * Primitive Shape of a cube.
 *
 * @category Primitive
 */
export const cube: Shape = shapeSetOrigin(
  generate_shape(primitives.cube({ size: 1 }))
);

/**
 * Primitive Shape of a sphere.
 *
 * @category Primitive
 */
export const sphere: Shape = shapeSetOrigin(
  generate_shape(primitives.sphere({ radius: 0.5 }))
);

/**
 * Primitive Shape of a cylinder.
 *
 * @category Primitive
 */
export const cylinder: Shape = shapeSetOrigin(
  generate_shape(primitives.cylinder({ radius: 0.5, height: 1 }))
);

/**
 * Primitive Shape of a prism.
 *
 * @category Primitive
 */
export const prism: Shape = shapeSetOrigin(
  generate_shape(extrudeLinear({ height: 1 }, primitives.triangle()))
);

/**
 * Primitive Shape of an extruded star.
 *
 * @category Primitive
 */
export const star: Shape = shapeSetOrigin(
  generate_shape(
    extrudeLinear({ height: 1 }, primitives.star({ outerRadius: 0.5 }))
  )
);

const small = 10 ** -30;

/**
 * Primitive Shape of a square pyramid.
 *
 * @category Primitive
 */
export const pyramid: Shape = shapeSetOrigin(
  generate_shape(
    primitives.cylinderElliptic({
      height: 1,
      startRadius: [0.5, 0.5],
      endRadius: [small, small],
      segments: 4,
    })
  )
);

/**
 * Primitive Shape of a cone.
 *
 * @category Primitive
 */
export const cone: Shape = shapeSetOrigin(
  generate_shape(
    primitives.cylinderElliptic({
      height: 1,
      startRadius: [0.5, 0.5],
      endRadius: [small, small],
    })
  )
);

/**
 * Primitive Shape of a torus.
 *
 * @category Primitive
 */
export const torus: Shape = shapeSetOrigin(
  generate_shape(primitives.torus({ innerRadius: 0.125, outerRadius: 0.375 }))
);

/**
 * Primitive Shape of a rounded cube.
 *
 * @category Primitive
 */
export const roundedCube: Shape = shapeSetOrigin(
  generate_shape(primitives.roundedCuboid({ size: [1, 1, 1] }))
);

/**
 * Primitive Shape of a rounded cylinder.
 *
 * @category Primitive
 */
export const roundedCylinder: Shape = shapeSetOrigin(
  generate_shape(primitives.roundedCylinder({ height: 1, radius: 0.5 }))
);

/**
 * Primitive Shape of a geodesic sphere.
 *
 * @category Primitive
 */
 export const geodesicSphere: Shape = shapeSetOrigin(
  generate_shape(primitives.geodesicSphere({ radius: 0.5 }))
);