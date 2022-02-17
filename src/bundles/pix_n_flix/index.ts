import {
  start,
  red_of,
  blue_of,
  green_of,
  alpha_of,
  set_rgba,
  video_height,
  video_width,
  copy_image,
  install_filter,
  reset_filter,
  compose_filter,
  snapshot,
  set_dimensions,
  set_fps,
  stop_video_after,
} from './functions';

/**
 * Bundle for Source Academy pix_n_flix module
 * @author Loh Xian Ze, Bryan
 * @author Tang Xin Kye, Marcus
 */

export default () => ({
  start,
  red_of,
  blue_of,
  green_of,
  alpha_of,
  set_rgba,
  video_height,
  video_width,
  copy_image,
  install_filter,
  reset_filter,
  compose_filter,
  snapshot,
  set_dimensions,
  set_fps,
  stop_video_after,
});
