/* [Imports] */
import context from 'js-slang/context';
import { Core } from './core.js';
import { CsgModuleState } from './utilities.js';



/* [Main] */
let moduleState = new CsgModuleState();

context.moduleContexts.csg.state = moduleState;
// We initialise Core for the first time over on the bundles' end here
Core.initialize(moduleState);



/* [Exports] */
export {
  // Color
  black,
  navy,
  green,
  teal,
  crimson,
  purple,
  orange,
  silver,
  gray,
  blue,
  lime,
  cyan,
  rose,
  pink,
  yellow,
  white,

  // Primitive
  cube,
  rounded_cube,
  cylinder,
  rounded_cylinder,
  sphere,
  geodesic_sphere,
  pyramid,
  cone,
  prism,
  star,
  torus,

  // Operation
  union,
  subtract,
  intersect,

  // Transformation
  translate,
  rotate,
  scale,

  // Utility
  group,
  ungroup,
  is_shape,
  is_group,
  bounding_box,
  rgb,
  download_shape_stl,

  // Render
  render,
  render_grid,
  render_axes,
  render_grid_axes,
} from './functions';
