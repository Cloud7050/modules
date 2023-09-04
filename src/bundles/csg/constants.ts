/* [Exports] */

//NOTE Silver is in here to avoid circular dependencies, instead of in
// functions.ts with the other colour strings
export const SILVER: string = '#AAAAAA';
export const DEFAULT_COLOR: string = SILVER;

// Renderer grid constants
export const MAIN_TICKS: number = 1;
export const SUB_TICKS: number = MAIN_TICKS / 4;
export const GRID_PADDING: number = MAIN_TICKS;
export const ROUND_UP_INTERVAL: number = MAIN_TICKS;

// Controls zoom constants
export const ZOOM_TICK_SCALE: number = 0.1;

// Controls rotation constants
export const ROTATION_SPEED: number = 0.0015;

// Controls pan constants
export const X_FACTOR: number = 1;
export const Y_FACTOR: number = 0.75;
