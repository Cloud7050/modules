(function (React) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    (function() {
        const env = {};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    /**
     * Flatten the given list of arguments into a single flat array.
     * The arguments can be composed of multiple depths of objects and arrays.
     * @param {Array} arr - list of arguments
     * @returns {Array} a flat list of arguments
     * @alias module:modeling/utils.flatten
     */
    const flatten$3 = (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten$3(val)) : acc.concat(val), []);

    var flatten_1$1 = flatten$3;

    /**
     * Performs a shallow clone of the given geometry.
     * @param {geom2} geometry - the geometry to clone
     * @returns {geom2} new geometry
     * @alias module:modeling/geometries/geom2.clone
     */
    const clone$9 = (geometry) => Object.assign({}, geometry);

    var clone_1$9 = clone$9;

    /**
     * Adds the two matrices (A+B).
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} a - first operand
     * @param {mat4} b - second operand
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.add
     */
    const add$3 = (out, a, b) => {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      out[9] = a[9] + b[9];
      out[10] = a[10] + b[10];
      out[11] = a[11] + b[11];
      out[12] = a[12] + b[12];
      out[13] = a[13] + b[13];
      out[14] = a[14] + b[14];
      out[15] = a[15] + b[15];
      return out
    };

    var add_1$3 = add$3;

    /**
     * Represents a 4x4 matrix which is column-major (when typed out it looks row-major).
     * See fromValues().
     * @typedef {Array} mat4
     */

    /**
     * Creates a new identity matrix.
     *
     * @returns {mat4} a new matrix
     * @alias module:modeling/maths/mat4.create
     */
    const create$a = () => [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];

    var create_1$a = create$a;

    /**
     * Creates a clone of the given matrix.
     *
     * @param {mat4} matrix - matrix to clone
     * @returns {mat4} a new matrix
     * @alias module:modeling/maths/mat4.clone
     */
    const clone$8 = (matrix) => {
      const out = create_1$a();
      out[0] = matrix[0];
      out[1] = matrix[1];
      out[2] = matrix[2];
      out[3] = matrix[3];
      out[4] = matrix[4];
      out[5] = matrix[5];
      out[6] = matrix[6];
      out[7] = matrix[7];
      out[8] = matrix[8];
      out[9] = matrix[9];
      out[10] = matrix[10];
      out[11] = matrix[11];
      out[12] = matrix[12];
      out[13] = matrix[13];
      out[14] = matrix[14];
      out[15] = matrix[15];
      return out
    };

    var clone_1$8 = clone$8;

    /**
     * Creates a copy of the given matrix.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} matrix - matrix to copy
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.copy
     */
    const copy$5 = (out, matrix) => {
      out[0] = matrix[0];
      out[1] = matrix[1];
      out[2] = matrix[2];
      out[3] = matrix[3];
      out[4] = matrix[4];
      out[5] = matrix[5];
      out[6] = matrix[6];
      out[7] = matrix[7];
      out[8] = matrix[8];
      out[9] = matrix[9];
      out[10] = matrix[10];
      out[11] = matrix[11];
      out[12] = matrix[12];
      out[13] = matrix[13];
      out[14] = matrix[14];
      out[15] = matrix[15];
      return out
    };

    var copy_1$5 = copy$5;

    /**
     * Creates a invert copy of the given matrix.
     * @author Julian Lloyd
     * code from https://github.com/jlmakes/rematrix/blob/master/src/index.js
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} m - matrix to invert
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.invert
     */
    const invert$3 = (out, a) => {
      const a00 = a[0];
      const a01 = a[1];
      const a02 = a[2];
      const a03 = a[3];
      const a10 = a[4];
      const a11 = a[5];
      const a12 = a[6];
      const a13 = a[7];
      const a20 = a[8];
      const a21 = a[9];
      const a22 = a[10];
      const a23 = a[11];
      const a30 = a[12];
      const a31 = a[13];
      const a32 = a[14];
      const a33 = a[15];

      const b00 = a00 * a11 - a01 * a10;
      const b01 = a00 * a12 - a02 * a10;
      const b02 = a00 * a13 - a03 * a10;
      const b03 = a01 * a12 - a02 * a11;
      const b04 = a01 * a13 - a03 * a11;
      const b05 = a02 * a13 - a03 * a12;
      const b06 = a20 * a31 - a21 * a30;
      const b07 = a20 * a32 - a22 * a30;
      const b08 = a20 * a33 - a23 * a30;
      const b09 = a21 * a32 - a22 * a31;
      const b10 = a21 * a33 - a23 * a31;
      const b11 = a22 * a33 - a23 * a32;

      // Calculate the determinant
      let det =
        b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null
      }
      det = 1.0 / det;

      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

      return out
    };

    var invert_1$3 = invert$3;

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position.
     *
     * @param {mat4} a - first matrix
     * @param {mat4} b - second matrix
     * @returns {Boolean} true if the matrices are equal
     * @alias module:modeling/maths/mat4.equals
     */
    const equals$6 = (a, b) => (
      a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
      a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
      a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
      a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
    );

    var equals_1$5 = equals$6;

    /**
     * Set a matrix to the identity transform.
     *
     * @param {mat4} out - receiving matrix
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.identity
     */
    const identity$1 = (out) => {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var identity_1$1 = identity$1;

    const EPSILON$1 = 0.000001;

    var constants$1 = {
      EPSILON: EPSILON$1
    };

    const { EPSILON } = constants$1;

    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotate(dest, dest, rad, axis)
     *
     * @param {mat4} out - receiving matrix
     * @param {Number} rad - angle to rotate the matrix by
     * @param {vec3} axis - axis of which to rotate around
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.fromRotation
     * @example
     * let matrix = fromRotation(create(), Math.PI / 2, [0, 0, 3])
     */
    const fromRotation$1 = (out, rad, axis) => {
      let [x, y, z] = axis;
      let len = Math.sqrt(x * x + y * y + z * z);

      if (Math.abs(len) < EPSILON) {
        // axis is 0,0,0 or almost
        return identity_1$1(out)
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;

      const s = Math.sin(rad);
      const c = Math.cos(rad);
      const t = 1 - c;

      // Perform rotation-specific matrix multiplication
      out[0] = x * x * t + c;
      out[1] = y * x * t + z * s;
      out[2] = z * x * t - y * s;
      out[3] = 0;
      out[4] = x * y * t - z * s;
      out[5] = y * y * t + c;
      out[6] = z * y * t + x * s;
      out[7] = 0;
      out[8] = x * z * t + y * s;
      out[9] = y * z * t - x * s;
      out[10] = z * z * t + c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var fromRotation_1$1 = fromRotation$1;

    /**
     * Creates a matrix from a vector scaling.
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.scale(dest, dest, vec)
     *
     * @param {mat4} out - receiving matrix
     * @param {vec3} vector - X, Y, Z factors by which to scale
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.fromScaling
     * @example
     * let matrix = fromScaling([1, 2, 0.5])
     */
    const fromScaling$1 = (out, vector) => {
      out[0] = vector[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = vector[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = vector[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var fromScaling_1$1 = fromScaling$1;

    /**
     * Creates a matrix from the given Tait–Bryan angles.
     *
     * Tait-Bryan Euler angle convention using active, intrinsic rotations around the axes in the order z-y-x.
     * @see https://en.wikipedia.org/wiki/Euler_angles
     *
     * @param {mat4} out - receiving matrix
     * @param {Number} yaw - Z rotation in radians
     * @param {Number} pitch - Y rotation in radians
     * @param {Number} roll - X rotation in radians
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.fromTaitBryanRotation
     * @example
     * let matrix = fromTaitBryanRotation(create(), Math.PI / 2, 0, Math.PI)
     */
    const fromTaitBryanRotation = (out, yaw, pitch, roll) => {
      // precompute sines and cosines of Euler angles
      const sy = Math.sin(yaw);
      const cy = Math.cos(yaw);
      const sp = Math.sin(pitch);
      const cp = Math.cos(pitch);
      const sr = Math.sin(roll);
      const cr = Math.cos(roll);

      // create and populate rotation matrix
      // left-hand-rule rotation
      // const els = [
      //  cp*cy, sr*sp*cy - cr*sy, sr*sy + cr*sp*cy, 0,
      //  cp*sy, cr*cy + sr*sp*sy, cr*sp*sy - sr*cy, 0,
      //  -sp, sr*cp, cr*cp, 0,
      //  0, 0, 0, 1
      // ]
      // right-hand-rule rotation
      out[0] = cp * cy;
      out[1] = cp * sy;
      out[2] = -sp;
      out[3] = 0;
      out[4] = sr * sp * cy - cr * sy;
      out[5] = cr * cy + sr * sp * sy;
      out[6] = sr * cp;
      out[7] = 0;
      out[8] = sr * sy + cr * sp * cy;
      out[9] = cr * sp * sy - sr * cy;
      out[10] = cr * cp;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var fromTaitBryanRotation_1 = fromTaitBryanRotation;

    /**
     * Creates a matrix from a vector translation.
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.translate(dest, dest, vec)
     *
     * @param {mat4} out - receiving matrix
     * @param {vec3} vector - offset (vector) of translation
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.fromTranslation
     * @example
     * let matrix = fromTranslation(create(), [1, 2, 3])
     */
    const fromTranslation$1 = (out, vector) => {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = vector[0];
      out[13] = vector[1];
      out[14] = vector[2];
      out[15] = 1;
      return out
    };

    var fromTranslation_1$1 = fromTranslation$1;

    /**
     * Create a matrix with the given values.
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} a new matrix
     * @alias module:modeling/maths/mat4.fromValues
     * @example
     * let matrix = fromValues(
     *   1, 0, 0, 1,
     *   0, 1, 0, 0,
     *   0, 0, 1, 0,
     *   0, 0, 0, 1
     * )
     */
    const fromValues$4 = (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) => {
      const out = create_1$a();
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out
    };

    var fromValues_1$4 = fromValues$4;

    /**
     * Calculates the absolute coordinates of the give vector.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector of reference
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.abs
     */
    const abs$1 = (out, vector) => {
      out[0] = Math.abs(vector[0]);
      out[1] = Math.abs(vector[1]);
      out[2] = Math.abs(vector[2]);
      return out
    };

    var abs_1$1 = abs$1;

    /**
     * Adds the coordinates of two vectors (A+B).
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.add
     */
    const add$2 = (out, a, b) => {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out
    };

    var add_1$2 = add$2;

    /**
     * Calculates the dot product of two vectors.
     *
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {Number} dot product
     * @alias module:modeling/maths/vec3.dot
     */
    const dot$2 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

    var dot_1$2 = dot$2;

    /**
     * Calculate the angle between two vectors.
     *
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {Number} angle (radians)
     * @alias module:modeling/maths/vec3.angle
     */
    const angle$2 = (a, b) => {
      const ax = a[0];
      const ay = a[1];
      const az = a[2];
      const bx = b[0];
      const by = b[1];
      const bz = b[2];
      const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
      const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
      const mag = mag1 * mag2;
      const cosine = mag && dot_1$2(a, b) / mag;
      return Math.acos(Math.min(Math.max(cosine, -1), 1))
    };

    var angle_1$1 = angle$2;

    /**
     * Represents a three dimensional vector.
     * See fromValues().
     * @typedef {Array} vec3
     */

    /**
     * Creates a new vector initialized to [0,0,0].
     *
     * @returns {vec3} a new vector
     * @alias module:modeling/maths/vec3.create
     */
    const create$9 = () => [0, 0, 0];

    var create_1$9 = create$9;

    /**
     * Create a clone of the given vector.
     *
     * @param {vec3} vector - vector to clone
     * @returns {vec3} a new vector
     * @alias module:modeling/maths/vec3.clone
     */
    const clone$7 = (vector) => {
      const out = create_1$9();
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      return out
    };

    var clone_1$7 = clone$7;

    /**
     * Create a copy of the given vector.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to copy
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.copy
     */
    const copy$4 = (out, vector) => {
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      return out
    };

    var copy_1$4 = copy$4;

    /**
     * Computes the cross product of the given vectors (AxB).
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.cross
     */
    const cross$2 = (out, a, b) => {
      const ax = a[0];
      const ay = a[1];
      const az = a[2];
      const bx = b[0];
      const by = b[1];
      const bz = b[2];

      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out
    };

    var cross_1$2 = cross$2;

    /**
     * Calculates the Euclidian distance between the given vectors.
     *
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {Number} distance
     * @alias module:modeling/maths/vec3.distance
     */
    const distance$2 = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      const z = b[2] - a[2];
      return Math.hypot(x, y, z)
    };

    var distance_1$2 = distance$2;

    /**
     * Divides the coordinates of two vectors (A/B).
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - dividend vector
     * @param {vec3} b - divisor vector
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.divide
     */
    const divide$2 = (out, a, b) => {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out
    };

    var divide_1$2 = divide$2;

    /**
     * Compare the given vectors for equality.
     *
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {Boolean} true if a and b are equal
     * @alias module:modeling/maths/vec3.equals
     */
    const equals$5 = (a, b) => (a[0] === b[0]) && (a[1] === b[1]) && (a[2] === b[2]);

    var equals_1$4 = equals$5;

    /**
     * Creates a vector from a single scalar value.
     * All components of the resulting vector have the given value.
     *
     * @param {vec3} out - receiving vector
     * @param {Number} scalar
     * @returns {Vec3} out
     * @alias module:modeling/maths/vec3.fromScalar
     */
    const fromScalar$1 = (out, scalar) => {
      out[0] = scalar;
      out[1] = scalar;
      out[2] = scalar;
      return out
    };

    var fromScalar_1$1 = fromScalar$1;

    /**
     * Creates a new vector initialized with the given values.
     *
     * @param {Number} x - X component
     * @param {Number} y - Y component
     * @param {Number} z - Z component
     * @returns {vec3} a new vector
     * @alias module:modeling/maths/vec3.fromValues
     */
    const fromValues$3 = (x, y, z) => {
      const out = create_1$9();
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out
    };

    var fromValues_1$3 = fromValues$3;

    /**
     * Create a new vector by extending a 2D vector with a Z value.
     *
     * @param {vec3} out - receiving vector
     * @param {Array} vector - 2D vector of values
     * @param {Number} [z=0] - Z value
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.fromVec2
     */
    const fromVector2 = (out, vec2, z = 0) => {
      out[0] = vec2[0];
      out[1] = vec2[1];
      out[2] = z;
      return out
    };

    var fromVec2 = fromVector2;

    /**
     * Calculates the length of a vector.
     *
     * @param {vec3} vector - vector to calculate length of
     * @returns {Number} length
     * @alias module:modeling/maths/vec3.length
     */
    const length$2 = (a) => {
      const x = a[0];
      const y = a[1];
      const z = a[2];
      return Math.hypot(x, y, z)
    };

    var length_1$2 = length$2;

    /**
     * Performs a linear interpolation between two vectors.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @param {Number} t - interpolant (0.0 to 1.0) applied between the two inputs
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.lerp
     */
    const lerp$2 = (out, a, b, t) => {
      out[0] = a[0] + t * (b[0] - a[0]);
      out[1] = a[1] + t * (b[1] - a[1]);
      out[2] = a[2] + t * (b[2] - a[2]);
      return out
    };

    var lerp_1$2 = lerp$2;

    /**
     * Returns the maximum coordinates of the given vectors.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.max
     */
    const max$3 = (out, a, b) => {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      return out
    };

    var max_1$2 = max$3;

    /**
     * Returns the minimum coordinates of the given vectors.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.min
     */
    const min$3 = (out, a, b) => {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      return out
    };

    var min_1$2 = min$3;

    /**
     * Multiply the coordinates of the given vectors (A*B).
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.multiply
     */
    const multiply$4 = (out, a, b) => {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out
    };

    var multiply_1$4 = multiply$4;

    /**
     * Negates the coordinates of the given vector.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to negate
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.negate
     */
    const negate$2 = (out, vector) => {
      out[0] = -vector[0];
      out[1] = -vector[1];
      out[2] = -vector[2];
      return out
    };

    var negate_1$2 = negate$2;

    /**
     * Normalize the given vector.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to normalize
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.normalize
     */
    const normalize$2 = (out, vector) => {
      const x = vector[0];
      const y = vector[1];
      const z = vector[2];
      let len = x * x + y * y + z * z;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
      }
      out[0] = x * len;
      out[1] = y * len;
      out[2] = z * len;
      return out
    };

    var normalize_1$2 = normalize$2;

    /**
     * Create a new vector that is orthogonal to the given vector.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector of reference
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.orthogonal
     */
    const orthogonal = (out, vector) => {
      const bV = abs_1$1(create_1$9(), vector);
      const b0 = 0 + ((bV[0] < bV[1]) && (bV[0] < bV[2]));
      const b1 = 0 + ((bV[1] <= bV[0]) && (bV[1] < bV[2]));
      const b2 = 0 + ((bV[2] <= bV[0]) && (bV[2] <= bV[1]));

      return cross_1$2(out, vector, [b0, b1, b2])
    };

    var orthogonal_1 = orthogonal;

    /**
     * Rotate the given vector around the given origin, X axis only.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to rotate
     * @param {vec3} origin - origin of the rotation
     * @param {Number} radians - angle of rotation
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.rotateX
     */
    const rotateX$3 = (out, vector, origin, radians) => {
      const p = [];
      const r = [];

      // translate point to the origin
      p[0] = vector[0] - origin[0];
      p[1] = vector[1] - origin[1];
      p[2] = vector[2] - origin[2];

      // perform rotation
      r[0] = p[0];
      r[1] = p[1] * Math.cos(radians) - p[2] * Math.sin(radians);
      r[2] = p[1] * Math.sin(radians) + p[2] * Math.cos(radians);

      // translate to correct position
      out[0] = r[0] + origin[0];
      out[1] = r[1] + origin[1];
      out[2] = r[2] + origin[2];

      return out
    };

    var rotateX_1$3 = rotateX$3;

    /**
     * Rotate the given vector around the given origin, Y axis only.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to rotate
     * @param {vec3} origin - origin of the rotation
     * @param {Number} radians - angle of rotation
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.rotateY
     */
    const rotateY$3 = (out, vector, origin, radians) => {
      const p = [];
      const r = [];

      // translate point to the origin
      p[0] = vector[0] - origin[0];
      p[1] = vector[1] - origin[1];
      p[2] = vector[2] - origin[2];

      // perform rotation
      r[0] = p[2] * Math.sin(radians) + p[0] * Math.cos(radians);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(radians) - p[0] * Math.sin(radians);

      // translate to correct position
      out[0] = r[0] + origin[0];
      out[1] = r[1] + origin[1];
      out[2] = r[2] + origin[2];

      return out
    };

    var rotateY_1$3 = rotateY$3;

    /**
     * Rotate the given vector around the given origin, Z axis only.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to rotate
     * @param {vec3} origin - origin of the rotation
     * @param {Number} radians - angle of rotation in radians
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.rotateZ
     */
    const rotateZ$3 = (out, vector, origin, radians) => {
      const p = [];
      const r = [];
      // Translate point to the origin
      p[0] = vector[0] - origin[0];
      p[1] = vector[1] - origin[1];

      // perform rotation
      r[0] = (p[0] * Math.cos(radians)) - (p[1] * Math.sin(radians));
      r[1] = (p[0] * Math.sin(radians)) + (p[1] * Math.cos(radians));

      // translate to correct position
      out[0] = r[0] + origin[0];
      out[1] = r[1] + origin[1];
      out[2] = vector[2];

      return out
    };

    var rotateZ_1$3 = rotateZ$3;

    /**
     * Scales the coordinates of the given vector by a scalar number.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to scale
     * @param {Number} amount - amount to scale the vector by
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.scale
     */
    const scale$4 = (out, vector, amount) => {
      out[0] = vector[0] * amount;
      out[1] = vector[1] * amount;
      out[2] = vector[2] * amount;
      return out
    };

    var scale_1$4 = scale$4;

    /**
     * Snaps the coordinates of the given vector to the given epsilon.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to snap
     * @param {Number} epsilon - epsilon of precision, less than 0
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.snap
     */
    const snap$1 = (out, vector, epsilon) => {
      out[0] = Math.round(vector[0] / epsilon) * epsilon + 0;
      out[1] = Math.round(vector[1] / epsilon) * epsilon + 0;
      out[2] = Math.round(vector[2] / epsilon) * epsilon + 0;
      return out
    };

    var snap_1$1 = snap$1;

    /**
     * Calculates the squared distance between two vectors.
     *
     * @param {vec3} a - first operand
     * @param {vec3} b - second operand
     * @returns {Number} squared distance
     * @alias module:modeling/maths/vec3.squaredDistance
     */
    const squaredDistance$2 = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      const z = b[2] - a[2];
      return x * x + y * y + z * z
    };

    var squaredDistance_1$2 = squaredDistance$2;

    /**
     * Calculates the squared length of the given vector.
     *
     * @param {vec3} vector - vector to calculate squared length of
     * @returns {Number} squared length
     * @alias module:modeling/maths/vec3.squaredLength
     */
    const squaredLength$2 = (a) => {
      const x = a[0];
      const y = a[1];
      const z = a[2];
      return x * x + y * y + z * z
    };

    var squaredLength_1$2 = squaredLength$2;

    /**
     * Subtracts the coordinates of two vectors (A-B).
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} a - minuend vector
     * @param {vec3} b - subtrahend vector
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.subtract
     */
    const subtract$3 = (out, a, b) => {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out
    };

    var subtract_1$3 = subtract$3;

    /**
     * Convert the given vector to a representative string.
     * @param {vec3} vector - vector of reference
     * @returns {String} string representation
     * @alias module:modeling/maths/vec3.toString
     */
    const toString$7 = (vec) => `[${vec[0].toFixed(7)}, ${vec[1].toFixed(7)}, ${vec[2].toFixed(7)}]`;

    var toString_1$7 = toString$7;

    /**
     * Transforms the given vector using the given matrix.
     *
     * @param {vec3} out - receiving vector
     * @param {vec3} vector - vector to transform
     * @param {mat4} matrix - transform matrix
     * @returns {vec3} out
     * @alias module:modeling/maths/vec3.transform
     */
    const transform$6 = (out, vector, matrix) => {
      const x = vector[0];
      const y = vector[1];
      const z = vector[2];
      let w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
      w = w || 1.0;
      out[0] = (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w;
      out[1] = (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w;
      out[2] = (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w;
      return out
    };

    var transform_1$6 = transform$6;

    /**
     * Represents a three dimensional vector.
     * @see {@link vec3} for data structure information.
     * @module modeling/maths/vec3
     */
    var vec3$1 = {
      abs: abs_1$1,
      add: add_1$2,
      angle: angle_1$1,
      clone: clone_1$7,
      copy: copy_1$4,
      create: create_1$9,
      cross: cross_1$2,
      distance: distance_1$2,
      divide: divide_1$2,
      dot: dot_1$2,
      equals: equals_1$4,
      fromScalar: fromScalar_1$1,
      fromValues: fromValues_1$3,
      fromVec2: fromVec2,
      length: length_1$2,
      lerp: lerp_1$2,
      max: max_1$2,
      min: min_1$2,
      multiply: multiply_1$4,
      negate: negate_1$2,
      normalize: normalize_1$2,
      orthogonal: orthogonal_1,
      rotateX: rotateX_1$3,
      rotateY: rotateY_1$3,
      rotateZ: rotateZ_1$3,
      scale: scale_1$4,
      snap: snap_1$1,
      squaredDistance: squaredDistance_1$2,
      squaredLength: squaredLength_1$2,
      subtract: subtract_1$3,
      toString: toString_1$7,
      transform: transform_1$6
    };

    /**
     * Create a matrix that rotates the given source to the given target vector.
     *
     * Each vector must be a directional vector with a length greater then zero.
     * @see https://gist.github.com/kevinmoran/b45980723e53edeb8a5a43c49f134724
     * @param {mat4} out - receiving matrix
     * @param {vec3} source - source vector
     * @param {vec3} target - target vector
     * @returns {mat4} a new matrix
     * @alias module:modeling/maths/mat4.fromVectorRotation
     * @example
     * let matrix = fromVectorRotation(mat4.create(), [1, 2, 2], [-3, 3, 12])
     */
    const fromVectorRotation = (out, source, target) => {
      const sourceNormal = vec3$1.normalize(vec3$1.create(), source);
      const targetNormal = vec3$1.normalize(vec3$1.create(), target);

      const axis = vec3$1.cross(vec3$1.create(), targetNormal, sourceNormal);
      const cosA = vec3$1.dot(targetNormal, sourceNormal);
      if (cosA === -1.0) return fromRotation_1$1(out, Math.PI, vec3$1.orthogonal(axis, sourceNormal))

      const k = 1 / (1 + cosA);
      out[0] = (axis[0] * axis[0] * k) + cosA;
      out[1] = (axis[1] * axis[0] * k) - axis[2];
      out[2] = (axis[2] * axis[0] * k) + axis[1];
      out[3] = 0;

      out[4] = (axis[0] * axis[1] * k) + axis[2];
      out[5] = (axis[1] * axis[1] * k) + cosA;
      out[6] = (axis[2] * axis[1] * k) - axis[0];
      out[7] = 0;

      out[8] = (axis[0] * axis[2] * k) - axis[1];
      out[9] = (axis[1] * axis[2] * k) + axis[0];
      out[10] = (axis[2] * axis[2] * k) + cosA;
      out[11] = 0;

      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var fromVectorRotation_1 = fromVectorRotation;

    /**
     * Creates a matrix from the given angle around the X axis.
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotateX(dest, dest, radians)
     *
     * @param {mat4} out - receiving matrix
     * @param {Number} radians - angle to rotate the matrix by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.fromXRotation
     * @example
     * let matrix = fromXRotation(create(), Math.PI / 2)
     */
    const fromXRotation$1 = (out, radians) => {
      const s = Math.sin(radians);
      const c = Math.cos(radians);

      // Perform axis-specific matrix multiplication
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = c;
      out[6] = s;
      out[7] = 0;
      out[8] = 0;
      out[9] = -s;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var fromXRotation_1$1 = fromXRotation$1;

    /**
     * Creates a matrix from the given angle around the Y axis.
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotateY(dest, dest, radians)
     *
     * @param {mat4} out - receiving matrix
     * @param {Number} radians - angle to rotate the matrix by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.fromYRotation
     * @example
     * let matrix = fromYRotation(create(), Math.PI / 2)
     */
    const fromYRotation$1 = (out, radians) => {
      const s = Math.sin(radians);
      const c = Math.cos(radians);

      // Perform axis-specific matrix multiplication
      out[0] = c;
      out[1] = 0;
      out[2] = -s;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = s;
      out[9] = 0;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var fromYRotation_1$1 = fromYRotation$1;

    /**
     * Creates a matrix from the given angle around the Z axis.
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotateZ(dest, dest, radians)
     *
     * @param {mat4} out - receiving matrix
     * @param {Number} radians - angle to rotate the matrix by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.fromZRotation
     * @example
     * let matrix = fromZRotation(create(), Math.PI / 2)
     */
    const fromZRotation$1 = (out, radians) => {
      const s = Math.sin(radians);
      const c = Math.cos(radians);

      // Perform axis-specific matrix multiplication
      out[0] = c;
      out[1] = s;
      out[2] = 0;
      out[3] = 0;
      out[4] = -s;
      out[5] = c;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    };

    var fromZRotation_1$1 = fromZRotation$1;

    /**
     * Determine whether the given matris is the identity transform.
     * This is equivalent to (but much faster than):
     *
     *     mat4.equals(mat4.create(), matrix)
     *
     * @param {mat4} matrix - the matrix
     * @returns {Boolean} true if matrix is the identity transform
     * @alias module:modeling/maths/mat4.isIdentity
     * @example
     * if (mat4.isIdentity(mymatrix)) ...
     */
    const isIdentity = (matrix) => (
      matrix[0] === 1 && matrix[1] === 0 && matrix[2] === 0 && matrix[3] === 0 &&
      matrix[4] === 0 && matrix[5] === 1 && matrix[6] === 0 && matrix[7] === 0 &&
      matrix[8] === 0 && matrix[9] === 0 && matrix[10] === 1 && matrix[11] === 0 &&
      matrix[12] === 0 && matrix[13] === 0 && matrix[14] === 0 && matrix[15] === 1
    );

    var isIdentity_1 = isIdentity;

    /**
     * Determine whether the given matrix is only translate and/or scale.
     * This code returns true for PI rotation as it can be interpreted as scale.
     *
     * @param {mat4} matrix - the matrix
     * @returns {Boolean} true if matrix is for translate and/or scale
     * @alias module:modeling/maths/mat4.isOnlyTransformScale
     */
    const isOnlyTransformScale = (matrix) => (

      // TODO check if it is worth the effort to add recognition of 90 deg rotations

      isZero(matrix[1]) && isZero(matrix[2]) && isZero(matrix[3]) &&
      isZero(matrix[4]) && isZero(matrix[6]) && isZero(matrix[7]) &&
      isZero(matrix[8]) && isZero(matrix[9]) && isZero(matrix[11]) &&
      matrix[15] === 1
    );

    const isZero = (num) => Math.abs(num) < Number.EPSILON;

    var isOnlyTransformScale_1 = isOnlyTransformScale;

    /**
     * Determine whether the given matrix is a mirroring transformation.
     *
     * @param {mat4} matrix - matrix of reference
     * @returns {Boolean} true if matrix is a mirroring transformation
     * @alias module:modeling/maths/mat4.isMirroring
     */
    const isMirroring = (mat) => {
      const u = fromValues_1$3(mat[0], mat[4], mat[8]);
      const v = fromValues_1$3(mat[1], mat[5], mat[9]);
      const w = fromValues_1$3(mat[2], mat[6], mat[10]);

      // for a true orthogonal, non-mirrored base, u.cross(v) == w
      // If they have an opposite direction then we are mirroring
      const mirrorvalue = dot_1$2(cross_1$2(u, u, v), w);
      const ismirror = (mirrorvalue < 0);
      return ismirror
    };

    var isMirroring_1 = isMirroring;

    /**
     * Create a matrix for mirroring about the given plane.
     *
     * @param {mat4} out - receiving matrix
     * @param {vec4} plane - plane of which to mirror the matrix
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.mirrorByPlane
     */
    const mirrorByPlane = (out, plane) => {
      const [nx, ny, nz, w] = plane;

      out[0] = (1.0 - 2.0 * nx * nx);
      out[1] = (-2.0 * ny * nx);
      out[2] = (-2.0 * nz * nx);
      out[3] = 0;
      out[4] = (-2.0 * nx * ny);
      out[5] = (1.0 - 2.0 * ny * ny);
      out[6] = (-2.0 * nz * ny);
      out[7] = 0;
      out[8] = (-2.0 * nx * nz);
      out[9] = (-2.0 * ny * nz);
      out[10] = (1.0 - 2.0 * nz * nz);
      out[11] = 0;
      out[12] = (2.0 * nx * w);
      out[13] = (2.0 * ny * w);
      out[14] = (2.0 * nz * w);
      out[15] = 1;

      return out
    };

    var mirrorByPlane_1 = mirrorByPlane;

    /**
     * Multiplies the two matrices.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} a - first operand
     * @param {mat4} b - second operand
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.multiply
     */
    const multiply$3 = (out, a, b) => {
      const a00 = a[0];
      const a01 = a[1];
      const a02 = a[2];
      const a03 = a[3];
      const a10 = a[4];
      const a11 = a[5];
      const a12 = a[6];
      const a13 = a[7];
      const a20 = a[8];
      const a21 = a[9];
      const a22 = a[10];
      const a23 = a[11];
      const a30 = a[12];
      const a31 = a[13];
      const a32 = a[14];
      const a33 = a[15];

      // Cache only the current line of the second matrix
      let b0 = b[0];
      let b1 = b[1];
      let b2 = b[2];
      let b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[4];
      b1 = b[5];
      b2 = b[6];
      b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[8];
      b1 = b[9];
      b2 = b[10];
      b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[12];
      b1 = b[13];
      b2 = b[14];
      b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out
    };

    var multiply_1$3 = multiply$3;

    /**
     * Rotates a matrix by the given angle about the given axis.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} matrix - matrix to rotate
     * @param {Number} radians - angle to rotate the matrix by
     * @param {vec3} axis - axis to rotate around
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.rotate
     */
    const rotate$3 = (out, matrix, radians, axis) => {
      let [x, y, z] = axis;
      let len = Math.sqrt(x * x + y * y + z * z);

      if (Math.abs(len) < 0.000001) {
        // axis is 0,0,0 or almost
        return copy_1$5(out, matrix)
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;

      const s = Math.sin(radians);
      const c = Math.cos(radians);
      const t = 1 - c;

      const a00 = matrix[0];
      const a01 = matrix[1];
      const a02 = matrix[2];
      const a03 = matrix[3];
      const a10 = matrix[4];
      const a11 = matrix[5];
      const a12 = matrix[6];
      const a13 = matrix[7];
      const a20 = matrix[8];
      const a21 = matrix[9];
      const a22 = matrix[10];
      const a23 = matrix[11];

      // Construct the elements of the rotation matrix
      const b00 = x * x * t + c;
      const b01 = y * x * t + z * s;
      const b02 = z * x * t - y * s;
      const b10 = x * y * t - z * s;
      const b11 = y * y * t + c;
      const b12 = z * y * t + x * s;
      const b20 = x * z * t + y * s;
      const b21 = y * z * t - x * s;
      const b22 = z * z * t + c;

      // Perform rotation-specific matrix multiplication
      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;

      if (matrix !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }
      return out
    };

    var rotate_1$2 = rotate$3;

    /**
     * Rotates a matrix by the given angle around the X axis.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} matrix - matrix to rotate
     * @param {Number} radians - angle to rotate the matrix by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.rotateX
     */
    const rotateX$2 = (out, matrix, radians) => {
      const s = Math.sin(radians);
      const c = Math.cos(radians);
      const a10 = matrix[4];
      const a11 = matrix[5];
      const a12 = matrix[6];
      const a13 = matrix[7];
      const a20 = matrix[8];
      const a21 = matrix[9];
      const a22 = matrix[10];
      const a23 = matrix[11];

      if (matrix !== out) { // If the source and destination differ, copy the unchanged rows
        out[0] = matrix[0];
        out[1] = matrix[1];
        out[2] = matrix[2];
        out[3] = matrix[3];
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }

      // Perform axis-specific matrix multiplication
      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out
    };

    var rotateX_1$2 = rotateX$2;

    /**
     * Rotates a matrix by the given angle around the Y axis.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} matrix - matrix to rotate
     * @param {Number} radians - angle to rotate the matrix by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.rotateY
     */
    const rotateY$2 = (out, matrix, radians) => {
      const s = Math.sin(radians);
      const c = Math.cos(radians);
      const a00 = matrix[0];
      const a01 = matrix[1];
      const a02 = matrix[2];
      const a03 = matrix[3];
      const a20 = matrix[8];
      const a21 = matrix[9];
      const a22 = matrix[10];
      const a23 = matrix[11];

      if (matrix !== out) { // If the source and destination differ, copy the unchanged rows
        out[4] = matrix[4];
        out[5] = matrix[5];
        out[6] = matrix[6];
        out[7] = matrix[7];
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }

      // Perform axis-specific matrix multiplication
      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out
    };

    var rotateY_1$2 = rotateY$2;

    /**
     * Rotates a matrix by the given angle around the Z axis.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} matrix - matrix to rotate
     * @param {Number} radians - angle to rotate the matrix by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.rotateZ
     */
    const rotateZ$2 = (out, matrix, radians) => {
      const s = Math.sin(radians);
      const c = Math.cos(radians);
      const a00 = matrix[0];
      const a01 = matrix[1];
      const a02 = matrix[2];
      const a03 = matrix[3];
      const a10 = matrix[4];
      const a11 = matrix[5];
      const a12 = matrix[6];
      const a13 = matrix[7];

      if (matrix !== out) { // If the source and destination differ, copy the unchanged last row
        out[8] = matrix[8];
        out[9] = matrix[9];
        out[10] = matrix[10];
        out[11] = matrix[11];
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }

      // Perform axis-specific matrix multiplication
      out[0] = a00 * c + a10 * s;
      out[1] = a01 * c + a11 * s;
      out[2] = a02 * c + a12 * s;
      out[3] = a03 * c + a13 * s;
      out[4] = a10 * c - a00 * s;
      out[5] = a11 * c - a01 * s;
      out[6] = a12 * c - a02 * s;
      out[7] = a13 * c - a03 * s;
      return out
    };

    var rotateZ_1$2 = rotateZ$2;

    /**
     * Scales the matrix by the given dimensions.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} matrix - matrix to scale
     * @param {vec3} dimensions - dimensions to scale the matrix by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.scale
     */
    const scale$3 = (out, matrix, dimensions) => {
      const x = dimensions[0];
      const y = dimensions[1];
      const z = dimensions[2];

      out[0] = matrix[0] * x;
      out[1] = matrix[1] * x;
      out[2] = matrix[2] * x;
      out[3] = matrix[3] * x;
      out[4] = matrix[4] * y;
      out[5] = matrix[5] * y;
      out[6] = matrix[6] * y;
      out[7] = matrix[7] * y;
      out[8] = matrix[8] * z;
      out[9] = matrix[9] * z;
      out[10] = matrix[10] * z;
      out[11] = matrix[11] * z;
      out[12] = matrix[12];
      out[13] = matrix[13];
      out[14] = matrix[14];
      out[15] = matrix[15];
      return out
    };

    var scale_1$3 = scale$3;

    /**
     * Subtracts matrix b from matrix a. (A-B)
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} a - first operand
     * @param {mat4} b - second operand
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.subtract
     */
    const subtract$2 = (out, a, b) => {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      out[9] = a[9] - b[9];
      out[10] = a[10] - b[10];
      out[11] = a[11] - b[11];
      out[12] = a[12] - b[12];
      out[13] = a[13] - b[13];
      out[14] = a[14] - b[14];
      out[15] = a[15] - b[15];
      return out
    };

    var subtract_1$2 = subtract$2;

    /**
     * Return a string representing the given matrix.
     *
     * @param {mat4} matrix - matrix of reference
     * @returns {String} string representation
     * @alias module:modeling/maths/mat4.toString
     */
    const toString$6 = (mat) => `[${mat[0].toFixed(7)}, ${mat[1].toFixed(7)}, ${mat[2].toFixed(7)}, ${mat[3].toFixed(7)}, ${mat[4].toFixed(7)}, ${mat[5].toFixed(7)}, ${mat[6].toFixed(7)}, ${mat[7].toFixed(7)}, ${mat[8].toFixed(7)}, ${mat[9].toFixed(7)}, ${mat[10].toFixed(7)}, ${mat[11].toFixed(7)}, ${mat[12].toFixed(7)}, ${mat[13].toFixed(7)}, ${mat[14].toFixed(7)}, ${mat[15].toFixed(7)}]`;

    var toString_1$6 = toString$6;

    /**
     * Translate the matrix by the given offset vector.
     *
     * @param {mat4} out - receiving matrix
     * @param {mat4} matrix - matrix to translate
     * @param {vec3} offsets - offset vector to translate by
     * @returns {mat4} out
     * @alias module:modeling/maths/mat4.translate
     */
    const translate$1 = (out, matrix, offsets) => {
      const x = offsets[0];
      const y = offsets[1];
      const z = offsets[2];
      let a00;
      let a01;
      let a02;
      let a03;
      let a10;
      let a11;
      let a12;
      let a13;
      let a20;
      let a21;
      let a22;
      let a23;

      if (matrix === out) {
      // 0-11 assignments are unnecessary
        out[12] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12];
        out[13] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13];
        out[14] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14];
        out[15] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
      } else {
        a00 = matrix[0]; a01 = matrix[1]; a02 = matrix[2]; a03 = matrix[3];
        a10 = matrix[4]; a11 = matrix[5]; a12 = matrix[6]; a13 = matrix[7];
        a20 = matrix[8]; a21 = matrix[9]; a22 = matrix[10]; a23 = matrix[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + matrix[12];
        out[13] = a01 * x + a11 * y + a21 * z + matrix[13];
        out[14] = a02 * x + a12 * y + a22 * z + matrix[14];
        out[15] = a03 * x + a13 * y + a23 * z + matrix[15];
      }

      return out
    };

    var translate_1$1 = translate$1;

    /**
     * Represents a 4x4 matrix which is column-major (when typed out it looks row-major).
     * @see {@link mat4} for data structure information.
     * @module modeling/maths/mat4
     */
    var mat4 = {
      add: add_1$3,
      clone: clone_1$8,
      copy: copy_1$5,
      create: create_1$a,
      invert: invert_1$3,
      equals: equals_1$5,
      fromRotation: fromRotation_1$1,
      fromScaling: fromScaling_1$1,
      fromTaitBryanRotation: fromTaitBryanRotation_1,
      fromTranslation: fromTranslation_1$1,
      fromValues: fromValues_1$4,
      fromVectorRotation: fromVectorRotation_1,
      fromXRotation: fromXRotation_1$1,
      fromYRotation: fromYRotation_1$1,
      fromZRotation: fromZRotation_1$1,
      identity: identity_1$1,
      isIdentity: isIdentity_1,
      isOnlyTransformScale: isOnlyTransformScale_1,
      isMirroring: isMirroring_1,
      mirrorByPlane: mirrorByPlane_1,
      multiply: multiply_1$3,
      rotate: rotate_1$2,
      rotateX: rotateX_1$2,
      rotateY: rotateY_1$2,
      rotateZ: rotateZ_1$2,
      scale: scale_1$3,
      subtract: subtract_1$2,
      toString: toString_1$6,
      translate: translate_1$1
    };

    /**
     * Represents a 2D geometry consisting of a list of sides.
     * @typedef {Object} geom2
     * @property {Array} sides - list of sides, each side containing two points
     * @property {mat4} transforms - transforms to apply to the sides, see transform()
     */

    /**
     * Create a new 2D geometry composed of unordered sides (two connected points).
     * @param {Array} [sides] - list of sides where each side is an array of two points
     * @returns {geom2} a new geometry
     * @alias module:modeling/geometries/geom2.create
     */
    const create$8 = (sides) => {
      if (sides === undefined) {
        sides = []; // empty contents
      }
      return {
        sides: sides,
        transforms: mat4.create()
      }
    };

    var create_1$8 = create$8;

    /**
     * Calculates the absolute coordinates of the given vector.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - vector of reference
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.abs
     */
    const abs = (out, vector) => {
      out[0] = Math.abs(vector[0]);
      out[1] = Math.abs(vector[1]);
      return out
    };

    var abs_1 = abs;

    /**
     * Adds the coordinates of two vectors (A+B).
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.add
     */
    const add$1 = (out, a, b) => {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out
    };

    var add_1$1 = add$1;

    /**
     * Calculate the angle of the given vector.
     *
     * @param {vec2} vector - vector of reference
     * @returns {Number} angle in radians
     * @alias module:modeling/maths/vec2.angleRadians
     */
    const angleRadians = (vector) => Math.atan2(vector[1], vector[0]); // y=sin, x=cos

    var angleRadians_1 = angleRadians;

    var angle$1 = angleRadians_1;

    /**
     * Calculate the angle of the given vector.
     *
     * @param {vec2} vector - vector of reference
     * @returns {Number} angle in degrees
     * @alias module:modeling/maths/vec2.angleDegrees
     */
    const angleDegrees = (vector) => angleRadians_1(vector) * 57.29577951308232;

    var angleDegrees_1 = angleDegrees;

    /**
     * Represents a two dimensional vector.
     * See fromValues().
     * @typedef {Array} vec2
     */

    /**
     * Creates a new vector, intialized to [0,0].
     *
     * @returns {vec2} a new vector
     * @alias module:modeling/maths/vec2.create
     */
    const create$7 = () => [0, 0];

    var create_1$7 = create$7;

    /**
     * Create a clone of the given vector.
     *
     * @param {vec2} vector - vector to clone
     * @returns {vec2} a new vector
     * @alias module:modeling/maths/vec2.clone
     */
    const clone$6 = (vector) => {
      const out = create_1$7();
      out[0] = vector[0];
      out[1] = vector[1];
      return out
    };

    var clone_1$6 = clone$6;

    /**
     * Create a copy of the given vector.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - source vector
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.copy
     */
    const copy$3 = (out, vector) => {
      out[0] = vector[0];
      out[1] = vector[1];
      return out
    };

    var copy_1$3 = copy$3;

    /**
     * Computes the cross product (3D) of two vectors.
     *
     * @param {vec3} out - receiving vector (3D)
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {vec3} out
     * @alias module:modeling/maths/vec2.cross
     */
    const cross$1 = (out, a, b) => {
      out[0] = 0;
      out[1] = 0;
      out[2] = a[0] * b[1] - a[1] * b[0];
      return out
    };

    var cross_1$1 = cross$1;

    /**
     * Calculates the distance between two vectors.
     *
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {Number} distance
     * @alias module:modeling/maths/vec2.distance
     */
    const distance$1 = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      return Math.hypot(x, y)
    };

    var distance_1$1 = distance$1;

    /**
     * Divides the coordinates of two vectors (A/B).
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.divide
     */
    const divide$1 = (out, a, b) => {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out
    };

    var divide_1$1 = divide$1;

    /**
     * Calculates the dot product of two vectors.
     *
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {Number} dot product
     * @alias module:modeling/maths/vec2.dot
     */
    const dot$1 = (a, b) => a[0] * b[0] + a[1] * b[1];

    var dot_1$1 = dot$1;

    /**
     * Compare the given vectors for equality.
     *
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {Boolean} true if a and b are equal
     * @alias module:modeling/maths/vec2.equals
     */
    const equals$4 = (a, b) => (a[0] === b[0]) && (a[1] === b[1]);

    var equals_1$3 = equals$4;

    /**
     * Create a new vector in the direction of the given angle.
     *
     * @param {vec2} out - receiving vector
     * @param {Number} radians - angle in radians
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.fromAngleRadians
     */
    const fromAngleRadians = (out, radians) => {
      out[0] = Math.cos(radians);
      out[1] = Math.sin(radians);
      return out
    };

    var fromAngleRadians_1 = fromAngleRadians;

    /**
     * Create a new vector in the direction of the given angle.
     *
     * @param {vec2} out - receiving vector
     * @param {Number} angle - angle in degrees
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.fromAngleDegrees
     */
    const fromAngleDegrees = (out, degrees) => fromAngleRadians_1(out, Math.PI * degrees / 180);

    var fromAngleDegrees_1 = fromAngleDegrees;

    /**
     * Create a vector from a single scalar value.
     *
     * @param {vec2} out - receiving vector
     * @param {Number} scalar - the scalar value
     * @returns {Vec2} out
     * @alias module:modeling/maths/vec2.fromScalar
     */
    const fromScalar = (out, scalar) => {
      out[0] = scalar;
      out[1] = scalar;
      return out
    };

    var fromScalar_1 = fromScalar;

    /**
     * Creates a new vector initialized with the given values.
     *
     * @param {Number} x - X coordinate
     * @param {Number} y - Y coordinate
     * @returns {vec2} a new vector
     * @alias module:modeling/maths/vec2.fromValues
     */
    const fromValues$2 = (x, y) => {
      const out = create_1$7();
      out[0] = x;
      out[1] = y;
      return out
    };

    var fromValues_1$2 = fromValues$2;

    /**
     * Calculates the length of the given vector.
     *
     * @param {vec2} vector - vector of reference
     * @returns {Number} length
     * @alias module:modeling/maths/vec2.length
     */
    const length$1 = (a) => Math.hypot(a[0], a[1]);

    var length_1$1 = length$1;

    /**
     * Performs a linear interpolation between two vectors.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @param {Number} t - interpolation amount between the two vectors
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.lerp
     */
    const lerp$1 = (out, a, b, t) => {
      const ax = a[0];
      const ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out
    };

    var lerp_1$1 = lerp$1;

    /**
     * Returns the maximum coordinates of two vectors.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.max
     */
    const max$2 = (out, a, b) => {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      return out
    };

    var max_1$1 = max$2;

    /**
     * Returns the minimum coordinates of two vectors.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.min
     */
    const min$2 = (out, a, b) => {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      return out
    };

    var min_1$1 = min$2;

    /**
     * Multiplies the coordinates of two vectors (A*B).
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.multiply
     */
    const multiply$2 = (out, a, b) => {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out
    };

    var multiply_1$2 = multiply$2;

    /**
     * Negates the coordinates of the given vector.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - vector to negate
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.negate
     */
    const negate$1 = (out, vector) => {
      out[0] = -vector[0];
      out[1] = -vector[1];
      return out
    };

    var negate_1$1 = negate$1;

    /**
     * Rotates the given vector by the given angle.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - vector to rotate
     * @param {vec2} origin - origin of the rotation
     * @param {Number} radians - angle of rotation (radians)
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.rotate
     */
    const rotate$2 = (out, vector, origin, radians) => {
      const x = vector[0] - origin[0];
      const y = vector[1] - origin[1];
      const c = Math.cos(radians);
      const s = Math.sin(radians);

      out[0] = x * c - y * s + origin[0];
      out[1] = x * s + y * c + origin[1];

      return out
    };

    var rotate_1$1 = rotate$2;

    /**
     * Calculates the normal of the given vector.
     * The normal value is the given vector rotated 90 degress.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - given value
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.normal
     */
    const normal = (out, vector) => rotate_1$1(out, vector, create_1$7(), (Math.PI / 2));

    var normal_1 = normal;

    /**
     * Normalize the given vector.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - vector to normalize
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.normalize
     */
    const normalize$1 = (out, vector) => {
      const x = vector[0];
      const y = vector[1];
      let len = x * x + y * y;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
      }
      out[0] = x * len;
      out[1] = y * len;
      return out
    };

    // old this.dividedBy(this.length())

    var normalize_1$1 = normalize$1;

    /**
     * Scales the coordinates of the given vector.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - vector to scale
     * @param {Number} amount - amount to scale
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.scale
     */
    const scale$2 = (out, vector, amount) => {
      out[0] = vector[0] * amount;
      out[1] = vector[1] * amount;
      return out
    };

    var scale_1$2 = scale$2;

    /**
     * Snaps the coordinates of the given vector to the given epsilon.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - vector to snap
     * @param {Number} epsilon - epsilon of precision, less than 0
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.snap
     */
    const snap = (out, vector, epsilon) => {
      out[0] = Math.round(vector[0] / epsilon) * epsilon + 0;
      out[1] = Math.round(vector[1] / epsilon) * epsilon + 0;
      return out
    };

    var snap_1 = snap;

    /**
     * Calculates the squared distance between the given vectors.
     *
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {Number} squared distance
     * @alias module:modeling/maths/vec2.squaredDistance
     */
    const squaredDistance$1 = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      return x * x + y * y
    };

    var squaredDistance_1$1 = squaredDistance$1;

    /**
     * Calculates the squared length of the given vector.
     *
     * @param {vec2} vector - vector of reference
     * @returns {Number} squared length
     * @alias module:modeling/maths/vec2.squaredLength
     */
    const squaredLength$1 = (a) => {
      const x = a[0];
      const y = a[1];
      return x * x + y * y
    };

    var squaredLength_1$1 = squaredLength$1;

    /**
     * Subtracts the coordinates of two vectors (A-B).
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} a - first operand
     * @param {vec2} b - second operand
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.subtract
     */
    const subtract$1 = (out, a, b) => {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out
    };

    var subtract_1$1 = subtract$1;

    /**
     * Convert the given vector to a representative string.
     *
     * @param {vec2} vector - vector of reference
     * @returns {String} string representation
     * @alias module:modeling/maths/vec2.toString
     */
    const toString$5 = (vec) => `[${vec[0].toFixed(7)}, ${vec[1].toFixed(7)}]`;

    var toString_1$5 = toString$5;

    /**
     * Transforms the given vector using the given matrix.
     *
     * @param {vec2} out - receiving vector
     * @param {vec2} vector - vector to transform
     * @param {mat4} matrix - matrix to transform with
     * @returns {vec2} out
     * @alias module:modeling/maths/vec2.transform
     */
    const transform$5 = (out, vector, matrix) => {
      const x = vector[0];
      const y = vector[1];
      out[0] = matrix[0] * x + matrix[4] * y + matrix[12];
      out[1] = matrix[1] * x + matrix[5] * y + matrix[13];
      return out
    };

    var transform_1$5 = transform$5;

    /**
     * Represents a two dimensional vector.
     * @module modeling/maths/vec2
     */
    var vec2 = {
      abs: abs_1,
      add: add_1$1,
      angle: angle$1,
      angleDegrees: angleDegrees_1,
      angleRadians: angleRadians_1,
      clone: clone_1$6,
      copy: copy_1$3,
      create: create_1$7,
      cross: cross_1$1,
      distance: distance_1$1,
      divide: divide_1$1,
      dot: dot_1$1,
      equals: equals_1$3,
      fromAngleDegrees: fromAngleDegrees_1,
      fromAngleRadians: fromAngleRadians_1,
      fromScalar: fromScalar_1,
      fromValues: fromValues_1$2,
      length: length_1$1,
      lerp: lerp_1$1,
      max: max_1$1,
      min: min_1$1,
      multiply: multiply_1$2,
      negate: negate_1$1,
      normal: normal_1,
      normalize: normalize_1$1,
      rotate: rotate_1$1,
      scale: scale_1$2,
      snap: snap_1,
      squaredDistance: squaredDistance_1$1,
      squaredLength: squaredLength_1$1,
      subtract: subtract_1$1,
      toString: toString_1$5,
      transform: transform_1$5
    };

    /**
     * Create a new 2D geometry from the given points.
     * The direction (rotation) of the points is not relevant,
     * as the points can define a convex or a concave polygon.
     * The geometry must not self intersect, i.e. the sides cannot cross.
     * @param {Array} points - list of points in 2D space
     * @returns {geom2} a new geometry
     * @alias module:modeling/geometries/geom2.fromPoints
     */
    const fromPoints$4 = (points) => {
      if (!Array.isArray(points)) {
        throw new Error('the given points must be an array')
      }
      let length = points.length;
      if (length < 3) {
        throw new Error('the given points must define a closed geometry with three or more points')
      }
      // adjust length if the given points are closed by the same point
      if (vec2.equals(points[0], points[length - 1])) --length;

      const sides = [];
      let prevpoint = points[length - 1];
      for (let i = 0; i < length; i++) {
        const point = points[i];
        sides.push([vec2.clone(prevpoint), vec2.clone(point)]);
        prevpoint = point;
      }
      return create_1$8(sides)
    };

    var fromPoints_1$4 = fromPoints$4;

    /**
     * Create a new 2D geometry from the given compact binary data.
     * @param {Array} data - compact binary data
     * @returns {geom2} a new geometry
     * @alias module:modeling/geometries/geom2.fromCompactBinary
     */
    const fromCompactBinary$2 = (data) => {
      if (data[0] !== 0) throw new Error('invalid compact binary data')

      const created = create_1$8();

      created.transforms = mat4.clone(data.slice(1, 17));

      for (let i = 21; i < data.length; i += 4) {
        const point0 = vec2.fromValues(data[i + 0], data[i + 1]);
        const point1 = vec2.fromValues(data[i + 2], data[i + 3]);
        created.sides.push([point0, point1]);
      }
      // transfer known properties, i.e. color
      if (data[17] >= 0) {
        created.color = [data[17], data[18], data[19], data[20]];
      }
      // TODO: how about custom properties or fields ?
      return created
    };

    var fromCompactBinary_1$2 = fromCompactBinary$2;

    /**
     * Determin if the given object is a 2D geometry.
     * @param {Object} object - the object to interogate
     * @returns {Boolean} true, if the object matches a geom2 based object
     * @alias module:modeling/geometries/geom2.isA
     */
    const isA$3 = (object) => {
      if (object && typeof object === 'object') {
        if ('sides' in object && 'transforms' in object) {
          if (Array.isArray(object.sides) && 'length' in object.transforms) {
            return true
          }
        }
      }
      return false
    };

    var isA_1$3 = isA$3;

    /*
     * Apply the transforms of the given geometry.
     * NOTE: This function must be called BEFORE exposing any data. See toSides().
     * @param {geom2} geometry - the geometry to transform
     * @returns {geom2} the given geometry
     *
     * @example
     * geometry = applyTransforms(geometry)
     */
    const applyTransforms$2 = (geometry) => {
      if (mat4.isIdentity(geometry.transforms)) return geometry

      // apply transforms to each side
      geometry.sides = geometry.sides.map((side) => {
        const p0 = vec2.transform(vec2.create(), side[0], geometry.transforms);
        const p1 = vec2.transform(vec2.create(), side[1], geometry.transforms);
        return [p0, p1]
      });
      geometry.transforms = mat4.create();
      return geometry
    };

    var applyTransforms_1$2 = applyTransforms$2;

    /**
     * Produces an array of sides from the given geometry.
     * The returned array should not be modified as the data is shared with the geometry.
     * NOTE: The sides returned do NOT define an order. Use toOutlines() for ordered points.
     * @param {geom2} geometry - the geometry
     * @returns {Array} an array of sides
     * @alias module:modeling/geometries/geom2.toSides
     *
     * @example
     * let sharedsides = toSides(geometry)
     */
    const toSides = (geometry) => applyTransforms_1$2(geometry).sides;

    var toSides_1 = toSides;

    /**
     * Reverses the given geometry so that the sides are flipped in the opposite order.
     * This swaps the left (interior) and right (exterior) edges.
     * @param {geom2} geometry - the geometry to reverse
     * @returns {geom2} the new reversed geometry
     * @alias module:modeling/geometries/geom2.reverse
     *
     * @example
     * let newgeometry = reverse(geometry)
     */
    const reverse$1 = (geometry) => {
      const oldsides = toSides_1(geometry);

      const newsides = oldsides.map((side) => [side[1], side[0]]);
      newsides.reverse(); // is this required?
      return create_1$8(newsides)
    };

    var reverse_1$1 = reverse$1;

    /*
     * Create a list of edges which SHARE vertices.
     * This allows the edges to be traversed in order.
     */
    const toEdges = (sides) => {
      const uniquevertices = [];
      const getUniqueVertex = (vertex) => {
        const i = uniquevertices.findIndex((v) => vec2.equals(v, vertex));
        if (i < 0) {
          uniquevertices.push(vertex);
          return vertex
        }
        return uniquevertices[i]
      };

      const edges = [];
      sides.forEach((side) => {
        edges.push([getUniqueVertex(side[0]), getUniqueVertex(side[1])]);
      });
      return edges
    };

    /**
     * Create the outline(s) of the given geometry.
     * @param  {geom2} geometry
     * @returns {Array} an array of outlines, where each outline is an array of ordered points
     * @alias module:modeling/geometries/geom2.toOutlines
     *
     * @example
     * let geometry = subtract(rectangle({size: [5, 5]}), rectangle({size: [3, 3]}))
     * let outlines = toOutlines(geometry) // returns two outlines
     */
    const toOutlines = (geometry) => {
      const vertexMap = new Map();
      const edges = toEdges(toSides_1(geometry));
      edges.forEach((edge) => {
        if (!(vertexMap.has(edge[0]))) {
          vertexMap.set(edge[0], []);
        }
        const sideslist = vertexMap.get(edge[0]);
        sideslist.push(edge);
      });

      const outlines = [];
      while (true) {
        let startside;
        for (const [vertex, edges] of vertexMap) {
          startside = edges.shift();
          if (!startside) {
            vertexMap.delete(vertex);
            continue
          }
          break
        }
        if (startside === undefined) break // all starting sides have been visited

        const connectedVertexPoints = [];
        const startvertex = startside[0];
        const v0 = vec2.create();
        while (true) {
          connectedVertexPoints.push(startside[0]);
          const nextvertex = startside[1];
          if (nextvertex === startvertex) break // the outline has been closed
          const nextpossiblesides = vertexMap.get(nextvertex);
          if (!nextpossiblesides) {
            throw new Error('the given geometry is not closed. verify proper construction')
          }
          let nextsideindex = -1;
          if (nextpossiblesides.length === 1) {
            nextsideindex = 0;
          } else {
            // more than one side starting at the same vertex
            let bestangle;
            const startangle = vec2.angleDegrees(vec2.subtract(v0, startside[1], startside[0]));
            for (let sideindex = 0; sideindex < nextpossiblesides.length; sideindex++) {
              const nextpossibleside = nextpossiblesides[sideindex];
              const nextangle = vec2.angleDegrees(vec2.subtract(v0, nextpossibleside[1], nextpossibleside[0]));
              let angledif = nextangle - startangle;
              if (angledif < -180) angledif += 360;
              if (angledif >= 180) angledif -= 360;
              if ((nextsideindex < 0) || (angledif > bestangle)) {
                nextsideindex = sideindex;
                bestangle = angledif;
              }
            }
          }
          const nextside = nextpossiblesides[nextsideindex];
          nextpossiblesides.splice(nextsideindex, 1); // remove side from list
          if (nextpossiblesides.length === 0) {
            vertexMap.delete(nextvertex);
          }
          startside = nextside;
        } // inner loop

        // due to the logic of fromPoints()
        // move the first point to the last
        if (connectedVertexPoints.length > 0) {
          connectedVertexPoints.push(connectedVertexPoints.shift());
        }
        outlines.push(connectedVertexPoints);
      } // outer loop
      vertexMap.clear();
      return outlines
    };

    var toOutlines_1 = toOutlines;

    /**
     * Produces an array of points from the given geometry.
     * The returned array should not be modified as the points are shared with the geometry.
     * NOTE: The points returned do NOT define an order. Use toOutlines() for ordered points.
     * @param {geom2} geometry - the geometry
     * @returns {Array} an array of points
     * @alias module:modeling/geometries/geom2.toPoints
     *
     * @example
     * let sharedpoints = toPoints(geometry)
     */
    const toPoints$3 = (geometry) => {
      const sides = toSides_1(geometry);
      const points = sides.map((side) => side[0]);
      // due to the logic of fromPoints()
      // move the first point to the last
      if (points.length > 0) {
        points.push(points.shift());
      }
      return points
    };

    var toPoints_1$3 = toPoints$3;

    /**
     * Create a string representing the contents of the given geometry.
     * @param {geom2} geometry - the geometry
     * @returns {String} a representive string
     * @alias module:modeling/geometries/geom2.toString
     *
     * @example
     * console.out(toString(geometry))
     */
    const toString$4 = (geometry) => {
      const sides = toSides_1(geometry);
      let result = 'geom2 (' + sides.length + ' sides):\n[\n';
      sides.forEach((side) => {
        result += '  [' + vec2.toString(side[0]) + ', ' + vec2.toString(side[1]) + ']\n';
      });
      result += ']\n';
      return result
    };

    var toString_1$4 = toString$4;

    /**
     * Produces a compact binary representation from the given geometry.
     * @param {geom2} geometry - the geometry
     * @returns {TypedArray} compact binary representation
     * @alias module:modeling/geometries/geom2.toCompactBinary
     */
    const toCompactBinary$2 = (geom) => {
      const sides = geom.sides;
      const transforms = geom.transforms;
      let color = [-1, -1, -1, -1];
      if (geom.color) color = geom.color;

      // FIXME why Float32Array?
      const compacted = new Float32Array(1 + 16 + 4 + (sides.length * 4)); // type + transforms + color + sides data

      compacted[0] = 0; // type code: 0 => geom2, 1 => geom3 , 2 => path2

      compacted[1] = transforms[0];
      compacted[2] = transforms[1];
      compacted[3] = transforms[2];
      compacted[4] = transforms[3];
      compacted[5] = transforms[4];
      compacted[6] = transforms[5];
      compacted[7] = transforms[6];
      compacted[8] = transforms[7];
      compacted[9] = transforms[8];
      compacted[10] = transforms[9];
      compacted[11] = transforms[10];
      compacted[12] = transforms[11];
      compacted[13] = transforms[12];
      compacted[14] = transforms[13];
      compacted[15] = transforms[14];
      compacted[16] = transforms[15];

      compacted[17] = color[0];
      compacted[18] = color[1];
      compacted[19] = color[2];
      compacted[20] = color[3];

      for (let i = 0; i < sides.length; i++) {
        const ci = i * 4 + 21;
        const point0 = sides[i][0];
        const point1 = sides[i][1];
        compacted[ci + 0] = point0[0];
        compacted[ci + 1] = point0[1];
        compacted[ci + 2] = point1[0];
        compacted[ci + 3] = point1[1];
      }
      // TODO: how about custom properties or fields ?
      return compacted
    };

    var toCompactBinary_1$2 = toCompactBinary$2;

    /**
     * Transform the given geometry using the given matrix.
     * This is a lazy transform of the sides, as this function only adjusts the transforms.
     * The transforms are applied when accessing the sides via toSides().
     * @param {mat4} matrix - the matrix to transform with
     * @param {geom2} geometry - the geometry to transform
     * @returns {geom2} a new geometry
     * @alias module:modeling/geometries/geom2.transform
     *
     * @example
     * let newgeometry = transform(fromZRotation(degToRad(90)), geometry)
     */
    const transform$4 = (matrix, geometry) => {
      const transforms = mat4.multiply(mat4.create(), matrix, geometry.transforms);
      return Object.assign({}, geometry, { transforms })
    };

    var transform_1$4 = transform$4;

    /**
     * Represents a 2D geometry consisting of a list of sides.
     * @see {@link geom2} for data structure information.
     * @module modeling/geometries/geom2
     */
    var geom2$2 = {
      clone: clone_1$9,
      create: create_1$8,
      fromPoints: fromPoints_1$4,
      fromCompactBinary: fromCompactBinary_1$2,
      isA: isA_1$3,
      reverse: reverse_1$1,
      toOutlines: toOutlines_1,
      toPoints: toPoints_1$3,
      toSides: toSides_1,
      toString: toString_1$4,
      toCompactBinary: toCompactBinary_1$2,
      transform: transform_1$4
    };

    /**
     * Performs a shallow clone of the given geometry.
     * @param {geom3} geometry - the geometry to clone
     * @returns {geom3} a new geometry
     * @alias module:modeling/geometries/geom3.clone
     */
    const clone$5 = (geometry) => Object.assign({}, geometry);

    var clone_1$5 = clone$5;

    /**
     * Represents a 3D geometry consisting of a list of polygons.
     * @typedef {Object} geom3
     * @property {Array} polygons - list of polygons, each polygon containing three or more points
     * @property {mat4} transforms - transforms to apply to the polygons, see transform()
     */

    /**
     * Create a new 3D geometry composed of the given polygons.
     * @param {Array} [polygons] - list of polygons, or undefined
     * @returns {geom3} a new geometry
     * @alias module:modeling/geometries/geom3.create
     */
    const create$6 = (polygons) => {
      if (polygons === undefined) {
        polygons = []; // empty contents
      }
      return {
        polygons: polygons,
        transforms: mat4.create()
      }
    };

    var create_1$6 = create$6;

    /**
     * Represents a convex 3D polygon. The vertices used to initialize a polygon must
     * be coplanar and form a convex shape. The vertices do not have to be `vec3`
     * instances but they must behave similarly.
     * @typedef {Object} poly3
     * @property {Array} vertices - list of ordered vertices (3D)
     */

    /**
     * Creates a new 3D polygon with initial values.
     *
     * @param {Array} [vertices] - a list of vertices (3D)
     * @returns {poly3} a new polygon
     * @alias module:modeling/geometries/poly3.create
     */
    const create$5 = (vertices) => {
      if (vertices === undefined || vertices.length < 3) {
        vertices = []; // empty contents
      }
      return { vertices: vertices }
    };

    var create_1$5 = create$5;

    /**
     * Create a deep clone of the given polygon
     *
     * @param {poly3} [out] - receiving polygon
     * @param {poly3} polygon - polygon to clone
     * @returns {poly3} a new polygon
     * @alias module:modeling/geometries/poly3.clone
     */
    const clone$4 = (...params) => {
      let out;
      let poly3;
      if (params.length === 1) {
        out = create_1$5();
        poly3 = params[0];
      } else {
        out = params[0];
        poly3 = params[1];
      }
      // deep clone of vertices
      out.vertices = poly3.vertices.map((vec) => vec3$1.clone(vec));
      return out
    };

    var clone_1$4 = clone$4;

    /**
     * Create a polygon from the given points.
     *
     * @param {Array} points - list of points (3D)
     * @returns {poly3} a new polygon
     * @alias module:modeling/geometries/poly3.fromPoints
     *
     * @example
     * const points = [
     *   [0,  0, 0],
     *   [0, 10, 0],
     *   [0, 10, 10]
     * ]
     * const polygon = fromPoints(points)
     */
    const fromPoints$3 = (points) => {
      const vertices = points.map((point) => vec3$1.clone(point));
      return create_1$5(vertices)
    };

    var fromPoints_1$3 = fromPoints$3;

    /**
     * Create a polygon from the given vertices and plane.
     * NOTE: No checks are performed on the parameters.
     * @param {Array} vertices - list of vertices (3D)
     * @param {plane} plane - plane of the polygon
     * @returns {poly3} a new polygon
     * @alias module:modeling/geometries/poly3.fromPointsAndPlane
     */
    const fromPointsAndPlane = (vertices, plane) => {
      const poly = create_1$5(vertices);
      poly.plane = plane; // retain the plane for later use
      return poly
    };

    var fromPointsAndPlane_1 = fromPointsAndPlane;

    /**
     * Invert the give polygon to face the opposite direction.
     *
     * @param {poly3} polygon - the polygon to invert
     * @returns {poly3} a new poly3
     * @alias module:modeling/geometries/poly3.invert
     */
    const invert$2 = (polygon) => {
      const vertices = polygon.vertices.slice().reverse();
      return create_1$5(vertices)
    };

    var invert_1$2 = invert$2;

    /**
     * Determin if the given object is a polygon.
     * @param {Object} object - the object to interogate
     * @returns {Boolean} true if the object matches a poly3
     * @alias module:modeling/geometries/poly3.isA
     */
    const isA$2 = (object) => {
      if (object && typeof object === 'object') {
        if ('vertices' in object) {
          if (Array.isArray(object.vertices)) {
            return true
          }
        }
      }
      return false
    };

    var isA_1$2 = isA$2;

    /**
     * Represents a four dimensional vector.
     * See fromValues().
     * @typedef {Array} vec4
     */

    /**
     * Creates a new vector initialized to [0,0,0,0].
     *
     * @returns {vec4} a new vector
     * @alias module:modeling/maths/vec4.create
     */
    const create$4 = () => [0, 0, 0, 0];

    var create_1$4 = create$4;

    /**
     * Create a clone of the given vector.
     *
     * @param {vec4} vector - source vector
     * @returns {vec4} a new vector
     * @alias module:modeling/maths/vec4.clone
     */
    const clone$3 = (vector) => {
      const out = create_1$4();
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      out[3] = vector[3];
      return out
    };

    var clone_1$3 = clone$3;

    /**
     * Create a copy of the given vector.
     *
     * @param {vec4} out - receiving vector
     * @param {vec4} vector - source vector
     * @returns {vec4} out
     * @alias module:modeling/maths/vec4.copy
     */
    const copy$2 = (out, vector) => {
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      out[3] = vector[3];
      return out
    };

    var copy_1$2 = copy$2;

    /**
     * Compare the given vectors for equality.
     *
     * @param {vec4} a - first vector
     * @param {vec4} b - second vector
     * @return {Boolean} true if vectors are equal
     * @alias module:modeling/maths/vec4.equals
     */
    const equals$3 = (a, b) => ((a[0] === b[0]) && (a[1] === b[1]) && (a[2] === b[2]) && (a[3] === b[3]));

    var equals_1$2 = equals$3;

    /**
     * Flip the given plane.
     *
     * @param {plane} out - receiving plane
     * @param {plane} plane - plane to flip
     * @return {plane} out
     * @alias module:modeling/maths/plane.flip
     */
    const flip$1 = (out, plane) => {
      out[0] = -plane[0];
      out[1] = -plane[1];
      out[2] = -plane[2];
      out[3] = -plane[3];
      return out
    };

    var flip_1$1 = flip$1;

    /**
     * Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane)
     * and distance from 0,0,0.
     *
     * The contents of the array are a normal [0,1,2] and a distance [3].
     * @see https://en.wikipedia.org/wiki/Hesse_normal_form
     * @typedef {Array} plane
     */

    /**
     * Create a new plane from the given normal and point values.
     *
     * @param {plane} out - receiving plane
     * @param {vec3} normal - directional vector
     * @param {vec3} point - origin of plane
     * @returns {plane} out
     * @alias module:modeling/maths/plane.fromNormalAndPoint
     */
    const fromNormalAndPoint = (out, normal, point) => {
      const u = vec3$1.normalize(vec3$1.create(), normal);
      const w = vec3$1.dot(point, u);

      out[0] = u[0];
      out[1] = u[1];
      out[2] = u[2];
      out[3] = w;
      return out
    };

    var fromNormalAndPoint_1 = fromNormalAndPoint;

    /**
     * Creates a new vector with the given values.
     *
     * @param {Number} x - X component
     * @param {Number} y - Y component
     * @param {Number} z - Z component
     * @param {Number} w - W component
     * @returns {vec4} a new vector
     * @alias module:modeling/maths/vec4.fromValues
     */
    const fromValues$1 = (x, y, z, w) => {
      const out = create_1$4();
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out
    };

    var fromValues_1$1 = fromValues$1;

    /**
     * Create a plane from the given points.
     *
     * @param {plane} out - receiving plane
     * @param {vec3} a - 3D point
     * @param {vec3} b - 3D point
     * @param {vec3} c - 3D point
     * @returns {plane} out
     * @alias module:modeling/maths/plane.fromPoints
     */
    const fromPoints$2 = (out, ...vertices) => {
      const len = vertices.length;

      // Calculate normal vector for a single vertex
      // Inline to avoid allocations
      const ba = vec3$1.create();
      const ca = vec3$1.create();
      const vertexNormal = (index) => {
        const a = vertices[index];
        const b = vertices[(index + 1) % len];
        const c = vertices[(index + 2) % len];
        vec3$1.subtract(ba, b, a); // ba = b - a
        vec3$1.subtract(ca, c, a); // ca = c - a
        vec3$1.cross(ba, ba, ca); // ba = ba x ca
        vec3$1.normalize(ba, ba);
        return ba
      };

      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      if (len === 3) {
        // optimization for triangles, which are always coplanar
        vec3$1.copy(out, vertexNormal(0));
      } else {
        // sum of vertex normals
        vertices.forEach((v, i) => {
          vec3$1.add(out, out, vertexNormal(i));
        });
        // renormalize normal vector
        vec3$1.normalize(out, out);
      }
      out[3] = vec3$1.dot(out, vertices[0]);
      return out
    };

    var fromPoints_1$2 = fromPoints$2;

    /**
     * The resolution of space, currently one hundred nanometers.
     * This should be 1 / EPS.
     * @alias module:modeling/maths.spatialResolution
     * @default
     */
    const spatialResolution = 1e5;

    /**
     * Epsilon used during determination of near zero distances.
     * This should be 1 / spacialResolution.
     * @default
     * @alias module:modeling/maths.EPS
     */
    const EPS$4 = 1e-5;

    var constants = {
      EPS: EPS$4,
      spatialResolution
    };

    const { EPS: EPS$3 } = constants;



    /**
     * Create a new plane from the given points like fromPoints,
     * but allow the vectors to be on one point or one line.
     * In such a case, a random plane through the given points is constructed.
     *
     * @param {plane} out - receiving plane
     * @param {vec3} a - 3D point
     * @param {vec3} b - 3D point
     * @param {vec3} c - 3D point
     * @returns {plane} out
     * @alias module:modeling/maths/plane.fromPointsRandom
     */
    const fromPointsRandom = (out, a, b, c) => {
      let ba = vec3$1.subtract(vec3$1.create(), b, a);
      let ca = vec3$1.subtract(vec3$1.create(), c, a);
      if (vec3$1.length(ba) < EPS$3) {
        ba = vec3$1.orthogonal(ba, ca);
      }
      if (vec3$1.length(ca) < EPS$3) {
        ca = vec3$1.orthogonal(ca, ba);
      }
      let normal = vec3$1.cross(vec3$1.create(), ba, ca);
      if (vec3$1.length(normal) < EPS$3) {
        // this would mean that ba == ca.negated()
        ca = vec3$1.orthogonal(ca, ba);
        normal = vec3$1.cross(normal, ba, ca);
      }
      normal = vec3$1.normalize(normal, normal);
      const w = vec3$1.dot(normal, a);

      out[0] = normal[0];
      out[1] = normal[1];
      out[2] = normal[2];
      out[3] = w;
      return out
    };

    var fromPointsRandom_1 = fromPointsRandom;

    /**
     * Project the given point on to the given plane.
     *
     * @param {plane} plane - plane of reference
     * @param {vec3} point - point of reference
     * @return {vec3} projected point on plane
     * @alias module:modeling/maths/plane.projectionOfPoint
     */
    const projectionOfPoint = (plane, point) => {
      const a = point[0] * plane[0] + point[1] * plane[1] + point[2] * plane[2] - plane[3];
      const x = point[0] - a * plane[0];
      const y = point[1] - a * plane[1];
      const z = point[2] - a * plane[2];
      return vec3$1.fromValues(x, y, z)
    };

    var projectionOfPoint_1 = projectionOfPoint;

    /**
     * Calculate the distance to the given point.
     *
     * @param {plane} plane - plane of reference
     * @param {vec3} point - point of reference
     * @return {Number} signed distance to point
     * @alias module:modeling/maths/plane.signedDistanceToPoint
     */
    const signedDistanceToPoint = (plane, vector) => vec3$1.dot(plane, vector) - plane[3];

    var signedDistanceToPoint_1 = signedDistanceToPoint;

    /**
     * Convert the given vector to a representative string.
     *
     * @param {vec4} vector - vector to convert
     * @returns {String} representative string
     * @alias module:modeling/maths/vec4.toString
     */
    const toString$3 = (vec) => `(${vec[0].toFixed(9)}, ${vec[1].toFixed(9)}, ${vec[2].toFixed(9)}, ${vec[3].toFixed(9)})`;

    var toString_1$3 = toString$3;

    /**
     * Transform the given plane using the given matrix
     *
     * @param {plane} out - receiving plane
     * @param {plane} plane - plane to transform
     * @param {mat4} matrix - matrix to transform with
     * @return {plane} out
     * @alias module:modeling/maths/plane.transform
     */
    const transform$3 = (out, plane, matrix) => {
      const ismirror = mat4.isMirroring(matrix);
      // get two vectors in the plane:
      const r = vec3$1.orthogonal(vec3$1.create(), plane);
      const u = vec3$1.cross(r, plane, r);
      const v = vec3$1.cross(vec3$1.create(), plane, u);
      // get 3 points in the plane:
      let point1 = vec3$1.fromScalar(vec3$1.create(), plane[3]);
      vec3$1.multiply(point1, point1, plane);
      let point2 = vec3$1.add(vec3$1.create(), point1, u);
      let point3 = vec3$1.add(vec3$1.create(), point1, v);
      // transform the points:
      point1 = vec3$1.transform(point1, point1, matrix);
      point2 = vec3$1.transform(point2, point2, matrix);
      point3 = vec3$1.transform(point3, point3, matrix);
      // and create a new plane from the transformed points:
      fromPoints_1$2(out, point1, point2, point3);
      if (ismirror) {
        // the transform is mirroring so flip the plane
        flip_1$1(out, out);
      }
      return out
    };

    var transform_1$3 = transform$3;

    /**
     * Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane)
     * and distance from 0,0,0.
     * @see {@link plane} for data structure information.
     * @module modeling/maths/plane
     */
    var plane$1 = {
      /**
       * @see [vec4.clone()]{@link module:modeling/maths/vec4.clone}
       * @function clone
       */
      clone: clone_1$3,
      /**
       * @see [vec4.copy()]{@link module:modeling/maths/vec4.copy}
       * @function copy
       */
      copy: copy_1$2,
      /**
       * @see [vec4.create()]{@link module:modeling/maths/vec4.create}
       * @function create
       */
      create: create_1$4,
      /**
       * @see [vec4.equals()]{@link module:modeling/maths/vec4.equals}
       * @function equals
       */
      equals: equals_1$2,
      flip: flip_1$1,
      fromNormalAndPoint: fromNormalAndPoint_1,
      /**
       * @see [vec4.fromValues()]{@link module:modeling/maths/vec4.fromValues}
       * @function fromValues
       */
      fromValues: fromValues_1$1,
      fromPoints: fromPoints_1$2,
      fromPointsRandom: fromPointsRandom_1,
      projectionOfPoint: projectionOfPoint_1,
      signedDistanceToPoint: signedDistanceToPoint_1,
      /**
       * @see [vec4.toString()]{@link module:modeling/maths/vec4.toString}
       * @function toString
       */
      toString: toString_1$3,
      transform: transform_1$3
    };

    /**
     * Check whether the given polygon is convex.
     * @param {poly3} polygon - the polygon to interogate
     * @returns {Boolean} true if convex
     * @alias module:modeling/geometries/poly3.isConvex
     */
    const isConvex = (poly3) => areVerticesConvex(poly3.vertices);

    const areVerticesConvex = (vertices) => {
      const numvertices = vertices.length;
      if (numvertices > 2) {
        // note: plane ~= normal point
        const normal = plane$1.fromPoints(plane$1.create(), ...vertices);
        let prevprevpos = vertices[numvertices - 2];
        let prevpos = vertices[numvertices - 1];
        for (let i = 0; i < numvertices; i++) {
          const pos = vertices[i];
          if (!isConvexPoint(prevprevpos, prevpos, pos, normal)) {
            return false
          }
          prevprevpos = prevpos;
          prevpos = pos;
        }
      }
      return true
    };

    // calculate whether three points form a convex corner
    //  prevpoint, point, nextpoint: the 3 coordinates (Vector3D instances)
    //  normal: the normal vector of the plane
    const isConvexPoint = (prevpoint, point, nextpoint, normal) => {
      const crossproduct = vec3$1.cross(
        vec3$1.create(),
        vec3$1.subtract(vec3$1.create(), point, prevpoint),
        vec3$1.subtract(vec3$1.create(), nextpoint, point)
      );
      const crossdotnormal = vec3$1.dot(crossproduct, normal);
      return crossdotnormal >= 0
    };

    var isConvex_1 = isConvex;

    const plane = (polygon) => {
      if (!polygon.plane) {
        polygon.plane = plane$1.fromPoints(plane$1.create(), ...polygon.vertices);
      }
      return polygon.plane
    };

    var plane_1 = plane;

    /**
     * Measure the area of the given polygon.
     * @see 2000 softSurfer http://geomalgorithms.com
     * @param {poly3} polygon - the polygon to measure
     * @return {Number} area of the polygon
     * @alias module:modeling/geometries/poly3.measureArea
     */
    const measureArea$2 = (poly3) => {
      const n = poly3.vertices.length;
      if (n < 3) {
        return 0 // degenerate polygon
      }
      const vertices = poly3.vertices;

      // calculate a normal vector
      const normal = plane_1(poly3);

      // determine direction of projection
      const ax = Math.abs(normal[0]);
      const ay = Math.abs(normal[1]);
      const az = Math.abs(normal[2]);

      if (ax + ay + az === 0) {
        // normal does not exist
        return 0
      }

      let coord = 3; // ignore Z coordinates
      if ((ax > ay) && (ax > az)) {
        coord = 1; // ignore X coordinates
      } else
      if (ay > az) {
        coord = 2; // ignore Y coordinates
      }

      let area = 0;
      let h = 0;
      let i = 1;
      let j = 2;
      switch (coord) {
        case 1: // ignore X coordinates
          // compute area of 2D projection
          for (i = 1; i < n; i++) {
            h = i - 1;
            j = (i + 1) % n;
            area += (vertices[i][1] * (vertices[j][2] - vertices[h][2]));
          }
          area += (vertices[0][1] * (vertices[1][2] - vertices[n - 1][2]));
          // scale to get area
          area /= (2 * normal[0]);
          break

        case 2: // ignore Y coordinates
          // compute area of 2D projection
          for (i = 1; i < n; i++) {
            h = i - 1;
            j = (i + 1) % n;
            area += (vertices[i][2] * (vertices[j][0] - vertices[h][0]));
          }
          area += (vertices[0][2] * (vertices[1][0] - vertices[n - 1][0]));
          // scale to get area
          area /= (2 * normal[1]);
          break

        case 3: // ignore Z coordinates
        default:
          // compute area of 2D projection
          for (i = 1; i < n; i++) {
            h = i - 1;
            j = (i + 1) % n;
            area += (vertices[i][0] * (vertices[j][1] - vertices[h][1]));
          }
          area += (vertices[0][0] * (vertices[1][1] - vertices[n - 1][1]));
          // scale to get area
          area /= (2 * normal[2]);
          break
      }
      return area
    };

    var measureArea_1$2 = measureArea$2;

    /**
     * @param {poly3} polygon - the polygon to measure
     * @returns {Array} an array of two vectors (3D);  minimum and maximum coordinates
     * @alias module:modeling/geometries/poly3.measureBoundingBox
     */
    const measureBoundingBox$1 = (poly3) => {
      const vertices = poly3.vertices;
      const numvertices = vertices.length;
      const min = numvertices === 0 ? vec3$1.create() : vec3$1.clone(vertices[0]);
      const max = vec3$1.clone(min);
      for (let i = 1; i < numvertices; i++) {
        vec3$1.min(min, min, vertices[i]);
        vec3$1.max(max, max, vertices[i]);
      }
      return [min, max]
    };

    var measureBoundingBox_1$1 = measureBoundingBox$1;

    /**
     * Measure the bounding sphere of the given polygon.
     * @param {poly3} polygon - the polygon to measure
     * @returns {Array} the computed bounding sphere; center point (3D) and radius
     * @alias module:modeling/geometries/poly3.measureBoundingSphere
     */
    const measureBoundingSphere$1 = (poly3) => {
      const box = measureBoundingBox_1$1(poly3);
      const center = box[0];
      vec3$1.add(center, box[0], box[1]);
      vec3$1.scale(center, center, 0.5);
      const radius = vec3$1.distance(center, box[1]);
      return [center, radius]
    };

    var measureBoundingSphere_1$1 = measureBoundingSphere$1;

    /**
     * Measure the signed volume of the given polygon, which must be convex.
     * The volume is that formed by the tetrahedon connected to the axis [0,0,0],
     * and will be positive or negative based on the rotation of the vertices.
     * @see http://chenlab.ece.cornell.edu/Publication/Cha/icip01_Cha.pdf
     * @param {poly3} polygon - the polygon to measure
     * @return {Number} volume of the polygon
     * @alias module:modeling/geometries/poly3.measureSignedVolume
     */
    const measureSignedVolume = (poly3) => {
      let signedVolume = 0;
      const vertices = poly3.vertices;
      // calculate based on triangluar polygons
      const cross = vec3$1.create();
      for (let i = 0; i < vertices.length - 2; i++) {
        vec3$1.cross(cross, vertices[i + 1], vertices[i + 2]);
        signedVolume += vec3$1.dot(vertices[0], cross);
      }
      signedVolume /= 6;
      return signedVolume
    };

    var measureSignedVolume_1 = measureSignedVolume;

    /**
     * Return the given geometry as a list of points.
     * NOTE: The returned array should not be modified as the points are shared with the geometry.
     * @param {poly3} polygon - the polygon
     * @return {Array} list of points (3D)
     * @alias module:modeling/geometries/poly3.toPoints
     */
    const toPoints$2 = (geometry) => geometry.vertices;

    var toPoints_1$2 = toPoints$2;

    /**
     * @param {poly3} polygon - the polygon to measure
     * @return {String} the string representation
     * @alias module:modeling/geometries/poly3.toString
     */
    const toString$2 = (poly3) => {
      let result = 'poly3: vertices: [';
      poly3.vertices.forEach((vertex) => {
        result += `${vec3$1.toString(vertex)}, `;
      });
      result += ']';
      return result
    };

    var toString_1$2 = toString$2;

    /**
     * Transform the given polygon using the given matrix.
     * @param {mat4} matrix - the matrix to transform with
     * @param {poly3} polygon - the polygon to transform
     * @returns {poly3} a new polygon
     * @alias module:modeling/geometries/poly3.transform
     */
    const transform$2 = (matrix, poly3) => {
      const vertices = poly3.vertices.map((vertex) => vec3$1.transform(vec3$1.create(), vertex, matrix));
      if (mat4.isMirroring(matrix)) {
        // reverse the order to preserve the orientation
        vertices.reverse();
      }
      return create_1$5(vertices)
    };

    var transform_1$2 = transform$2;

    /**
     * Represents a convex 3D polygon consisting of a list of vertices.
     * @see {@link poly3} for data structure information.
     * @module modeling/geometries/poly3
     */
    var poly3 = {
      clone: clone_1$4,
      create: create_1$5,
      fromPoints: fromPoints_1$3,
      fromPointsAndPlane: fromPointsAndPlane_1,
      invert: invert_1$2,
      isA: isA_1$2,
      isConvex: isConvex_1,
      measureArea: measureArea_1$2,
      measureBoundingBox: measureBoundingBox_1$1,
      measureBoundingSphere: measureBoundingSphere_1$1,
      measureSignedVolume: measureSignedVolume_1,
      plane: plane_1,
      toPoints: toPoints_1$2,
      toString: toString_1$2,
      transform: transform_1$2
    };

    /**
     * Construct a new 3D geometry from a list of points.
     * The list of points should contain sub-arrays, each defining a single polygon of points.
     * In addition, the points should follow the right-hand rule for rotation in order to
     * define an external facing polygon.
     * @param {Array} listofpoints - list of lists, where each list is a set of points to construct a polygon
     * @returns {geom3} a new geometry
     * @alias module:modeling/geometries/geom3.fromPoints
     */
    const fromPoints$1 = (listofpoints) => {
      if (!Array.isArray(listofpoints)) {
        throw new Error('the given points must be an array')
      }

      const polygons = listofpoints.map((points, index) => {
        // TODO catch the error, and rethrow with index
        const polygon = poly3.fromPoints(points);
        return polygon
      });
      const result = create_1$6(polygons);
      return result
    };

    var fromPoints_1$1 = fromPoints$1;

    /**
     * Construct a new 3D geometry from the given compact binary data.
     * @param {TypedArray} data - compact binary data
     * @returns {geom3} a new geometry
     * @alias module:modeling/geometries/geom3.fromCompactBinary
     */
    const fromCompactBinary$1 = (data) => {
      if (data[0] !== 1) throw new Error('invalid compact binary data')

      const created = create_1$6();

      created.transforms = mat4.clone(data.slice(1, 17));

      const numberOfVertices = data[21];
      let ci = 22;
      let vi = data.length - (numberOfVertices * 3);
      while (vi < data.length) {
        const verticesPerPolygon = data[ci];
        ci++;

        const vertices = [];
        for (let i = 0; i < verticesPerPolygon; i++) {
          vertices.push(vec3$1.fromValues(data[vi], data[vi + 1], data[vi + 2]));
          vi += 3;
        }
        created.polygons.push(poly3.create(vertices));
      }

      // transfer known properities, i.e. color
      if (data[17] >= 0) {
        created.color = [data[17], data[18], data[19], data[20]];
      }
      // TODO: how about custom properties or fields ?
      return created
    };

    var fromCompactBinary_1$1 = fromCompactBinary$1;

    /*
     * Apply the transforms of the given geometry.
     * NOTE: This function must be called BEFORE exposing any data. See toPolygons.
     * @param {geom3} geometry - the geometry to transform
     * @returns {geom3} the given geometry
     * @example
     * geometry = applyTransforms(geometry)
     */
    const applyTransforms$1 = (geometry) => {
      if (mat4.isIdentity(geometry.transforms)) return geometry

      // apply transforms to each polygon
      // const isMirror = mat4.isMirroring(geometry.transforms)
      // TBD if (isMirror) newvertices.reverse()
      geometry.polygons = geometry.polygons.map((polygon) => poly3.transform(geometry.transforms, polygon));
      geometry.transforms = mat4.create();
      return geometry
    };

    var applyTransforms_1$1 = applyTransforms$1;

    /**
     * Produces an array of polygons from the given geometry, after applying transforms.
     * The returned array should not be modified as the polygons are shared with the geometry.
     * @param {geom3} geometry - the geometry
     * @returns {Array} an array of polygons
     * @alias module:modeling/geometries/geom3.toPolygons
     *
     * @example
     * let sharedpolygons = toPolygons(geometry)
     */
    const toPolygons = (geometry) => applyTransforms_1$1(geometry).polygons;

    var toPolygons_1 = toPolygons;

    /**
     * Invert the given geometry, transposing solid and empty space.
     * @params {geom3} geometry - the geometry to invert
     * @returns {geom3} a new geometry
     * @alias module:modeling/geometries/geom3.invert
     */
    const invert$1 = (geometry) => {
      const polygons = toPolygons_1(geometry);
      const newpolygons = polygons.map((polygon) => poly3.invert(polygon));
      return create_1$6(newpolygons)
    };

    var invert_1$1 = invert$1;

    /**
     * Determin if the given object is a 3D geometry.
     * @param {object} object - the object to interogate
     * @returns {Boolean} true if the object matches a geom3
     * @alias module:modeling/geometries/geom3.isA
     */
    const isA$1 = (object) => {
      if (object && typeof object === 'object') {
        if ('polygons' in object && 'transforms' in object) {
          if (Array.isArray(object.polygons) && 'length' in object.transforms) {
            return true
          }
        }
      }
      return false
    };

    var isA_1$1 = isA$1;

    /**
     * Return the given geometry as a list of points, after applying transforms.
     * The returned array should not be modified as the points are shared with the geometry.
     * @return {Array} list of points, where each sub-array represents a polygon
     * @alias module:modeling/geometries/geom3.toPoints
     */
    const toPoints$1 = (geometry) => {
      const polygons = toPolygons_1(geometry);
      const listofpoints = polygons.map((polygon) => poly3.toPoints(polygon));
      return listofpoints
    };

    var toPoints_1$1 = toPoints$1;

    /**
     * Create a string representing the contents of the given geometry.
     * @param {geom3} geometry - the geometry
     * @returns {String} a representive string
     * @alias module:modeling/geometries/geom3.toString
     *
     * @example
     * console.out(toString(geometry))
     */
    const toString$1 = (geometry) => {
      const polygons = toPolygons_1(geometry);
      let result = 'geom3 (' + polygons.length + ' polygons):\n';
      polygons.forEach((polygon) => {
        result += '  ' + poly3.toString(polygon) + '\n';
      });
      return result
    };

    var toString_1$1 = toString$1;

    /**
     * Return the given geometry in compact binary representation.
     * @param {geom3} geometry - the geometry
     * @return {TypedArray} compact binary representation
     * @alias module:modeling/geometries/geom3.toCompactBinary
     */
    const toCompactBinary$1 = (geom) => {
      const polygons = geom.polygons;
      const transforms = geom.transforms;

      const numberOfPolygons = polygons.length;
      const numberOfVertices = polygons.reduce((count, polygon) => count + polygon.vertices.length, 0);
      let color = [-1, -1, -1, -1];
      if (geom.color) color = geom.color;

      // FIXME why Float32Array?
      const compacted = new Float32Array(1 + 16 + 4 + 1 + numberOfPolygons + (numberOfVertices * 3));
      // type + transforms + color + numberOfPolygons + numberOfVerticesPerPolygon[] + vertices data[]

      compacted[0] = 1; // type code: 0 => geom2, 1 => geom3 , 2 => path2

      compacted[1] = transforms[0];
      compacted[2] = transforms[1];
      compacted[3] = transforms[2];
      compacted[4] = transforms[3];
      compacted[5] = transforms[4];
      compacted[6] = transforms[5];
      compacted[7] = transforms[6];
      compacted[8] = transforms[7];
      compacted[9] = transforms[8];
      compacted[10] = transforms[9];
      compacted[11] = transforms[10];
      compacted[12] = transforms[11];
      compacted[13] = transforms[12];
      compacted[14] = transforms[13];
      compacted[15] = transforms[14];
      compacted[16] = transforms[15];

      compacted[17] = color[0];
      compacted[18] = color[1];
      compacted[19] = color[2];
      compacted[20] = color[3];

      compacted[21] = numberOfVertices;

      let ci = 22;
      let vi = ci + numberOfPolygons;
      polygons.forEach((polygon) => {
        const points = poly3.toPoints(polygon);
        // record the number of vertices per polygon
        compacted[ci] = points.length;
        ci++;
        // convert the vertices
        for (let i = 0; i < points.length; i++) {
          const point = points[i];
          compacted[vi + 0] = point[0];
          compacted[vi + 1] = point[1];
          compacted[vi + 2] = point[2];
          vi += 3;
        }
      });
      // TODO: how about custom properties or fields ?
      return compacted
    };

    var toCompactBinary_1$1 = toCompactBinary$1;

    /**
     * Transform the given geometry using the given matrix.
     * This is a lazy transform of the polygons, as this function only adjusts the transforms.
     * See applyTransforms() for the actual application of the transforms to the polygons.
     * @param {mat4} matrix - the matrix to transform with
     * @param {geom3} geometry - the geometry to transform
     * @returns {geom3} a new geometry
     * @alias module:modeling/geometries/geom3.transform
     *
     * @example
     * let newgeometry = transform(fromXRotation(degToRad(90)), geometry)
     */
    const transform$1 = (matrix, geometry) => {
      const transforms = mat4.multiply(mat4.create(), matrix, geometry.transforms);
      return Object.assign({}, geometry, { transforms })
    };

    var transform_1$1 = transform$1;

    /**
     * Represents a 3D geometry consisting of a list of polygons.
     * @see {@link geom3} for data structure information.
     * @module modeling/geometries/geom3
     */
    var geom3$2 = {
      clone: clone_1$5,
      create: create_1$6,
      fromPoints: fromPoints_1$1,
      fromCompactBinary: fromCompactBinary_1$1,
      invert: invert_1$1,
      isA: isA_1$1,
      toPoints: toPoints_1$1,
      toPolygons: toPolygons_1,
      toString: toString_1$1,
      toCompactBinary: toCompactBinary_1$1,
      transform: transform_1$1
    };

    /**
     * Performs a shallow clone of the give geometry.
     * @param {path2} geometry - the geometry to clone
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.clone
     */
    const clone$2 = (geometry) => Object.assign({}, geometry);

    var clone_1$2 = clone$2;

    const { EPS: EPS$2 } = constants;





    /**
     * Close the given geometry.
     * @param {path2} geometry - the path to close
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.close
     */
    const close = (geometry) => {
      if (geometry.isClosed) return geometry

      const cloned = clone_1$2(geometry);
      cloned.isClosed = true;

      if (cloned.points.length > 1) {
        // make sure the paths are formed properly
        const points = cloned.points;
        const p0 = points[0];
        let pn = points[points.length - 1];
        while (vec2.distance(p0, pn) < (EPS$2 * EPS$2)) {
          points.pop();
          if (points.length === 1) break
          pn = points[points.length - 1];
        }
      }
      return cloned
    };

    var close_1 = close;

    /**
     * Represents a 2D geometry consisting of a list of ordered points.
     * @typedef {Object} path2
     * @property {Array} points - list of ordered points
     * @property {Boolean} isClosed - true if the path is closed where start and end points are the same
     * @property {mat4} transforms - transforms to apply to the points, see transform()
     */

    /**
     * Create an empty, open path.
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.create
     *
     * @example
     * let newpath = create()
     */
    const create$3 = (points) => {
      if (points === undefined) {
        points = [];
      }
      return {
        points: points,
        isClosed: false,
        transforms: mat4.create()
      }
    };

    var create_1$3 = create$3;

    const { EPS: EPS$1 } = constants;






    /**
     * Create a new path from the given points.
     * The points must be provided an array of points,
     * where each point is an array of two numbers.
     * @param {Object} options - options for construction
     * @param {Boolean} [options.closed=false] - if the path should be open or closed
     * @param {Array} points - array of points (2D) from which to create the path
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.fromPoints
     *
     * @example:
     * my newpath = fromPoints({closed: true}, [[10, 10], [-10, 10]])
     */
    const fromPoints = (options, points) => {
      const defaults = { closed: false };
      let { closed } = Object.assign({}, defaults, options);

      let created = create_1$3();
      created.points = points.map((point) => vec2.clone(point));

      // check if first and last points are equal
      if (created.points.length > 1) {
        const p0 = created.points[0];
        const pn = created.points[created.points.length - 1];
        if (vec2.distance(p0, pn) < (EPS$1 * EPS$1)) {
          // and close automatically
          closed = true;
        }
      }
      if (closed === true) created = close_1(created);

      return created
    };

    var fromPoints_1 = fromPoints;

    /*
     * Apply the transforms of the given geometry.
     * NOTE: This function must be called BEFORE exposing any data. See toPoints.
     * @param {path} geometry - the geometry to transform
     * @returns {path} the given geometry
     * @example
     * geometry = applyTransforms(geometry)
     */
    const applyTransforms = (geometry) => {
      if (mat4.isIdentity(geometry.transforms)) return geometry

      geometry.points = geometry.points.map((point) => vec2.transform(vec2.create(), point, geometry.transforms));
      geometry.transforms = mat4.create();
      return geometry
    };

    var applyTransforms_1 = applyTransforms;

    /**
     * Produces an array of points from the given geometry.
     * The returned array should not be modified as the data is shared with the geometry.
     * @param {path2} geometry - the geometry
     * @returns {Array} an array of points
     * @alias module:modeling/geometries/path2.toPoints
     *
     * @example
     * let sharedpoints = toPoints(geometry)
     */
    const toPoints = (geometry) => applyTransforms_1(geometry).points;

    var toPoints_1 = toPoints;

    /**
     * Append a series of points to the given geometry that represent an arc.
     * This implementation follows the SVG specifications.
     * @see http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
     * @param {Object} options - options for construction
     * @param {vec2} options.endpoint - end point of arc (REQUIRED)
     * @param {vec2} [options.radius=[0,0]] - radius of arc (X and Y)
     * @param {Number} [options.xaxisrotation=0] - rotation (RADIANS) of the X axis of the arc with respect to the X axis of the coordinate system
     * @param {Boolean} [options.clockwise=false] - draw an arc clockwise with respect to the center point
     * @param {Boolean} [options.large=false] - draw an arc longer than PI radians
     * @param {Number} [options.segments=16] - number of segments per full rotation
     * @param {path2} geometry - the path of which to append the arc
     * @returns {path2} a new path with the appended points
     * @alias module:modeling/geometries/path2.appendArc
     *
     * @example
     * let p1 = path2.fromPoints({}, [[27.5,-22.96875]]);
     * p1 = path2.appendPoints([[27.5,-3.28125]], p1);
     * p1 = path2.appendArc({endpoint: [12.5, -22.96875], radius: [15, -19.6875]}, p1);
     */
    const appendArc = (options, geometry) => {
      const defaults = {
        radius: [0, 0], // X and Y radius
        xaxisrotation: 0,
        clockwise: false,
        large: false,
        segments: 16
      };
      let { endpoint, radius, xaxisrotation, clockwise, large, segments } = Object.assign({}, defaults, options);

      // validate the given options
      if (!Array.isArray(endpoint)) throw new Error('endpoint must be an array of X and Y values')
      if (endpoint.length < 2) throw new Error('endpoint must contain X and Y values')
      endpoint = vec2.clone(endpoint);

      if (!Array.isArray(radius)) throw new Error('radius must be an array of X and Y values')
      if (radius.length < 2) throw new Error('radius must contain X and Y values')

      if (segments < 4) throw new Error('segments must be four or more')

      const decimals = 100000;

      // validate the given geometry
      if (geometry.isClosed) {
        throw new Error('the given path cannot be closed')
      }

      const points = toPoints_1(geometry);
      if (points.length < 1) {
        throw new Error('the given path must contain one or more points (as the starting point for the arc)')
      }

      let xradius = radius[0];
      let yradius = radius[1];
      const startpoint = points[points.length - 1];

      // round to precision in order to have determinate calculations
      xradius = Math.round(xradius * decimals) / decimals;
      yradius = Math.round(yradius * decimals) / decimals;
      endpoint = vec2.fromValues(Math.round(endpoint[0] * decimals) / decimals, Math.round(endpoint[1] * decimals) / decimals);

      const sweepFlag = !clockwise;
      let newpoints = [];
      if ((xradius === 0) || (yradius === 0)) {
        // http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes:
        // If rx = 0 or ry = 0, then treat this as a straight line from (x1, y1) to (x2, y2) and stop
        newpoints.push(endpoint);
      } else {
        xradius = Math.abs(xradius);
        yradius = Math.abs(yradius);

        // see http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes :
        const phi = xaxisrotation;
        const cosphi = Math.cos(phi);
        const sinphi = Math.sin(phi);
        const minushalfdistance = vec2.subtract(vec2.create(), startpoint, endpoint);
        vec2.scale(minushalfdistance, minushalfdistance, 0.5);
        // F.6.5.1:
        // round to precision in order to have determinate calculations
        const x = Math.round((cosphi * minushalfdistance[0] + sinphi * minushalfdistance[1]) * decimals) / decimals;
        const y = Math.round((-sinphi * minushalfdistance[0] + cosphi * minushalfdistance[1]) * decimals) / decimals;
        const startTranslated = vec2.fromValues(x, y);
        // F.6.6.2:
        const biglambda = (startTranslated[0] * startTranslated[0]) / (xradius * xradius) + (startTranslated[1] * startTranslated[1]) / (yradius * yradius);
        if (biglambda > 1.0) {
          // F.6.6.3:
          const sqrtbiglambda = Math.sqrt(biglambda);
          xradius *= sqrtbiglambda;
          yradius *= sqrtbiglambda;
          // round to precision in order to have determinate calculations
          xradius = Math.round(xradius * decimals) / decimals;
          yradius = Math.round(yradius * decimals) / decimals;
        }
        // F.6.5.2:
        let multiplier1 = Math.sqrt((xradius * xradius * yradius * yradius - xradius * xradius * startTranslated[1] * startTranslated[1] - yradius * yradius * startTranslated[0] * startTranslated[0]) / (xradius * xradius * startTranslated[1] * startTranslated[1] + yradius * yradius * startTranslated[0] * startTranslated[0]));
        if (sweepFlag === large) multiplier1 = -multiplier1;
        const centerTranslated = vec2.fromValues(xradius * startTranslated[1] / yradius, -yradius * startTranslated[0] / xradius);
        vec2.scale(centerTranslated, centerTranslated, multiplier1);
        // F.6.5.3:
        let center = vec2.fromValues(cosphi * centerTranslated[0] - sinphi * centerTranslated[1], sinphi * centerTranslated[0] + cosphi * centerTranslated[1]);
        center = vec2.add(center, center, vec2.scale(vec2.create(), vec2.add(vec2.create(), startpoint, endpoint), 0.5));

        // F.6.5.5:
        const vector1 = vec2.fromValues((startTranslated[0] - centerTranslated[0]) / xradius, (startTranslated[1] - centerTranslated[1]) / yradius);
        const vector2 = vec2.fromValues((-startTranslated[0] - centerTranslated[0]) / xradius, (-startTranslated[1] - centerTranslated[1]) / yradius);
        const theta1 = vec2.angleRadians(vector1);
        const theta2 = vec2.angleRadians(vector2);
        let deltatheta = theta2 - theta1;
        deltatheta = deltatheta % (2 * Math.PI);
        if ((!sweepFlag) && (deltatheta > 0)) {
          deltatheta -= 2 * Math.PI;
        } else if ((sweepFlag) && (deltatheta < 0)) {
          deltatheta += 2 * Math.PI;
        }

        // Ok, we have the center point and angle range (from theta1, deltatheta radians) so we can create the ellipse
        let numsteps = Math.ceil(Math.abs(deltatheta) / (2 * Math.PI) * segments) + 1;
        if (numsteps < 1) numsteps = 1;
        for (let step = 1; step < numsteps; step++) {
          const theta = theta1 + step / numsteps * deltatheta;
          const costheta = Math.cos(theta);
          const sintheta = Math.sin(theta);
          // F.6.3.1:
          const point = vec2.fromValues(cosphi * xradius * costheta - sinphi * yradius * sintheta, sinphi * xradius * costheta + cosphi * yradius * sintheta);
          vec2.add(point, point, center);
          newpoints.push(point);
        }
        // ensure end point is precisely what user gave as parameter
        if (numsteps) newpoints.push(options.endpoint);
      }
      newpoints = points.concat(newpoints);
      const result = fromPoints_1({}, newpoints);
      return result
    };

    var appendArc_1 = appendArc;

    /**
     * Append the given list of points to the end of the given geometry.
     * @param {Array} points - the points (2D) to append to the given path
     * @param {path2} geometry - the given path
     * @returns {path2} a new path with the appended points
     * @alias module:modeling/geometries/path2.appendPoints
     * @example
     * let newpath = appendPoints([[3, 4], [4, 5]], oldpath)
     */
    const appendPoints = (points, geometry) => {
      if (geometry.isClosed) {
        throw new Error('cannot append points to a closed path')
      }

      let newpoints = toPoints_1(geometry);
      newpoints = newpoints.concat(points);

      return fromPoints_1({}, newpoints)
    };

    var appendPoints_1 = appendPoints;

    const vec3 = vec2;




    /**
     * Append a series of points to the given geometry that represent a Bezier curve.
     * The Bézier curve starts at the last point in the given geometry, and ends at the last control point.
     * The other control points are intermediate control points to transition the curve from start to end points.
     * The first control point may be null to ensure a smooth transition occurs. In this case,
     * the second to last point of the given geometry is mirrored into the control points of the Bezier curve.
     * In other words, the trailing gradient of the geometry matches the new gradient of the curve.
     * @param {Object} options - options for construction
     * @param {Array} options.controlPoints - list of control points (2D) for the bezier curve
     * @param {Number} [options.segment=16] - number of segments per 360 rotation
     * @param {path2} geometry - the path of which to appended points
     * @returns {path2} a new path with the appended points
     * @alias module:modeling/geometries/path2.appendBezier
     *
     * @example
     * let p5 = path2.create({}, [[10,-20]])
     * p5 = path2.appendBezier({controlPoints: [[10,-10],[25,-10],[25,-20]]}, p5);
     * p5 = path2.appendBezier({controlPoints: [null, [25,-30],[40,-30],[40,-20]]}, p5)
     */
    const appendBezier = (options, geometry) => {
      const defaults = {
        segments: 16
      };
      let { controlPoints, segments } = Object.assign({}, defaults, options);

      // validate the given options
      if (!Array.isArray(controlPoints)) throw new Error('controlPoints must be an array of one or more points')
      if (controlPoints.length < 1) throw new Error('controlPoints must be an array of one or more points')

      if (segments < 4) throw new Error('segments must be four or more')

      // validate the given geometry
      if (geometry.isClosed) {
        throw new Error('the given geometry cannot be closed')
      }

      const points = toPoints_1(geometry);
      if (points.length < 1) {
        throw new Error('the given path must contain one or more points (as the starting point for the bezier curve)')
      }

      // make a copy of the control points
      controlPoints = controlPoints.slice();

      // special handling of null control point (only first is allowed)
      const firstControlPoint = controlPoints[0];
      if (firstControlPoint === null) {
        if (controlPoints.length < 2) {
          throw new Error('a null control point must be passed with one more control points')
        }
        // special handling of a previous bezier curve
        let lastBezierControlPoint = points[points.length - 2];
        if ('lastBezierControlPoint' in geometry) {
          lastBezierControlPoint = geometry.lastBezierControlPoint;
        }
        if (!Array.isArray(lastBezierControlPoint)) {
          throw new Error('the given path must contain TWO or more points if given a null control point')
        }
        // replace the first control point with the mirror of the last bezier control point
        const controlpoint = vec2.scale(vec2.create(), points[points.length - 1], 2);
        vec2.subtract(controlpoint, controlpoint, lastBezierControlPoint);

        controlPoints[0] = controlpoint;
      }

      // add a control point for the previous end point
      controlPoints.unshift(points[points.length - 1]);

      const bezierOrder = controlPoints.length - 1;
      const factorials = [];
      let fact = 1;
      for (let i = 0; i <= bezierOrder; ++i) {
        if (i > 0) fact *= i;
        factorials.push(fact);
      }

      const binomials = [];
      for (let i = 0; i <= bezierOrder; ++i) {
        const binomial = factorials[bezierOrder] / (factorials[i] * factorials[bezierOrder - i]);
        binomials.push(binomial);
      }

      const v0 = vec2.create();
      const v1 = vec2.create();
      const v3 = vec3.create();
      const getPointForT = (t) => {
        let tk = 1; // = pow(t,k)
        let oneMinusTNMinusK = Math.pow(1 - t, bezierOrder); // = pow( 1-t, bezierOrder - k)
        const invOneMinusT = (t !== 1) ? (1 / (1 - t)) : 1;
        const point = vec2.create(); // 0, 0, 0
        for (let k = 0; k <= bezierOrder; ++k) {
          if (k === bezierOrder) oneMinusTNMinusK = 1;
          const bernsteinCoefficient = binomials[k] * tk * oneMinusTNMinusK;
          const derivativePoint = vec2.scale(v0, controlPoints[k], bernsteinCoefficient);
          vec2.add(point, point, derivativePoint);
          tk *= t;
          oneMinusTNMinusK *= invOneMinusT;
        }
        return point
      };

      const newpoints = [];
      const newpointsT = [];
      const numsteps = bezierOrder + 1;
      for (let i = 0; i < numsteps; ++i) {
        const t = i / (numsteps - 1);
        const point = getPointForT(t);
        newpoints.push(point);
        newpointsT.push(t);
      }

      // subdivide each segment until the angle at each vertex becomes small enough:
      let subdivideBase = 1;
      const maxangle = Math.PI * 2 / segments;
      const maxsinangle = Math.sin(maxangle);
      while (subdivideBase < newpoints.length - 1) {
        const dir1 = vec2.subtract(v0, newpoints[subdivideBase], newpoints[subdivideBase - 1]);
        vec2.normalize(dir1, dir1);
        const dir2 = vec2.subtract(v1, newpoints[subdivideBase + 1], newpoints[subdivideBase]);
        vec2.normalize(dir2, dir2);
        const sinangle = vec2.cross(v3, dir1, dir2); // the sine of the angle
        if (Math.abs(sinangle[2]) > maxsinangle) {
          // angle is too big, we need to subdivide
          const t0 = newpointsT[subdivideBase - 1];
          const t1 = newpointsT[subdivideBase + 1];
          const newt0 = t0 + (t1 - t0) * 1 / 3;
          const newt1 = t0 + (t1 - t0) * 2 / 3;
          const point0 = getPointForT(newt0);
          const point1 = getPointForT(newt1);
          // remove the point at subdivideBase and replace with 2 new points:
          newpoints.splice(subdivideBase, 1, point0, point1);
          newpointsT.splice(subdivideBase, 1, newt0, newt1);
          // re - evaluate the angles, starting at the previous junction since it has changed:
          subdivideBase--;
          if (subdivideBase < 1) subdivideBase = 1;
        } else {
          ++subdivideBase;
        }
      }

      // append to the new points to the given path
      // but skip the first new point because it is identical to the last point in the given path
      newpoints.shift();
      const result = appendPoints_1(newpoints, geometry);
      result.lastBezierControlPoint = controlPoints[controlPoints.length - 2];
      return result
    };

    var appendBezier_1 = appendBezier;

    const { equals: equals$2 } = vec2;
    /**
     * Concatenate the given paths.
     * If both contain the same point at the junction, merge it into one.
     * A concatenation of zero paths is an empty, open path.
     * A concatenation of one closed path to a series of open paths produces a closed path.
     * A concatenation of a path to a closed path is an error.
     * @param {...path2} paths - the paths to concatenate
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.concat
     *
     * @example
     * let newpath = concat(fromPoints({}, [[1, 2]]), fromPoints({}, [[3, 4]]))
     */
    const concat = (...paths) => {
      // Only the last path can be closed, producing a closed path.
      let isClosed = false;
      for (const path of paths) {
        if (isClosed) {
          throw new Error('Cannot concatenate to a closed path')
        }
        isClosed = path.isClosed;
      }
      let newpoints = [];
      paths.forEach((path) => {
        const tmp = toPoints_1(path);
        if (newpoints.length > 0 && tmp.length > 0 && equals$2(tmp[0], newpoints[newpoints.length - 1])) tmp.shift();
        newpoints = newpoints.concat(tmp);
      });
      return fromPoints_1({ closed: isClosed }, newpoints)
    };

    var concat_1 = concat;

    /**
     * Calls a function for each point in the geometry.
     * @param {Object} options - options
     * @param {Function} thunk - the function to call
     * @param {path2} geometry - the geometry to traverse
     * @alias module:modeling/geometries/path2.eachPoint
     *
     * @example
     * eachPoint({}, accumulate, geometry)
     */
    const eachPoint = (options, thunk, path) => {
      toPoints_1(path).forEach(thunk);
    };

    var eachPoint_1 = eachPoint;

    /**
      * Determine if the given paths are equal.
      * For closed paths, this includes equality under point order rotation.
      * @param {path2} a - the first path to compare
      * @param {path2} b - the second path to compare
      * @returns {Boolean}
      * @alias module:modeling/geometries/path2.equals
      */
    const equals$1 = (a, b) => {
      if (a.isClosed !== b.isClosed) {
        return false
      }
      if (a.points.length !== b.points.length) {
        return false
      }

      const apoints = toPoints_1(a);
      const bpoints = toPoints_1(b);

      // closed paths might be equal under graph rotation
      // so try comparison by rotating across all points
      const length = apoints.length;
      let offset = 0;
      do {
        let unequal = false;
        for (let i = 0; i < length; i++) {
          if (!vec2.equals(apoints[i], bpoints[(i + offset) % length])) {
            unequal = true;
            break
          }
        }
        if (unequal === false) {
          return true
        }
        // unequal open paths should only be compared once, never rotated
        if (!a.isClosed) {
          return false
        }
      } while (++offset < length)
      return false
    };

    var equals_1$1 = equals$1;

    /**
     * Create a new path from the given compact binary data.
     * @param {TypedArray} data - compact binary data
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.fromCompactBinary
     */
    const fromCompactBinary = (data) => {
      if (data[0] !== 2) throw new Error('invalid compact binary data')

      const created = create_1$3();

      created.transforms = mat4.clone(data.slice(1, 17));

      created.isClosed = !!data[17];

      for (let i = 22; i < data.length; i += 2) {
        const point = vec2.fromValues(data[i], data[i + 1]);
        created.points.push(point);
      }
      // transfer known properties, i.e. color
      if (data[18] >= 0) {
        created.color = [data[18], data[19], data[20], data[21]];
      }
      // TODO: how about custom properties or fields ?
      return created
    };

    var fromCompactBinary_1 = fromCompactBinary;

    /**
     * Determin if the given object is a path2 geometry.
     * @param {Object} object - the object to interogate
     * @returns {Boolean} true if the object matches a path2
     * @alias module:modeling/geometries/path2.isA
     */
    const isA = (object) => {
      if (object && typeof object === 'object') {
        // see create for the required attributes and types
        if ('points' in object && 'transforms' in object && 'isClosed' in object) {
          // NOTE: transforms should be a TypedArray, which has a read-only length
          if (Array.isArray(object.points) && 'length' in object.transforms) {
            return true
          }
        }
      }
      return false
    };

    var isA_1 = isA;

    /**
     * Reverses the path so that the points are in the opposite order.
     * This swaps the left (interior) and right (exterior) edges.
     * @param {path2} geometry - the geometry to reverse
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.reverse
     *
     * @example
     * let newpath = reverse(mypath)
     */
    const reverse = (path) => {
      // NOTE: this only updates the order of the points
      const cloned = clone_1$2(path);
      cloned.points = path.points.slice().reverse();
      return cloned
    };

    var reverse_1 = reverse;

    /**
     * Create a string representing the contents of the given path.
     * @param {path2} geometry - the path
     * @returns {String} a representive string
     * @alias module:modeling/geometries/path2.toString
     *
     * @example
     * console.out(toString(path))
     */
    const toString = (geometry) => {
      const points = toPoints_1(geometry);
      let result = 'path (' + points.length + ' points, ' + geometry.isClosed + '):\n[\n';
      points.forEach((point) => {
        result += '  ' + vec2.toString(point) + ',\n';
      });
      result += ']\n';
      return result
    };

    var toString_1 = toString;

    /**
     * Produce a compact binary representation from the given path.
     * @param {path2} geometry - the path
     * @returns {TypedArray} compact binary representation
     * @alias module:modeling/geometries/path2.toCompactBinary
     */
    const toCompactBinary = (geom) => {
      const points = geom.points;
      const transforms = geom.transforms;
      let color = [-1, -1, -1, -1];
      if (geom.color) color = geom.color;

      // FIXME why Float32Array?
      const compacted = new Float32Array(1 + 16 + 1 + 4 + (points.length * 2)); // type + transforms + isClosed + color + points data

      compacted[0] = 2; // type code: 0 => geom2, 1 => geom3 , 2 => path2

      compacted[1] = transforms[0];
      compacted[2] = transforms[1];
      compacted[3] = transforms[2];
      compacted[4] = transforms[3];
      compacted[5] = transforms[4];
      compacted[6] = transforms[5];
      compacted[7] = transforms[6];
      compacted[8] = transforms[7];
      compacted[9] = transforms[8];
      compacted[10] = transforms[9];
      compacted[11] = transforms[10];
      compacted[12] = transforms[11];
      compacted[13] = transforms[12];
      compacted[14] = transforms[13];
      compacted[15] = transforms[14];
      compacted[16] = transforms[15];

      compacted[17] = geom.isClosed ? 1 : 0;

      compacted[18] = color[0];
      compacted[19] = color[1];
      compacted[20] = color[2];
      compacted[21] = color[3];

      for (let j = 0; j < points.length; j++) {
        const ci = j * 2 + 22;
        const point = points[j];
        compacted[ci] = point[0];
        compacted[ci + 1] = point[1];
      }
      // TODO: how about custom properties or fields ?
      return compacted
    };

    var toCompactBinary_1 = toCompactBinary;

    /**
     * Transform the given geometry using the given matrix.
     * This is a lazy transform of the points, as this function only adjusts the transforms.
     * The transforms are applied when accessing the points via toPoints().
     * @param {mat4} matrix - the matrix to transform with
     * @param {path2} geometry - the geometry to transform
     * @returns {path2} a new path
     * @alias module:modeling/geometries/path2.transform
     *
     * @example
     * let newpath = transform(fromZRotation(Math.PI / 4), path)
     */
    const transform = (matrix, geometry) => {
      const transforms = mat4.multiply(mat4.create(), matrix, geometry.transforms);
      return Object.assign({}, geometry, { transforms })
    };

    var transform_1 = transform;

    /**
     * Represents a 2D geometry consisting of a list of ordered points.
     * @see {@link path2} for data structure information.
     * @module modeling/geometries/path2
     */
    var path2$2 = {
      appendArc: appendArc_1,
      appendBezier: appendBezier_1,
      appendPoints: appendPoints_1,
      clone: clone_1$2,
      close: close_1,
      concat: concat_1,
      create: create_1$3,
      eachPoint: eachPoint_1,
      equals: equals_1$1,
      fromPoints: fromPoints_1,
      fromCompactBinary: fromCompactBinary_1,
      isA: isA_1,
      reverse: reverse_1,
      toPoints: toPoints_1,
      toString: toString_1,
      toCompactBinary: toCompactBinary_1,
      transform: transform_1
    };

    const cache$2 = new WeakMap();

    /*
     * Measure the area of the given geometry.
     * NOTE: paths are infinitely narrow and do not have an area
     *
     * @param {path2} geometry - geometry to measure
     * @returns {Number} area of the geometry
     */
    const measureAreaOfPath2 = () => 0;

    /*
     * Measure the area of the given geometry.
     * For a counter clockwise rotating geometry (about Z) the area is positive, otherwise negative.
     *
     * @see http://paulbourke.net/geometry/polygonmesh/
     * @param {geom2} geometry - 2D geometry to measure
     * @returns {Number} area of the geometry
     */
    const measureAreaOfGeom2 = (geometry) => {
      let area = cache$2.get(geometry);
      if (area) return area

      const sides = geom2$2.toSides(geometry);
      area = sides.reduce((area, side) => area + (side[0][0] * side[1][1] - side[0][1] * side[1][0]), 0);
      area *= 0.5;

      cache$2.set(geometry, area);

      return area
    };

    /*
     * Measure the area of the given geometry.
     *
     * @param {geom3} geometry - 3D geometry to measure
     * @returns {Number} area of the geometry
     */
    const measureAreaOfGeom3 = (geometry) => {
      let area = cache$2.get(geometry);
      if (area) return area

      const polygons = geom3$2.toPolygons(geometry);
      area = polygons.reduce((area, polygon) => area + poly3.measureArea(polygon), 0);

      cache$2.set(geometry, area);

      return area
    };

    /**
     * Measure the area of the given geometries.
     * @param {...Objects} geometries - the geometries to measure
     * @return {Number|Array} the area, or a list of areas for each geometry
     * @alias module:modeling/measurements.measureArea
     *
     * @example
     * let area = measureArea(sphere())
     */
    const measureArea$1 = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('wrong number of arguments')

      const results = geometries.map((geometry) => {
        if (path2$2.isA(geometry)) return measureAreaOfPath2()
        if (geom2$2.isA(geometry)) return measureAreaOfGeom2(geometry)
        if (geom3$2.isA(geometry)) return measureAreaOfGeom3(geometry)
        return 0
      });
      return results.length === 1 ? results[0] : results
    };

    var measureArea_1$1 = measureArea$1;

    /**
     * Measure the total (aggregate) area for the given geometries.
     * Note: This measurement will not account for overlapping geometry
     * @param {...Object} geometries - the geometries to measure.
     * @return {Number} the total surface area for the group of geometry.
     * @alias module:modeling/measurements.measureAggregateArea
     *
     * @example
     * let totalArea = measureAggregateArea(sphere(),cube())
     */
    const measureAggregateArea = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('measureAggregateArea: no geometries supplied')
      const areas = measureArea_1$1(geometries);
      if (geometries.length === 1) {
        return areas
      }
      const result = 0;
      return areas.reduce((result, area) => result + area, result)
    };

    var measureAggregateArea_1 = measureAggregateArea;

    const cache$1 = new WeakMap();

    /*
     * Measure the min and max bounds of the given (path2) geometry.
     * @return {Array[]} the min and max bounds for the geometry
     */
    const measureBoundingBoxOfPath2 = (geometry) => {
      let boundingBox = cache$1.get(geometry);
      if (boundingBox) return boundingBox

      const points = path2$2.toPoints(geometry);

      let minpoint;
      if (points.length === 0) {
        minpoint = vec2.create();
      } else {
        minpoint = vec2.clone(points[0]);
      }
      let maxpoint = vec2.clone(minpoint);

      points.forEach((point) => {
        vec2.min(minpoint, minpoint, point);
        vec2.max(maxpoint, maxpoint, point);
      });
      minpoint = [minpoint[0], minpoint[1], 0];
      maxpoint = [maxpoint[0], maxpoint[1], 0];

      boundingBox = [minpoint, maxpoint];

      cache$1.set(geometry, boundingBox);

      return boundingBox
    };

    /*
     * Measure the min and max bounds of the given (geom2) geometry.
     * @return {Array[]} the min and max bounds for the geometry
     */
    const measureBoundingBoxOfGeom2 = (geometry) => {
      let boundingBox = cache$1.get(geometry);
      if (boundingBox) return boundingBox

      const points = geom2$2.toPoints(geometry);

      let minpoint;
      if (points.length === 0) {
        minpoint = vec2.create();
      } else {
        minpoint = vec2.clone(points[0]);
      }
      let maxpoint = vec2.clone(minpoint);

      points.forEach((point) => {
        vec2.min(minpoint, minpoint, point);
        vec2.max(maxpoint, maxpoint, point);
      });

      minpoint = [minpoint[0], minpoint[1], 0];
      maxpoint = [maxpoint[0], maxpoint[1], 0];

      boundingBox = [minpoint, maxpoint];

      cache$1.set(geometry, boundingBox);

      return boundingBox
    };

    /*
     * Measure the min and max bounds of the given (geom3) geometry.
     * @return {Array[]} the min and max bounds for the geometry
     */
    const measureBoundingBoxOfGeom3 = (geometry) => {
      let boundingBox = cache$1.get(geometry);
      if (boundingBox) return boundingBox

      const polygons = geom3$2.toPolygons(geometry);

      let minpoint = vec3$1.create();
      if (polygons.length > 0) {
        const points = poly3.toPoints(polygons[0]);
        vec3$1.copy(minpoint, points[0]);
      }
      let maxpoint = vec3$1.clone(minpoint);

      polygons.forEach((polygon) => {
        poly3.toPoints(polygon).forEach((point) => {
          vec3$1.min(minpoint, minpoint, point);
          vec3$1.max(maxpoint, maxpoint, point);
        });
      });

      minpoint = [minpoint[0], minpoint[1], minpoint[2]];
      maxpoint = [maxpoint[0], maxpoint[1], maxpoint[2]];

      boundingBox = [minpoint, maxpoint];

      cache$1.set(geometry, boundingBox);

      return boundingBox
    };

    /**
     * Measure the min and max bounds of the given geometries.
     * @param {...Object} geometries - the geometries to measure
     * @return {Array} the min and max bounds, or a list of bounds for each geometry
     * @alias module:modeling/measurements.measureBoundingBox
     *
     * @example
     * let bounds = measureBoundingBox(sphere())
     */
    const measureBoundingBox = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('wrong number of arguments')

      const results = geometries.map((geometry) => {
        if (path2$2.isA(geometry)) return measureBoundingBoxOfPath2(geometry)
        if (geom2$2.isA(geometry)) return measureBoundingBoxOfGeom2(geometry)
        if (geom3$2.isA(geometry)) return measureBoundingBoxOfGeom3(geometry)
        return [[0, 0, 0], [0, 0, 0]]
      });
      return results.length === 1 ? results[0] : results
    };

    var measureBoundingBox_1 = measureBoundingBox;

    /**
     * Measure the aggregated minimum and maximum bounds for the given geometries.
     * @param {...Object} geometries - the geometries to measure
     * @return {Array} the min and max bounds for the group of geometry, i.e. [[x,y,z],[X,Y,Z]]
     * @alias module:modeling/measurements.measureAggregateBoundingBox
     *
     * @example
     * let bounds = measureAggregateBoundingBox(sphere(),cube())
     */
    const measureAggregateBoundingBox = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('measureAggregateBoundingBox: no geometries supplied')
      const bounds = measureBoundingBox_1(geometries);
      if (geometries.length === 1) {
        return bounds
      }
      const result = [[Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]];
      return bounds.reduce((result, item) => {
        result = [min_1$2(result[0], result[0], item[0]), max_1$2(result[1], result[1], item[1])];
        return result
      }, result)
    };

    var measureAggregateBoundingBox_1 = measureAggregateBoundingBox;

    const { EPS } = constants;

    const calculateEpsilonFromBounds = (bounds, dimensions) => {
      let total = 0;
      for (let i = 0; i < dimensions; i++) {
        total += bounds[1][i] - bounds[0][i];
      }
      return EPS * total / dimensions
    };

    var calculateEpsilonFromBounds_1 = calculateEpsilonFromBounds;

    /**
     * Calculate the area under the given points.
     * @param {Array} points - list of 2D points
     * @return {Number} area under the given points
     * @alias module:modeling/maths/utils.area
     */
    const area = (points) => {
      let area = 0;
      for (let i = 0; i < points.length; i++) {
        const j = (i + 1) % points.length;
        area += points[i][0] * points[j][1];
        area -= points[j][0] * points[i][1];
      }
      return (area / 2.0)
    };

    var area_1 = area;

    /**
     * Measure the area under the given polygon.
     *
     * @param {poly2} polygon - the polygon to measure
     * @return {Number} the area of the polygon
     * @alias module:modeling/geometries/poly2.measureArea
     */


    const measureArea = (polygon) => area_1(polygon.vertices);

    var measureArea_1 = measureArea;

    /**
     * Represents a convex 2D polygon consisting of a list of ordered vertices.
     * @typedef {Object} poly2
     * @property {Array} vertices - list of ordered vertices (2D)
     */

    /**
     * Creates a new polygon with initial values.
     *
     * @param {Array} [vertices] - list of vertices (2D)
     * @returns {poly2} a new polygon
     * @alias module:modeling/geometries/poly2.create
     *
     * @example
     * let polygon = create()
     */
    const create$2 = (vertices) => {
      if (vertices === undefined || vertices.length < 3) {
        vertices = []; // empty contents
      }
      return { vertices: vertices }
    };

    var create_1$2 = create$2;

    /**
     * Flip the give polygon, rotating the opposite direction.
     *
     * @param {poly2} polygon - the polygon to flip
     * @returns {poly2} a new polygon
     * @alias module:modeling/geometries/poly2.flip
     */
    const flip = (polygon) => {
      const vertices = polygon.vertices.slice().reverse();
      return create_1$2(vertices)
    };

    var flip_1 = flip;

    /**
     * Determine if the given points are inside the given polygon.
     *
     * @param {Array} points - a list of points, where each point is an array with X and Y values
     * @param {poly2} polygon - a 2D polygon
     * @return {Integer} 1 if all points are inside, 0 if some or none are inside
     * @alias module:modeling/geometries/poly2.arePointsInside
     */
    const arePointsInside = (points, polygon) => {
      if (points.length === 0) return 0 // nothing to check

      const vertices = polygon.vertices;
      if (vertices.length < 3) return 0 // nothing can be inside an empty polygon

      if (measureArea_1(polygon) < 0) {
        polygon = flip_1(polygon); // CCW is required
      }

      const sum = points.reduce((acc, point) => acc + isPointInside(point, vertices), 0);
      return sum === points.length ? 1 : 0
    };

    /*
     * Determine if the given point is inside the polygon.
     *
     * @see http://erich.realtimerendering.com/ptinpoly/ (Crossings Test)
     * @param {Array} point - an array with X and Y values
     * @param {Array} polygon - a list of points, where each point is an array with X and Y values
     * @return {Integer} 1 if the point is inside, 0 if outside
     */
    const isPointInside = (point, polygon) => {
      const numverts = polygon.length;

      const tx = point[0];
      const ty = point[1];

      let vtx0 = polygon[numverts - 1];
      let vtx1 = polygon[0];

      let yflag0 = (vtx0[1] > ty);

      let insideFlag = 0;

      let i = 0;
      for (let j = (numverts + 1); --j;) {
        /*
         * check if Y endpoints straddle (are on opposite sides) of point's Y
         * if so, +X ray could intersect this edge.
         */
        const yflag1 = (vtx1[1] > ty);
        if (yflag0 !== yflag1) {
          /*
           * check if X endpoints are on same side of the point's X
           * if so, it's easy to test if edge hits or misses.
           */
          const xflag0 = (vtx0[0] > tx);
          const xflag1 = (vtx1[0] > tx);
          if (xflag0 && xflag1) {
            /* if edge's X values are both right of the point, then the point must be inside */
            insideFlag = !insideFlag;
          } else {
            /*
             * if X endpoints straddle the point, then
             * the compute intersection of polygon edge with +X ray
             * if intersection >= point's X then the +X ray hits it.
             */
            if ((vtx1[0] - (vtx1[1] - ty) * (vtx0[0] - vtx1[0]) / (vtx0[1] - vtx1[1])) >= tx) {
              insideFlag = !insideFlag;
            }
          }
        }
        /* move to next pair of vertices, retaining info as possible */
        yflag0 = yflag1;
        vtx0 = vtx1;
        vtx1 = polygon[++i];
      }
      return insideFlag
    };

    var arePointsInside_1 = arePointsInside;

    /**
     * Represents a 2D polygon consisting of a list of ordered vertices.
     * @see {@link poly2} for data structure information.
     * @module modeling/geometries/poly2
     */
    var poly2 = {
      arePointsInside: arePointsInside_1,
      create: create_1$2,
      flip: flip_1,
      measureArea: measureArea_1
    };

    /**
     * Geometries are objects that represent the contents of primitives or the results of operations.
     * Note: Geometries are consider immutable, so never change the contents directly.
     * @module modeling/geometries
     * @example
     * const { geom2, geom3, path2, poly2, poly3 } = require('@jscad/modeling').geometries
     */
    var geometries = {
      geom2: geom2$2,
      geom3: geom3$2,
      path2: path2$2,
      poly2: poly2,
      poly3: poly3
    };

    const { geom2: geom2$1, geom3: geom3$1, path2: path2$1 } = geometries;

    /**
     * Measure the aggregated Epsilon for the given geometries.
     * @param {...Object} geometries - the geometries to measure
     * @return {Number} the aggregated Epsilon for the whole group of geometries
     * @alias module:modeling/measurements.measureAggregateEpsilon
     *
     * @example
     * let groupEpsilon = measureAggregateEpsilon(sphere(),cube())
     */
    const measureAggregateEpsilon = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('measureAggregateEpsilon: no geometries supplied')
      const bounds = measureAggregateBoundingBox_1(geometries);

      let dimensions = 0;
      dimensions = geometries.reduce((dimensions, geometry) => {
        if (path2$1.isA(geometry) || geom2$1.isA(geometry)) return Math.max(dimensions, 2)
        if (geom3$1.isA(geometry)) return Math.max(dimensions, 3)
        return 0
      }, dimensions);
      return calculateEpsilonFromBounds_1(bounds, dimensions)
    };

    var measureAggregateEpsilon_1 = measureAggregateEpsilon;

    const cache = new WeakMap();

    /*
     * Measure the volume of the given geometry.
     * NOTE: paths are infinitely narrow and do not have an volume
     *
     * @param {Path2} geometry - geometry to measure
     * @returns {Number} volume of the geometry
     */
    const measureVolumeOfPath2 = () => 0;

    /*
     * Measure the volume of the given geometry.
     * NOTE: 2D geometry are infinitely thin and do not have an volume
     *
     * @param {Geom2} geometry - 2D geometry to measure
     * @returns {Number} volume of the geometry
     */
    const measureVolumeOfGeom2 = () => 0;

    /*
     * Measure the volume of the given geometry.
     *
     * @param {Geom3} geometry - 3D geometry to measure
     * @returns {Number} volume of the geometry
     */
    const measureVolumeOfGeom3 = (geometry) => {
      let volume = cache.get(geometry);
      if (volume) return volume

      const polygons = geom3$2.toPolygons(geometry);
      volume = polygons.reduce((volume, polygon) => volume + poly3.measureSignedVolume(polygon), 0);

      cache.set(geometry, volume);

      return volume
    };

    /**
     * Measure the volume of the given geometries.
     * @param {...Object} geometries - the geometries to measure
     * @return {Number|Array} the volume, or a list of volumes for each geometry
     * @alias module:modeling/measurements.measureVolume
     *
     * @example
     * let volume = measureVolume(sphere())
     */
    const measureVolume = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('wrong number of arguments')

      const results = geometries.map((geometry) => {
        if (path2$2.isA(geometry)) return measureVolumeOfPath2()
        if (geom2$2.isA(geometry)) return measureVolumeOfGeom2()
        if (geom3$2.isA(geometry)) return measureVolumeOfGeom3(geometry)
        return 0
      });
      return results.length === 1 ? results[0] : results
    };

    var measureVolume_1 = measureVolume;

    /**
     * Measure the total (aggregate) volume for the given geometries.
     * Note: This measurement will not account for overlapping geometry
     * @param {...Object} geometries - the geometries to measure.
     * @return {Number} the volume for the group of geometry.
     * @alias module:modeling/measurements.measureAggregateVolume
     *
     * @example
     * let totalVolume = measureAggregateVolume(sphere(),cube())
     */
    const measureAggregateVolume = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('measureAggregateVolume: no geometries supplied')
      const volumes = measureVolume_1(geometries);
      if (geometries.length === 1) {
        return volumes
      }
      const result = 0;
      return volumes.reduce((result, volume) => result + volume, result)
    };

    var measureAggregateVolume_1 = measureAggregateVolume;

    const cacheOfBoundingSpheres = new WeakMap();

    /*
     * Measure the bounding sphere of the given (path2) geometry.
     * @return {[[x, y, z], radius]} the bounding sphere for the geometry
     */
    const measureBoundingSphereOfPath2 = (geometry) => {
      let boundingSphere = cacheOfBoundingSpheres.get(geometry);
      if (boundingSphere !== undefined) return boundingSphere

      const centroid = vec3$1.create();
      let radius = 0;

      const points = path2$2.toPoints(geometry);

      if (points.length > 0) {
        // calculate the centriod of the geometry
        let numPoints = 0;
        const temp = vec3$1.create();
        points.forEach((point) => {
          vec3$1.add(centroid, centroid, vec3$1.fromVec2(temp, point, 0));
          numPoints++;
        });
        vec3$1.scale(centroid, centroid, 1 / numPoints);

        // find the farthest point from the centroid
        points.forEach((point) => {
          radius = Math.max(radius, vec2.squaredDistance(centroid, point));
        });
        radius = Math.sqrt(radius);
      }

      boundingSphere = [centroid, radius];
      cacheOfBoundingSpheres.set(geometry, boundingSphere);

      return boundingSphere
    };

    /*
     * Measure the bounding sphere of the given (geom2) geometry.
     * @return {[[x, y, z], radius]} the bounding sphere for the geometry
     */
    const measureBoundingSphereOfGeom2 = (geometry) => {
      let boundingSphere = cacheOfBoundingSpheres.get(geometry);
      if (boundingSphere !== undefined) return boundingSphere

      const centroid = vec3$1.create();
      let radius = 0;

      const sides = geom2$2.toSides(geometry);

      if (sides.length > 0) {
        // calculate the centriod of the geometry
        let numPoints = 0;
        const temp = vec3$1.create();
        sides.forEach((side) => {
          vec3$1.add(centroid, centroid, vec3$1.fromVec2(temp, side[0], 0));
          numPoints++;
        });
        vec3$1.scale(centroid, centroid, 1 / numPoints);

        // find the farthest point from the centroid
        sides.forEach((side) => {
          radius = Math.max(radius, vec2.squaredDistance(centroid, side[0]));
        });
        radius = Math.sqrt(radius);
      }

      boundingSphere = [centroid, radius];
      cacheOfBoundingSpheres.set(geometry, boundingSphere);

      return boundingSphere
    };

    /*
     * Measure the bounding sphere of the given (geom3) geometry.
     * @return {[[x, y, z], radius]} the bounding sphere for the geometry
     */
    const measureBoundingSphereOfGeom3 = (geometry) => {
      let boundingSphere = cacheOfBoundingSpheres.get(geometry);
      if (boundingSphere !== undefined) return boundingSphere

      const centroid = vec3$1.create();
      let radius = 0;

      const polygons = geom3$2.toPolygons(geometry);

      if (polygons.length > 0) {
        // calculate the centriod of the geometry
        let numPoints = 0;
        polygons.forEach((polygon) => {
          poly3.toPoints(polygon).forEach((point) => {
            vec3$1.add(centroid, centroid, point);
            numPoints++;
          });
        });
        vec3$1.scale(centroid, centroid, 1 / numPoints);

        // find the farthest point from the centroid
        polygons.forEach((polygon) => {
          poly3.toPoints(polygon).forEach((point) => {
            radius = Math.max(radius, vec3$1.squaredDistance(centroid, point));
          });
        });
        radius = Math.sqrt(radius);
      }

      boundingSphere = [centroid, radius];
      cacheOfBoundingSpheres.set(geometry, boundingSphere);

      return boundingSphere
    };

    /**
     * Measure the (aproximate) bounding sphere of the given geometries.
     * @see https://en.wikipedia.org/wiki/Bounding_sphere
     * @param {...Object} geometries - the geometries to measure
     * @return {Array} the bounding sphere for each geometry, i.e. [centroid, radius]
     * @alias module:modeling/measurements.measureBoundingSphere
     *
     * @example
     * let bounds = measureBoundingSphere(cube())
     */
    const measureBoundingSphere = (...geometries) => {
      geometries = flatten_1$1(geometries);

      const results = geometries.map((geometry) => {
        if (path2$2.isA(geometry)) return measureBoundingSphereOfPath2(geometry)
        if (geom2$2.isA(geometry)) return measureBoundingSphereOfGeom2(geometry)
        if (geom3$2.isA(geometry)) return measureBoundingSphereOfGeom3(geometry)
        return [[0, 0, 0], 0]
      });
      return results.length === 1 ? results[0] : results
    };

    var measureBoundingSphere_1 = measureBoundingSphere;

    /**
     * Measure the center of the given geometries.
     * @param {...Object} geometries - the geometries to measure
     * @return {Array} the center point for each geometry, i.e. [X, Y, Z]
     * @alias module:modeling/measurements.measureCenter
     *
     * @example
     * let center = measureCenter(sphere())
     */
    const measureCenter = (...geometries) => {
      geometries = flatten_1$1(geometries);

      const results = geometries.map((geometry) => {
        const bounds = measureBoundingBox_1(geometry);
        return [
          (bounds[0][0] + ((bounds[1][0] - bounds[0][0]) / 2)),
          (bounds[0][1] + ((bounds[1][1] - bounds[0][1]) / 2)),
          (bounds[0][2] + ((bounds[1][2] - bounds[0][2]) / 2))
        ]
      });
      return results.length === 1 ? results[0] : results
    };

    var measureCenter_1 = measureCenter;

    const cacheOfCenterOfMass = new WeakMap();

    /*
     * Measure the center of mass for the given geometry.
     *
     * @see http://paulbourke.net/geometry/polygonmesh/
     * @return {Array} the center of mass for the geometry
     */
    const measureCenterOfMassGeom2 = (geometry) => {
      let centerOfMass = cacheOfCenterOfMass.get(geometry);
      if (centerOfMass !== undefined) return centerOfMass

      const sides = geom2$2.toSides(geometry);

      let area = 0;
      let x = 0;
      let y = 0;
      if (sides.length > 0) {
        for (let i = 0; i < sides.length; i++) {
          const p1 = sides[i][0];
          const p2 = sides[i][1];

          const a = p1[0] * p2[1] - p1[1] * p2[0];
          area += a;
          x += (p1[0] + p2[0]) * a;
          y += (p1[1] + p2[1]) * a;
        }
        area /= 2;

        const f = 1 / (area * 6);
        x *= f;
        y *= f;
      }

      centerOfMass = vec3$1.fromValues(x, y, 0);

      cacheOfCenterOfMass.set(geometry, centerOfMass);
      return centerOfMass
    };

    /*
     * Measure the center of mass for the given geometry.
     * @return {Array} the center of mass for the geometry
     */
    const measureCenterOfMassGeom3 = (geometry) => {
      let centerOfMass = cacheOfCenterOfMass.get(geometry);
      if (centerOfMass !== undefined) return centerOfMass

      centerOfMass = vec3$1.create(); // 0, 0, 0

      const polygons = geom3$2.toPolygons(geometry);
      if (polygons.length === 0) return centerOfMass

      let totalVolume = 0;
      const vector = vec3$1.create(); // for speed
      polygons.forEach((polygon) => {
        // calculate volume and center of each tetrahedon
        const vertices = polygon.vertices;
        for (let i = 0; i < vertices.length - 2; i++) {
          vec3$1.cross(vector, vertices[i + 1], vertices[i + 2]);
          const volume = vec3$1.dot(vertices[0], vector) / 6;

          totalVolume += volume;

          vec3$1.add(vector, vertices[0], vertices[i + 1]);
          vec3$1.add(vector, vector, vertices[i + 2]);
          const weightedCenter = vec3$1.scale(vector, vector, 1 / 4 * volume);

          vec3$1.add(centerOfMass, centerOfMass, weightedCenter);
        }
      });
      vec3$1.scale(centerOfMass, centerOfMass, 1 / totalVolume);

      cacheOfCenterOfMass.set(geometry, centerOfMass);
      return centerOfMass
    };

    /**
     * Measure the center of mass for the given geometries.
     * @param {...Object} geometries - the geometries to measure
     * @return {Array} the center of mass for each geometry, i.e. [X, Y, Z]
     * @alias module:modeling/measurements.measureCenterOfMass
     *
     * @example
     * let center = measureCenterOfMass(sphere())
     */
    const measureCenterOfMass = (...geometries) => {
      geometries = flatten_1$1(geometries);

      const results = geometries.map((geometry) => {
        // NOTE: center of mass for geometry path2 is not possible
        if (geom2$2.isA(geometry)) return measureCenterOfMassGeom2(geometry)
        if (geom3$2.isA(geometry)) return measureCenterOfMassGeom3(geometry)
        return [0, 0, 0]
      });
      return results.length === 1 ? results[0] : results
    };

    var measureCenterOfMass_1 = measureCenterOfMass;

    /**
     * Measure the dimensions of the given geometries.
     * @param {...Object} geometries - the geometries to measure
     * @return {Array} the dimensions for each geometry, i.e. [width, depth, height]
     * @alias module:modeling/measurements.measureDimensions
     *
     * @example
     * let dimensions = measureDimensions(sphere())
     */
    const measureDimensions = (...geometries) => {
      geometries = flatten_1$1(geometries);

      const results = geometries.map((geometry) => {
        const boundingBox = measureBoundingBox_1(geometry);
        return [
          boundingBox[1][0] - boundingBox[0][0],
          boundingBox[1][1] - boundingBox[0][1],
          boundingBox[1][2] - boundingBox[0][2]
        ]
      });
      return results.length === 1 ? results[0] : results
    };

    var measureDimensions_1 = measureDimensions;

    const { geom2, geom3, path2 } = geometries;




    /*
     * Measure the epsilon of the given (path2) geometry.
     * @return {Number} the epsilon (precision) of the geometry
     */
    const measureEpsilonOfPath2 = (geometry) => calculateEpsilonFromBounds_1(measureBoundingBox_1(geometry), 2);

    /*
     * Measure the epsilon of the given (geom2) geometry.
     * @return {Number} the epsilon (precision) of the geometry
     */
    const measureEpsilonOfGeom2 = (geometry) => calculateEpsilonFromBounds_1(measureBoundingBox_1(geometry), 2);

    /*
     * Measure the epsilon of the given (geom3) geometry.
     * @return {Float} the epsilon (precision) of the geometry
     */
    const measureEpsilonOfGeom3 = (geometry) => calculateEpsilonFromBounds_1(measureBoundingBox_1(geometry), 3);

    /**
     * Measure the epsilon of the given geometries.
     * Epsilon values are used in various functions to determine minimum distances between points, planes, etc.
     * @param {...Object} geometries - the geometries to measure
     * @return {Number|Array} the epsilon, or a list of epsilons for each geometry
     * @alias module:modeling/measurements.measureEpsilon
     *
     * @example
     * let epsilon = measureEpsilon(sphere())
     */
    const measureEpsilon = (...geometries) => {
      geometries = flatten_1$1(geometries);
      if (geometries.length === 0) throw new Error('wrong number of arguments')

      const results = geometries.map((geometry) => {
        if (path2.isA(geometry)) return measureEpsilonOfPath2(geometry)
        if (geom2.isA(geometry)) return measureEpsilonOfGeom2(geometry)
        if (geom3.isA(geometry)) return measureEpsilonOfGeom3(geometry)
        return 0
      });
      return results.length === 1 ? results[0] : results
    };

    var measureEpsilon_1 = measureEpsilon;

    /**
     * All shapes (primitives or the results of operations) can be measured, e.g. calculate volume, etc.
     * @module modeling/measurements
     * @example
     * const { measureArea, measureBoundingBox, measureVolume } = require('@jscad/modeling').measurements
     */
    var measurements = {
      measureAggregateArea: measureAggregateArea_1,
      measureAggregateBoundingBox: measureAggregateBoundingBox_1,
      measureAggregateEpsilon: measureAggregateEpsilon_1,
      measureAggregateVolume: measureAggregateVolume_1,
      measureArea: measureArea_1$1,
      measureBoundingBox: measureBoundingBox_1,
      measureBoundingSphere: measureBoundingSphere_1,
      measureCenter: measureCenter_1,
      measureCenterOfMass: measureCenterOfMass_1,
      measureDimensions: measureDimensions_1,
      measureEpsilon: measureEpsilon_1,
      measureVolume: measureVolume_1
    };
    var measurements_6 = measurements.measureBoundingBox;

    var create_1$1 = create$1;

    /**
     * Creates a new identity mat4
     *
     * @returns {mat4} a new 4x4 matrix
     */
    function create$1() {
        var out = new Float32Array(16);
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }

    var clone_1$1 = clone$1;

    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {mat4} a matrix to clone
     * @returns {mat4} a new 4x4 matrix
     */
    function clone$1(a) {
        var out = new Float32Array(16);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }

    var copy_1$1 = copy$1;

    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function copy$1(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }

    var identity_1 = identity;

    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }

    var transpose_1 = transpose;

    /**
     * Transpose the values of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache some values
        if (out === a) {
            var a01 = a[1], a02 = a[2], a03 = a[3],
                a12 = a[6], a13 = a[7],
                a23 = a[11];

            out[1] = a[4];
            out[2] = a[8];
            out[3] = a[12];
            out[4] = a01;
            out[6] = a[9];
            out[7] = a[13];
            out[8] = a02;
            out[9] = a12;
            out[11] = a[14];
            out[12] = a03;
            out[13] = a13;
            out[14] = a23;
        } else {
            out[0] = a[0];
            out[1] = a[4];
            out[2] = a[8];
            out[3] = a[12];
            out[4] = a[1];
            out[5] = a[5];
            out[6] = a[9];
            out[7] = a[13];
            out[8] = a[2];
            out[9] = a[6];
            out[10] = a[10];
            out[11] = a[14];
            out[12] = a[3];
            out[13] = a[7];
            out[14] = a[11];
            out[15] = a[15];
        }
        
        return out;
    }

    var invert_1 = invert;

    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function invert(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,

            // Calculate the determinant
            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) { 
            return null; 
        }
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

        return out;
    }

    var adjoint_1 = adjoint;

    /**
     * Calculates the adjugate of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function adjoint(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

        out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
        out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
        out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
        out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
        out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
        out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
        out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
        out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
        out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
        out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
        out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
        out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
        out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
        out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
        out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
        out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
        return out;
    }

    var determinant_1 = determinant;

    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }

    var multiply_1$1 = multiply$1;

    /**
     * Multiplies two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function multiply$1(out, a, b) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

        // Cache only the current line of the second matrix
        var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
        out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

        b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
        out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

        b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
        out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

        b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
        out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
        return out;
    }

    var translate_1 = translate;

    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */
    function translate(out, a, v) {
        var x = v[0], y = v[1], z = v[2],
            a00, a01, a02, a03,
            a10, a11, a12, a13,
            a20, a21, a22, a23;

        if (a === out) {
            out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
            out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
            out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
            out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
            a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
            a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
            a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

            out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
            out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
            out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

            out[12] = a00 * x + a10 * y + a20 * z + a[12];
            out[13] = a01 * x + a11 * y + a21 * z + a[13];
            out[14] = a02 * x + a12 * y + a22 * z + a[14];
            out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }

        return out;
    }

    var scale_1$1 = scale$1;

    /**
     * Scales the mat4 by the dimensions in the given vec3
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/
    function scale$1(out, a, v) {
        var x = v[0], y = v[1], z = v[2];

        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }

    var rotate_1 = rotate$1;

    /**
     * Rotates a mat4 by the given angle
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function rotate$1(out, a, rad, axis) {
        var x = axis[0], y = axis[1], z = axis[2],
            len = Math.sqrt(x * x + y * y + z * z),
            s, c, t,
            a00, a01, a02, a03,
            a10, a11, a12, a13,
            a20, a21, a22, a23,
            b00, b01, b02,
            b10, b11, b12,
            b20, b21, b22;

        if (Math.abs(len) < 0.000001) { return null; }
        
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;

        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        // Construct the elements of the rotation matrix
        b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
        b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
        b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

        // Perform rotation-specific matrix multiplication
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;

        if (a !== out) { // If the source and destination differ, copy the unchanged last row
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        return out;
    }

    var rotateX_1$1 = rotateX$1;

    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateX$1(out, a, rad) {
        var s = Math.sin(rad),
            c = Math.cos(rad),
            a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7],
            a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];

        if (a !== out) { // If the source and destination differ, copy the unchanged rows
            out[0]  = a[0];
            out[1]  = a[1];
            out[2]  = a[2];
            out[3]  = a[3];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }

        // Perform axis-specific matrix multiplication
        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
    }

    var rotateY_1$1 = rotateY$1;

    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateY$1(out, a, rad) {
        var s = Math.sin(rad),
            c = Math.cos(rad),
            a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3],
            a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];

        if (a !== out) { // If the source and destination differ, copy the unchanged rows
            out[4]  = a[4];
            out[5]  = a[5];
            out[6]  = a[6];
            out[7]  = a[7];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }

        // Perform axis-specific matrix multiplication
        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
    }

    var rotateZ_1$1 = rotateZ$1;

    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateZ$1(out, a, rad) {
        var s = Math.sin(rad),
            c = Math.cos(rad),
            a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3],
            a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];

        if (a !== out) { // If the source and destination differ, copy the unchanged last row
            out[8]  = a[8];
            out[9]  = a[9];
            out[10] = a[10];
            out[11] = a[11];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }

        // Perform axis-specific matrix multiplication
        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
    }

    var fromRotation_1 = fromRotation;

    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotate(dest, dest, rad, axis)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function fromRotation(out, rad, axis) {
      var s, c, t;
      var x = axis[0];
      var y = axis[1];
      var z = axis[2];
      var len = Math.sqrt(x * x + y * y + z * z);

      if (Math.abs(len) < 0.000001) {
        return null
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;

      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;

      // Perform rotation-specific matrix multiplication
      out[0] = x * x * t + c;
      out[1] = y * x * t + z * s;
      out[2] = z * x * t - y * s;
      out[3] = 0;
      out[4] = x * y * t - z * s;
      out[5] = y * y * t + c;
      out[6] = z * y * t + x * s;
      out[7] = 0;
      out[8] = x * z * t + y * s;
      out[9] = y * z * t - x * s;
      out[10] = z * z * t + c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    }

    var fromRotationTranslation_1 = fromRotationTranslation;

    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     var quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromRotationTranslation(out, q, v) {
        // Quaternion math
        var x = q[0], y = q[1], z = q[2], w = q[3],
            x2 = x + x,
            y2 = y + y,
            z2 = z + z,

            xx = x * x2,
            xy = x * y2,
            xz = x * z2,
            yy = y * y2,
            yz = y * z2,
            zz = z * z2,
            wx = w * x2,
            wy = w * y2,
            wz = w * z2;

        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;
        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;
        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        
        return out;
    }

    var fromScaling_1 = fromScaling;

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.scale(dest, dest, vec)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Scaling vector
     * @returns {mat4} out
     */
    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = v[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = v[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out
    }

    var fromTranslation_1 = fromTranslation;

    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.translate(dest, dest, vec)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromTranslation(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out
    }

    var fromXRotation_1 = fromXRotation;

    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotateX(dest, dest, rad)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromXRotation(out, rad) {
        var s = Math.sin(rad),
            c = Math.cos(rad);

        // Perform axis-specific matrix multiplication
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = c;
        out[6] = s;
        out[7] = 0;
        out[8] = 0;
        out[9] = -s;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out
    }

    var fromYRotation_1 = fromYRotation;

    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotateY(dest, dest, rad)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromYRotation(out, rad) {
        var s = Math.sin(rad),
            c = Math.cos(rad);

        // Perform axis-specific matrix multiplication
        out[0] = c;
        out[1] = 0;
        out[2] = -s;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = s;
        out[9] = 0;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out
    }

    var fromZRotation_1 = fromZRotation;

    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest)
     *     mat4.rotateZ(dest, dest, rad)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromZRotation(out, rad) {
        var s = Math.sin(rad),
            c = Math.cos(rad);

        // Perform axis-specific matrix multiplication
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = 0;
        out[4] = -s;
        out[5] = c;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out
    }

    var fromQuat_1 = fromQuat;

    /**
     * Creates a matrix from a quaternion rotation.
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @returns {mat4} out
     */
    function fromQuat(out, q) {
        var x = q[0], y = q[1], z = q[2], w = q[3],
            x2 = x + x,
            y2 = y + y,
            z2 = z + z,

            xx = x * x2,
            yx = y * x2,
            yy = y * y2,
            zx = z * x2,
            zy = z * y2,
            zz = z * z2,
            wx = w * x2,
            wy = w * y2,
            wz = w * z2;

        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;

        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;

        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;

        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;

        return out;
    }

    var frustum_1 = frustum;

    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function frustum(out, left, right, bottom, top, near, far) {
        var rl = 1 / (right - left),
            tb = 1 / (top - bottom),
            nf = 1 / (near - far);
        out[0] = (near * 2) * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = (near * 2) * tb;
        out[6] = 0;
        out[7] = 0;
        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (far * near * 2) * nf;
        out[15] = 0;
        return out;
    }

    var perspective_1 = perspective;

    /**
     * Generates a perspective projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspective(out, fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(fovy / 2),
            nf = 1 / (near - far);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (2 * far * near) * nf;
        out[15] = 0;
        return out;
    }

    var perspectiveFromFieldOfView_1 = perspectiveFromFieldOfView;

    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experiemental WebVR API.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspectiveFromFieldOfView(out, fov, near, far) {
        var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
            downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
            leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
            rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
            xScale = 2.0 / (leftTan + rightTan),
            yScale = 2.0 / (upTan + downTan);

        out[0] = xScale;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        out[4] = 0.0;
        out[5] = yScale;
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = -((leftTan - rightTan) * xScale * 0.5);
        out[9] = ((upTan - downTan) * yScale * 0.5);
        out[10] = far / (near - far);
        out[11] = -1.0;
        out[12] = 0.0;
        out[13] = 0.0;
        out[14] = (far * near) / (near - far);
        out[15] = 0.0;
        return out;
    }

    var ortho_1 = ortho;

    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function ortho(out, left, right, bottom, top, near, far) {
        var lr = 1 / (left - right),
            bt = 1 / (bottom - top),
            nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
    }

    var lookAt_1 = lookAt;

    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function lookAt(out, eye, center, up) {
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
            eyex = eye[0],
            eyey = eye[1],
            eyez = eye[2],
            upx = up[0],
            upy = up[1],
            upz = up[2],
            centerx = center[0],
            centery = center[1],
            centerz = center[2];

        if (Math.abs(eyex - centerx) < 0.000001 &&
            Math.abs(eyey - centery) < 0.000001 &&
            Math.abs(eyez - centerz) < 0.000001) {
            return identity_1(out);
        }

        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;

        len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;

        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
        if (!len) {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        } else {
            len = 1 / len;
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }

        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;

        len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
        if (!len) {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        } else {
            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;
        }

        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;

        return out;
    }

    var str_1 = str;

    /**
     * Returns a string representation of a mat4
     *
     * @param {mat4} mat matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str(a) {
        return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                        a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                        a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                        a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
    }

    var glMat4 = {
      create: create_1$1
      , clone: clone_1$1
      , copy: copy_1$1
      , identity: identity_1
      , transpose: transpose_1
      , invert: invert_1
      , adjoint: adjoint_1
      , determinant: determinant_1
      , multiply: multiply_1$1
      , translate: translate_1
      , scale: scale_1$1
      , rotate: rotate_1
      , rotateX: rotateX_1$1
      , rotateY: rotateY_1$1
      , rotateZ: rotateZ_1$1
      , fromRotation: fromRotation_1
      , fromRotationTranslation: fromRotationTranslation_1
      , fromScaling: fromScaling_1
      , fromTranslation: fromTranslation_1
      , fromXRotation: fromXRotation_1
      , fromYRotation: fromYRotation_1
      , fromZRotation: fromZRotation_1
      , fromQuat: fromQuat_1
      , frustum: frustum_1
      , perspective: perspective_1
      , perspectiveFromFieldOfView: perspectiveFromFieldOfView_1
      , ortho: ortho_1
      , lookAt: lookAt_1
      , str: str_1
    };

    /** function that injects most of the uniforms into the regl context:
     * ie keeps track of all regl global state.
     * @param  {} regl
     * @param  {} params={}
     */
    const renderWrapper = (regl, params = {}) => {
      const { fbo } = params;

      const commandParams = {
        cull: {
          enable: true
        },
        context: {
          lightDirection: [0.2, 0.2, 1]// [0.19, 0.47, 0.29]
        },
        uniforms: {
          view: (context, props) => props.camera.view,
          eye: (context, props) => props.camera.position,
          // projection: (context, props) => mat4.perspective([], props.camera.fov, context.viewportWidth/context.viewportHeight, props.camera.near, props.camera.far), //props.camera.projection,//context.viewportWidth also an alternative?
          projection: (context, props) => props.camera.projection,
          camNear: (context, props) => props.camera.near,
          camFar: (context, props) => props.camera.far,
          // accessories to the above
          invertedView: (context, props) => glMat4.invert([], props.camera.view),
          // lighting stuff, needs cleanup
          lightPosition: (context, props) => props && props.rendering && props.rendering.lightPosition ? props.rendering.lightPosition : [100, 200, 100],
          lightDirection: (context, props) => props && props.rendering && props.rendering.lightDirection ? props.rendering.lightDirection : context.lightDirection || [0, 0, 0],
          lightView: (context) => glMat4.lookAt([], context.lightDirection, [0.0, 0.0, 0.0], [0.0, 0.0, 1.0]),
          lightProjection: glMat4.ortho([], -25, -25, -20, 20, -25, 25),
          lightColor: (context, props) => props && props.rendering && props.rendering.lightColor ? props.rendering.lightColor : [1, 0.8, 0],
          ambientLightAmount: (context, props) => props && props.rendering && props.rendering.ambientLightAmount ? props.rendering.ambientLightAmount : 0.3,
          diffuseLightAmount: (context, props) => props && props.rendering && props.rendering.diffuseLightAmount ? props && props.rendering && props.rendering.diffuseLightAmount : 0.89,
          specularLightAmount: (context, props) => props && props.rendering && props.rendering.specularLightAmount ? props.rendering.specularLightAmount : 0.16,
          uMaterialShininess: (context, props) => props && props.rendering && props.rendering.materialShininess ? props.rendering.materialShininess : 8.0,
          materialAmbient: [0.5, 0.8, 0.3],
          materialDiffuse: [0.5, 0.8, 0.3],
          materialSpecular: [0.5, 0.8, 0.3]
        },
        framebuffer: fbo
      };

      // it returns a function
      return regl(Object.assign({}, commandParams, params.extras))
    };

    var renderContext = renderWrapper;

    var renderDefaults = {
      background: [1, 1, 1, 1],
      meshColor: [0, 0.6, 1, 1], // default face color or line color
      lightColor: [1, 1, 1, 1], // note: for now there is a single preset light, not an entity
      lightDirection: [0.2, 0.2, 1],
      lightPosition: [100, 200, 100],
      ambientLightAmount: 0.3,
      diffuseLightAmount: 0.89,
      specularLightAmount: 0.16,
      materialShininess: 8.0
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var regl = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
        module.exports = factory() ;
    }(commonjsGlobal, (function () {
    var isTypedArray = function (x) {
      return (
        x instanceof Uint8Array ||
        x instanceof Uint16Array ||
        x instanceof Uint32Array ||
        x instanceof Int8Array ||
        x instanceof Int16Array ||
        x instanceof Int32Array ||
        x instanceof Float32Array ||
        x instanceof Float64Array ||
        x instanceof Uint8ClampedArray
      )
    };

    var extend = function (base, opts) {
      var keys = Object.keys(opts);
      for (var i = 0; i < keys.length; ++i) {
        base[keys[i]] = opts[keys[i]];
      }
      return base
    };

    // Error checking and parameter validation.
    //
    // Statements for the form `check.someProcedure(...)` get removed by
    // a browserify transform for optimized/minified bundles.
    //
    /* globals atob */
    var endl = '\n';

    // only used for extracting shader names.  if atob not present, then errors
    // will be slightly crappier
    function decodeB64 (str) {
      if (typeof atob !== 'undefined') {
        return atob(str)
      }
      return 'base64:' + str
    }

    function raise (message) {
      var error = new Error('(regl) ' + message);
      console.error(error);
      throw error
    }

    function check (pred, message) {
      if (!pred) {
        raise(message);
      }
    }

    function encolon (message) {
      if (message) {
        return ': ' + message
      }
      return ''
    }

    function checkParameter (param, possibilities, message) {
      if (!(param in possibilities)) {
        raise('unknown parameter (' + param + ')' + encolon(message) +
              '. possible values: ' + Object.keys(possibilities).join());
      }
    }

    function checkIsTypedArray (data, message) {
      if (!isTypedArray(data)) {
        raise(
          'invalid parameter type' + encolon(message) +
          '. must be a typed array');
      }
    }

    function standardTypeEh (value, type) {
      switch (type) {
        case 'number': return typeof value === 'number'
        case 'object': return typeof value === 'object'
        case 'string': return typeof value === 'string'
        case 'boolean': return typeof value === 'boolean'
        case 'function': return typeof value === 'function'
        case 'undefined': return typeof value === 'undefined'
        case 'symbol': return typeof value === 'symbol'
      }
    }

    function checkTypeOf (value, type, message) {
      if (!standardTypeEh(value, type)) {
        raise(
          'invalid parameter type' + encolon(message) +
          '. expected ' + type + ', got ' + (typeof value));
      }
    }

    function checkNonNegativeInt (value, message) {
      if (!((value >= 0) &&
            ((value | 0) === value))) {
        raise('invalid parameter type, (' + value + ')' + encolon(message) +
              '. must be a nonnegative integer');
      }
    }

    function checkOneOf (value, list, message) {
      if (list.indexOf(value) < 0) {
        raise('invalid value' + encolon(message) + '. must be one of: ' + list);
      }
    }

    var constructorKeys = [
      'gl',
      'canvas',
      'container',
      'attributes',
      'pixelRatio',
      'extensions',
      'optionalExtensions',
      'profile',
      'onDone'
    ];

    function checkConstructor (obj) {
      Object.keys(obj).forEach(function (key) {
        if (constructorKeys.indexOf(key) < 0) {
          raise('invalid regl constructor argument "' + key + '". must be one of ' + constructorKeys);
        }
      });
    }

    function leftPad (str, n) {
      str = str + '';
      while (str.length < n) {
        str = ' ' + str;
      }
      return str
    }

    function ShaderFile () {
      this.name = 'unknown';
      this.lines = [];
      this.index = {};
      this.hasErrors = false;
    }

    function ShaderLine (number, line) {
      this.number = number;
      this.line = line;
      this.errors = [];
    }

    function ShaderError (fileNumber, lineNumber, message) {
      this.file = fileNumber;
      this.line = lineNumber;
      this.message = message;
    }

    function guessCommand () {
      var error = new Error();
      var stack = (error.stack || error).toString();
      var pat = /compileProcedure.*\n\s*at.*\((.*)\)/.exec(stack);
      if (pat) {
        return pat[1]
      }
      var pat2 = /compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(stack);
      if (pat2) {
        return pat2[1]
      }
      return 'unknown'
    }

    function guessCallSite () {
      var error = new Error();
      var stack = (error.stack || error).toString();
      var pat = /at REGLCommand.*\n\s+at.*\((.*)\)/.exec(stack);
      if (pat) {
        return pat[1]
      }
      var pat2 = /at REGLCommand.*\n\s+at\s+(.*)\n/.exec(stack);
      if (pat2) {
        return pat2[1]
      }
      return 'unknown'
    }

    function parseSource (source, command) {
      var lines = source.split('\n');
      var lineNumber = 1;
      var fileNumber = 0;
      var files = {
        unknown: new ShaderFile(),
        0: new ShaderFile()
      };
      files.unknown.name = files[0].name = command || guessCommand();
      files.unknown.lines.push(new ShaderLine(0, ''));
      for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];
        var parts = /^\s*#\s*(\w+)\s+(.+)\s*$/.exec(line);
        if (parts) {
          switch (parts[1]) {
            case 'line':
              var lineNumberInfo = /(\d+)(\s+\d+)?/.exec(parts[2]);
              if (lineNumberInfo) {
                lineNumber = lineNumberInfo[1] | 0;
                if (lineNumberInfo[2]) {
                  fileNumber = lineNumberInfo[2] | 0;
                  if (!(fileNumber in files)) {
                    files[fileNumber] = new ShaderFile();
                  }
                }
              }
              break
            case 'define':
              var nameInfo = /SHADER_NAME(_B64)?\s+(.*)$/.exec(parts[2]);
              if (nameInfo) {
                files[fileNumber].name = (nameInfo[1]
                  ? decodeB64(nameInfo[2])
                  : nameInfo[2]);
              }
              break
          }
        }
        files[fileNumber].lines.push(new ShaderLine(lineNumber++, line));
      }
      Object.keys(files).forEach(function (fileNumber) {
        var file = files[fileNumber];
        file.lines.forEach(function (line) {
          file.index[line.number] = line;
        });
      });
      return files
    }

    function parseErrorLog (errLog) {
      var result = [];
      errLog.split('\n').forEach(function (errMsg) {
        if (errMsg.length < 5) {
          return
        }
        var parts = /^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(errMsg);
        if (parts) {
          result.push(new ShaderError(
            parts[1] | 0,
            parts[2] | 0,
            parts[3].trim()));
        } else if (errMsg.length > 0) {
          result.push(new ShaderError('unknown', 0, errMsg));
        }
      });
      return result
    }

    function annotateFiles (files, errors) {
      errors.forEach(function (error) {
        var file = files[error.file];
        if (file) {
          var line = file.index[error.line];
          if (line) {
            line.errors.push(error);
            file.hasErrors = true;
            return
          }
        }
        files.unknown.hasErrors = true;
        files.unknown.lines[0].errors.push(error);
      });
    }

    function checkShaderError (gl, shader, source, type, command) {
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        var errLog = gl.getShaderInfoLog(shader);
        var typeName = type === gl.FRAGMENT_SHADER ? 'fragment' : 'vertex';
        checkCommandType(source, 'string', typeName + ' shader source must be a string', command);
        var files = parseSource(source, command);
        var errors = parseErrorLog(errLog);
        annotateFiles(files, errors);

        Object.keys(files).forEach(function (fileNumber) {
          var file = files[fileNumber];
          if (!file.hasErrors) {
            return
          }

          var strings = [''];
          var styles = [''];

          function push (str, style) {
            strings.push(str);
            styles.push(style || '');
          }

          push('file number ' + fileNumber + ': ' + file.name + '\n', 'color:red;text-decoration:underline;font-weight:bold');

          file.lines.forEach(function (line) {
            if (line.errors.length > 0) {
              push(leftPad(line.number, 4) + '|  ', 'background-color:yellow; font-weight:bold');
              push(line.line + endl, 'color:red; background-color:yellow; font-weight:bold');

              // try to guess token
              var offset = 0;
              line.errors.forEach(function (error) {
                var message = error.message;
                var token = /^\s*'(.*)'\s*:\s*(.*)$/.exec(message);
                if (token) {
                  var tokenPat = token[1];
                  message = token[2];
                  switch (tokenPat) {
                    case 'assign':
                      tokenPat = '=';
                      break
                  }
                  offset = Math.max(line.line.indexOf(tokenPat, offset), 0);
                } else {
                  offset = 0;
                }

                push(leftPad('| ', 6));
                push(leftPad('^^^', offset + 3) + endl, 'font-weight:bold');
                push(leftPad('| ', 6));
                push(message + endl, 'font-weight:bold');
              });
              push(leftPad('| ', 6) + endl);
            } else {
              push(leftPad(line.number, 4) + '|  ');
              push(line.line + endl, 'color:red');
            }
          });
          if (typeof document !== 'undefined' && !window.chrome) {
            styles[0] = strings.join('%c');
            console.log.apply(console, styles);
          } else {
            console.log(strings.join(''));
          }
        });

        check.raise('Error compiling ' + typeName + ' shader, ' + files[0].name);
      }
    }

    function checkLinkError (gl, program, fragShader, vertShader, command) {
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        var errLog = gl.getProgramInfoLog(program);
        var fragParse = parseSource(fragShader, command);
        var vertParse = parseSource(vertShader, command);

        var header = 'Error linking program with vertex shader, "' +
          vertParse[0].name + '", and fragment shader "' + fragParse[0].name + '"';

        if (typeof document !== 'undefined') {
          console.log('%c' + header + endl + '%c' + errLog,
            'color:red;text-decoration:underline;font-weight:bold',
            'color:red');
        } else {
          console.log(header + endl + errLog);
        }
        check.raise(header);
      }
    }

    function saveCommandRef (object) {
      object._commandRef = guessCommand();
    }

    function saveDrawCommandInfo (opts, uniforms, attributes, stringStore) {
      saveCommandRef(opts);

      function id (str) {
        if (str) {
          return stringStore.id(str)
        }
        return 0
      }
      opts._fragId = id(opts.static.frag);
      opts._vertId = id(opts.static.vert);

      function addProps (dict, set) {
        Object.keys(set).forEach(function (u) {
          dict[stringStore.id(u)] = true;
        });
      }

      var uniformSet = opts._uniformSet = {};
      addProps(uniformSet, uniforms.static);
      addProps(uniformSet, uniforms.dynamic);

      var attributeSet = opts._attributeSet = {};
      addProps(attributeSet, attributes.static);
      addProps(attributeSet, attributes.dynamic);

      opts._hasCount = (
        'count' in opts.static ||
        'count' in opts.dynamic ||
        'elements' in opts.static ||
        'elements' in opts.dynamic);
    }

    function commandRaise (message, command) {
      var callSite = guessCallSite();
      raise(message +
        ' in command ' + (command || guessCommand()) +
        (callSite === 'unknown' ? '' : ' called from ' + callSite));
    }

    function checkCommand (pred, message, command) {
      if (!pred) {
        commandRaise(message, command || guessCommand());
      }
    }

    function checkParameterCommand (param, possibilities, message, command) {
      if (!(param in possibilities)) {
        commandRaise(
          'unknown parameter (' + param + ')' + encolon(message) +
          '. possible values: ' + Object.keys(possibilities).join(),
          command || guessCommand());
      }
    }

    function checkCommandType (value, type, message, command) {
      if (!standardTypeEh(value, type)) {
        commandRaise(
          'invalid parameter type' + encolon(message) +
          '. expected ' + type + ', got ' + (typeof value),
          command || guessCommand());
      }
    }

    function checkOptional (block) {
      block();
    }

    function checkFramebufferFormat (attachment, texFormats, rbFormats) {
      if (attachment.texture) {
        checkOneOf(
          attachment.texture._texture.internalformat,
          texFormats,
          'unsupported texture format for attachment');
      } else {
        checkOneOf(
          attachment.renderbuffer._renderbuffer.format,
          rbFormats,
          'unsupported renderbuffer format for attachment');
      }
    }

    var GL_CLAMP_TO_EDGE = 0x812F;

    var GL_NEAREST = 0x2600;
    var GL_NEAREST_MIPMAP_NEAREST = 0x2700;
    var GL_LINEAR_MIPMAP_NEAREST = 0x2701;
    var GL_NEAREST_MIPMAP_LINEAR = 0x2702;
    var GL_LINEAR_MIPMAP_LINEAR = 0x2703;

    var GL_BYTE = 5120;
    var GL_UNSIGNED_BYTE = 5121;
    var GL_SHORT = 5122;
    var GL_UNSIGNED_SHORT = 5123;
    var GL_INT = 5124;
    var GL_UNSIGNED_INT = 5125;
    var GL_FLOAT = 5126;

    var GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033;
    var GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034;
    var GL_UNSIGNED_SHORT_5_6_5 = 0x8363;
    var GL_UNSIGNED_INT_24_8_WEBGL = 0x84FA;

    var GL_HALF_FLOAT_OES = 0x8D61;

    var TYPE_SIZE = {};

    TYPE_SIZE[GL_BYTE] =
    TYPE_SIZE[GL_UNSIGNED_BYTE] = 1;

    TYPE_SIZE[GL_SHORT] =
    TYPE_SIZE[GL_UNSIGNED_SHORT] =
    TYPE_SIZE[GL_HALF_FLOAT_OES] =
    TYPE_SIZE[GL_UNSIGNED_SHORT_5_6_5] =
    TYPE_SIZE[GL_UNSIGNED_SHORT_4_4_4_4] =
    TYPE_SIZE[GL_UNSIGNED_SHORT_5_5_5_1] = 2;

    TYPE_SIZE[GL_INT] =
    TYPE_SIZE[GL_UNSIGNED_INT] =
    TYPE_SIZE[GL_FLOAT] =
    TYPE_SIZE[GL_UNSIGNED_INT_24_8_WEBGL] = 4;

    function pixelSize (type, channels) {
      if (type === GL_UNSIGNED_SHORT_5_5_5_1 ||
          type === GL_UNSIGNED_SHORT_4_4_4_4 ||
          type === GL_UNSIGNED_SHORT_5_6_5) {
        return 2
      } else if (type === GL_UNSIGNED_INT_24_8_WEBGL) {
        return 4
      } else {
        return TYPE_SIZE[type] * channels
      }
    }

    function isPow2 (v) {
      return !(v & (v - 1)) && (!!v)
    }

    function checkTexture2D (info, mipData, limits) {
      var i;
      var w = mipData.width;
      var h = mipData.height;
      var c = mipData.channels;

      // Check texture shape
      check(w > 0 && w <= limits.maxTextureSize &&
            h > 0 && h <= limits.maxTextureSize,
      'invalid texture shape');

      // check wrap mode
      if (info.wrapS !== GL_CLAMP_TO_EDGE || info.wrapT !== GL_CLAMP_TO_EDGE) {
        check(isPow2(w) && isPow2(h),
          'incompatible wrap mode for texture, both width and height must be power of 2');
      }

      if (mipData.mipmask === 1) {
        if (w !== 1 && h !== 1) {
          check(
            info.minFilter !== GL_NEAREST_MIPMAP_NEAREST &&
            info.minFilter !== GL_NEAREST_MIPMAP_LINEAR &&
            info.minFilter !== GL_LINEAR_MIPMAP_NEAREST &&
            info.minFilter !== GL_LINEAR_MIPMAP_LINEAR,
            'min filter requires mipmap');
        }
      } else {
        // texture must be power of 2
        check(isPow2(w) && isPow2(h),
          'texture must be a square power of 2 to support mipmapping');
        check(mipData.mipmask === (w << 1) - 1,
          'missing or incomplete mipmap data');
      }

      if (mipData.type === GL_FLOAT) {
        if (limits.extensions.indexOf('oes_texture_float_linear') < 0) {
          check(info.minFilter === GL_NEAREST && info.magFilter === GL_NEAREST,
            'filter not supported, must enable oes_texture_float_linear');
        }
        check(!info.genMipmaps,
          'mipmap generation not supported with float textures');
      }

      // check image complete
      var mipimages = mipData.images;
      for (i = 0; i < 16; ++i) {
        if (mipimages[i]) {
          var mw = w >> i;
          var mh = h >> i;
          check(mipData.mipmask & (1 << i), 'missing mipmap data');

          var img = mipimages[i];

          check(
            img.width === mw &&
            img.height === mh,
            'invalid shape for mip images');

          check(
            img.format === mipData.format &&
            img.internalformat === mipData.internalformat &&
            img.type === mipData.type,
            'incompatible type for mip image');

          if (img.compressed) ; else if (img.data) {
            // check(img.data.byteLength === mw * mh *
            // Math.max(pixelSize(img.type, c), img.unpackAlignment),
            var rowSize = Math.ceil(pixelSize(img.type, c) * mw / img.unpackAlignment) * img.unpackAlignment;
            check(img.data.byteLength === rowSize * mh,
              'invalid data for image, buffer size is inconsistent with image format');
          } else if (img.element) ; else if (img.copy) ;
        } else if (!info.genMipmaps) {
          check((mipData.mipmask & (1 << i)) === 0, 'extra mipmap data');
        }
      }

      if (mipData.compressed) {
        check(!info.genMipmaps,
          'mipmap generation for compressed images not supported');
      }
    }

    function checkTextureCube (texture, info, faces, limits) {
      var w = texture.width;
      var h = texture.height;
      var c = texture.channels;

      // Check texture shape
      check(
        w > 0 && w <= limits.maxTextureSize && h > 0 && h <= limits.maxTextureSize,
        'invalid texture shape');
      check(
        w === h,
        'cube map must be square');
      check(
        info.wrapS === GL_CLAMP_TO_EDGE && info.wrapT === GL_CLAMP_TO_EDGE,
        'wrap mode not supported by cube map');

      for (var i = 0; i < faces.length; ++i) {
        var face = faces[i];
        check(
          face.width === w && face.height === h,
          'inconsistent cube map face shape');

        if (info.genMipmaps) {
          check(!face.compressed,
            'can not generate mipmap for compressed textures');
          check(face.mipmask === 1,
            'can not specify mipmaps and generate mipmaps');
        }

        var mipmaps = face.images;
        for (var j = 0; j < 16; ++j) {
          var img = mipmaps[j];
          if (img) {
            var mw = w >> j;
            var mh = h >> j;
            check(face.mipmask & (1 << j), 'missing mipmap data');
            check(
              img.width === mw &&
              img.height === mh,
              'invalid shape for mip images');
            check(
              img.format === texture.format &&
              img.internalformat === texture.internalformat &&
              img.type === texture.type,
              'incompatible type for mip image');

            if (img.compressed) ; else if (img.data) {
              check(img.data.byteLength === mw * mh *
                Math.max(pixelSize(img.type, c), img.unpackAlignment),
              'invalid data for image, buffer size is inconsistent with image format');
            } else if (img.element) ; else if (img.copy) ;
          }
        }
      }
    }

    var check$1 = extend(check, {
      optional: checkOptional,
      raise: raise,
      commandRaise: commandRaise,
      command: checkCommand,
      parameter: checkParameter,
      commandParameter: checkParameterCommand,
      constructor: checkConstructor,
      type: checkTypeOf,
      commandType: checkCommandType,
      isTypedArray: checkIsTypedArray,
      nni: checkNonNegativeInt,
      oneOf: checkOneOf,
      shaderError: checkShaderError,
      linkError: checkLinkError,
      callSite: guessCallSite,
      saveCommandRef: saveCommandRef,
      saveDrawInfo: saveDrawCommandInfo,
      framebufferFormat: checkFramebufferFormat,
      guessCommand: guessCommand,
      texture2D: checkTexture2D,
      textureCube: checkTextureCube
    });

    var VARIABLE_COUNTER = 0;

    var DYN_FUNC = 0;
    var DYN_CONSTANT = 5;
    var DYN_ARRAY = 6;

    function DynamicVariable (type, data) {
      this.id = (VARIABLE_COUNTER++);
      this.type = type;
      this.data = data;
    }

    function escapeStr (str) {
      return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    }

    function splitParts (str) {
      if (str.length === 0) {
        return []
      }

      var firstChar = str.charAt(0);
      var lastChar = str.charAt(str.length - 1);

      if (str.length > 1 &&
          firstChar === lastChar &&
          (firstChar === '"' || firstChar === "'")) {
        return ['"' + escapeStr(str.substr(1, str.length - 2)) + '"']
      }

      var parts = /\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(str);
      if (parts) {
        return (
          splitParts(str.substr(0, parts.index))
            .concat(splitParts(parts[1]))
            .concat(splitParts(str.substr(parts.index + parts[0].length)))
        )
      }

      var subparts = str.split('.');
      if (subparts.length === 1) {
        return ['"' + escapeStr(str) + '"']
      }

      var result = [];
      for (var i = 0; i < subparts.length; ++i) {
        result = result.concat(splitParts(subparts[i]));
      }
      return result
    }

    function toAccessorString (str) {
      return '[' + splitParts(str).join('][') + ']'
    }

    function defineDynamic (type, data) {
      return new DynamicVariable(type, toAccessorString(data + ''))
    }

    function isDynamic (x) {
      return (typeof x === 'function' && !x._reglType) || (x instanceof DynamicVariable)
    }

    function unbox (x, path) {
      if (typeof x === 'function') {
        return new DynamicVariable(DYN_FUNC, x)
      } else if (typeof x === 'number' || typeof x === 'boolean') {
        return new DynamicVariable(DYN_CONSTANT, x)
      } else if (Array.isArray(x)) {
        return new DynamicVariable(DYN_ARRAY, x.map(function (y, i) { return unbox(y, path + '[' + i + ']') }))
      } else if (x instanceof DynamicVariable) {
        return x
      }
      check$1(false, 'invalid option type in uniform ' + path);
    }

    var dynamic = {
      DynamicVariable: DynamicVariable,
      define: defineDynamic,
      isDynamic: isDynamic,
      unbox: unbox,
      accessor: toAccessorString
    };

    /* globals requestAnimationFrame, cancelAnimationFrame */
    var raf = {
      next: typeof requestAnimationFrame === 'function'
        ? function (cb) { return requestAnimationFrame(cb) }
        : function (cb) { return setTimeout(cb, 16) },
      cancel: typeof cancelAnimationFrame === 'function'
        ? function (raf) { return cancelAnimationFrame(raf) }
        : clearTimeout
    };

    /* globals performance */
    var clock = (typeof performance !== 'undefined' && performance.now)
        ? function () { return performance.now() }
        : function () { return +(new Date()) };

    function createStringStore () {
      var stringIds = { '': 0 };
      var stringValues = [''];
      return {
        id: function (str) {
          var result = stringIds[str];
          if (result) {
            return result
          }
          result = stringIds[str] = stringValues.length;
          stringValues.push(str);
          return result
        },

        str: function (id) {
          return stringValues[id]
        }
      }
    }

    // Context and canvas creation helper functions
    function createCanvas (element, onDone, pixelRatio) {
      var canvas = document.createElement('canvas');
      extend(canvas.style, {
        border: 0,
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      });
      element.appendChild(canvas);

      if (element === document.body) {
        canvas.style.position = 'absolute';
        extend(element.style, {
          margin: 0,
          padding: 0
        });
      }

      function resize () {
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (element !== document.body) {
          var bounds = canvas.getBoundingClientRect();
          w = bounds.right - bounds.left;
          h = bounds.bottom - bounds.top;
        }
        canvas.width = pixelRatio * w;
        canvas.height = pixelRatio * h;
      }

      var resizeObserver;
      if (element !== document.body && typeof ResizeObserver === 'function') {
        // ignore 'ResizeObserver' is not defined
        // eslint-disable-next-line
        resizeObserver = new ResizeObserver(function () {
          // setTimeout to avoid flicker
          setTimeout(resize);
        });
        resizeObserver.observe(element);
      } else {
        window.addEventListener('resize', resize, false);
      }

      function onDestroy () {
        if (resizeObserver) {
          resizeObserver.disconnect();
        } else {
          window.removeEventListener('resize', resize);
        }
        element.removeChild(canvas);
      }

      resize();

      return {
        canvas: canvas,
        onDestroy: onDestroy
      }
    }

    function createContext (canvas, contextAttributes) {
      function get (name) {
        try {
          return canvas.getContext(name, contextAttributes)
        } catch (e) {
          return null
        }
      }
      return (
        get('webgl') ||
        get('experimental-webgl') ||
        get('webgl-experimental')
      )
    }

    function isHTMLElement (obj) {
      return (
        typeof obj.nodeName === 'string' &&
        typeof obj.appendChild === 'function' &&
        typeof obj.getBoundingClientRect === 'function'
      )
    }

    function isWebGLContext (obj) {
      return (
        typeof obj.drawArrays === 'function' ||
        typeof obj.drawElements === 'function'
      )
    }

    function parseExtensions (input) {
      if (typeof input === 'string') {
        return input.split()
      }
      check$1(Array.isArray(input), 'invalid extension array');
      return input
    }

    function getElement (desc) {
      if (typeof desc === 'string') {
        check$1(typeof document !== 'undefined', 'not supported outside of DOM');
        return document.querySelector(desc)
      }
      return desc
    }

    function parseArgs (args_) {
      var args = args_ || {};
      var element, container, canvas, gl;
      var contextAttributes = {};
      var extensions = [];
      var optionalExtensions = [];
      var pixelRatio = (typeof window === 'undefined' ? 1 : window.devicePixelRatio);
      var profile = false;
      var onDone = function (err) {
        if (err) {
          check$1.raise(err);
        }
      };
      var onDestroy = function () {};
      if (typeof args === 'string') {
        check$1(
          typeof document !== 'undefined',
          'selector queries only supported in DOM enviroments');
        element = document.querySelector(args);
        check$1(element, 'invalid query string for element');
      } else if (typeof args === 'object') {
        if (isHTMLElement(args)) {
          element = args;
        } else if (isWebGLContext(args)) {
          gl = args;
          canvas = gl.canvas;
        } else {
          check$1.constructor(args);
          if ('gl' in args) {
            gl = args.gl;
          } else if ('canvas' in args) {
            canvas = getElement(args.canvas);
          } else if ('container' in args) {
            container = getElement(args.container);
          }
          if ('attributes' in args) {
            contextAttributes = args.attributes;
            check$1.type(contextAttributes, 'object', 'invalid context attributes');
          }
          if ('extensions' in args) {
            extensions = parseExtensions(args.extensions);
          }
          if ('optionalExtensions' in args) {
            optionalExtensions = parseExtensions(args.optionalExtensions);
          }
          if ('onDone' in args) {
            check$1.type(
              args.onDone, 'function',
              'invalid or missing onDone callback');
            onDone = args.onDone;
          }
          if ('profile' in args) {
            profile = !!args.profile;
          }
          if ('pixelRatio' in args) {
            pixelRatio = +args.pixelRatio;
            check$1(pixelRatio > 0, 'invalid pixel ratio');
          }
        }
      } else {
        check$1.raise('invalid arguments to regl');
      }

      if (element) {
        if (element.nodeName.toLowerCase() === 'canvas') {
          canvas = element;
        } else {
          container = element;
        }
      }

      if (!gl) {
        if (!canvas) {
          check$1(
            typeof document !== 'undefined',
            'must manually specify webgl context outside of DOM environments');
          var result = createCanvas(container || document.body, onDone, pixelRatio);
          if (!result) {
            return null
          }
          canvas = result.canvas;
          onDestroy = result.onDestroy;
        }
        // workaround for chromium bug, premultiplied alpha value is platform dependent
        if (contextAttributes.premultipliedAlpha === undefined) contextAttributes.premultipliedAlpha = true;
        gl = createContext(canvas, contextAttributes);
      }

      if (!gl) {
        onDestroy();
        onDone('webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org');
        return null
      }

      return {
        gl: gl,
        canvas: canvas,
        container: container,
        extensions: extensions,
        optionalExtensions: optionalExtensions,
        pixelRatio: pixelRatio,
        profile: profile,
        onDone: onDone,
        onDestroy: onDestroy
      }
    }

    function createExtensionCache (gl, config) {
      var extensions = {};

      function tryLoadExtension (name_) {
        check$1.type(name_, 'string', 'extension name must be string');
        var name = name_.toLowerCase();
        var ext;
        try {
          ext = extensions[name] = gl.getExtension(name);
        } catch (e) {}
        return !!ext
      }

      for (var i = 0; i < config.extensions.length; ++i) {
        var name = config.extensions[i];
        if (!tryLoadExtension(name)) {
          config.onDestroy();
          config.onDone('"' + name + '" extension is not supported by the current WebGL context, try upgrading your system or a different browser');
          return null
        }
      }

      config.optionalExtensions.forEach(tryLoadExtension);

      return {
        extensions: extensions,
        restore: function () {
          Object.keys(extensions).forEach(function (name) {
            if (extensions[name] && !tryLoadExtension(name)) {
              throw new Error('(regl): error restoring extension ' + name)
            }
          });
        }
      }
    }

    function loop (n, f) {
      var result = Array(n);
      for (var i = 0; i < n; ++i) {
        result[i] = f(i);
      }
      return result
    }

    var GL_BYTE$1 = 5120;
    var GL_UNSIGNED_BYTE$2 = 5121;
    var GL_SHORT$1 = 5122;
    var GL_UNSIGNED_SHORT$1 = 5123;
    var GL_INT$1 = 5124;
    var GL_UNSIGNED_INT$1 = 5125;
    var GL_FLOAT$2 = 5126;

    function nextPow16 (v) {
      for (var i = 16; i <= (1 << 28); i *= 16) {
        if (v <= i) {
          return i
        }
      }
      return 0
    }

    function log2 (v) {
      var r, shift;
      r = (v > 0xFFFF) << 4;
      v >>>= r;
      shift = (v > 0xFF) << 3;
      v >>>= shift; r |= shift;
      shift = (v > 0xF) << 2;
      v >>>= shift; r |= shift;
      shift = (v > 0x3) << 1;
      v >>>= shift; r |= shift;
      return r | (v >> 1)
    }

    function createPool () {
      var bufferPool = loop(8, function () {
        return []
      });

      function alloc (n) {
        var sz = nextPow16(n);
        var bin = bufferPool[log2(sz) >> 2];
        if (bin.length > 0) {
          return bin.pop()
        }
        return new ArrayBuffer(sz)
      }

      function free (buf) {
        bufferPool[log2(buf.byteLength) >> 2].push(buf);
      }

      function allocType (type, n) {
        var result = null;
        switch (type) {
          case GL_BYTE$1:
            result = new Int8Array(alloc(n), 0, n);
            break
          case GL_UNSIGNED_BYTE$2:
            result = new Uint8Array(alloc(n), 0, n);
            break
          case GL_SHORT$1:
            result = new Int16Array(alloc(2 * n), 0, n);
            break
          case GL_UNSIGNED_SHORT$1:
            result = new Uint16Array(alloc(2 * n), 0, n);
            break
          case GL_INT$1:
            result = new Int32Array(alloc(4 * n), 0, n);
            break
          case GL_UNSIGNED_INT$1:
            result = new Uint32Array(alloc(4 * n), 0, n);
            break
          case GL_FLOAT$2:
            result = new Float32Array(alloc(4 * n), 0, n);
            break
          default:
            return null
        }
        if (result.length !== n) {
          return result.subarray(0, n)
        }
        return result
      }

      function freeType (array) {
        free(array.buffer);
      }

      return {
        alloc: alloc,
        free: free,
        allocType: allocType,
        freeType: freeType
      }
    }

    var pool = createPool();

    // zero pool for initial zero data
    pool.zero = createPool();

    var GL_SUBPIXEL_BITS = 0x0D50;
    var GL_RED_BITS = 0x0D52;
    var GL_GREEN_BITS = 0x0D53;
    var GL_BLUE_BITS = 0x0D54;
    var GL_ALPHA_BITS = 0x0D55;
    var GL_DEPTH_BITS = 0x0D56;
    var GL_STENCIL_BITS = 0x0D57;

    var GL_ALIASED_POINT_SIZE_RANGE = 0x846D;
    var GL_ALIASED_LINE_WIDTH_RANGE = 0x846E;

    var GL_MAX_TEXTURE_SIZE = 0x0D33;
    var GL_MAX_VIEWPORT_DIMS = 0x0D3A;
    var GL_MAX_VERTEX_ATTRIBS = 0x8869;
    var GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
    var GL_MAX_VARYING_VECTORS = 0x8DFC;
    var GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
    var GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
    var GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872;
    var GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
    var GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
    var GL_MAX_RENDERBUFFER_SIZE = 0x84E8;

    var GL_VENDOR = 0x1F00;
    var GL_RENDERER = 0x1F01;
    var GL_VERSION = 0x1F02;
    var GL_SHADING_LANGUAGE_VERSION = 0x8B8C;

    var GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF;

    var GL_MAX_COLOR_ATTACHMENTS_WEBGL = 0x8CDF;
    var GL_MAX_DRAW_BUFFERS_WEBGL = 0x8824;

    var GL_TEXTURE_2D = 0x0DE1;
    var GL_TEXTURE_CUBE_MAP = 0x8513;
    var GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
    var GL_TEXTURE0 = 0x84C0;
    var GL_RGBA = 0x1908;
    var GL_FLOAT$1 = 0x1406;
    var GL_UNSIGNED_BYTE$1 = 0x1401;
    var GL_FRAMEBUFFER = 0x8D40;
    var GL_FRAMEBUFFER_COMPLETE = 0x8CD5;
    var GL_COLOR_ATTACHMENT0 = 0x8CE0;
    var GL_COLOR_BUFFER_BIT$1 = 0x4000;

    var wrapLimits = function (gl, extensions) {
      var maxAnisotropic = 1;
      if (extensions.ext_texture_filter_anisotropic) {
        maxAnisotropic = gl.getParameter(GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      }

      var maxDrawbuffers = 1;
      var maxColorAttachments = 1;
      if (extensions.webgl_draw_buffers) {
        maxDrawbuffers = gl.getParameter(GL_MAX_DRAW_BUFFERS_WEBGL);
        maxColorAttachments = gl.getParameter(GL_MAX_COLOR_ATTACHMENTS_WEBGL);
      }

      // detect if reading float textures is available (Safari doesn't support)
      var readFloat = !!extensions.oes_texture_float;
      if (readFloat) {
        var readFloatTexture = gl.createTexture();
        gl.bindTexture(GL_TEXTURE_2D, readFloatTexture);
        gl.texImage2D(GL_TEXTURE_2D, 0, GL_RGBA, 1, 1, 0, GL_RGBA, GL_FLOAT$1, null);

        var fbo = gl.createFramebuffer();
        gl.bindFramebuffer(GL_FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, readFloatTexture, 0);
        gl.bindTexture(GL_TEXTURE_2D, null);

        if (gl.checkFramebufferStatus(GL_FRAMEBUFFER) !== GL_FRAMEBUFFER_COMPLETE) readFloat = false;

        else {
          gl.viewport(0, 0, 1, 1);
          gl.clearColor(1.0, 0.0, 0.0, 1.0);
          gl.clear(GL_COLOR_BUFFER_BIT$1);
          var pixels = pool.allocType(GL_FLOAT$1, 4);
          gl.readPixels(0, 0, 1, 1, GL_RGBA, GL_FLOAT$1, pixels);

          if (gl.getError()) readFloat = false;
          else {
            gl.deleteFramebuffer(fbo);
            gl.deleteTexture(readFloatTexture);

            readFloat = pixels[0] === 1.0;
          }

          pool.freeType(pixels);
        }
      }

      // detect non power of two cube textures support (IE doesn't support)
      var isIE = typeof navigator !== 'undefined' && (/MSIE/.test(navigator.userAgent) || /Trident\//.test(navigator.appVersion) || /Edge/.test(navigator.userAgent));

      var npotTextureCube = true;

      if (!isIE) {
        var cubeTexture = gl.createTexture();
        var data = pool.allocType(GL_UNSIGNED_BYTE$1, 36);
        gl.activeTexture(GL_TEXTURE0);
        gl.bindTexture(GL_TEXTURE_CUBE_MAP, cubeTexture);
        gl.texImage2D(GL_TEXTURE_CUBE_MAP_POSITIVE_X, 0, GL_RGBA, 3, 3, 0, GL_RGBA, GL_UNSIGNED_BYTE$1, data);
        pool.freeType(data);
        gl.bindTexture(GL_TEXTURE_CUBE_MAP, null);
        gl.deleteTexture(cubeTexture);
        npotTextureCube = !gl.getError();
      }

      return {
        // drawing buffer bit depth
        colorBits: [
          gl.getParameter(GL_RED_BITS),
          gl.getParameter(GL_GREEN_BITS),
          gl.getParameter(GL_BLUE_BITS),
          gl.getParameter(GL_ALPHA_BITS)
        ],
        depthBits: gl.getParameter(GL_DEPTH_BITS),
        stencilBits: gl.getParameter(GL_STENCIL_BITS),
        subpixelBits: gl.getParameter(GL_SUBPIXEL_BITS),

        // supported extensions
        extensions: Object.keys(extensions).filter(function (ext) {
          return !!extensions[ext]
        }),

        // max aniso samples
        maxAnisotropic: maxAnisotropic,

        // max draw buffers
        maxDrawbuffers: maxDrawbuffers,
        maxColorAttachments: maxColorAttachments,

        // point and line size ranges
        pointSizeDims: gl.getParameter(GL_ALIASED_POINT_SIZE_RANGE),
        lineWidthDims: gl.getParameter(GL_ALIASED_LINE_WIDTH_RANGE),
        maxViewportDims: gl.getParameter(GL_MAX_VIEWPORT_DIMS),
        maxCombinedTextureUnits: gl.getParameter(GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        maxCubeMapSize: gl.getParameter(GL_MAX_CUBE_MAP_TEXTURE_SIZE),
        maxRenderbufferSize: gl.getParameter(GL_MAX_RENDERBUFFER_SIZE),
        maxTextureUnits: gl.getParameter(GL_MAX_TEXTURE_IMAGE_UNITS),
        maxTextureSize: gl.getParameter(GL_MAX_TEXTURE_SIZE),
        maxAttributes: gl.getParameter(GL_MAX_VERTEX_ATTRIBS),
        maxVertexUniforms: gl.getParameter(GL_MAX_VERTEX_UNIFORM_VECTORS),
        maxVertexTextureUnits: gl.getParameter(GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS),
        maxVaryingVectors: gl.getParameter(GL_MAX_VARYING_VECTORS),
        maxFragmentUniforms: gl.getParameter(GL_MAX_FRAGMENT_UNIFORM_VECTORS),

        // vendor info
        glsl: gl.getParameter(GL_SHADING_LANGUAGE_VERSION),
        renderer: gl.getParameter(GL_RENDERER),
        vendor: gl.getParameter(GL_VENDOR),
        version: gl.getParameter(GL_VERSION),

        // quirks
        readFloat: readFloat,
        npotTextureCube: npotTextureCube
      }
    };

    function isNDArrayLike (obj) {
      return (
        !!obj &&
        typeof obj === 'object' &&
        Array.isArray(obj.shape) &&
        Array.isArray(obj.stride) &&
        typeof obj.offset === 'number' &&
        obj.shape.length === obj.stride.length &&
        (Array.isArray(obj.data) ||
          isTypedArray(obj.data)))
    }

    var values = function (obj) {
      return Object.keys(obj).map(function (key) { return obj[key] })
    };

    var flattenUtils = {
      shape: arrayShape$1,
      flatten: flattenArray
    };

    function flatten1D (array, nx, out) {
      for (var i = 0; i < nx; ++i) {
        out[i] = array[i];
      }
    }

    function flatten2D (array, nx, ny, out) {
      var ptr = 0;
      for (var i = 0; i < nx; ++i) {
        var row = array[i];
        for (var j = 0; j < ny; ++j) {
          out[ptr++] = row[j];
        }
      }
    }

    function flatten3D (array, nx, ny, nz, out, ptr_) {
      var ptr = ptr_;
      for (var i = 0; i < nx; ++i) {
        var row = array[i];
        for (var j = 0; j < ny; ++j) {
          var col = row[j];
          for (var k = 0; k < nz; ++k) {
            out[ptr++] = col[k];
          }
        }
      }
    }

    function flattenRec (array, shape, level, out, ptr) {
      var stride = 1;
      for (var i = level + 1; i < shape.length; ++i) {
        stride *= shape[i];
      }
      var n = shape[level];
      if (shape.length - level === 4) {
        var nx = shape[level + 1];
        var ny = shape[level + 2];
        var nz = shape[level + 3];
        for (i = 0; i < n; ++i) {
          flatten3D(array[i], nx, ny, nz, out, ptr);
          ptr += stride;
        }
      } else {
        for (i = 0; i < n; ++i) {
          flattenRec(array[i], shape, level + 1, out, ptr);
          ptr += stride;
        }
      }
    }

    function flattenArray (array, shape, type, out_) {
      var sz = 1;
      if (shape.length) {
        for (var i = 0; i < shape.length; ++i) {
          sz *= shape[i];
        }
      } else {
        sz = 0;
      }
      var out = out_ || pool.allocType(type, sz);
      switch (shape.length) {
        case 0:
          break
        case 1:
          flatten1D(array, shape[0], out);
          break
        case 2:
          flatten2D(array, shape[0], shape[1], out);
          break
        case 3:
          flatten3D(array, shape[0], shape[1], shape[2], out, 0);
          break
        default:
          flattenRec(array, shape, 0, out, 0);
      }
      return out
    }

    function arrayShape$1 (array_) {
      var shape = [];
      for (var array = array_; array.length; array = array[0]) {
        shape.push(array.length);
      }
      return shape
    }

    var arrayTypes =  {
    	"[object Int8Array]": 5120,
    	"[object Int16Array]": 5122,
    	"[object Int32Array]": 5124,
    	"[object Uint8Array]": 5121,
    	"[object Uint8ClampedArray]": 5121,
    	"[object Uint16Array]": 5123,
    	"[object Uint32Array]": 5125,
    	"[object Float32Array]": 5126,
    	"[object Float64Array]": 5121,
    	"[object ArrayBuffer]": 5121
    };

    var int8 = 5120;
    var int16 = 5122;
    var int32 = 5124;
    var uint8 = 5121;
    var uint16 = 5123;
    var uint32 = 5125;
    var float = 5126;
    var float32 = 5126;
    var glTypes = {
    	int8: int8,
    	int16: int16,
    	int32: int32,
    	uint8: uint8,
    	uint16: uint16,
    	uint32: uint32,
    	float: float,
    	float32: float32
    };

    var dynamic$1 = 35048;
    var stream = 35040;
    var usageTypes = {
    	dynamic: dynamic$1,
    	stream: stream,
    	"static": 35044
    };

    var arrayFlatten = flattenUtils.flatten;
    var arrayShape = flattenUtils.shape;

    var GL_STATIC_DRAW = 0x88E4;
    var GL_STREAM_DRAW = 0x88E0;

    var GL_UNSIGNED_BYTE$3 = 5121;
    var GL_FLOAT$3 = 5126;

    var DTYPES_SIZES = [];
    DTYPES_SIZES[5120] = 1; // int8
    DTYPES_SIZES[5122] = 2; // int16
    DTYPES_SIZES[5124] = 4; // int32
    DTYPES_SIZES[5121] = 1; // uint8
    DTYPES_SIZES[5123] = 2; // uint16
    DTYPES_SIZES[5125] = 4; // uint32
    DTYPES_SIZES[5126] = 4; // float32

    function typedArrayCode (data) {
      return arrayTypes[Object.prototype.toString.call(data)] | 0
    }

    function copyArray (out, inp) {
      for (var i = 0; i < inp.length; ++i) {
        out[i] = inp[i];
      }
    }

    function transpose (
      result, data, shapeX, shapeY, strideX, strideY, offset) {
      var ptr = 0;
      for (var i = 0; i < shapeX; ++i) {
        for (var j = 0; j < shapeY; ++j) {
          result[ptr++] = data[strideX * i + strideY * j + offset];
        }
      }
    }

    function wrapBufferState (gl, stats, config, destroyBuffer) {
      var bufferCount = 0;
      var bufferSet = {};

      function REGLBuffer (type) {
        this.id = bufferCount++;
        this.buffer = gl.createBuffer();
        this.type = type;
        this.usage = GL_STATIC_DRAW;
        this.byteLength = 0;
        this.dimension = 1;
        this.dtype = GL_UNSIGNED_BYTE$3;

        this.persistentData = null;

        if (config.profile) {
          this.stats = { size: 0 };
        }
      }

      REGLBuffer.prototype.bind = function () {
        gl.bindBuffer(this.type, this.buffer);
      };

      REGLBuffer.prototype.destroy = function () {
        destroy(this);
      };

      var streamPool = [];

      function createStream (type, data) {
        var buffer = streamPool.pop();
        if (!buffer) {
          buffer = new REGLBuffer(type);
        }
        buffer.bind();
        initBufferFromData(buffer, data, GL_STREAM_DRAW, 0, 1, false);
        return buffer
      }

      function destroyStream (stream$$1) {
        streamPool.push(stream$$1);
      }

      function initBufferFromTypedArray (buffer, data, usage) {
        buffer.byteLength = data.byteLength;
        gl.bufferData(buffer.type, data, usage);
      }

      function initBufferFromData (buffer, data, usage, dtype, dimension, persist) {
        var shape;
        buffer.usage = usage;
        if (Array.isArray(data)) {
          buffer.dtype = dtype || GL_FLOAT$3;
          if (data.length > 0) {
            var flatData;
            if (Array.isArray(data[0])) {
              shape = arrayShape(data);
              var dim = 1;
              for (var i = 1; i < shape.length; ++i) {
                dim *= shape[i];
              }
              buffer.dimension = dim;
              flatData = arrayFlatten(data, shape, buffer.dtype);
              initBufferFromTypedArray(buffer, flatData, usage);
              if (persist) {
                buffer.persistentData = flatData;
              } else {
                pool.freeType(flatData);
              }
            } else if (typeof data[0] === 'number') {
              buffer.dimension = dimension;
              var typedData = pool.allocType(buffer.dtype, data.length);
              copyArray(typedData, data);
              initBufferFromTypedArray(buffer, typedData, usage);
              if (persist) {
                buffer.persistentData = typedData;
              } else {
                pool.freeType(typedData);
              }
            } else if (isTypedArray(data[0])) {
              buffer.dimension = data[0].length;
              buffer.dtype = dtype || typedArrayCode(data[0]) || GL_FLOAT$3;
              flatData = arrayFlatten(
                data,
                [data.length, data[0].length],
                buffer.dtype);
              initBufferFromTypedArray(buffer, flatData, usage);
              if (persist) {
                buffer.persistentData = flatData;
              } else {
                pool.freeType(flatData);
              }
            } else {
              check$1.raise('invalid buffer data');
            }
          }
        } else if (isTypedArray(data)) {
          buffer.dtype = dtype || typedArrayCode(data);
          buffer.dimension = dimension;
          initBufferFromTypedArray(buffer, data, usage);
          if (persist) {
            buffer.persistentData = new Uint8Array(new Uint8Array(data.buffer));
          }
        } else if (isNDArrayLike(data)) {
          shape = data.shape;
          var stride = data.stride;
          var offset = data.offset;

          var shapeX = 0;
          var shapeY = 0;
          var strideX = 0;
          var strideY = 0;
          if (shape.length === 1) {
            shapeX = shape[0];
            shapeY = 1;
            strideX = stride[0];
            strideY = 0;
          } else if (shape.length === 2) {
            shapeX = shape[0];
            shapeY = shape[1];
            strideX = stride[0];
            strideY = stride[1];
          } else {
            check$1.raise('invalid shape');
          }

          buffer.dtype = dtype || typedArrayCode(data.data) || GL_FLOAT$3;
          buffer.dimension = shapeY;

          var transposeData = pool.allocType(buffer.dtype, shapeX * shapeY);
          transpose(transposeData,
            data.data,
            shapeX, shapeY,
            strideX, strideY,
            offset);
          initBufferFromTypedArray(buffer, transposeData, usage);
          if (persist) {
            buffer.persistentData = transposeData;
          } else {
            pool.freeType(transposeData);
          }
        } else if (data instanceof ArrayBuffer) {
          buffer.dtype = GL_UNSIGNED_BYTE$3;
          buffer.dimension = dimension;
          initBufferFromTypedArray(buffer, data, usage);
          if (persist) {
            buffer.persistentData = new Uint8Array(new Uint8Array(data));
          }
        } else {
          check$1.raise('invalid buffer data');
        }
      }

      function destroy (buffer) {
        stats.bufferCount--;

        // remove attribute link
        destroyBuffer(buffer);

        var handle = buffer.buffer;
        check$1(handle, 'buffer must not be deleted already');
        gl.deleteBuffer(handle);
        buffer.buffer = null;
        delete bufferSet[buffer.id];
      }

      function createBuffer (options, type, deferInit, persistent) {
        stats.bufferCount++;

        var buffer = new REGLBuffer(type);
        bufferSet[buffer.id] = buffer;

        function reglBuffer (options) {
          var usage = GL_STATIC_DRAW;
          var data = null;
          var byteLength = 0;
          var dtype = 0;
          var dimension = 1;
          if (Array.isArray(options) ||
              isTypedArray(options) ||
              isNDArrayLike(options) ||
              options instanceof ArrayBuffer) {
            data = options;
          } else if (typeof options === 'number') {
            byteLength = options | 0;
          } else if (options) {
            check$1.type(
              options, 'object',
              'buffer arguments must be an object, a number or an array');

            if ('data' in options) {
              check$1(
                data === null ||
                Array.isArray(data) ||
                isTypedArray(data) ||
                isNDArrayLike(data),
                'invalid data for buffer');
              data = options.data;
            }

            if ('usage' in options) {
              check$1.parameter(options.usage, usageTypes, 'invalid buffer usage');
              usage = usageTypes[options.usage];
            }

            if ('type' in options) {
              check$1.parameter(options.type, glTypes, 'invalid buffer type');
              dtype = glTypes[options.type];
            }

            if ('dimension' in options) {
              check$1.type(options.dimension, 'number', 'invalid dimension');
              dimension = options.dimension | 0;
            }

            if ('length' in options) {
              check$1.nni(byteLength, 'buffer length must be a nonnegative integer');
              byteLength = options.length | 0;
            }
          }

          buffer.bind();
          if (!data) {
            // #475
            if (byteLength) gl.bufferData(buffer.type, byteLength, usage);
            buffer.dtype = dtype || GL_UNSIGNED_BYTE$3;
            buffer.usage = usage;
            buffer.dimension = dimension;
            buffer.byteLength = byteLength;
          } else {
            initBufferFromData(buffer, data, usage, dtype, dimension, persistent);
          }

          if (config.profile) {
            buffer.stats.size = buffer.byteLength * DTYPES_SIZES[buffer.dtype];
          }

          return reglBuffer
        }

        function setSubData (data, offset) {
          check$1(offset + data.byteLength <= buffer.byteLength,
            'invalid buffer subdata call, buffer is too small. ' + ' Can\'t write data of size ' + data.byteLength + ' starting from offset ' + offset + ' to a buffer of size ' + buffer.byteLength);

          gl.bufferSubData(buffer.type, offset, data);
        }

        function subdata (data, offset_) {
          var offset = (offset_ || 0) | 0;
          var shape;
          buffer.bind();
          if (isTypedArray(data) || data instanceof ArrayBuffer) {
            setSubData(data, offset);
          } else if (Array.isArray(data)) {
            if (data.length > 0) {
              if (typeof data[0] === 'number') {
                var converted = pool.allocType(buffer.dtype, data.length);
                copyArray(converted, data);
                setSubData(converted, offset);
                pool.freeType(converted);
              } else if (Array.isArray(data[0]) || isTypedArray(data[0])) {
                shape = arrayShape(data);
                var flatData = arrayFlatten(data, shape, buffer.dtype);
                setSubData(flatData, offset);
                pool.freeType(flatData);
              } else {
                check$1.raise('invalid buffer data');
              }
            }
          } else if (isNDArrayLike(data)) {
            shape = data.shape;
            var stride = data.stride;

            var shapeX = 0;
            var shapeY = 0;
            var strideX = 0;
            var strideY = 0;
            if (shape.length === 1) {
              shapeX = shape[0];
              shapeY = 1;
              strideX = stride[0];
              strideY = 0;
            } else if (shape.length === 2) {
              shapeX = shape[0];
              shapeY = shape[1];
              strideX = stride[0];
              strideY = stride[1];
            } else {
              check$1.raise('invalid shape');
            }
            var dtype = Array.isArray(data.data)
              ? buffer.dtype
              : typedArrayCode(data.data);

            var transposeData = pool.allocType(dtype, shapeX * shapeY);
            transpose(transposeData,
              data.data,
              shapeX, shapeY,
              strideX, strideY,
              data.offset);
            setSubData(transposeData, offset);
            pool.freeType(transposeData);
          } else {
            check$1.raise('invalid data for buffer subdata');
          }
          return reglBuffer
        }

        if (!deferInit) {
          reglBuffer(options);
        }

        reglBuffer._reglType = 'buffer';
        reglBuffer._buffer = buffer;
        reglBuffer.subdata = subdata;
        if (config.profile) {
          reglBuffer.stats = buffer.stats;
        }
        reglBuffer.destroy = function () { destroy(buffer); };

        return reglBuffer
      }

      function restoreBuffers () {
        values(bufferSet).forEach(function (buffer) {
          buffer.buffer = gl.createBuffer();
          gl.bindBuffer(buffer.type, buffer.buffer);
          gl.bufferData(
            buffer.type, buffer.persistentData || buffer.byteLength, buffer.usage);
        });
      }

      if (config.profile) {
        stats.getTotalBufferSize = function () {
          var total = 0;
          // TODO: Right now, the streams are not part of the total count.
          Object.keys(bufferSet).forEach(function (key) {
            total += bufferSet[key].stats.size;
          });
          return total
        };
      }

      return {
        create: createBuffer,

        createStream: createStream,
        destroyStream: destroyStream,

        clear: function () {
          values(bufferSet).forEach(destroy);
          streamPool.forEach(destroy);
        },

        getBuffer: function (wrapper) {
          if (wrapper && wrapper._buffer instanceof REGLBuffer) {
            return wrapper._buffer
          }
          return null
        },

        restore: restoreBuffers,

        _initBuffer: initBufferFromData
      }
    }

    var points = 0;
    var point = 0;
    var lines = 1;
    var line = 1;
    var triangles = 4;
    var triangle = 4;
    var primTypes = {
    	points: points,
    	point: point,
    	lines: lines,
    	line: line,
    	triangles: triangles,
    	triangle: triangle,
    	"line loop": 2,
    	"line strip": 3,
    	"triangle strip": 5,
    	"triangle fan": 6
    };

    var GL_POINTS = 0;
    var GL_LINES = 1;
    var GL_TRIANGLES = 4;

    var GL_BYTE$2 = 5120;
    var GL_UNSIGNED_BYTE$4 = 5121;
    var GL_SHORT$2 = 5122;
    var GL_UNSIGNED_SHORT$2 = 5123;
    var GL_INT$2 = 5124;
    var GL_UNSIGNED_INT$2 = 5125;

    var GL_ELEMENT_ARRAY_BUFFER = 34963;

    var GL_STREAM_DRAW$1 = 0x88E0;
    var GL_STATIC_DRAW$1 = 0x88E4;

    function wrapElementsState (gl, extensions, bufferState, stats) {
      var elementSet = {};
      var elementCount = 0;

      var elementTypes = {
        'uint8': GL_UNSIGNED_BYTE$4,
        'uint16': GL_UNSIGNED_SHORT$2
      };

      if (extensions.oes_element_index_uint) {
        elementTypes.uint32 = GL_UNSIGNED_INT$2;
      }

      function REGLElementBuffer (buffer) {
        this.id = elementCount++;
        elementSet[this.id] = this;
        this.buffer = buffer;
        this.primType = GL_TRIANGLES;
        this.vertCount = 0;
        this.type = 0;
      }

      REGLElementBuffer.prototype.bind = function () {
        this.buffer.bind();
      };

      var bufferPool = [];

      function createElementStream (data) {
        var result = bufferPool.pop();
        if (!result) {
          result = new REGLElementBuffer(bufferState.create(
            null,
            GL_ELEMENT_ARRAY_BUFFER,
            true,
            false)._buffer);
        }
        initElements(result, data, GL_STREAM_DRAW$1, -1, -1, 0, 0);
        return result
      }

      function destroyElementStream (elements) {
        bufferPool.push(elements);
      }

      function initElements (
        elements,
        data,
        usage,
        prim,
        count,
        byteLength,
        type) {
        elements.buffer.bind();
        var dtype;
        if (data) {
          var predictedType = type;
          if (!type && (
            !isTypedArray(data) ||
             (isNDArrayLike(data) && !isTypedArray(data.data)))) {
            predictedType = extensions.oes_element_index_uint
              ? GL_UNSIGNED_INT$2
              : GL_UNSIGNED_SHORT$2;
          }
          bufferState._initBuffer(
            elements.buffer,
            data,
            usage,
            predictedType,
            3);
        } else {
          gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, byteLength, usage);
          elements.buffer.dtype = dtype || GL_UNSIGNED_BYTE$4;
          elements.buffer.usage = usage;
          elements.buffer.dimension = 3;
          elements.buffer.byteLength = byteLength;
        }

        dtype = type;
        if (!type) {
          switch (elements.buffer.dtype) {
            case GL_UNSIGNED_BYTE$4:
            case GL_BYTE$2:
              dtype = GL_UNSIGNED_BYTE$4;
              break

            case GL_UNSIGNED_SHORT$2:
            case GL_SHORT$2:
              dtype = GL_UNSIGNED_SHORT$2;
              break

            case GL_UNSIGNED_INT$2:
            case GL_INT$2:
              dtype = GL_UNSIGNED_INT$2;
              break

            default:
              check$1.raise('unsupported type for element array');
          }
          elements.buffer.dtype = dtype;
        }
        elements.type = dtype;

        // Check oes_element_index_uint extension
        check$1(
          dtype !== GL_UNSIGNED_INT$2 ||
          !!extensions.oes_element_index_uint,
          '32 bit element buffers not supported, enable oes_element_index_uint first');

        // try to guess default primitive type and arguments
        var vertCount = count;
        if (vertCount < 0) {
          vertCount = elements.buffer.byteLength;
          if (dtype === GL_UNSIGNED_SHORT$2) {
            vertCount >>= 1;
          } else if (dtype === GL_UNSIGNED_INT$2) {
            vertCount >>= 2;
          }
        }
        elements.vertCount = vertCount;

        // try to guess primitive type from cell dimension
        var primType = prim;
        if (prim < 0) {
          primType = GL_TRIANGLES;
          var dimension = elements.buffer.dimension;
          if (dimension === 1) primType = GL_POINTS;
          if (dimension === 2) primType = GL_LINES;
          if (dimension === 3) primType = GL_TRIANGLES;
        }
        elements.primType = primType;
      }

      function destroyElements (elements) {
        stats.elementsCount--;

        check$1(elements.buffer !== null, 'must not double destroy elements');
        delete elementSet[elements.id];
        elements.buffer.destroy();
        elements.buffer = null;
      }

      function createElements (options, persistent) {
        var buffer = bufferState.create(null, GL_ELEMENT_ARRAY_BUFFER, true);
        var elements = new REGLElementBuffer(buffer._buffer);
        stats.elementsCount++;

        function reglElements (options) {
          if (!options) {
            buffer();
            elements.primType = GL_TRIANGLES;
            elements.vertCount = 0;
            elements.type = GL_UNSIGNED_BYTE$4;
          } else if (typeof options === 'number') {
            buffer(options);
            elements.primType = GL_TRIANGLES;
            elements.vertCount = options | 0;
            elements.type = GL_UNSIGNED_BYTE$4;
          } else {
            var data = null;
            var usage = GL_STATIC_DRAW$1;
            var primType = -1;
            var vertCount = -1;
            var byteLength = 0;
            var dtype = 0;
            if (Array.isArray(options) ||
                isTypedArray(options) ||
                isNDArrayLike(options)) {
              data = options;
            } else {
              check$1.type(options, 'object', 'invalid arguments for elements');
              if ('data' in options) {
                data = options.data;
                check$1(
                  Array.isArray(data) ||
                    isTypedArray(data) ||
                    isNDArrayLike(data),
                  'invalid data for element buffer');
              }
              if ('usage' in options) {
                check$1.parameter(
                  options.usage,
                  usageTypes,
                  'invalid element buffer usage');
                usage = usageTypes[options.usage];
              }
              if ('primitive' in options) {
                check$1.parameter(
                  options.primitive,
                  primTypes,
                  'invalid element buffer primitive');
                primType = primTypes[options.primitive];
              }
              if ('count' in options) {
                check$1(
                  typeof options.count === 'number' && options.count >= 0,
                  'invalid vertex count for elements');
                vertCount = options.count | 0;
              }
              if ('type' in options) {
                check$1.parameter(
                  options.type,
                  elementTypes,
                  'invalid buffer type');
                dtype = elementTypes[options.type];
              }
              if ('length' in options) {
                byteLength = options.length | 0;
              } else {
                byteLength = vertCount;
                if (dtype === GL_UNSIGNED_SHORT$2 || dtype === GL_SHORT$2) {
                  byteLength *= 2;
                } else if (dtype === GL_UNSIGNED_INT$2 || dtype === GL_INT$2) {
                  byteLength *= 4;
                }
              }
            }
            initElements(
              elements,
              data,
              usage,
              primType,
              vertCount,
              byteLength,
              dtype);
          }

          return reglElements
        }

        reglElements(options);

        reglElements._reglType = 'elements';
        reglElements._elements = elements;
        reglElements.subdata = function (data, offset) {
          buffer.subdata(data, offset);
          return reglElements
        };
        reglElements.destroy = function () {
          destroyElements(elements);
        };

        return reglElements
      }

      return {
        create: createElements,
        createStream: createElementStream,
        destroyStream: destroyElementStream,
        getElements: function (elements) {
          if (typeof elements === 'function' &&
              elements._elements instanceof REGLElementBuffer) {
            return elements._elements
          }
          return null
        },
        clear: function () {
          values(elementSet).forEach(destroyElements);
        }
      }
    }

    var FLOAT = new Float32Array(1);
    var INT = new Uint32Array(FLOAT.buffer);

    var GL_UNSIGNED_SHORT$4 = 5123;

    function convertToHalfFloat (array) {
      var ushorts = pool.allocType(GL_UNSIGNED_SHORT$4, array.length);

      for (var i = 0; i < array.length; ++i) {
        if (isNaN(array[i])) {
          ushorts[i] = 0xffff;
        } else if (array[i] === Infinity) {
          ushorts[i] = 0x7c00;
        } else if (array[i] === -Infinity) {
          ushorts[i] = 0xfc00;
        } else {
          FLOAT[0] = array[i];
          var x = INT[0];

          var sgn = (x >>> 31) << 15;
          var exp = ((x << 1) >>> 24) - 127;
          var frac = (x >> 13) & ((1 << 10) - 1);

          if (exp < -24) {
            // round non-representable denormals to 0
            ushorts[i] = sgn;
          } else if (exp < -14) {
            // handle denormals
            var s = -14 - exp;
            ushorts[i] = sgn + ((frac + (1 << 10)) >> s);
          } else if (exp > 15) {
            // round overflow to +/- Infinity
            ushorts[i] = sgn + 0x7c00;
          } else {
            // otherwise convert directly
            ushorts[i] = sgn + ((exp + 15) << 10) + frac;
          }
        }
      }

      return ushorts
    }

    function isArrayLike (s) {
      return Array.isArray(s) || isTypedArray(s)
    }

    var isPow2$1 = function (v) {
      return !(v & (v - 1)) && (!!v)
    };

    var GL_COMPRESSED_TEXTURE_FORMATS = 0x86A3;

    var GL_TEXTURE_2D$1 = 0x0DE1;
    var GL_TEXTURE_CUBE_MAP$1 = 0x8513;
    var GL_TEXTURE_CUBE_MAP_POSITIVE_X$1 = 0x8515;

    var GL_RGBA$1 = 0x1908;
    var GL_ALPHA = 0x1906;
    var GL_RGB = 0x1907;
    var GL_LUMINANCE = 0x1909;
    var GL_LUMINANCE_ALPHA = 0x190A;

    var GL_RGBA4 = 0x8056;
    var GL_RGB5_A1 = 0x8057;
    var GL_RGB565 = 0x8D62;

    var GL_UNSIGNED_SHORT_4_4_4_4$1 = 0x8033;
    var GL_UNSIGNED_SHORT_5_5_5_1$1 = 0x8034;
    var GL_UNSIGNED_SHORT_5_6_5$1 = 0x8363;
    var GL_UNSIGNED_INT_24_8_WEBGL$1 = 0x84FA;

    var GL_DEPTH_COMPONENT = 0x1902;
    var GL_DEPTH_STENCIL = 0x84F9;

    var GL_SRGB_EXT = 0x8C40;
    var GL_SRGB_ALPHA_EXT = 0x8C42;

    var GL_HALF_FLOAT_OES$1 = 0x8D61;

    var GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
    var GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;
    var GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
    var GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;

    var GL_COMPRESSED_RGB_ATC_WEBGL = 0x8C92;
    var GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 0x8C93;
    var GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 0x87EE;

    var GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00;
    var GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8C01;
    var GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02;
    var GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8C03;

    var GL_COMPRESSED_RGB_ETC1_WEBGL = 0x8D64;

    var GL_UNSIGNED_BYTE$5 = 0x1401;
    var GL_UNSIGNED_SHORT$3 = 0x1403;
    var GL_UNSIGNED_INT$3 = 0x1405;
    var GL_FLOAT$4 = 0x1406;

    var GL_TEXTURE_WRAP_S = 0x2802;
    var GL_TEXTURE_WRAP_T = 0x2803;

    var GL_REPEAT = 0x2901;
    var GL_CLAMP_TO_EDGE$1 = 0x812F;
    var GL_MIRRORED_REPEAT = 0x8370;

    var GL_TEXTURE_MAG_FILTER = 0x2800;
    var GL_TEXTURE_MIN_FILTER = 0x2801;

    var GL_NEAREST$1 = 0x2600;
    var GL_LINEAR = 0x2601;
    var GL_NEAREST_MIPMAP_NEAREST$1 = 0x2700;
    var GL_LINEAR_MIPMAP_NEAREST$1 = 0x2701;
    var GL_NEAREST_MIPMAP_LINEAR$1 = 0x2702;
    var GL_LINEAR_MIPMAP_LINEAR$1 = 0x2703;

    var GL_GENERATE_MIPMAP_HINT = 0x8192;
    var GL_DONT_CARE = 0x1100;
    var GL_FASTEST = 0x1101;
    var GL_NICEST = 0x1102;

    var GL_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE;

    var GL_UNPACK_ALIGNMENT = 0x0CF5;
    var GL_UNPACK_FLIP_Y_WEBGL = 0x9240;
    var GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    var GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;

    var GL_BROWSER_DEFAULT_WEBGL = 0x9244;

    var GL_TEXTURE0$1 = 0x84C0;

    var MIPMAP_FILTERS = [
      GL_NEAREST_MIPMAP_NEAREST$1,
      GL_NEAREST_MIPMAP_LINEAR$1,
      GL_LINEAR_MIPMAP_NEAREST$1,
      GL_LINEAR_MIPMAP_LINEAR$1
    ];

    var CHANNELS_FORMAT = [
      0,
      GL_LUMINANCE,
      GL_LUMINANCE_ALPHA,
      GL_RGB,
      GL_RGBA$1
    ];

    var FORMAT_CHANNELS = {};
    FORMAT_CHANNELS[GL_LUMINANCE] =
    FORMAT_CHANNELS[GL_ALPHA] =
    FORMAT_CHANNELS[GL_DEPTH_COMPONENT] = 1;
    FORMAT_CHANNELS[GL_DEPTH_STENCIL] =
    FORMAT_CHANNELS[GL_LUMINANCE_ALPHA] = 2;
    FORMAT_CHANNELS[GL_RGB] =
    FORMAT_CHANNELS[GL_SRGB_EXT] = 3;
    FORMAT_CHANNELS[GL_RGBA$1] =
    FORMAT_CHANNELS[GL_SRGB_ALPHA_EXT] = 4;

    function objectName (str) {
      return '[object ' + str + ']'
    }

    var CANVAS_CLASS = objectName('HTMLCanvasElement');
    var OFFSCREENCANVAS_CLASS = objectName('OffscreenCanvas');
    var CONTEXT2D_CLASS = objectName('CanvasRenderingContext2D');
    var BITMAP_CLASS = objectName('ImageBitmap');
    var IMAGE_CLASS = objectName('HTMLImageElement');
    var VIDEO_CLASS = objectName('HTMLVideoElement');

    var PIXEL_CLASSES = Object.keys(arrayTypes).concat([
      CANVAS_CLASS,
      OFFSCREENCANVAS_CLASS,
      CONTEXT2D_CLASS,
      BITMAP_CLASS,
      IMAGE_CLASS,
      VIDEO_CLASS
    ]);

    // for every texture type, store
    // the size in bytes.
    var TYPE_SIZES = [];
    TYPE_SIZES[GL_UNSIGNED_BYTE$5] = 1;
    TYPE_SIZES[GL_FLOAT$4] = 4;
    TYPE_SIZES[GL_HALF_FLOAT_OES$1] = 2;

    TYPE_SIZES[GL_UNSIGNED_SHORT$3] = 2;
    TYPE_SIZES[GL_UNSIGNED_INT$3] = 4;

    var FORMAT_SIZES_SPECIAL = [];
    FORMAT_SIZES_SPECIAL[GL_RGBA4] = 2;
    FORMAT_SIZES_SPECIAL[GL_RGB5_A1] = 2;
    FORMAT_SIZES_SPECIAL[GL_RGB565] = 2;
    FORMAT_SIZES_SPECIAL[GL_DEPTH_STENCIL] = 4;

    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGB_S3TC_DXT1_EXT] = 0.5;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGBA_S3TC_DXT1_EXT] = 0.5;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1;

    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGB_ATC_WEBGL] = 0.5;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1;

    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 0.5;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 0.25;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 0.5;
    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 0.25;

    FORMAT_SIZES_SPECIAL[GL_COMPRESSED_RGB_ETC1_WEBGL] = 0.5;

    function isNumericArray (arr) {
      return (
        Array.isArray(arr) &&
        (arr.length === 0 ||
        typeof arr[0] === 'number'))
    }

    function isRectArray (arr) {
      if (!Array.isArray(arr)) {
        return false
      }
      var width = arr.length;
      if (width === 0 || !isArrayLike(arr[0])) {
        return false
      }
      return true
    }

    function classString (x) {
      return Object.prototype.toString.call(x)
    }

    function isCanvasElement (object) {
      return classString(object) === CANVAS_CLASS
    }

    function isOffscreenCanvas (object) {
      return classString(object) === OFFSCREENCANVAS_CLASS
    }

    function isContext2D (object) {
      return classString(object) === CONTEXT2D_CLASS
    }

    function isBitmap (object) {
      return classString(object) === BITMAP_CLASS
    }

    function isImageElement (object) {
      return classString(object) === IMAGE_CLASS
    }

    function isVideoElement (object) {
      return classString(object) === VIDEO_CLASS
    }

    function isPixelData (object) {
      if (!object) {
        return false
      }
      var className = classString(object);
      if (PIXEL_CLASSES.indexOf(className) >= 0) {
        return true
      }
      return (
        isNumericArray(object) ||
        isRectArray(object) ||
        isNDArrayLike(object))
    }

    function typedArrayCode$1 (data) {
      return arrayTypes[Object.prototype.toString.call(data)] | 0
    }

    function convertData (result, data) {
      var n = data.length;
      switch (result.type) {
        case GL_UNSIGNED_BYTE$5:
        case GL_UNSIGNED_SHORT$3:
        case GL_UNSIGNED_INT$3:
        case GL_FLOAT$4:
          var converted = pool.allocType(result.type, n);
          converted.set(data);
          result.data = converted;
          break

        case GL_HALF_FLOAT_OES$1:
          result.data = convertToHalfFloat(data);
          break

        default:
          check$1.raise('unsupported texture type, must specify a typed array');
      }
    }

    function preConvert (image, n) {
      return pool.allocType(
        image.type === GL_HALF_FLOAT_OES$1
          ? GL_FLOAT$4
          : image.type, n)
    }

    function postConvert (image, data) {
      if (image.type === GL_HALF_FLOAT_OES$1) {
        image.data = convertToHalfFloat(data);
        pool.freeType(data);
      } else {
        image.data = data;
      }
    }

    function transposeData (image, array, strideX, strideY, strideC, offset) {
      var w = image.width;
      var h = image.height;
      var c = image.channels;
      var n = w * h * c;
      var data = preConvert(image, n);

      var p = 0;
      for (var i = 0; i < h; ++i) {
        for (var j = 0; j < w; ++j) {
          for (var k = 0; k < c; ++k) {
            data[p++] = array[strideX * j + strideY * i + strideC * k + offset];
          }
        }
      }

      postConvert(image, data);
    }

    function getTextureSize (format, type, width, height, isMipmap, isCube) {
      var s;
      if (typeof FORMAT_SIZES_SPECIAL[format] !== 'undefined') {
        // we have a special array for dealing with weird color formats such as RGB5A1
        s = FORMAT_SIZES_SPECIAL[format];
      } else {
        s = FORMAT_CHANNELS[format] * TYPE_SIZES[type];
      }

      if (isCube) {
        s *= 6;
      }

      if (isMipmap) {
        // compute the total size of all the mipmaps.
        var total = 0;

        var w = width;
        while (w >= 1) {
          // we can only use mipmaps on a square image,
          // so we can simply use the width and ignore the height:
          total += s * w * w;
          w /= 2;
        }
        return total
      } else {
        return s * width * height
      }
    }

    function createTextureSet (
      gl, extensions, limits, reglPoll, contextState, stats, config) {
      // -------------------------------------------------------
      // Initialize constants and parameter tables here
      // -------------------------------------------------------
      var mipmapHint = {
        "don't care": GL_DONT_CARE,
        'dont care': GL_DONT_CARE,
        'nice': GL_NICEST,
        'fast': GL_FASTEST
      };

      var wrapModes = {
        'repeat': GL_REPEAT,
        'clamp': GL_CLAMP_TO_EDGE$1,
        'mirror': GL_MIRRORED_REPEAT
      };

      var magFilters = {
        'nearest': GL_NEAREST$1,
        'linear': GL_LINEAR
      };

      var minFilters = extend({
        'mipmap': GL_LINEAR_MIPMAP_LINEAR$1,
        'nearest mipmap nearest': GL_NEAREST_MIPMAP_NEAREST$1,
        'linear mipmap nearest': GL_LINEAR_MIPMAP_NEAREST$1,
        'nearest mipmap linear': GL_NEAREST_MIPMAP_LINEAR$1,
        'linear mipmap linear': GL_LINEAR_MIPMAP_LINEAR$1
      }, magFilters);

      var colorSpace = {
        'none': 0,
        'browser': GL_BROWSER_DEFAULT_WEBGL
      };

      var textureTypes = {
        'uint8': GL_UNSIGNED_BYTE$5,
        'rgba4': GL_UNSIGNED_SHORT_4_4_4_4$1,
        'rgb565': GL_UNSIGNED_SHORT_5_6_5$1,
        'rgb5 a1': GL_UNSIGNED_SHORT_5_5_5_1$1
      };

      var textureFormats = {
        'alpha': GL_ALPHA,
        'luminance': GL_LUMINANCE,
        'luminance alpha': GL_LUMINANCE_ALPHA,
        'rgb': GL_RGB,
        'rgba': GL_RGBA$1,
        'rgba4': GL_RGBA4,
        'rgb5 a1': GL_RGB5_A1,
        'rgb565': GL_RGB565
      };

      var compressedTextureFormats = {};

      if (extensions.ext_srgb) {
        textureFormats.srgb = GL_SRGB_EXT;
        textureFormats.srgba = GL_SRGB_ALPHA_EXT;
      }

      if (extensions.oes_texture_float) {
        textureTypes.float32 = textureTypes.float = GL_FLOAT$4;
      }

      if (extensions.oes_texture_half_float) {
        textureTypes['float16'] = textureTypes['half float'] = GL_HALF_FLOAT_OES$1;
      }

      if (extensions.webgl_depth_texture) {
        extend(textureFormats, {
          'depth': GL_DEPTH_COMPONENT,
          'depth stencil': GL_DEPTH_STENCIL
        });

        extend(textureTypes, {
          'uint16': GL_UNSIGNED_SHORT$3,
          'uint32': GL_UNSIGNED_INT$3,
          'depth stencil': GL_UNSIGNED_INT_24_8_WEBGL$1
        });
      }

      if (extensions.webgl_compressed_texture_s3tc) {
        extend(compressedTextureFormats, {
          'rgb s3tc dxt1': GL_COMPRESSED_RGB_S3TC_DXT1_EXT,
          'rgba s3tc dxt1': GL_COMPRESSED_RGBA_S3TC_DXT1_EXT,
          'rgba s3tc dxt3': GL_COMPRESSED_RGBA_S3TC_DXT3_EXT,
          'rgba s3tc dxt5': GL_COMPRESSED_RGBA_S3TC_DXT5_EXT
        });
      }

      if (extensions.webgl_compressed_texture_atc) {
        extend(compressedTextureFormats, {
          'rgb atc': GL_COMPRESSED_RGB_ATC_WEBGL,
          'rgba atc explicit alpha': GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL,
          'rgba atc interpolated alpha': GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL
        });
      }

      if (extensions.webgl_compressed_texture_pvrtc) {
        extend(compressedTextureFormats, {
          'rgb pvrtc 4bppv1': GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
          'rgb pvrtc 2bppv1': GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
          'rgba pvrtc 4bppv1': GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
          'rgba pvrtc 2bppv1': GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        });
      }

      if (extensions.webgl_compressed_texture_etc1) {
        compressedTextureFormats['rgb etc1'] = GL_COMPRESSED_RGB_ETC1_WEBGL;
      }

      // Copy over all texture formats
      var supportedCompressedFormats = Array.prototype.slice.call(
        gl.getParameter(GL_COMPRESSED_TEXTURE_FORMATS));
      Object.keys(compressedTextureFormats).forEach(function (name) {
        var format = compressedTextureFormats[name];
        if (supportedCompressedFormats.indexOf(format) >= 0) {
          textureFormats[name] = format;
        }
      });

      var supportedFormats = Object.keys(textureFormats);
      limits.textureFormats = supportedFormats;

      // associate with every format string its
      // corresponding GL-value.
      var textureFormatsInvert = [];
      Object.keys(textureFormats).forEach(function (key) {
        var val = textureFormats[key];
        textureFormatsInvert[val] = key;
      });

      // associate with every type string its
      // corresponding GL-value.
      var textureTypesInvert = [];
      Object.keys(textureTypes).forEach(function (key) {
        var val = textureTypes[key];
        textureTypesInvert[val] = key;
      });

      var magFiltersInvert = [];
      Object.keys(magFilters).forEach(function (key) {
        var val = magFilters[key];
        magFiltersInvert[val] = key;
      });

      var minFiltersInvert = [];
      Object.keys(minFilters).forEach(function (key) {
        var val = minFilters[key];
        minFiltersInvert[val] = key;
      });

      var wrapModesInvert = [];
      Object.keys(wrapModes).forEach(function (key) {
        var val = wrapModes[key];
        wrapModesInvert[val] = key;
      });

      // colorFormats[] gives the format (channels) associated to an
      // internalformat
      var colorFormats = supportedFormats.reduce(function (color, key) {
        var glenum = textureFormats[key];
        if (glenum === GL_LUMINANCE ||
            glenum === GL_ALPHA ||
            glenum === GL_LUMINANCE ||
            glenum === GL_LUMINANCE_ALPHA ||
            glenum === GL_DEPTH_COMPONENT ||
            glenum === GL_DEPTH_STENCIL ||
            (extensions.ext_srgb &&
                    (glenum === GL_SRGB_EXT ||
                     glenum === GL_SRGB_ALPHA_EXT))) {
          color[glenum] = glenum;
        } else if (glenum === GL_RGB5_A1 || key.indexOf('rgba') >= 0) {
          color[glenum] = GL_RGBA$1;
        } else {
          color[glenum] = GL_RGB;
        }
        return color
      }, {});

      function TexFlags () {
        // format info
        this.internalformat = GL_RGBA$1;
        this.format = GL_RGBA$1;
        this.type = GL_UNSIGNED_BYTE$5;
        this.compressed = false;

        // pixel storage
        this.premultiplyAlpha = false;
        this.flipY = false;
        this.unpackAlignment = 1;
        this.colorSpace = GL_BROWSER_DEFAULT_WEBGL;

        // shape info
        this.width = 0;
        this.height = 0;
        this.channels = 0;
      }

      function copyFlags (result, other) {
        result.internalformat = other.internalformat;
        result.format = other.format;
        result.type = other.type;
        result.compressed = other.compressed;

        result.premultiplyAlpha = other.premultiplyAlpha;
        result.flipY = other.flipY;
        result.unpackAlignment = other.unpackAlignment;
        result.colorSpace = other.colorSpace;

        result.width = other.width;
        result.height = other.height;
        result.channels = other.channels;
      }

      function parseFlags (flags, options) {
        if (typeof options !== 'object' || !options) {
          return
        }

        if ('premultiplyAlpha' in options) {
          check$1.type(options.premultiplyAlpha, 'boolean',
            'invalid premultiplyAlpha');
          flags.premultiplyAlpha = options.premultiplyAlpha;
        }

        if ('flipY' in options) {
          check$1.type(options.flipY, 'boolean',
            'invalid texture flip');
          flags.flipY = options.flipY;
        }

        if ('alignment' in options) {
          check$1.oneOf(options.alignment, [1, 2, 4, 8],
            'invalid texture unpack alignment');
          flags.unpackAlignment = options.alignment;
        }

        if ('colorSpace' in options) {
          check$1.parameter(options.colorSpace, colorSpace,
            'invalid colorSpace');
          flags.colorSpace = colorSpace[options.colorSpace];
        }

        if ('type' in options) {
          var type = options.type;
          check$1(extensions.oes_texture_float ||
            !(type === 'float' || type === 'float32'),
          'you must enable the OES_texture_float extension in order to use floating point textures.');
          check$1(extensions.oes_texture_half_float ||
            !(type === 'half float' || type === 'float16'),
          'you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures.');
          check$1(extensions.webgl_depth_texture ||
            !(type === 'uint16' || type === 'uint32' || type === 'depth stencil'),
          'you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures.');
          check$1.parameter(type, textureTypes,
            'invalid texture type');
          flags.type = textureTypes[type];
        }

        var w = flags.width;
        var h = flags.height;
        var c = flags.channels;
        var hasChannels = false;
        if ('shape' in options) {
          check$1(Array.isArray(options.shape) && options.shape.length >= 2,
            'shape must be an array');
          w = options.shape[0];
          h = options.shape[1];
          if (options.shape.length === 3) {
            c = options.shape[2];
            check$1(c > 0 && c <= 4, 'invalid number of channels');
            hasChannels = true;
          }
          check$1(w >= 0 && w <= limits.maxTextureSize, 'invalid width');
          check$1(h >= 0 && h <= limits.maxTextureSize, 'invalid height');
        } else {
          if ('radius' in options) {
            w = h = options.radius;
            check$1(w >= 0 && w <= limits.maxTextureSize, 'invalid radius');
          }
          if ('width' in options) {
            w = options.width;
            check$1(w >= 0 && w <= limits.maxTextureSize, 'invalid width');
          }
          if ('height' in options) {
            h = options.height;
            check$1(h >= 0 && h <= limits.maxTextureSize, 'invalid height');
          }
          if ('channels' in options) {
            c = options.channels;
            check$1(c > 0 && c <= 4, 'invalid number of channels');
            hasChannels = true;
          }
        }
        flags.width = w | 0;
        flags.height = h | 0;
        flags.channels = c | 0;

        var hasFormat = false;
        if ('format' in options) {
          var formatStr = options.format;
          check$1(extensions.webgl_depth_texture ||
            !(formatStr === 'depth' || formatStr === 'depth stencil'),
          'you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures.');
          check$1.parameter(formatStr, textureFormats,
            'invalid texture format');
          var internalformat = flags.internalformat = textureFormats[formatStr];
          flags.format = colorFormats[internalformat];
          if (formatStr in textureTypes) {
            if (!('type' in options)) {
              flags.type = textureTypes[formatStr];
            }
          }
          if (formatStr in compressedTextureFormats) {
            flags.compressed = true;
          }
          hasFormat = true;
        }

        // Reconcile channels and format
        if (!hasChannels && hasFormat) {
          flags.channels = FORMAT_CHANNELS[flags.format];
        } else if (hasChannels && !hasFormat) {
          if (flags.channels !== CHANNELS_FORMAT[flags.format]) {
            flags.format = flags.internalformat = CHANNELS_FORMAT[flags.channels];
          }
        } else if (hasFormat && hasChannels) {
          check$1(
            flags.channels === FORMAT_CHANNELS[flags.format],
            'number of channels inconsistent with specified format');
        }
      }

      function setFlags (flags) {
        gl.pixelStorei(GL_UNPACK_FLIP_Y_WEBGL, flags.flipY);
        gl.pixelStorei(GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL, flags.premultiplyAlpha);
        gl.pixelStorei(GL_UNPACK_COLORSPACE_CONVERSION_WEBGL, flags.colorSpace);
        gl.pixelStorei(GL_UNPACK_ALIGNMENT, flags.unpackAlignment);
      }

      // -------------------------------------------------------
      // Tex image data
      // -------------------------------------------------------
      function TexImage () {
        TexFlags.call(this);

        this.xOffset = 0;
        this.yOffset = 0;

        // data
        this.data = null;
        this.needsFree = false;

        // html element
        this.element = null;

        // copyTexImage info
        this.needsCopy = false;
      }

      function parseImage (image, options) {
        var data = null;
        if (isPixelData(options)) {
          data = options;
        } else if (options) {
          check$1.type(options, 'object', 'invalid pixel data type');
          parseFlags(image, options);
          if ('x' in options) {
            image.xOffset = options.x | 0;
          }
          if ('y' in options) {
            image.yOffset = options.y | 0;
          }
          if (isPixelData(options.data)) {
            data = options.data;
          }
        }

        check$1(
          !image.compressed ||
          data instanceof Uint8Array,
          'compressed texture data must be stored in a uint8array');

        if (options.copy) {
          check$1(!data, 'can not specify copy and data field for the same texture');
          var viewW = contextState.viewportWidth;
          var viewH = contextState.viewportHeight;
          image.width = image.width || (viewW - image.xOffset);
          image.height = image.height || (viewH - image.yOffset);
          image.needsCopy = true;
          check$1(image.xOffset >= 0 && image.xOffset < viewW &&
                image.yOffset >= 0 && image.yOffset < viewH &&
                image.width > 0 && image.width <= viewW &&
                image.height > 0 && image.height <= viewH,
          'copy texture read out of bounds');
        } else if (!data) {
          image.width = image.width || 1;
          image.height = image.height || 1;
          image.channels = image.channels || 4;
        } else if (isTypedArray(data)) {
          image.channels = image.channels || 4;
          image.data = data;
          if (!('type' in options) && image.type === GL_UNSIGNED_BYTE$5) {
            image.type = typedArrayCode$1(data);
          }
        } else if (isNumericArray(data)) {
          image.channels = image.channels || 4;
          convertData(image, data);
          image.alignment = 1;
          image.needsFree = true;
        } else if (isNDArrayLike(data)) {
          var array = data.data;
          if (!Array.isArray(array) && image.type === GL_UNSIGNED_BYTE$5) {
            image.type = typedArrayCode$1(array);
          }
          var shape = data.shape;
          var stride = data.stride;
          var shapeX, shapeY, shapeC, strideX, strideY, strideC;
          if (shape.length === 3) {
            shapeC = shape[2];
            strideC = stride[2];
          } else {
            check$1(shape.length === 2, 'invalid ndarray pixel data, must be 2 or 3D');
            shapeC = 1;
            strideC = 1;
          }
          shapeX = shape[0];
          shapeY = shape[1];
          strideX = stride[0];
          strideY = stride[1];
          image.alignment = 1;
          image.width = shapeX;
          image.height = shapeY;
          image.channels = shapeC;
          image.format = image.internalformat = CHANNELS_FORMAT[shapeC];
          image.needsFree = true;
          transposeData(image, array, strideX, strideY, strideC, data.offset);
        } else if (isCanvasElement(data) || isOffscreenCanvas(data) || isContext2D(data)) {
          if (isCanvasElement(data) || isOffscreenCanvas(data)) {
            image.element = data;
          } else {
            image.element = data.canvas;
          }
          image.width = image.element.width;
          image.height = image.element.height;
          image.channels = 4;
        } else if (isBitmap(data)) {
          image.element = data;
          image.width = data.width;
          image.height = data.height;
          image.channels = 4;
        } else if (isImageElement(data)) {
          image.element = data;
          image.width = data.naturalWidth;
          image.height = data.naturalHeight;
          image.channels = 4;
        } else if (isVideoElement(data)) {
          image.element = data;
          image.width = data.videoWidth;
          image.height = data.videoHeight;
          image.channels = 4;
        } else if (isRectArray(data)) {
          var w = image.width || data[0].length;
          var h = image.height || data.length;
          var c = image.channels;
          if (isArrayLike(data[0][0])) {
            c = c || data[0][0].length;
          } else {
            c = c || 1;
          }
          var arrayShape = flattenUtils.shape(data);
          var n = 1;
          for (var dd = 0; dd < arrayShape.length; ++dd) {
            n *= arrayShape[dd];
          }
          var allocData = preConvert(image, n);
          flattenUtils.flatten(data, arrayShape, '', allocData);
          postConvert(image, allocData);
          image.alignment = 1;
          image.width = w;
          image.height = h;
          image.channels = c;
          image.format = image.internalformat = CHANNELS_FORMAT[c];
          image.needsFree = true;
        }

        if (image.type === GL_FLOAT$4) {
          check$1(limits.extensions.indexOf('oes_texture_float') >= 0,
            'oes_texture_float extension not enabled');
        } else if (image.type === GL_HALF_FLOAT_OES$1) {
          check$1(limits.extensions.indexOf('oes_texture_half_float') >= 0,
            'oes_texture_half_float extension not enabled');
        }

        // do compressed texture  validation here.
      }

      function setImage (info, target, miplevel) {
        var element = info.element;
        var data = info.data;
        var internalformat = info.internalformat;
        var format = info.format;
        var type = info.type;
        var width = info.width;
        var height = info.height;

        setFlags(info);

        if (element) {
          gl.texImage2D(target, miplevel, format, format, type, element);
        } else if (info.compressed) {
          gl.compressedTexImage2D(target, miplevel, internalformat, width, height, 0, data);
        } else if (info.needsCopy) {
          reglPoll();
          gl.copyTexImage2D(
            target, miplevel, format, info.xOffset, info.yOffset, width, height, 0);
        } else {
          gl.texImage2D(target, miplevel, format, width, height, 0, format, type, data || null);
        }
      }

      function setSubImage (info, target, x, y, miplevel) {
        var element = info.element;
        var data = info.data;
        var internalformat = info.internalformat;
        var format = info.format;
        var type = info.type;
        var width = info.width;
        var height = info.height;

        setFlags(info);

        if (element) {
          gl.texSubImage2D(
            target, miplevel, x, y, format, type, element);
        } else if (info.compressed) {
          gl.compressedTexSubImage2D(
            target, miplevel, x, y, internalformat, width, height, data);
        } else if (info.needsCopy) {
          reglPoll();
          gl.copyTexSubImage2D(
            target, miplevel, x, y, info.xOffset, info.yOffset, width, height);
        } else {
          gl.texSubImage2D(
            target, miplevel, x, y, width, height, format, type, data);
        }
      }

      // texImage pool
      var imagePool = [];

      function allocImage () {
        return imagePool.pop() || new TexImage()
      }

      function freeImage (image) {
        if (image.needsFree) {
          pool.freeType(image.data);
        }
        TexImage.call(image);
        imagePool.push(image);
      }

      // -------------------------------------------------------
      // Mip map
      // -------------------------------------------------------
      function MipMap () {
        TexFlags.call(this);

        this.genMipmaps = false;
        this.mipmapHint = GL_DONT_CARE;
        this.mipmask = 0;
        this.images = Array(16);
      }

      function parseMipMapFromShape (mipmap, width, height) {
        var img = mipmap.images[0] = allocImage();
        mipmap.mipmask = 1;
        img.width = mipmap.width = width;
        img.height = mipmap.height = height;
        img.channels = mipmap.channels = 4;
      }

      function parseMipMapFromObject (mipmap, options) {
        var imgData = null;
        if (isPixelData(options)) {
          imgData = mipmap.images[0] = allocImage();
          copyFlags(imgData, mipmap);
          parseImage(imgData, options);
          mipmap.mipmask = 1;
        } else {
          parseFlags(mipmap, options);
          if (Array.isArray(options.mipmap)) {
            var mipData = options.mipmap;
            for (var i = 0; i < mipData.length; ++i) {
              imgData = mipmap.images[i] = allocImage();
              copyFlags(imgData, mipmap);
              imgData.width >>= i;
              imgData.height >>= i;
              parseImage(imgData, mipData[i]);
              mipmap.mipmask |= (1 << i);
            }
          } else {
            imgData = mipmap.images[0] = allocImage();
            copyFlags(imgData, mipmap);
            parseImage(imgData, options);
            mipmap.mipmask = 1;
          }
        }
        copyFlags(mipmap, mipmap.images[0]);

        // For textures of the compressed format WEBGL_compressed_texture_s3tc
        // we must have that
        //
        // "When level equals zero width and height must be a multiple of 4.
        // When level is greater than 0 width and height must be 0, 1, 2 or a multiple of 4. "
        //
        // but we do not yet support having multiple mipmap levels for compressed textures,
        // so we only test for level zero.

        if (
          mipmap.compressed &&
          (
            mipmap.internalformat === GL_COMPRESSED_RGB_S3TC_DXT1_EXT ||
            mipmap.internalformat === GL_COMPRESSED_RGBA_S3TC_DXT1_EXT ||
            mipmap.internalformat === GL_COMPRESSED_RGBA_S3TC_DXT3_EXT ||
            mipmap.internalformat === GL_COMPRESSED_RGBA_S3TC_DXT5_EXT
          )
        ) {
          check$1(mipmap.width % 4 === 0 && mipmap.height % 4 === 0,
            'for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4');
        }
      }

      function setMipMap (mipmap, target) {
        var images = mipmap.images;
        for (var i = 0; i < images.length; ++i) {
          if (!images[i]) {
            return
          }
          setImage(images[i], target, i);
        }
      }

      var mipPool = [];

      function allocMipMap () {
        var result = mipPool.pop() || new MipMap();
        TexFlags.call(result);
        result.mipmask = 0;
        for (var i = 0; i < 16; ++i) {
          result.images[i] = null;
        }
        return result
      }

      function freeMipMap (mipmap) {
        var images = mipmap.images;
        for (var i = 0; i < images.length; ++i) {
          if (images[i]) {
            freeImage(images[i]);
          }
          images[i] = null;
        }
        mipPool.push(mipmap);
      }

      // -------------------------------------------------------
      // Tex info
      // -------------------------------------------------------
      function TexInfo () {
        this.minFilter = GL_NEAREST$1;
        this.magFilter = GL_NEAREST$1;

        this.wrapS = GL_CLAMP_TO_EDGE$1;
        this.wrapT = GL_CLAMP_TO_EDGE$1;

        this.anisotropic = 1;

        this.genMipmaps = false;
        this.mipmapHint = GL_DONT_CARE;
      }

      function parseTexInfo (info, options) {
        if ('min' in options) {
          var minFilter = options.min;
          check$1.parameter(minFilter, minFilters);
          info.minFilter = minFilters[minFilter];
          if (MIPMAP_FILTERS.indexOf(info.minFilter) >= 0 && !('faces' in options)) {
            info.genMipmaps = true;
          }
        }

        if ('mag' in options) {
          var magFilter = options.mag;
          check$1.parameter(magFilter, magFilters);
          info.magFilter = magFilters[magFilter];
        }

        var wrapS = info.wrapS;
        var wrapT = info.wrapT;
        if ('wrap' in options) {
          var wrap = options.wrap;
          if (typeof wrap === 'string') {
            check$1.parameter(wrap, wrapModes);
            wrapS = wrapT = wrapModes[wrap];
          } else if (Array.isArray(wrap)) {
            check$1.parameter(wrap[0], wrapModes);
            check$1.parameter(wrap[1], wrapModes);
            wrapS = wrapModes[wrap[0]];
            wrapT = wrapModes[wrap[1]];
          }
        } else {
          if ('wrapS' in options) {
            var optWrapS = options.wrapS;
            check$1.parameter(optWrapS, wrapModes);
            wrapS = wrapModes[optWrapS];
          }
          if ('wrapT' in options) {
            var optWrapT = options.wrapT;
            check$1.parameter(optWrapT, wrapModes);
            wrapT = wrapModes[optWrapT];
          }
        }
        info.wrapS = wrapS;
        info.wrapT = wrapT;

        if ('anisotropic' in options) {
          var anisotropic = options.anisotropic;
          check$1(typeof anisotropic === 'number' &&
             anisotropic >= 1 && anisotropic <= limits.maxAnisotropic,
          'aniso samples must be between 1 and ');
          info.anisotropic = options.anisotropic;
        }

        if ('mipmap' in options) {
          var hasMipMap = false;
          switch (typeof options.mipmap) {
            case 'string':
              check$1.parameter(options.mipmap, mipmapHint,
                'invalid mipmap hint');
              info.mipmapHint = mipmapHint[options.mipmap];
              info.genMipmaps = true;
              hasMipMap = true;
              break

            case 'boolean':
              hasMipMap = info.genMipmaps = options.mipmap;
              break

            case 'object':
              check$1(Array.isArray(options.mipmap), 'invalid mipmap type');
              info.genMipmaps = false;
              hasMipMap = true;
              break

            default:
              check$1.raise('invalid mipmap type');
          }
          if (hasMipMap && !('min' in options)) {
            info.minFilter = GL_NEAREST_MIPMAP_NEAREST$1;
          }
        }
      }

      function setTexInfo (info, target) {
        gl.texParameteri(target, GL_TEXTURE_MIN_FILTER, info.minFilter);
        gl.texParameteri(target, GL_TEXTURE_MAG_FILTER, info.magFilter);
        gl.texParameteri(target, GL_TEXTURE_WRAP_S, info.wrapS);
        gl.texParameteri(target, GL_TEXTURE_WRAP_T, info.wrapT);
        if (extensions.ext_texture_filter_anisotropic) {
          gl.texParameteri(target, GL_TEXTURE_MAX_ANISOTROPY_EXT, info.anisotropic);
        }
        if (info.genMipmaps) {
          gl.hint(GL_GENERATE_MIPMAP_HINT, info.mipmapHint);
          gl.generateMipmap(target);
        }
      }

      // -------------------------------------------------------
      // Full texture object
      // -------------------------------------------------------
      var textureCount = 0;
      var textureSet = {};
      var numTexUnits = limits.maxTextureUnits;
      var textureUnits = Array(numTexUnits).map(function () {
        return null
      });

      function REGLTexture (target) {
        TexFlags.call(this);
        this.mipmask = 0;
        this.internalformat = GL_RGBA$1;

        this.id = textureCount++;

        this.refCount = 1;

        this.target = target;
        this.texture = gl.createTexture();

        this.unit = -1;
        this.bindCount = 0;

        this.texInfo = new TexInfo();

        if (config.profile) {
          this.stats = { size: 0 };
        }
      }

      function tempBind (texture) {
        gl.activeTexture(GL_TEXTURE0$1);
        gl.bindTexture(texture.target, texture.texture);
      }

      function tempRestore () {
        var prev = textureUnits[0];
        if (prev) {
          gl.bindTexture(prev.target, prev.texture);
        } else {
          gl.bindTexture(GL_TEXTURE_2D$1, null);
        }
      }

      function destroy (texture) {
        var handle = texture.texture;
        check$1(handle, 'must not double destroy texture');
        var unit = texture.unit;
        var target = texture.target;
        if (unit >= 0) {
          gl.activeTexture(GL_TEXTURE0$1 + unit);
          gl.bindTexture(target, null);
          textureUnits[unit] = null;
        }
        gl.deleteTexture(handle);
        texture.texture = null;
        texture.params = null;
        texture.pixels = null;
        texture.refCount = 0;
        delete textureSet[texture.id];
        stats.textureCount--;
      }

      extend(REGLTexture.prototype, {
        bind: function () {
          var texture = this;
          texture.bindCount += 1;
          var unit = texture.unit;
          if (unit < 0) {
            for (var i = 0; i < numTexUnits; ++i) {
              var other = textureUnits[i];
              if (other) {
                if (other.bindCount > 0) {
                  continue
                }
                other.unit = -1;
              }
              textureUnits[i] = texture;
              unit = i;
              break
            }
            if (unit >= numTexUnits) {
              check$1.raise('insufficient number of texture units');
            }
            if (config.profile && stats.maxTextureUnits < (unit + 1)) {
              stats.maxTextureUnits = unit + 1; // +1, since the units are zero-based
            }
            texture.unit = unit;
            gl.activeTexture(GL_TEXTURE0$1 + unit);
            gl.bindTexture(texture.target, texture.texture);
          }
          return unit
        },

        unbind: function () {
          this.bindCount -= 1;
        },

        decRef: function () {
          if (--this.refCount <= 0) {
            destroy(this);
          }
        }
      });

      function createTexture2D (a, b) {
        var texture = new REGLTexture(GL_TEXTURE_2D$1);
        textureSet[texture.id] = texture;
        stats.textureCount++;

        function reglTexture2D (a, b) {
          var texInfo = texture.texInfo;
          TexInfo.call(texInfo);
          var mipData = allocMipMap();

          if (typeof a === 'number') {
            if (typeof b === 'number') {
              parseMipMapFromShape(mipData, a | 0, b | 0);
            } else {
              parseMipMapFromShape(mipData, a | 0, a | 0);
            }
          } else if (a) {
            check$1.type(a, 'object', 'invalid arguments to regl.texture');
            parseTexInfo(texInfo, a);
            parseMipMapFromObject(mipData, a);
          } else {
            // empty textures get assigned a default shape of 1x1
            parseMipMapFromShape(mipData, 1, 1);
          }

          if (texInfo.genMipmaps) {
            mipData.mipmask = (mipData.width << 1) - 1;
          }
          texture.mipmask = mipData.mipmask;

          copyFlags(texture, mipData);

          check$1.texture2D(texInfo, mipData, limits);
          texture.internalformat = mipData.internalformat;

          reglTexture2D.width = mipData.width;
          reglTexture2D.height = mipData.height;

          tempBind(texture);
          setMipMap(mipData, GL_TEXTURE_2D$1);
          setTexInfo(texInfo, GL_TEXTURE_2D$1);
          tempRestore();

          freeMipMap(mipData);

          if (config.profile) {
            texture.stats.size = getTextureSize(
              texture.internalformat,
              texture.type,
              mipData.width,
              mipData.height,
              texInfo.genMipmaps,
              false);
          }
          reglTexture2D.format = textureFormatsInvert[texture.internalformat];
          reglTexture2D.type = textureTypesInvert[texture.type];

          reglTexture2D.mag = magFiltersInvert[texInfo.magFilter];
          reglTexture2D.min = minFiltersInvert[texInfo.minFilter];

          reglTexture2D.wrapS = wrapModesInvert[texInfo.wrapS];
          reglTexture2D.wrapT = wrapModesInvert[texInfo.wrapT];

          return reglTexture2D
        }

        function subimage (image, x_, y_, level_) {
          check$1(!!image, 'must specify image data');

          var x = x_ | 0;
          var y = y_ | 0;
          var level = level_ | 0;

          var imageData = allocImage();
          copyFlags(imageData, texture);
          imageData.width = 0;
          imageData.height = 0;
          parseImage(imageData, image);
          imageData.width = imageData.width || ((texture.width >> level) - x);
          imageData.height = imageData.height || ((texture.height >> level) - y);

          check$1(
            texture.type === imageData.type &&
            texture.format === imageData.format &&
            texture.internalformat === imageData.internalformat,
            'incompatible format for texture.subimage');
          check$1(
            x >= 0 && y >= 0 &&
            x + imageData.width <= texture.width &&
            y + imageData.height <= texture.height,
            'texture.subimage write out of bounds');
          check$1(
            texture.mipmask & (1 << level),
            'missing mipmap data');
          check$1(
            imageData.data || imageData.element || imageData.needsCopy,
            'missing image data');

          tempBind(texture);
          setSubImage(imageData, GL_TEXTURE_2D$1, x, y, level);
          tempRestore();

          freeImage(imageData);

          return reglTexture2D
        }

        function resize (w_, h_) {
          var w = w_ | 0;
          var h = (h_ | 0) || w;
          if (w === texture.width && h === texture.height) {
            return reglTexture2D
          }

          reglTexture2D.width = texture.width = w;
          reglTexture2D.height = texture.height = h;

          tempBind(texture);

          for (var i = 0; texture.mipmask >> i; ++i) {
            var _w = w >> i;
            var _h = h >> i;
            if (!_w || !_h) break
            gl.texImage2D(
              GL_TEXTURE_2D$1,
              i,
              texture.format,
              _w,
              _h,
              0,
              texture.format,
              texture.type,
              null);
          }
          tempRestore();

          // also, recompute the texture size.
          if (config.profile) {
            texture.stats.size = getTextureSize(
              texture.internalformat,
              texture.type,
              w,
              h,
              false,
              false);
          }

          return reglTexture2D
        }

        reglTexture2D(a, b);

        reglTexture2D.subimage = subimage;
        reglTexture2D.resize = resize;
        reglTexture2D._reglType = 'texture2d';
        reglTexture2D._texture = texture;
        if (config.profile) {
          reglTexture2D.stats = texture.stats;
        }
        reglTexture2D.destroy = function () {
          texture.decRef();
        };

        return reglTexture2D
      }

      function createTextureCube (a0, a1, a2, a3, a4, a5) {
        var texture = new REGLTexture(GL_TEXTURE_CUBE_MAP$1);
        textureSet[texture.id] = texture;
        stats.cubeCount++;

        var faces = new Array(6);

        function reglTextureCube (a0, a1, a2, a3, a4, a5) {
          var i;
          var texInfo = texture.texInfo;
          TexInfo.call(texInfo);
          for (i = 0; i < 6; ++i) {
            faces[i] = allocMipMap();
          }

          if (typeof a0 === 'number' || !a0) {
            var s = (a0 | 0) || 1;
            for (i = 0; i < 6; ++i) {
              parseMipMapFromShape(faces[i], s, s);
            }
          } else if (typeof a0 === 'object') {
            if (a1) {
              parseMipMapFromObject(faces[0], a0);
              parseMipMapFromObject(faces[1], a1);
              parseMipMapFromObject(faces[2], a2);
              parseMipMapFromObject(faces[3], a3);
              parseMipMapFromObject(faces[4], a4);
              parseMipMapFromObject(faces[5], a5);
            } else {
              parseTexInfo(texInfo, a0);
              parseFlags(texture, a0);
              if ('faces' in a0) {
                var faceInput = a0.faces;
                check$1(Array.isArray(faceInput) && faceInput.length === 6,
                  'cube faces must be a length 6 array');
                for (i = 0; i < 6; ++i) {
                  check$1(typeof faceInput[i] === 'object' && !!faceInput[i],
                    'invalid input for cube map face');
                  copyFlags(faces[i], texture);
                  parseMipMapFromObject(faces[i], faceInput[i]);
                }
              } else {
                for (i = 0; i < 6; ++i) {
                  parseMipMapFromObject(faces[i], a0);
                }
              }
            }
          } else {
            check$1.raise('invalid arguments to cube map');
          }

          copyFlags(texture, faces[0]);
          check$1.optional(function () {
            if (!limits.npotTextureCube) {
              check$1(isPow2$1(texture.width) && isPow2$1(texture.height), 'your browser does not support non power or two texture dimensions');
            }
          });

          if (texInfo.genMipmaps) {
            texture.mipmask = (faces[0].width << 1) - 1;
          } else {
            texture.mipmask = faces[0].mipmask;
          }

          check$1.textureCube(texture, texInfo, faces, limits);
          texture.internalformat = faces[0].internalformat;

          reglTextureCube.width = faces[0].width;
          reglTextureCube.height = faces[0].height;

          tempBind(texture);
          for (i = 0; i < 6; ++i) {
            setMipMap(faces[i], GL_TEXTURE_CUBE_MAP_POSITIVE_X$1 + i);
          }
          setTexInfo(texInfo, GL_TEXTURE_CUBE_MAP$1);
          tempRestore();

          if (config.profile) {
            texture.stats.size = getTextureSize(
              texture.internalformat,
              texture.type,
              reglTextureCube.width,
              reglTextureCube.height,
              texInfo.genMipmaps,
              true);
          }

          reglTextureCube.format = textureFormatsInvert[texture.internalformat];
          reglTextureCube.type = textureTypesInvert[texture.type];

          reglTextureCube.mag = magFiltersInvert[texInfo.magFilter];
          reglTextureCube.min = minFiltersInvert[texInfo.minFilter];

          reglTextureCube.wrapS = wrapModesInvert[texInfo.wrapS];
          reglTextureCube.wrapT = wrapModesInvert[texInfo.wrapT];

          for (i = 0; i < 6; ++i) {
            freeMipMap(faces[i]);
          }

          return reglTextureCube
        }

        function subimage (face, image, x_, y_, level_) {
          check$1(!!image, 'must specify image data');
          check$1(typeof face === 'number' && face === (face | 0) &&
            face >= 0 && face < 6, 'invalid face');

          var x = x_ | 0;
          var y = y_ | 0;
          var level = level_ | 0;

          var imageData = allocImage();
          copyFlags(imageData, texture);
          imageData.width = 0;
          imageData.height = 0;
          parseImage(imageData, image);
          imageData.width = imageData.width || ((texture.width >> level) - x);
          imageData.height = imageData.height || ((texture.height >> level) - y);

          check$1(
            texture.type === imageData.type &&
            texture.format === imageData.format &&
            texture.internalformat === imageData.internalformat,
            'incompatible format for texture.subimage');
          check$1(
            x >= 0 && y >= 0 &&
            x + imageData.width <= texture.width &&
            y + imageData.height <= texture.height,
            'texture.subimage write out of bounds');
          check$1(
            texture.mipmask & (1 << level),
            'missing mipmap data');
          check$1(
            imageData.data || imageData.element || imageData.needsCopy,
            'missing image data');

          tempBind(texture);
          setSubImage(imageData, GL_TEXTURE_CUBE_MAP_POSITIVE_X$1 + face, x, y, level);
          tempRestore();

          freeImage(imageData);

          return reglTextureCube
        }

        function resize (radius_) {
          var radius = radius_ | 0;
          if (radius === texture.width) {
            return
          }

          reglTextureCube.width = texture.width = radius;
          reglTextureCube.height = texture.height = radius;

          tempBind(texture);
          for (var i = 0; i < 6; ++i) {
            for (var j = 0; texture.mipmask >> j; ++j) {
              gl.texImage2D(
                GL_TEXTURE_CUBE_MAP_POSITIVE_X$1 + i,
                j,
                texture.format,
                radius >> j,
                radius >> j,
                0,
                texture.format,
                texture.type,
                null);
            }
          }
          tempRestore();

          if (config.profile) {
            texture.stats.size = getTextureSize(
              texture.internalformat,
              texture.type,
              reglTextureCube.width,
              reglTextureCube.height,
              false,
              true);
          }

          return reglTextureCube
        }

        reglTextureCube(a0, a1, a2, a3, a4, a5);

        reglTextureCube.subimage = subimage;
        reglTextureCube.resize = resize;
        reglTextureCube._reglType = 'textureCube';
        reglTextureCube._texture = texture;
        if (config.profile) {
          reglTextureCube.stats = texture.stats;
        }
        reglTextureCube.destroy = function () {
          texture.decRef();
        };

        return reglTextureCube
      }

      // Called when regl is destroyed
      function destroyTextures () {
        for (var i = 0; i < numTexUnits; ++i) {
          gl.activeTexture(GL_TEXTURE0$1 + i);
          gl.bindTexture(GL_TEXTURE_2D$1, null);
          textureUnits[i] = null;
        }
        values(textureSet).forEach(destroy);

        stats.cubeCount = 0;
        stats.textureCount = 0;
      }

      if (config.profile) {
        stats.getTotalTextureSize = function () {
          var total = 0;
          Object.keys(textureSet).forEach(function (key) {
            total += textureSet[key].stats.size;
          });
          return total
        };
      }

      function restoreTextures () {
        for (var i = 0; i < numTexUnits; ++i) {
          var tex = textureUnits[i];
          if (tex) {
            tex.bindCount = 0;
            tex.unit = -1;
            textureUnits[i] = null;
          }
        }

        values(textureSet).forEach(function (texture) {
          texture.texture = gl.createTexture();
          gl.bindTexture(texture.target, texture.texture);
          for (var i = 0; i < 32; ++i) {
            if ((texture.mipmask & (1 << i)) === 0) {
              continue
            }
            if (texture.target === GL_TEXTURE_2D$1) {
              gl.texImage2D(GL_TEXTURE_2D$1,
                i,
                texture.internalformat,
                texture.width >> i,
                texture.height >> i,
                0,
                texture.internalformat,
                texture.type,
                null);
            } else {
              for (var j = 0; j < 6; ++j) {
                gl.texImage2D(GL_TEXTURE_CUBE_MAP_POSITIVE_X$1 + j,
                  i,
                  texture.internalformat,
                  texture.width >> i,
                  texture.height >> i,
                  0,
                  texture.internalformat,
                  texture.type,
                  null);
              }
            }
          }
          setTexInfo(texture.texInfo, texture.target);
        });
      }

      function refreshTextures () {
        for (var i = 0; i < numTexUnits; ++i) {
          var tex = textureUnits[i];
          if (tex) {
            tex.bindCount = 0;
            tex.unit = -1;
            textureUnits[i] = null;
          }
          gl.activeTexture(GL_TEXTURE0$1 + i);
          gl.bindTexture(GL_TEXTURE_2D$1, null);
          gl.bindTexture(GL_TEXTURE_CUBE_MAP$1, null);
        }
      }

      return {
        create2D: createTexture2D,
        createCube: createTextureCube,
        clear: destroyTextures,
        getTexture: function (wrapper) {
          return null
        },
        restore: restoreTextures,
        refresh: refreshTextures
      }
    }

    var GL_RENDERBUFFER = 0x8D41;

    var GL_RGBA4$1 = 0x8056;
    var GL_RGB5_A1$1 = 0x8057;
    var GL_RGB565$1 = 0x8D62;
    var GL_DEPTH_COMPONENT16 = 0x81A5;
    var GL_STENCIL_INDEX8 = 0x8D48;
    var GL_DEPTH_STENCIL$1 = 0x84F9;

    var GL_SRGB8_ALPHA8_EXT = 0x8C43;

    var GL_RGBA32F_EXT = 0x8814;

    var GL_RGBA16F_EXT = 0x881A;
    var GL_RGB16F_EXT = 0x881B;

    var FORMAT_SIZES = [];

    FORMAT_SIZES[GL_RGBA4$1] = 2;
    FORMAT_SIZES[GL_RGB5_A1$1] = 2;
    FORMAT_SIZES[GL_RGB565$1] = 2;

    FORMAT_SIZES[GL_DEPTH_COMPONENT16] = 2;
    FORMAT_SIZES[GL_STENCIL_INDEX8] = 1;
    FORMAT_SIZES[GL_DEPTH_STENCIL$1] = 4;

    FORMAT_SIZES[GL_SRGB8_ALPHA8_EXT] = 4;
    FORMAT_SIZES[GL_RGBA32F_EXT] = 16;
    FORMAT_SIZES[GL_RGBA16F_EXT] = 8;
    FORMAT_SIZES[GL_RGB16F_EXT] = 6;

    function getRenderbufferSize (format, width, height) {
      return FORMAT_SIZES[format] * width * height
    }

    var wrapRenderbuffers = function (gl, extensions, limits, stats, config) {
      var formatTypes = {
        'rgba4': GL_RGBA4$1,
        'rgb565': GL_RGB565$1,
        'rgb5 a1': GL_RGB5_A1$1,
        'depth': GL_DEPTH_COMPONENT16,
        'stencil': GL_STENCIL_INDEX8,
        'depth stencil': GL_DEPTH_STENCIL$1
      };

      if (extensions.ext_srgb) {
        formatTypes['srgba'] = GL_SRGB8_ALPHA8_EXT;
      }

      if (extensions.ext_color_buffer_half_float) {
        formatTypes['rgba16f'] = GL_RGBA16F_EXT;
        formatTypes['rgb16f'] = GL_RGB16F_EXT;
      }

      if (extensions.webgl_color_buffer_float) {
        formatTypes['rgba32f'] = GL_RGBA32F_EXT;
      }

      var formatTypesInvert = [];
      Object.keys(formatTypes).forEach(function (key) {
        var val = formatTypes[key];
        formatTypesInvert[val] = key;
      });

      var renderbufferCount = 0;
      var renderbufferSet = {};

      function REGLRenderbuffer (renderbuffer) {
        this.id = renderbufferCount++;
        this.refCount = 1;

        this.renderbuffer = renderbuffer;

        this.format = GL_RGBA4$1;
        this.width = 0;
        this.height = 0;

        if (config.profile) {
          this.stats = { size: 0 };
        }
      }

      REGLRenderbuffer.prototype.decRef = function () {
        if (--this.refCount <= 0) {
          destroy(this);
        }
      };

      function destroy (rb) {
        var handle = rb.renderbuffer;
        check$1(handle, 'must not double destroy renderbuffer');
        gl.bindRenderbuffer(GL_RENDERBUFFER, null);
        gl.deleteRenderbuffer(handle);
        rb.renderbuffer = null;
        rb.refCount = 0;
        delete renderbufferSet[rb.id];
        stats.renderbufferCount--;
      }

      function createRenderbuffer (a, b) {
        var renderbuffer = new REGLRenderbuffer(gl.createRenderbuffer());
        renderbufferSet[renderbuffer.id] = renderbuffer;
        stats.renderbufferCount++;

        function reglRenderbuffer (a, b) {
          var w = 0;
          var h = 0;
          var format = GL_RGBA4$1;

          if (typeof a === 'object' && a) {
            var options = a;
            if ('shape' in options) {
              var shape = options.shape;
              check$1(Array.isArray(shape) && shape.length >= 2,
                'invalid renderbuffer shape');
              w = shape[0] | 0;
              h = shape[1] | 0;
            } else {
              if ('radius' in options) {
                w = h = options.radius | 0;
              }
              if ('width' in options) {
                w = options.width | 0;
              }
              if ('height' in options) {
                h = options.height | 0;
              }
            }
            if ('format' in options) {
              check$1.parameter(options.format, formatTypes,
                'invalid renderbuffer format');
              format = formatTypes[options.format];
            }
          } else if (typeof a === 'number') {
            w = a | 0;
            if (typeof b === 'number') {
              h = b | 0;
            } else {
              h = w;
            }
          } else if (!a) {
            w = h = 1;
          } else {
            check$1.raise('invalid arguments to renderbuffer constructor');
          }

          // check shape
          check$1(
            w > 0 && h > 0 &&
            w <= limits.maxRenderbufferSize && h <= limits.maxRenderbufferSize,
            'invalid renderbuffer size');

          if (w === renderbuffer.width &&
              h === renderbuffer.height &&
              format === renderbuffer.format) {
            return
          }

          reglRenderbuffer.width = renderbuffer.width = w;
          reglRenderbuffer.height = renderbuffer.height = h;
          renderbuffer.format = format;

          gl.bindRenderbuffer(GL_RENDERBUFFER, renderbuffer.renderbuffer);
          gl.renderbufferStorage(GL_RENDERBUFFER, format, w, h);

          check$1(
            gl.getError() === 0,
            'invalid render buffer format');

          if (config.profile) {
            renderbuffer.stats.size = getRenderbufferSize(renderbuffer.format, renderbuffer.width, renderbuffer.height);
          }
          reglRenderbuffer.format = formatTypesInvert[renderbuffer.format];

          return reglRenderbuffer
        }

        function resize (w_, h_) {
          var w = w_ | 0;
          var h = (h_ | 0) || w;

          if (w === renderbuffer.width && h === renderbuffer.height) {
            return reglRenderbuffer
          }

          // check shape
          check$1(
            w > 0 && h > 0 &&
            w <= limits.maxRenderbufferSize && h <= limits.maxRenderbufferSize,
            'invalid renderbuffer size');

          reglRenderbuffer.width = renderbuffer.width = w;
          reglRenderbuffer.height = renderbuffer.height = h;

          gl.bindRenderbuffer(GL_RENDERBUFFER, renderbuffer.renderbuffer);
          gl.renderbufferStorage(GL_RENDERBUFFER, renderbuffer.format, w, h);

          check$1(
            gl.getError() === 0,
            'invalid render buffer format');

          // also, recompute size.
          if (config.profile) {
            renderbuffer.stats.size = getRenderbufferSize(
              renderbuffer.format, renderbuffer.width, renderbuffer.height);
          }

          return reglRenderbuffer
        }

        reglRenderbuffer(a, b);

        reglRenderbuffer.resize = resize;
        reglRenderbuffer._reglType = 'renderbuffer';
        reglRenderbuffer._renderbuffer = renderbuffer;
        if (config.profile) {
          reglRenderbuffer.stats = renderbuffer.stats;
        }
        reglRenderbuffer.destroy = function () {
          renderbuffer.decRef();
        };

        return reglRenderbuffer
      }

      if (config.profile) {
        stats.getTotalRenderbufferSize = function () {
          var total = 0;
          Object.keys(renderbufferSet).forEach(function (key) {
            total += renderbufferSet[key].stats.size;
          });
          return total
        };
      }

      function restoreRenderbuffers () {
        values(renderbufferSet).forEach(function (rb) {
          rb.renderbuffer = gl.createRenderbuffer();
          gl.bindRenderbuffer(GL_RENDERBUFFER, rb.renderbuffer);
          gl.renderbufferStorage(GL_RENDERBUFFER, rb.format, rb.width, rb.height);
        });
        gl.bindRenderbuffer(GL_RENDERBUFFER, null);
      }

      return {
        create: createRenderbuffer,
        clear: function () {
          values(renderbufferSet).forEach(destroy);
        },
        restore: restoreRenderbuffers
      }
    };

    // We store these constants so that the minifier can inline them
    var GL_FRAMEBUFFER$1 = 0x8D40;
    var GL_RENDERBUFFER$1 = 0x8D41;

    var GL_TEXTURE_2D$2 = 0x0DE1;
    var GL_TEXTURE_CUBE_MAP_POSITIVE_X$2 = 0x8515;

    var GL_COLOR_ATTACHMENT0$1 = 0x8CE0;
    var GL_DEPTH_ATTACHMENT = 0x8D00;
    var GL_STENCIL_ATTACHMENT = 0x8D20;
    var GL_DEPTH_STENCIL_ATTACHMENT = 0x821A;

    var GL_FRAMEBUFFER_COMPLETE$1 = 0x8CD5;
    var GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
    var GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
    var GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
    var GL_FRAMEBUFFER_UNSUPPORTED = 0x8CDD;

    var GL_HALF_FLOAT_OES$2 = 0x8D61;
    var GL_UNSIGNED_BYTE$6 = 0x1401;
    var GL_FLOAT$5 = 0x1406;

    var GL_RGB$1 = 0x1907;
    var GL_RGBA$2 = 0x1908;

    var GL_DEPTH_COMPONENT$1 = 0x1902;

    var colorTextureFormatEnums = [
      GL_RGB$1,
      GL_RGBA$2
    ];

    // for every texture format, store
    // the number of channels
    var textureFormatChannels = [];
    textureFormatChannels[GL_RGBA$2] = 4;
    textureFormatChannels[GL_RGB$1] = 3;

    // for every texture type, store
    // the size in bytes.
    var textureTypeSizes = [];
    textureTypeSizes[GL_UNSIGNED_BYTE$6] = 1;
    textureTypeSizes[GL_FLOAT$5] = 4;
    textureTypeSizes[GL_HALF_FLOAT_OES$2] = 2;

    var GL_RGBA4$2 = 0x8056;
    var GL_RGB5_A1$2 = 0x8057;
    var GL_RGB565$2 = 0x8D62;
    var GL_DEPTH_COMPONENT16$1 = 0x81A5;
    var GL_STENCIL_INDEX8$1 = 0x8D48;
    var GL_DEPTH_STENCIL$2 = 0x84F9;

    var GL_SRGB8_ALPHA8_EXT$1 = 0x8C43;

    var GL_RGBA32F_EXT$1 = 0x8814;

    var GL_RGBA16F_EXT$1 = 0x881A;
    var GL_RGB16F_EXT$1 = 0x881B;

    var colorRenderbufferFormatEnums = [
      GL_RGBA4$2,
      GL_RGB5_A1$2,
      GL_RGB565$2,
      GL_SRGB8_ALPHA8_EXT$1,
      GL_RGBA16F_EXT$1,
      GL_RGB16F_EXT$1,
      GL_RGBA32F_EXT$1
    ];

    var statusCode = {};
    statusCode[GL_FRAMEBUFFER_COMPLETE$1] = 'complete';
    statusCode[GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT] = 'incomplete attachment';
    statusCode[GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS] = 'incomplete dimensions';
    statusCode[GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT] = 'incomplete, missing attachment';
    statusCode[GL_FRAMEBUFFER_UNSUPPORTED] = 'unsupported';

    function wrapFBOState (
      gl,
      extensions,
      limits,
      textureState,
      renderbufferState,
      stats) {
      var framebufferState = {
        cur: null,
        next: null,
        dirty: false,
        setFBO: null
      };

      var colorTextureFormats = ['rgba'];
      var colorRenderbufferFormats = ['rgba4', 'rgb565', 'rgb5 a1'];

      if (extensions.ext_srgb) {
        colorRenderbufferFormats.push('srgba');
      }

      if (extensions.ext_color_buffer_half_float) {
        colorRenderbufferFormats.push('rgba16f', 'rgb16f');
      }

      if (extensions.webgl_color_buffer_float) {
        colorRenderbufferFormats.push('rgba32f');
      }

      var colorTypes = ['uint8'];
      if (extensions.oes_texture_half_float) {
        colorTypes.push('half float', 'float16');
      }
      if (extensions.oes_texture_float) {
        colorTypes.push('float', 'float32');
      }

      function FramebufferAttachment (target, texture, renderbuffer) {
        this.target = target;
        this.texture = texture;
        this.renderbuffer = renderbuffer;

        var w = 0;
        var h = 0;
        if (texture) {
          w = texture.width;
          h = texture.height;
        } else if (renderbuffer) {
          w = renderbuffer.width;
          h = renderbuffer.height;
        }
        this.width = w;
        this.height = h;
      }

      function decRef (attachment) {
        if (attachment) {
          if (attachment.texture) {
            attachment.texture._texture.decRef();
          }
          if (attachment.renderbuffer) {
            attachment.renderbuffer._renderbuffer.decRef();
          }
        }
      }

      function incRefAndCheckShape (attachment, width, height) {
        if (!attachment) {
          return
        }
        if (attachment.texture) {
          var texture = attachment.texture._texture;
          var tw = Math.max(1, texture.width);
          var th = Math.max(1, texture.height);
          check$1(tw === width && th === height,
            'inconsistent width/height for supplied texture');
          texture.refCount += 1;
        } else {
          var renderbuffer = attachment.renderbuffer._renderbuffer;
          check$1(
            renderbuffer.width === width && renderbuffer.height === height,
            'inconsistent width/height for renderbuffer');
          renderbuffer.refCount += 1;
        }
      }

      function attach (location, attachment) {
        if (attachment) {
          if (attachment.texture) {
            gl.framebufferTexture2D(
              GL_FRAMEBUFFER$1,
              location,
              attachment.target,
              attachment.texture._texture.texture,
              0);
          } else {
            gl.framebufferRenderbuffer(
              GL_FRAMEBUFFER$1,
              location,
              GL_RENDERBUFFER$1,
              attachment.renderbuffer._renderbuffer.renderbuffer);
          }
        }
      }

      function parseAttachment (attachment) {
        var target = GL_TEXTURE_2D$2;
        var texture = null;
        var renderbuffer = null;

        var data = attachment;
        if (typeof attachment === 'object') {
          data = attachment.data;
          if ('target' in attachment) {
            target = attachment.target | 0;
          }
        }

        check$1.type(data, 'function', 'invalid attachment data');

        var type = data._reglType;
        if (type === 'texture2d') {
          texture = data;
          check$1(target === GL_TEXTURE_2D$2);
        } else if (type === 'textureCube') {
          texture = data;
          check$1(
            target >= GL_TEXTURE_CUBE_MAP_POSITIVE_X$2 &&
            target < GL_TEXTURE_CUBE_MAP_POSITIVE_X$2 + 6,
            'invalid cube map target');
        } else if (type === 'renderbuffer') {
          renderbuffer = data;
          target = GL_RENDERBUFFER$1;
        } else {
          check$1.raise('invalid regl object for attachment');
        }

        return new FramebufferAttachment(target, texture, renderbuffer)
      }

      function allocAttachment (
        width,
        height,
        isTexture,
        format,
        type) {
        if (isTexture) {
          var texture = textureState.create2D({
            width: width,
            height: height,
            format: format,
            type: type
          });
          texture._texture.refCount = 0;
          return new FramebufferAttachment(GL_TEXTURE_2D$2, texture, null)
        } else {
          var rb = renderbufferState.create({
            width: width,
            height: height,
            format: format
          });
          rb._renderbuffer.refCount = 0;
          return new FramebufferAttachment(GL_RENDERBUFFER$1, null, rb)
        }
      }

      function unwrapAttachment (attachment) {
        return attachment && (attachment.texture || attachment.renderbuffer)
      }

      function resizeAttachment (attachment, w, h) {
        if (attachment) {
          if (attachment.texture) {
            attachment.texture.resize(w, h);
          } else if (attachment.renderbuffer) {
            attachment.renderbuffer.resize(w, h);
          }
          attachment.width = w;
          attachment.height = h;
        }
      }

      var framebufferCount = 0;
      var framebufferSet = {};

      function REGLFramebuffer () {
        this.id = framebufferCount++;
        framebufferSet[this.id] = this;

        this.framebuffer = gl.createFramebuffer();
        this.width = 0;
        this.height = 0;

        this.colorAttachments = [];
        this.depthAttachment = null;
        this.stencilAttachment = null;
        this.depthStencilAttachment = null;
      }

      function decFBORefs (framebuffer) {
        framebuffer.colorAttachments.forEach(decRef);
        decRef(framebuffer.depthAttachment);
        decRef(framebuffer.stencilAttachment);
        decRef(framebuffer.depthStencilAttachment);
      }

      function destroy (framebuffer) {
        var handle = framebuffer.framebuffer;
        check$1(handle, 'must not double destroy framebuffer');
        gl.deleteFramebuffer(handle);
        framebuffer.framebuffer = null;
        stats.framebufferCount--;
        delete framebufferSet[framebuffer.id];
      }

      function updateFramebuffer (framebuffer) {
        var i;

        gl.bindFramebuffer(GL_FRAMEBUFFER$1, framebuffer.framebuffer);
        var colorAttachments = framebuffer.colorAttachments;
        for (i = 0; i < colorAttachments.length; ++i) {
          attach(GL_COLOR_ATTACHMENT0$1 + i, colorAttachments[i]);
        }
        for (i = colorAttachments.length; i < limits.maxColorAttachments; ++i) {
          gl.framebufferTexture2D(
            GL_FRAMEBUFFER$1,
            GL_COLOR_ATTACHMENT0$1 + i,
            GL_TEXTURE_2D$2,
            null,
            0);
        }

        gl.framebufferTexture2D(
          GL_FRAMEBUFFER$1,
          GL_DEPTH_STENCIL_ATTACHMENT,
          GL_TEXTURE_2D$2,
          null,
          0);
        gl.framebufferTexture2D(
          GL_FRAMEBUFFER$1,
          GL_DEPTH_ATTACHMENT,
          GL_TEXTURE_2D$2,
          null,
          0);
        gl.framebufferTexture2D(
          GL_FRAMEBUFFER$1,
          GL_STENCIL_ATTACHMENT,
          GL_TEXTURE_2D$2,
          null,
          0);

        attach(GL_DEPTH_ATTACHMENT, framebuffer.depthAttachment);
        attach(GL_STENCIL_ATTACHMENT, framebuffer.stencilAttachment);
        attach(GL_DEPTH_STENCIL_ATTACHMENT, framebuffer.depthStencilAttachment);

        // Check status code
        var status = gl.checkFramebufferStatus(GL_FRAMEBUFFER$1);
        if (!gl.isContextLost() && status !== GL_FRAMEBUFFER_COMPLETE$1) {
          check$1.raise('framebuffer configuration not supported, status = ' +
            statusCode[status]);
        }

        gl.bindFramebuffer(GL_FRAMEBUFFER$1, framebufferState.next ? framebufferState.next.framebuffer : null);
        framebufferState.cur = framebufferState.next;

        // FIXME: Clear error code here.  This is a work around for a bug in
        // headless-gl
        gl.getError();
      }

      function createFBO (a0, a1) {
        var framebuffer = new REGLFramebuffer();
        stats.framebufferCount++;

        function reglFramebuffer (a, b) {
          var i;

          check$1(framebufferState.next !== framebuffer,
            'can not update framebuffer which is currently in use');

          var width = 0;
          var height = 0;

          var needsDepth = true;
          var needsStencil = true;

          var colorBuffer = null;
          var colorTexture = true;
          var colorFormat = 'rgba';
          var colorType = 'uint8';
          var colorCount = 1;

          var depthBuffer = null;
          var stencilBuffer = null;
          var depthStencilBuffer = null;
          var depthStencilTexture = false;

          if (typeof a === 'number') {
            width = a | 0;
            height = (b | 0) || width;
          } else if (!a) {
            width = height = 1;
          } else {
            check$1.type(a, 'object', 'invalid arguments for framebuffer');
            var options = a;

            if ('shape' in options) {
              var shape = options.shape;
              check$1(Array.isArray(shape) && shape.length >= 2,
                'invalid shape for framebuffer');
              width = shape[0];
              height = shape[1];
            } else {
              if ('radius' in options) {
                width = height = options.radius;
              }
              if ('width' in options) {
                width = options.width;
              }
              if ('height' in options) {
                height = options.height;
              }
            }

            if ('color' in options ||
                'colors' in options) {
              colorBuffer =
                options.color ||
                options.colors;
              if (Array.isArray(colorBuffer)) {
                check$1(
                  colorBuffer.length === 1 || extensions.webgl_draw_buffers,
                  'multiple render targets not supported');
              }
            }

            if (!colorBuffer) {
              if ('colorCount' in options) {
                colorCount = options.colorCount | 0;
                check$1(colorCount > 0, 'invalid color buffer count');
              }

              if ('colorTexture' in options) {
                colorTexture = !!options.colorTexture;
                colorFormat = 'rgba4';
              }

              if ('colorType' in options) {
                colorType = options.colorType;
                if (!colorTexture) {
                  if (colorType === 'half float' || colorType === 'float16') {
                    check$1(extensions.ext_color_buffer_half_float,
                      'you must enable EXT_color_buffer_half_float to use 16-bit render buffers');
                    colorFormat = 'rgba16f';
                  } else if (colorType === 'float' || colorType === 'float32') {
                    check$1(extensions.webgl_color_buffer_float,
                      'you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers');
                    colorFormat = 'rgba32f';
                  }
                } else {
                  check$1(extensions.oes_texture_float ||
                    !(colorType === 'float' || colorType === 'float32'),
                  'you must enable OES_texture_float in order to use floating point framebuffer objects');
                  check$1(extensions.oes_texture_half_float ||
                    !(colorType === 'half float' || colorType === 'float16'),
                  'you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects');
                }
                check$1.oneOf(colorType, colorTypes, 'invalid color type');
              }

              if ('colorFormat' in options) {
                colorFormat = options.colorFormat;
                if (colorTextureFormats.indexOf(colorFormat) >= 0) {
                  colorTexture = true;
                } else if (colorRenderbufferFormats.indexOf(colorFormat) >= 0) {
                  colorTexture = false;
                } else {
                  check$1.optional(function () {
                    if (colorTexture) {
                      check$1.oneOf(
                        options.colorFormat, colorTextureFormats,
                        'invalid color format for texture');
                    } else {
                      check$1.oneOf(
                        options.colorFormat, colorRenderbufferFormats,
                        'invalid color format for renderbuffer');
                    }
                  });
                }
              }
            }

            if ('depthTexture' in options || 'depthStencilTexture' in options) {
              depthStencilTexture = !!(options.depthTexture ||
                options.depthStencilTexture);
              check$1(!depthStencilTexture || extensions.webgl_depth_texture,
                'webgl_depth_texture extension not supported');
            }

            if ('depth' in options) {
              if (typeof options.depth === 'boolean') {
                needsDepth = options.depth;
              } else {
                depthBuffer = options.depth;
                needsStencil = false;
              }
            }

            if ('stencil' in options) {
              if (typeof options.stencil === 'boolean') {
                needsStencil = options.stencil;
              } else {
                stencilBuffer = options.stencil;
                needsDepth = false;
              }
            }

            if ('depthStencil' in options) {
              if (typeof options.depthStencil === 'boolean') {
                needsDepth = needsStencil = options.depthStencil;
              } else {
                depthStencilBuffer = options.depthStencil;
                needsDepth = false;
                needsStencil = false;
              }
            }
          }

          // parse attachments
          var colorAttachments = null;
          var depthAttachment = null;
          var stencilAttachment = null;
          var depthStencilAttachment = null;

          // Set up color attachments
          if (Array.isArray(colorBuffer)) {
            colorAttachments = colorBuffer.map(parseAttachment);
          } else if (colorBuffer) {
            colorAttachments = [parseAttachment(colorBuffer)];
          } else {
            colorAttachments = new Array(colorCount);
            for (i = 0; i < colorCount; ++i) {
              colorAttachments[i] = allocAttachment(
                width,
                height,
                colorTexture,
                colorFormat,
                colorType);
            }
          }

          check$1(extensions.webgl_draw_buffers || colorAttachments.length <= 1,
            'you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers.');
          check$1(colorAttachments.length <= limits.maxColorAttachments,
            'too many color attachments, not supported');

          width = width || colorAttachments[0].width;
          height = height || colorAttachments[0].height;

          if (depthBuffer) {
            depthAttachment = parseAttachment(depthBuffer);
          } else if (needsDepth && !needsStencil) {
            depthAttachment = allocAttachment(
              width,
              height,
              depthStencilTexture,
              'depth',
              'uint32');
          }

          if (stencilBuffer) {
            stencilAttachment = parseAttachment(stencilBuffer);
          } else if (needsStencil && !needsDepth) {
            stencilAttachment = allocAttachment(
              width,
              height,
              false,
              'stencil',
              'uint8');
          }

          if (depthStencilBuffer) {
            depthStencilAttachment = parseAttachment(depthStencilBuffer);
          } else if (!depthBuffer && !stencilBuffer && needsStencil && needsDepth) {
            depthStencilAttachment = allocAttachment(
              width,
              height,
              depthStencilTexture,
              'depth stencil',
              'depth stencil');
          }

          check$1(
            (!!depthBuffer) + (!!stencilBuffer) + (!!depthStencilBuffer) <= 1,
            'invalid framebuffer configuration, can specify exactly one depth/stencil attachment');

          var commonColorAttachmentSize = null;

          for (i = 0; i < colorAttachments.length; ++i) {
            incRefAndCheckShape(colorAttachments[i], width, height);
            check$1(!colorAttachments[i] ||
              (colorAttachments[i].texture &&
                colorTextureFormatEnums.indexOf(colorAttachments[i].texture._texture.format) >= 0) ||
              (colorAttachments[i].renderbuffer &&
                colorRenderbufferFormatEnums.indexOf(colorAttachments[i].renderbuffer._renderbuffer.format) >= 0),
            'framebuffer color attachment ' + i + ' is invalid');

            if (colorAttachments[i] && colorAttachments[i].texture) {
              var colorAttachmentSize =
                  textureFormatChannels[colorAttachments[i].texture._texture.format] *
                  textureTypeSizes[colorAttachments[i].texture._texture.type];

              if (commonColorAttachmentSize === null) {
                commonColorAttachmentSize = colorAttachmentSize;
              } else {
                // We need to make sure that all color attachments have the same number of bitplanes
                // (that is, the same numer of bits per pixel)
                // This is required by the GLES2.0 standard. See the beginning of Chapter 4 in that document.
                check$1(commonColorAttachmentSize === colorAttachmentSize,
                  'all color attachments much have the same number of bits per pixel.');
              }
            }
          }
          incRefAndCheckShape(depthAttachment, width, height);
          check$1(!depthAttachment ||
            (depthAttachment.texture &&
              depthAttachment.texture._texture.format === GL_DEPTH_COMPONENT$1) ||
            (depthAttachment.renderbuffer &&
              depthAttachment.renderbuffer._renderbuffer.format === GL_DEPTH_COMPONENT16$1),
          'invalid depth attachment for framebuffer object');
          incRefAndCheckShape(stencilAttachment, width, height);
          check$1(!stencilAttachment ||
            (stencilAttachment.renderbuffer &&
              stencilAttachment.renderbuffer._renderbuffer.format === GL_STENCIL_INDEX8$1),
          'invalid stencil attachment for framebuffer object');
          incRefAndCheckShape(depthStencilAttachment, width, height);
          check$1(!depthStencilAttachment ||
            (depthStencilAttachment.texture &&
              depthStencilAttachment.texture._texture.format === GL_DEPTH_STENCIL$2) ||
            (depthStencilAttachment.renderbuffer &&
              depthStencilAttachment.renderbuffer._renderbuffer.format === GL_DEPTH_STENCIL$2),
          'invalid depth-stencil attachment for framebuffer object');

          // decrement references
          decFBORefs(framebuffer);

          framebuffer.width = width;
          framebuffer.height = height;

          framebuffer.colorAttachments = colorAttachments;
          framebuffer.depthAttachment = depthAttachment;
          framebuffer.stencilAttachment = stencilAttachment;
          framebuffer.depthStencilAttachment = depthStencilAttachment;

          reglFramebuffer.color = colorAttachments.map(unwrapAttachment);
          reglFramebuffer.depth = unwrapAttachment(depthAttachment);
          reglFramebuffer.stencil = unwrapAttachment(stencilAttachment);
          reglFramebuffer.depthStencil = unwrapAttachment(depthStencilAttachment);

          reglFramebuffer.width = framebuffer.width;
          reglFramebuffer.height = framebuffer.height;

          updateFramebuffer(framebuffer);

          return reglFramebuffer
        }

        function resize (w_, h_) {
          check$1(framebufferState.next !== framebuffer,
            'can not resize a framebuffer which is currently in use');

          var w = Math.max(w_ | 0, 1);
          var h = Math.max((h_ | 0) || w, 1);
          if (w === framebuffer.width && h === framebuffer.height) {
            return reglFramebuffer
          }

          // resize all buffers
          var colorAttachments = framebuffer.colorAttachments;
          for (var i = 0; i < colorAttachments.length; ++i) {
            resizeAttachment(colorAttachments[i], w, h);
          }
          resizeAttachment(framebuffer.depthAttachment, w, h);
          resizeAttachment(framebuffer.stencilAttachment, w, h);
          resizeAttachment(framebuffer.depthStencilAttachment, w, h);

          framebuffer.width = reglFramebuffer.width = w;
          framebuffer.height = reglFramebuffer.height = h;

          updateFramebuffer(framebuffer);

          return reglFramebuffer
        }

        reglFramebuffer(a0, a1);

        return extend(reglFramebuffer, {
          resize: resize,
          _reglType: 'framebuffer',
          _framebuffer: framebuffer,
          destroy: function () {
            destroy(framebuffer);
            decFBORefs(framebuffer);
          },
          use: function (block) {
            framebufferState.setFBO({
              framebuffer: reglFramebuffer
            }, block);
          }
        })
      }

      function createCubeFBO (options) {
        var faces = Array(6);

        function reglFramebufferCube (a) {
          var i;

          check$1(faces.indexOf(framebufferState.next) < 0,
            'can not update framebuffer which is currently in use');

          var params = {
            color: null
          };

          var radius = 0;

          var colorBuffer = null;
          var colorFormat = 'rgba';
          var colorType = 'uint8';
          var colorCount = 1;

          if (typeof a === 'number') {
            radius = a | 0;
          } else if (!a) {
            radius = 1;
          } else {
            check$1.type(a, 'object', 'invalid arguments for framebuffer');
            var options = a;

            if ('shape' in options) {
              var shape = options.shape;
              check$1(
                Array.isArray(shape) && shape.length >= 2,
                'invalid shape for framebuffer');
              check$1(
                shape[0] === shape[1],
                'cube framebuffer must be square');
              radius = shape[0];
            } else {
              if ('radius' in options) {
                radius = options.radius | 0;
              }
              if ('width' in options) {
                radius = options.width | 0;
                if ('height' in options) {
                  check$1(options.height === radius, 'must be square');
                }
              } else if ('height' in options) {
                radius = options.height | 0;
              }
            }

            if ('color' in options ||
                'colors' in options) {
              colorBuffer =
                options.color ||
                options.colors;
              if (Array.isArray(colorBuffer)) {
                check$1(
                  colorBuffer.length === 1 || extensions.webgl_draw_buffers,
                  'multiple render targets not supported');
              }
            }

            if (!colorBuffer) {
              if ('colorCount' in options) {
                colorCount = options.colorCount | 0;
                check$1(colorCount > 0, 'invalid color buffer count');
              }

              if ('colorType' in options) {
                check$1.oneOf(
                  options.colorType, colorTypes,
                  'invalid color type');
                colorType = options.colorType;
              }

              if ('colorFormat' in options) {
                colorFormat = options.colorFormat;
                check$1.oneOf(
                  options.colorFormat, colorTextureFormats,
                  'invalid color format for texture');
              }
            }

            if ('depth' in options) {
              params.depth = options.depth;
            }

            if ('stencil' in options) {
              params.stencil = options.stencil;
            }

            if ('depthStencil' in options) {
              params.depthStencil = options.depthStencil;
            }
          }

          var colorCubes;
          if (colorBuffer) {
            if (Array.isArray(colorBuffer)) {
              colorCubes = [];
              for (i = 0; i < colorBuffer.length; ++i) {
                colorCubes[i] = colorBuffer[i];
              }
            } else {
              colorCubes = [ colorBuffer ];
            }
          } else {
            colorCubes = Array(colorCount);
            var cubeMapParams = {
              radius: radius,
              format: colorFormat,
              type: colorType
            };
            for (i = 0; i < colorCount; ++i) {
              colorCubes[i] = textureState.createCube(cubeMapParams);
            }
          }

          // Check color cubes
          params.color = Array(colorCubes.length);
          for (i = 0; i < colorCubes.length; ++i) {
            var cube = colorCubes[i];
            check$1(
              typeof cube === 'function' && cube._reglType === 'textureCube',
              'invalid cube map');
            radius = radius || cube.width;
            check$1(
              cube.width === radius && cube.height === radius,
              'invalid cube map shape');
            params.color[i] = {
              target: GL_TEXTURE_CUBE_MAP_POSITIVE_X$2,
              data: colorCubes[i]
            };
          }

          for (i = 0; i < 6; ++i) {
            for (var j = 0; j < colorCubes.length; ++j) {
              params.color[j].target = GL_TEXTURE_CUBE_MAP_POSITIVE_X$2 + i;
            }
            // reuse depth-stencil attachments across all cube maps
            if (i > 0) {
              params.depth = faces[0].depth;
              params.stencil = faces[0].stencil;
              params.depthStencil = faces[0].depthStencil;
            }
            if (faces[i]) {
              (faces[i])(params);
            } else {
              faces[i] = createFBO(params);
            }
          }

          return extend(reglFramebufferCube, {
            width: radius,
            height: radius,
            color: colorCubes
          })
        }

        function resize (radius_) {
          var i;
          var radius = radius_ | 0;
          check$1(radius > 0 && radius <= limits.maxCubeMapSize,
            'invalid radius for cube fbo');

          if (radius === reglFramebufferCube.width) {
            return reglFramebufferCube
          }

          var colors = reglFramebufferCube.color;
          for (i = 0; i < colors.length; ++i) {
            colors[i].resize(radius);
          }

          for (i = 0; i < 6; ++i) {
            faces[i].resize(radius);
          }

          reglFramebufferCube.width = reglFramebufferCube.height = radius;

          return reglFramebufferCube
        }

        reglFramebufferCube(options);

        return extend(reglFramebufferCube, {
          faces: faces,
          resize: resize,
          _reglType: 'framebufferCube',
          destroy: function () {
            faces.forEach(function (f) {
              f.destroy();
            });
          }
        })
      }

      function restoreFramebuffers () {
        framebufferState.cur = null;
        framebufferState.next = null;
        framebufferState.dirty = true;
        values(framebufferSet).forEach(function (fb) {
          fb.framebuffer = gl.createFramebuffer();
          updateFramebuffer(fb);
        });
      }

      return extend(framebufferState, {
        getFramebuffer: function (object) {
          if (typeof object === 'function' && object._reglType === 'framebuffer') {
            var fbo = object._framebuffer;
            if (fbo instanceof REGLFramebuffer) {
              return fbo
            }
          }
          return null
        },
        create: createFBO,
        createCube: createCubeFBO,
        clear: function () {
          values(framebufferSet).forEach(destroy);
        },
        restore: restoreFramebuffers
      })
    }

    var GL_FLOAT$6 = 5126;
    var GL_ARRAY_BUFFER$1 = 34962;
    var GL_ELEMENT_ARRAY_BUFFER$1 = 34963;

    var VAO_OPTIONS = [
      'attributes',
      'elements',
      'offset',
      'count',
      'primitive',
      'instances'
    ];

    function AttributeRecord () {
      this.state = 0;

      this.x = 0.0;
      this.y = 0.0;
      this.z = 0.0;
      this.w = 0.0;

      this.buffer = null;
      this.size = 0;
      this.normalized = false;
      this.type = GL_FLOAT$6;
      this.offset = 0;
      this.stride = 0;
      this.divisor = 0;
    }

    function wrapAttributeState (
      gl,
      extensions,
      limits,
      stats,
      bufferState,
      elementState,
      drawState) {
      var NUM_ATTRIBUTES = limits.maxAttributes;
      var attributeBindings = new Array(NUM_ATTRIBUTES);
      for (var i = 0; i < NUM_ATTRIBUTES; ++i) {
        attributeBindings[i] = new AttributeRecord();
      }
      var vaoCount = 0;
      var vaoSet = {};

      var state = {
        Record: AttributeRecord,
        scope: {},
        state: attributeBindings,
        currentVAO: null,
        targetVAO: null,
        restore: extVAO() ? restoreVAO : function () {},
        createVAO: createVAO,
        getVAO: getVAO,
        destroyBuffer: destroyBuffer,
        setVAO: extVAO() ? setVAOEXT : setVAOEmulated,
        clear: extVAO() ? destroyVAOEXT : function () {}
      };

      function destroyBuffer (buffer) {
        for (var i = 0; i < attributeBindings.length; ++i) {
          var record = attributeBindings[i];
          if (record.buffer === buffer) {
            gl.disableVertexAttribArray(i);
            record.buffer = null;
          }
        }
      }

      function extVAO () {
        return extensions.oes_vertex_array_object
      }

      function extInstanced () {
        return extensions.angle_instanced_arrays
      }

      function getVAO (vao) {
        if (typeof vao === 'function' && vao._vao) {
          return vao._vao
        }
        return null
      }

      function setVAOEXT (vao) {
        if (vao === state.currentVAO) {
          return
        }
        var ext = extVAO();
        if (vao) {
          ext.bindVertexArrayOES(vao.vao);
        } else {
          ext.bindVertexArrayOES(null);
        }
        state.currentVAO = vao;
      }

      function setVAOEmulated (vao) {
        if (vao === state.currentVAO) {
          return
        }
        if (vao) {
          vao.bindAttrs();
        } else {
          var exti = extInstanced();
          for (var i = 0; i < attributeBindings.length; ++i) {
            var binding = attributeBindings[i];
            if (binding.buffer) {
              gl.enableVertexAttribArray(i);
              binding.buffer.bind();
              gl.vertexAttribPointer(i, binding.size, binding.type, binding.normalized, binding.stride, binding.offfset);
              if (exti && binding.divisor) {
                exti.vertexAttribDivisorANGLE(i, binding.divisor);
              }
            } else {
              gl.disableVertexAttribArray(i);
              gl.vertexAttrib4f(i, binding.x, binding.y, binding.z, binding.w);
            }
          }
          if (drawState.elements) {
            gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER$1, drawState.elements.buffer.buffer);
          } else {
            gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER$1, null);
          }
        }
        state.currentVAO = vao;
      }

      function destroyVAOEXT () {
        values(vaoSet).forEach(function (vao) {
          vao.destroy();
        });
      }

      function REGLVAO () {
        this.id = ++vaoCount;
        this.attributes = [];
        this.elements = null;
        this.ownsElements = false;
        this.count = 0;
        this.offset = 0;
        this.instances = -1;
        this.primitive = 4;
        var extension = extVAO();
        if (extension) {
          this.vao = extension.createVertexArrayOES();
        } else {
          this.vao = null;
        }
        vaoSet[this.id] = this;
        this.buffers = [];
      }

      REGLVAO.prototype.bindAttrs = function () {
        var exti = extInstanced();
        var attributes = this.attributes;
        for (var i = 0; i < attributes.length; ++i) {
          var attr = attributes[i];
          if (attr.buffer) {
            gl.enableVertexAttribArray(i);
            gl.bindBuffer(GL_ARRAY_BUFFER$1, attr.buffer.buffer);
            gl.vertexAttribPointer(i, attr.size, attr.type, attr.normalized, attr.stride, attr.offset);
            if (exti && attr.divisor) {
              exti.vertexAttribDivisorANGLE(i, attr.divisor);
            }
          } else {
            gl.disableVertexAttribArray(i);
            gl.vertexAttrib4f(i, attr.x, attr.y, attr.z, attr.w);
          }
        }
        for (var j = attributes.length; j < NUM_ATTRIBUTES; ++j) {
          gl.disableVertexAttribArray(j);
        }
        var elements = elementState.getElements(this.elements);
        if (elements) {
          gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER$1, elements.buffer.buffer);
        } else {
          gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER$1, null);
        }
      };

      REGLVAO.prototype.refresh = function () {
        var ext = extVAO();
        if (ext) {
          ext.bindVertexArrayOES(this.vao);
          this.bindAttrs();
          state.currentVAO = null;
          ext.bindVertexArrayOES(null);
        }
      };

      REGLVAO.prototype.destroy = function () {
        if (this.vao) {
          var extension = extVAO();
          if (this === state.currentVAO) {
            state.currentVAO = null;
            extension.bindVertexArrayOES(null);
          }
          extension.deleteVertexArrayOES(this.vao);
          this.vao = null;
        }
        if (this.ownsElements) {
          this.elements.destroy();
          this.elements = null;
          this.ownsElements = false;
        }
        if (vaoSet[this.id]) {
          delete vaoSet[this.id];
          stats.vaoCount -= 1;
        }
      };

      function restoreVAO () {
        var ext = extVAO();
        if (ext) {
          values(vaoSet).forEach(function (vao) {
            vao.refresh();
          });
        }
      }

      function createVAO (_attr) {
        var vao = new REGLVAO();
        stats.vaoCount += 1;

        function updateVAO (options) {
          var attributes;
          if (Array.isArray(options)) {
            attributes = options;
            if (vao.elements && vao.ownsElements) {
              vao.elements.destroy();
            }
            vao.elements = null;
            vao.ownsElements = false;
            vao.offset = 0;
            vao.count = 0;
            vao.instances = -1;
            vao.primitive = 4;
          } else {
            check$1(typeof options === 'object', 'invalid arguments for create vao');
            check$1('attributes' in options, 'must specify attributes for vao');
            if (options.elements) {
              var elements = options.elements;
              if (vao.ownsElements) {
                if (typeof elements === 'function' && elements._reglType === 'elements') {
                  vao.elements.destroy();
                  vao.ownsElements = false;
                } else {
                  vao.elements(elements);
                  vao.ownsElements = false;
                }
              } else if (elementState.getElements(options.elements)) {
                vao.elements = options.elements;
                vao.ownsElements = false;
              } else {
                vao.elements = elementState.create(options.elements);
                vao.ownsElements = true;
              }
            } else {
              vao.elements = null;
              vao.ownsElements = false;
            }
            attributes = options.attributes;

            // set default vao
            vao.offset = 0;
            vao.count = -1;
            vao.instances = -1;
            vao.primitive = 4;

            // copy element properties
            if (vao.elements) {
              vao.count = vao.elements._elements.vertCount;
              vao.primitive = vao.elements._elements.primType;
            }

            if ('offset' in options) {
              vao.offset = options.offset | 0;
            }
            if ('count' in options) {
              vao.count = options.count | 0;
            }
            if ('instances' in options) {
              vao.instances = options.instances | 0;
            }
            if ('primitive' in options) {
              check$1(options.primitive in primTypes, 'bad primitive type: ' + options.primitive);
              vao.primitive = primTypes[options.primitive];
            }

            check$1.optional(() => {
              var keys = Object.keys(options);
              for (var i = 0; i < keys.length; ++i) {
                check$1(VAO_OPTIONS.indexOf(keys[i]) >= 0, 'invalid option for vao: "' + keys[i] + '" valid options are ' + VAO_OPTIONS);
              }
            });
            check$1(Array.isArray(attributes), 'attributes must be an array');
          }

          check$1(attributes.length < NUM_ATTRIBUTES, 'too many attributes');
          check$1(attributes.length > 0, 'must specify at least one attribute');

          var bufUpdated = {};
          var nattributes = vao.attributes;
          nattributes.length = attributes.length;
          for (var i = 0; i < attributes.length; ++i) {
            var spec = attributes[i];
            var rec = nattributes[i] = new AttributeRecord();
            var data = spec.data || spec;
            if (Array.isArray(data) || isTypedArray(data) || isNDArrayLike(data)) {
              var buf;
              if (vao.buffers[i]) {
                buf = vao.buffers[i];
                if (isTypedArray(data) && buf._buffer.byteLength >= data.byteLength) {
                  buf.subdata(data);
                } else {
                  buf.destroy();
                  vao.buffers[i] = null;
                }
              }
              if (!vao.buffers[i]) {
                buf = vao.buffers[i] = bufferState.create(spec, GL_ARRAY_BUFFER$1, false, true);
              }
              rec.buffer = bufferState.getBuffer(buf);
              rec.size = rec.buffer.dimension | 0;
              rec.normalized = false;
              rec.type = rec.buffer.dtype;
              rec.offset = 0;
              rec.stride = 0;
              rec.divisor = 0;
              rec.state = 1;
              bufUpdated[i] = 1;
            } else if (bufferState.getBuffer(spec)) {
              rec.buffer = bufferState.getBuffer(spec);
              rec.size = rec.buffer.dimension | 0;
              rec.normalized = false;
              rec.type = rec.buffer.dtype;
              rec.offset = 0;
              rec.stride = 0;
              rec.divisor = 0;
              rec.state = 1;
            } else if (bufferState.getBuffer(spec.buffer)) {
              rec.buffer = bufferState.getBuffer(spec.buffer);
              rec.size = ((+spec.size) || rec.buffer.dimension) | 0;
              rec.normalized = !!spec.normalized || false;
              if ('type' in spec) {
                check$1.parameter(spec.type, glTypes, 'invalid buffer type');
                rec.type = glTypes[spec.type];
              } else {
                rec.type = rec.buffer.dtype;
              }
              rec.offset = (spec.offset || 0) | 0;
              rec.stride = (spec.stride || 0) | 0;
              rec.divisor = (spec.divisor || 0) | 0;
              rec.state = 1;

              check$1(rec.size >= 1 && rec.size <= 4, 'size must be between 1 and 4');
              check$1(rec.offset >= 0, 'invalid offset');
              check$1(rec.stride >= 0 && rec.stride <= 255, 'stride must be between 0 and 255');
              check$1(rec.divisor >= 0, 'divisor must be positive');
              check$1(!rec.divisor || !!extensions.angle_instanced_arrays, 'ANGLE_instanced_arrays must be enabled to use divisor');
            } else if ('x' in spec) {
              check$1(i > 0, 'first attribute must not be a constant');
              rec.x = +spec.x || 0;
              rec.y = +spec.y || 0;
              rec.z = +spec.z || 0;
              rec.w = +spec.w || 0;
              rec.state = 2;
            } else {
              check$1(false, 'invalid attribute spec for location ' + i);
            }
          }

          // retire unused buffers
          for (var j = 0; j < vao.buffers.length; ++j) {
            if (!bufUpdated[j] && vao.buffers[j]) {
              vao.buffers[j].destroy();
              vao.buffers[j] = null;
            }
          }

          vao.refresh();
          return updateVAO
        }

        updateVAO.destroy = function () {
          for (var j = 0; j < vao.buffers.length; ++j) {
            if (vao.buffers[j]) {
              vao.buffers[j].destroy();
            }
          }
          vao.buffers.length = 0;

          if (vao.ownsElements) {
            vao.elements.destroy();
            vao.elements = null;
            vao.ownsElements = false;
          }

          vao.destroy();
        };

        updateVAO._vao = vao;
        updateVAO._reglType = 'vao';

        return updateVAO(_attr)
      }

      return state
    }

    var GL_FRAGMENT_SHADER = 35632;
    var GL_VERTEX_SHADER = 35633;

    var GL_ACTIVE_UNIFORMS = 0x8B86;
    var GL_ACTIVE_ATTRIBUTES = 0x8B89;

    function wrapShaderState (gl, stringStore, stats, config) {
      // ===================================================
      // glsl compilation and linking
      // ===================================================
      var fragShaders = {};
      var vertShaders = {};

      function ActiveInfo (name, id, location, info) {
        this.name = name;
        this.id = id;
        this.location = location;
        this.info = info;
      }

      function insertActiveInfo (list, info) {
        for (var i = 0; i < list.length; ++i) {
          if (list[i].id === info.id) {
            list[i].location = info.location;
            return
          }
        }
        list.push(info);
      }

      function getShader (type, id, command) {
        var cache = type === GL_FRAGMENT_SHADER ? fragShaders : vertShaders;
        var shader = cache[id];

        if (!shader) {
          var source = stringStore.str(id);
          shader = gl.createShader(type);
          gl.shaderSource(shader, source);
          gl.compileShader(shader);
          check$1.shaderError(gl, shader, source, type, command);
          cache[id] = shader;
        }

        return shader
      }

      // ===================================================
      // program linking
      // ===================================================
      var programCache = {};
      var programList = [];

      var PROGRAM_COUNTER = 0;

      function REGLProgram (fragId, vertId) {
        this.id = PROGRAM_COUNTER++;
        this.fragId = fragId;
        this.vertId = vertId;
        this.program = null;
        this.uniforms = [];
        this.attributes = [];
        this.refCount = 1;

        if (config.profile) {
          this.stats = {
            uniformsCount: 0,
            attributesCount: 0
          };
        }
      }

      function linkProgram (desc, command, attributeLocations) {
        var i, info;

        // -------------------------------
        // compile & link
        // -------------------------------
        var fragShader = getShader(GL_FRAGMENT_SHADER, desc.fragId);
        var vertShader = getShader(GL_VERTEX_SHADER, desc.vertId);

        var program = desc.program = gl.createProgram();
        gl.attachShader(program, fragShader);
        gl.attachShader(program, vertShader);
        if (attributeLocations) {
          for (i = 0; i < attributeLocations.length; ++i) {
            var binding = attributeLocations[i];
            gl.bindAttribLocation(program, binding[0], binding[1]);
          }
        }

        gl.linkProgram(program);
        check$1.linkError(
          gl,
          program,
          stringStore.str(desc.fragId),
          stringStore.str(desc.vertId),
          command);

        // -------------------------------
        // grab uniforms
        // -------------------------------
        var numUniforms = gl.getProgramParameter(program, GL_ACTIVE_UNIFORMS);
        if (config.profile) {
          desc.stats.uniformsCount = numUniforms;
        }
        var uniforms = desc.uniforms;
        for (i = 0; i < numUniforms; ++i) {
          info = gl.getActiveUniform(program, i);
          if (info) {
            if (info.size > 1) {
              for (var j = 0; j < info.size; ++j) {
                var name = info.name.replace('[0]', '[' + j + ']');
                insertActiveInfo(uniforms, new ActiveInfo(
                  name,
                  stringStore.id(name),
                  gl.getUniformLocation(program, name),
                  info));
              }
            }
            var uniName = info.name;
            if (info.size > 1) {
              uniName = uniName.replace('[0]', '');
            }
            insertActiveInfo(uniforms, new ActiveInfo(
              uniName,
              stringStore.id(uniName),
              gl.getUniformLocation(program, uniName),
              info));
          }
        }

        // -------------------------------
        // grab attributes
        // -------------------------------
        var numAttributes = gl.getProgramParameter(program, GL_ACTIVE_ATTRIBUTES);
        if (config.profile) {
          desc.stats.attributesCount = numAttributes;
        }

        var attributes = desc.attributes;
        for (i = 0; i < numAttributes; ++i) {
          info = gl.getActiveAttrib(program, i);
          if (info) {
            insertActiveInfo(attributes, new ActiveInfo(
              info.name,
              stringStore.id(info.name),
              gl.getAttribLocation(program, info.name),
              info));
          }
        }
      }

      if (config.profile) {
        stats.getMaxUniformsCount = function () {
          var m = 0;
          programList.forEach(function (desc) {
            if (desc.stats.uniformsCount > m) {
              m = desc.stats.uniformsCount;
            }
          });
          return m
        };

        stats.getMaxAttributesCount = function () {
          var m = 0;
          programList.forEach(function (desc) {
            if (desc.stats.attributesCount > m) {
              m = desc.stats.attributesCount;
            }
          });
          return m
        };
      }

      function restoreShaders () {
        fragShaders = {};
        vertShaders = {};
        for (var i = 0; i < programList.length; ++i) {
          linkProgram(programList[i], null, programList[i].attributes.map(function (info) {
            return [info.location, info.name]
          }));
        }
      }

      return {
        clear: function () {
          var deleteShader = gl.deleteShader.bind(gl);
          values(fragShaders).forEach(deleteShader);
          fragShaders = {};
          values(vertShaders).forEach(deleteShader);
          vertShaders = {};

          programList.forEach(function (desc) {
            gl.deleteProgram(desc.program);
          });
          programList.length = 0;
          programCache = {};

          stats.shaderCount = 0;
        },

        program: function (vertId, fragId, command, attribLocations) {
          check$1.command(vertId >= 0, 'missing vertex shader', command);
          check$1.command(fragId >= 0, 'missing fragment shader', command);

          var cache = programCache[fragId];
          if (!cache) {
            cache = programCache[fragId] = {};
          }
          var prevProgram = cache[vertId];
          if (prevProgram) {
            prevProgram.refCount++;
            if (!attribLocations) {
              return prevProgram
            }
          }
          var program = new REGLProgram(fragId, vertId);
          stats.shaderCount++;
          linkProgram(program, command, attribLocations);
          if (!prevProgram) {
            cache[vertId] = program;
          }
          programList.push(program);
          return extend(program, {
            destroy: function () {
              program.refCount--;
              if (program.refCount <= 0) {
                gl.deleteProgram(program.program);
                var idx = programList.indexOf(program);
                programList.splice(idx, 1);
                stats.shaderCount--;
              }
              // no program is linked to this vert anymore
              if (cache[program.vertId].refCount <= 0) {
                gl.deleteShader(vertShaders[program.vertId]);
                delete vertShaders[program.vertId];
                delete programCache[program.fragId][program.vertId];
              }
              // no program is linked to this frag anymore
              if (!Object.keys(programCache[program.fragId]).length) {
                gl.deleteShader(fragShaders[program.fragId]);
                delete fragShaders[program.fragId];
                delete programCache[program.fragId];
              }
            }
          })
        },

        restore: restoreShaders,

        shader: getShader,

        frag: -1,
        vert: -1
      }
    }

    var GL_RGBA$3 = 6408;
    var GL_UNSIGNED_BYTE$7 = 5121;
    var GL_PACK_ALIGNMENT = 0x0D05;
    var GL_FLOAT$7 = 0x1406; // 5126

    function wrapReadPixels (
      gl,
      framebufferState,
      reglPoll,
      context,
      glAttributes,
      extensions,
      limits) {
      function readPixelsImpl (input) {
        var type;
        if (framebufferState.next === null) {
          check$1(
            glAttributes.preserveDrawingBuffer,
            'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer');
          type = GL_UNSIGNED_BYTE$7;
        } else {
          check$1(
            framebufferState.next.colorAttachments[0].texture !== null,
            'You cannot read from a renderbuffer');
          type = framebufferState.next.colorAttachments[0].texture._texture.type;

          check$1.optional(function () {
            if (extensions.oes_texture_float) {
              check$1(
                type === GL_UNSIGNED_BYTE$7 || type === GL_FLOAT$7,
                'Reading from a framebuffer is only allowed for the types \'uint8\' and \'float\'');

              if (type === GL_FLOAT$7) {
                check$1(limits.readFloat, 'Reading \'float\' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float');
              }
            } else {
              check$1(
                type === GL_UNSIGNED_BYTE$7,
                'Reading from a framebuffer is only allowed for the type \'uint8\'');
            }
          });
        }

        var x = 0;
        var y = 0;
        var width = context.framebufferWidth;
        var height = context.framebufferHeight;
        var data = null;

        if (isTypedArray(input)) {
          data = input;
        } else if (input) {
          check$1.type(input, 'object', 'invalid arguments to regl.read()');
          x = input.x | 0;
          y = input.y | 0;
          check$1(
            x >= 0 && x < context.framebufferWidth,
            'invalid x offset for regl.read');
          check$1(
            y >= 0 && y < context.framebufferHeight,
            'invalid y offset for regl.read');
          width = (input.width || (context.framebufferWidth - x)) | 0;
          height = (input.height || (context.framebufferHeight - y)) | 0;
          data = input.data || null;
        }

        // sanity check input.data
        if (data) {
          if (type === GL_UNSIGNED_BYTE$7) {
            check$1(
              data instanceof Uint8Array,
              'buffer must be \'Uint8Array\' when reading from a framebuffer of type \'uint8\'');
          } else if (type === GL_FLOAT$7) {
            check$1(
              data instanceof Float32Array,
              'buffer must be \'Float32Array\' when reading from a framebuffer of type \'float\'');
          }
        }

        check$1(
          width > 0 && width + x <= context.framebufferWidth,
          'invalid width for read pixels');
        check$1(
          height > 0 && height + y <= context.framebufferHeight,
          'invalid height for read pixels');

        // Update WebGL state
        reglPoll();

        // Compute size
        var size = width * height * 4;

        // Allocate data
        if (!data) {
          if (type === GL_UNSIGNED_BYTE$7) {
            data = new Uint8Array(size);
          } else if (type === GL_FLOAT$7) {
            data = data || new Float32Array(size);
          }
        }

        // Type check
        check$1.isTypedArray(data, 'data buffer for regl.read() must be a typedarray');
        check$1(data.byteLength >= size, 'data buffer for regl.read() too small');

        // Run read pixels
        gl.pixelStorei(GL_PACK_ALIGNMENT, 4);
        gl.readPixels(x, y, width, height, GL_RGBA$3,
          type,
          data);

        return data
      }

      function readPixelsFBO (options) {
        var result;
        framebufferState.setFBO({
          framebuffer: options.framebuffer
        }, function () {
          result = readPixelsImpl(options);
        });
        return result
      }

      function readPixels (options) {
        if (!options || !('framebuffer' in options)) {
          return readPixelsImpl(options)
        } else {
          return readPixelsFBO(options)
        }
      }

      return readPixels
    }

    function slice (x) {
      return Array.prototype.slice.call(x)
    }

    function join (x) {
      return slice(x).join('')
    }

    function createEnvironment () {
      // Unique variable id counter
      var varCounter = 0;

      // Linked values are passed from this scope into the generated code block
      // Calling link() passes a value into the generated scope and returns
      // the variable name which it is bound to
      var linkedNames = [];
      var linkedValues = [];
      function link (value) {
        for (var i = 0; i < linkedValues.length; ++i) {
          if (linkedValues[i] === value) {
            return linkedNames[i]
          }
        }

        var name = 'g' + (varCounter++);
        linkedNames.push(name);
        linkedValues.push(value);
        return name
      }

      // create a code block
      function block () {
        var code = [];
        function push () {
          code.push.apply(code, slice(arguments));
        }

        var vars = [];
        function def () {
          var name = 'v' + (varCounter++);
          vars.push(name);

          if (arguments.length > 0) {
            code.push(name, '=');
            code.push.apply(code, slice(arguments));
            code.push(';');
          }

          return name
        }

        return extend(push, {
          def: def,
          toString: function () {
            return join([
              (vars.length > 0 ? 'var ' + vars.join(',') + ';' : ''),
              join(code)
            ])
          }
        })
      }

      function scope () {
        var entry = block();
        var exit = block();

        var entryToString = entry.toString;
        var exitToString = exit.toString;

        function save (object, prop) {
          exit(object, prop, '=', entry.def(object, prop), ';');
        }

        return extend(function () {
          entry.apply(entry, slice(arguments));
        }, {
          def: entry.def,
          entry: entry,
          exit: exit,
          save: save,
          set: function (object, prop, value) {
            save(object, prop);
            entry(object, prop, '=', value, ';');
          },
          toString: function () {
            return entryToString() + exitToString()
          }
        })
      }

      function conditional () {
        var pred = join(arguments);
        var thenBlock = scope();
        var elseBlock = scope();

        var thenToString = thenBlock.toString;
        var elseToString = elseBlock.toString;

        return extend(thenBlock, {
          then: function () {
            thenBlock.apply(thenBlock, slice(arguments));
            return this
          },
          else: function () {
            elseBlock.apply(elseBlock, slice(arguments));
            return this
          },
          toString: function () {
            var elseClause = elseToString();
            if (elseClause) {
              elseClause = 'else{' + elseClause + '}';
            }
            return join([
              'if(', pred, '){',
              thenToString(),
              '}', elseClause
            ])
          }
        })
      }

      // procedure list
      var globalBlock = block();
      var procedures = {};
      function proc (name, count) {
        var args = [];
        function arg () {
          var name = 'a' + args.length;
          args.push(name);
          return name
        }

        count = count || 0;
        for (var i = 0; i < count; ++i) {
          arg();
        }

        var body = scope();
        var bodyToString = body.toString;

        var result = procedures[name] = extend(body, {
          arg: arg,
          toString: function () {
            return join([
              'function(', args.join(), '){',
              bodyToString(),
              '}'
            ])
          }
        });

        return result
      }

      function compile () {
        var code = ['"use strict";',
          globalBlock,
          'return {'];
        Object.keys(procedures).forEach(function (name) {
          code.push('"', name, '":', procedures[name].toString(), ',');
        });
        code.push('}');
        var src = join(code)
          .replace(/;/g, ';\n')
          .replace(/}/g, '}\n')
          .replace(/{/g, '{\n');
        var proc = Function.apply(null, linkedNames.concat(src));
        return proc.apply(null, linkedValues)
      }

      return {
        global: globalBlock,
        link: link,
        block: block,
        proc: proc,
        scope: scope,
        cond: conditional,
        compile: compile
      }
    }

    // "cute" names for vector components
    var CUTE_COMPONENTS = 'xyzw'.split('');

    var GL_UNSIGNED_BYTE$8 = 5121;

    var ATTRIB_STATE_POINTER = 1;
    var ATTRIB_STATE_CONSTANT = 2;

    var DYN_FUNC$1 = 0;
    var DYN_PROP$1 = 1;
    var DYN_CONTEXT$1 = 2;
    var DYN_STATE$1 = 3;
    var DYN_THUNK = 4;
    var DYN_CONSTANT$1 = 5;
    var DYN_ARRAY$1 = 6;

    var S_DITHER = 'dither';
    var S_BLEND_ENABLE = 'blend.enable';
    var S_BLEND_COLOR = 'blend.color';
    var S_BLEND_EQUATION = 'blend.equation';
    var S_BLEND_FUNC = 'blend.func';
    var S_DEPTH_ENABLE = 'depth.enable';
    var S_DEPTH_FUNC = 'depth.func';
    var S_DEPTH_RANGE = 'depth.range';
    var S_DEPTH_MASK = 'depth.mask';
    var S_COLOR_MASK = 'colorMask';
    var S_CULL_ENABLE = 'cull.enable';
    var S_CULL_FACE = 'cull.face';
    var S_FRONT_FACE = 'frontFace';
    var S_LINE_WIDTH = 'lineWidth';
    var S_POLYGON_OFFSET_ENABLE = 'polygonOffset.enable';
    var S_POLYGON_OFFSET_OFFSET = 'polygonOffset.offset';
    var S_SAMPLE_ALPHA = 'sample.alpha';
    var S_SAMPLE_ENABLE = 'sample.enable';
    var S_SAMPLE_COVERAGE = 'sample.coverage';
    var S_STENCIL_ENABLE = 'stencil.enable';
    var S_STENCIL_MASK = 'stencil.mask';
    var S_STENCIL_FUNC = 'stencil.func';
    var S_STENCIL_OPFRONT = 'stencil.opFront';
    var S_STENCIL_OPBACK = 'stencil.opBack';
    var S_SCISSOR_ENABLE = 'scissor.enable';
    var S_SCISSOR_BOX = 'scissor.box';
    var S_VIEWPORT = 'viewport';

    var S_PROFILE = 'profile';

    var S_FRAMEBUFFER = 'framebuffer';
    var S_VERT = 'vert';
    var S_FRAG = 'frag';
    var S_ELEMENTS = 'elements';
    var S_PRIMITIVE = 'primitive';
    var S_COUNT = 'count';
    var S_OFFSET = 'offset';
    var S_INSTANCES = 'instances';
    var S_VAO = 'vao';

    var SUFFIX_WIDTH = 'Width';
    var SUFFIX_HEIGHT = 'Height';

    var S_FRAMEBUFFER_WIDTH = S_FRAMEBUFFER + SUFFIX_WIDTH;
    var S_FRAMEBUFFER_HEIGHT = S_FRAMEBUFFER + SUFFIX_HEIGHT;
    var S_VIEWPORT_WIDTH = S_VIEWPORT + SUFFIX_WIDTH;
    var S_VIEWPORT_HEIGHT = S_VIEWPORT + SUFFIX_HEIGHT;
    var S_DRAWINGBUFFER = 'drawingBuffer';
    var S_DRAWINGBUFFER_WIDTH = S_DRAWINGBUFFER + SUFFIX_WIDTH;
    var S_DRAWINGBUFFER_HEIGHT = S_DRAWINGBUFFER + SUFFIX_HEIGHT;

    var NESTED_OPTIONS = [
      S_BLEND_FUNC,
      S_BLEND_EQUATION,
      S_STENCIL_FUNC,
      S_STENCIL_OPFRONT,
      S_STENCIL_OPBACK,
      S_SAMPLE_COVERAGE,
      S_VIEWPORT,
      S_SCISSOR_BOX,
      S_POLYGON_OFFSET_OFFSET
    ];

    var GL_ARRAY_BUFFER$2 = 34962;
    var GL_ELEMENT_ARRAY_BUFFER$2 = 34963;

    var GL_FRAGMENT_SHADER$1 = 35632;
    var GL_VERTEX_SHADER$1 = 35633;

    var GL_TEXTURE_2D$3 = 0x0DE1;
    var GL_TEXTURE_CUBE_MAP$2 = 0x8513;

    var GL_CULL_FACE = 0x0B44;
    var GL_BLEND = 0x0BE2;
    var GL_DITHER = 0x0BD0;
    var GL_STENCIL_TEST = 0x0B90;
    var GL_DEPTH_TEST = 0x0B71;
    var GL_SCISSOR_TEST = 0x0C11;
    var GL_POLYGON_OFFSET_FILL = 0x8037;
    var GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
    var GL_SAMPLE_COVERAGE = 0x80A0;

    var GL_FLOAT$8 = 5126;
    var GL_FLOAT_VEC2 = 35664;
    var GL_FLOAT_VEC3 = 35665;
    var GL_FLOAT_VEC4 = 35666;
    var GL_INT$3 = 5124;
    var GL_INT_VEC2 = 35667;
    var GL_INT_VEC3 = 35668;
    var GL_INT_VEC4 = 35669;
    var GL_BOOL = 35670;
    var GL_BOOL_VEC2 = 35671;
    var GL_BOOL_VEC3 = 35672;
    var GL_BOOL_VEC4 = 35673;
    var GL_FLOAT_MAT2 = 35674;
    var GL_FLOAT_MAT3 = 35675;
    var GL_FLOAT_MAT4 = 35676;
    var GL_SAMPLER_2D = 35678;
    var GL_SAMPLER_CUBE = 35680;

    var GL_TRIANGLES$1 = 4;

    var GL_FRONT = 1028;
    var GL_BACK = 1029;
    var GL_CW = 0x0900;
    var GL_CCW = 0x0901;
    var GL_MIN_EXT = 0x8007;
    var GL_MAX_EXT = 0x8008;
    var GL_ALWAYS = 519;
    var GL_KEEP = 7680;
    var GL_ZERO = 0;
    var GL_ONE = 1;
    var GL_FUNC_ADD = 0x8006;
    var GL_LESS = 513;

    var GL_FRAMEBUFFER$2 = 0x8D40;
    var GL_COLOR_ATTACHMENT0$2 = 0x8CE0;

    var blendFuncs = {
      '0': 0,
      '1': 1,
      'zero': 0,
      'one': 1,
      'src color': 768,
      'one minus src color': 769,
      'src alpha': 770,
      'one minus src alpha': 771,
      'dst color': 774,
      'one minus dst color': 775,
      'dst alpha': 772,
      'one minus dst alpha': 773,
      'constant color': 32769,
      'one minus constant color': 32770,
      'constant alpha': 32771,
      'one minus constant alpha': 32772,
      'src alpha saturate': 776
    };

    // There are invalid values for srcRGB and dstRGB. See:
    // https://www.khronos.org/registry/webgl/specs/1.0/#6.13
    // https://github.com/KhronosGroup/WebGL/blob/0d3201f5f7ec3c0060bc1f04077461541f1987b9/conformance-suites/1.0.3/conformance/misc/webgl-specific.html#L56
    var invalidBlendCombinations = [
      'constant color, constant alpha',
      'one minus constant color, constant alpha',
      'constant color, one minus constant alpha',
      'one minus constant color, one minus constant alpha',
      'constant alpha, constant color',
      'constant alpha, one minus constant color',
      'one minus constant alpha, constant color',
      'one minus constant alpha, one minus constant color'
    ];

    var compareFuncs = {
      'never': 512,
      'less': 513,
      '<': 513,
      'equal': 514,
      '=': 514,
      '==': 514,
      '===': 514,
      'lequal': 515,
      '<=': 515,
      'greater': 516,
      '>': 516,
      'notequal': 517,
      '!=': 517,
      '!==': 517,
      'gequal': 518,
      '>=': 518,
      'always': 519
    };

    var stencilOps = {
      '0': 0,
      'zero': 0,
      'keep': 7680,
      'replace': 7681,
      'increment': 7682,
      'decrement': 7683,
      'increment wrap': 34055,
      'decrement wrap': 34056,
      'invert': 5386
    };

    var shaderType = {
      'frag': GL_FRAGMENT_SHADER$1,
      'vert': GL_VERTEX_SHADER$1
    };

    var orientationType = {
      'cw': GL_CW,
      'ccw': GL_CCW
    };

    function isBufferArgs (x) {
      return Array.isArray(x) ||
        isTypedArray(x) ||
        isNDArrayLike(x)
    }

    // Make sure viewport is processed first
    function sortState (state) {
      return state.sort(function (a, b) {
        if (a === S_VIEWPORT) {
          return -1
        } else if (b === S_VIEWPORT) {
          return 1
        }
        return (a < b) ? -1 : 1
      })
    }

    function Declaration (thisDep, contextDep, propDep, append) {
      this.thisDep = thisDep;
      this.contextDep = contextDep;
      this.propDep = propDep;
      this.append = append;
    }

    function isStatic (decl) {
      return decl && !(decl.thisDep || decl.contextDep || decl.propDep)
    }

    function createStaticDecl (append) {
      return new Declaration(false, false, false, append)
    }

    function createDynamicDecl (dyn, append) {
      var type = dyn.type;
      if (type === DYN_FUNC$1) {
        var numArgs = dyn.data.length;
        return new Declaration(
          true,
          numArgs >= 1,
          numArgs >= 2,
          append)
      } else if (type === DYN_THUNK) {
        var data = dyn.data;
        return new Declaration(
          data.thisDep,
          data.contextDep,
          data.propDep,
          append)
      } else if (type === DYN_CONSTANT$1) {
        return new Declaration(
          false,
          false,
          false,
          append)
      } else if (type === DYN_ARRAY$1) {
        var thisDep = false;
        var contextDep = false;
        var propDep = false;
        for (var i = 0; i < dyn.data.length; ++i) {
          var subDyn = dyn.data[i];
          if (subDyn.type === DYN_PROP$1) {
            propDep = true;
          } else if (subDyn.type === DYN_CONTEXT$1) {
            contextDep = true;
          } else if (subDyn.type === DYN_STATE$1) {
            thisDep = true;
          } else if (subDyn.type === DYN_FUNC$1) {
            thisDep = true;
            var subArgs = subDyn.data;
            if (subArgs >= 1) {
              contextDep = true;
            }
            if (subArgs >= 2) {
              propDep = true;
            }
          } else if (subDyn.type === DYN_THUNK) {
            thisDep = thisDep || subDyn.data.thisDep;
            contextDep = contextDep || subDyn.data.contextDep;
            propDep = propDep || subDyn.data.propDep;
          }
        }
        return new Declaration(
          thisDep,
          contextDep,
          propDep,
          append)
      } else {
        return new Declaration(
          type === DYN_STATE$1,
          type === DYN_CONTEXT$1,
          type === DYN_PROP$1,
          append)
      }
    }

    var SCOPE_DECL = new Declaration(false, false, false, function () {});

    function reglCore (
      gl,
      stringStore,
      extensions,
      limits,
      bufferState,
      elementState,
      textureState,
      framebufferState,
      uniformState,
      attributeState,
      shaderState,
      drawState,
      contextState,
      timer,
      config) {
      var AttributeRecord = attributeState.Record;

      var blendEquations = {
        'add': 32774,
        'subtract': 32778,
        'reverse subtract': 32779
      };
      if (extensions.ext_blend_minmax) {
        blendEquations.min = GL_MIN_EXT;
        blendEquations.max = GL_MAX_EXT;
      }

      var extInstancing = extensions.angle_instanced_arrays;
      var extDrawBuffers = extensions.webgl_draw_buffers;
      var extVertexArrays = extensions.oes_vertex_array_object;

      // ===================================================
      // ===================================================
      // WEBGL STATE
      // ===================================================
      // ===================================================
      var currentState = {
        dirty: true,
        profile: config.profile
      };
      var nextState = {};
      var GL_STATE_NAMES = [];
      var GL_FLAGS = {};
      var GL_VARIABLES = {};

      function propName (name) {
        return name.replace('.', '_')
      }

      function stateFlag (sname, cap, init) {
        var name = propName(sname);
        GL_STATE_NAMES.push(sname);
        nextState[name] = currentState[name] = !!init;
        GL_FLAGS[name] = cap;
      }

      function stateVariable (sname, func, init) {
        var name = propName(sname);
        GL_STATE_NAMES.push(sname);
        if (Array.isArray(init)) {
          currentState[name] = init.slice();
          nextState[name] = init.slice();
        } else {
          currentState[name] = nextState[name] = init;
        }
        GL_VARIABLES[name] = func;
      }

      // Dithering
      stateFlag(S_DITHER, GL_DITHER);

      // Blending
      stateFlag(S_BLEND_ENABLE, GL_BLEND);
      stateVariable(S_BLEND_COLOR, 'blendColor', [0, 0, 0, 0]);
      stateVariable(S_BLEND_EQUATION, 'blendEquationSeparate',
        [GL_FUNC_ADD, GL_FUNC_ADD]);
      stateVariable(S_BLEND_FUNC, 'blendFuncSeparate',
        [GL_ONE, GL_ZERO, GL_ONE, GL_ZERO]);

      // Depth
      stateFlag(S_DEPTH_ENABLE, GL_DEPTH_TEST, true);
      stateVariable(S_DEPTH_FUNC, 'depthFunc', GL_LESS);
      stateVariable(S_DEPTH_RANGE, 'depthRange', [0, 1]);
      stateVariable(S_DEPTH_MASK, 'depthMask', true);

      // Color mask
      stateVariable(S_COLOR_MASK, S_COLOR_MASK, [true, true, true, true]);

      // Face culling
      stateFlag(S_CULL_ENABLE, GL_CULL_FACE);
      stateVariable(S_CULL_FACE, 'cullFace', GL_BACK);

      // Front face orientation
      stateVariable(S_FRONT_FACE, S_FRONT_FACE, GL_CCW);

      // Line width
      stateVariable(S_LINE_WIDTH, S_LINE_WIDTH, 1);

      // Polygon offset
      stateFlag(S_POLYGON_OFFSET_ENABLE, GL_POLYGON_OFFSET_FILL);
      stateVariable(S_POLYGON_OFFSET_OFFSET, 'polygonOffset', [0, 0]);

      // Sample coverage
      stateFlag(S_SAMPLE_ALPHA, GL_SAMPLE_ALPHA_TO_COVERAGE);
      stateFlag(S_SAMPLE_ENABLE, GL_SAMPLE_COVERAGE);
      stateVariable(S_SAMPLE_COVERAGE, 'sampleCoverage', [1, false]);

      // Stencil
      stateFlag(S_STENCIL_ENABLE, GL_STENCIL_TEST);
      stateVariable(S_STENCIL_MASK, 'stencilMask', -1);
      stateVariable(S_STENCIL_FUNC, 'stencilFunc', [GL_ALWAYS, 0, -1]);
      stateVariable(S_STENCIL_OPFRONT, 'stencilOpSeparate',
        [GL_FRONT, GL_KEEP, GL_KEEP, GL_KEEP]);
      stateVariable(S_STENCIL_OPBACK, 'stencilOpSeparate',
        [GL_BACK, GL_KEEP, GL_KEEP, GL_KEEP]);

      // Scissor
      stateFlag(S_SCISSOR_ENABLE, GL_SCISSOR_TEST);
      stateVariable(S_SCISSOR_BOX, 'scissor',
        [0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight]);

      // Viewport
      stateVariable(S_VIEWPORT, S_VIEWPORT,
        [0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight]);

      // ===================================================
      // ===================================================
      // ENVIRONMENT
      // ===================================================
      // ===================================================
      var sharedState = {
        gl: gl,
        context: contextState,
        strings: stringStore,
        next: nextState,
        current: currentState,
        draw: drawState,
        elements: elementState,
        buffer: bufferState,
        shader: shaderState,
        attributes: attributeState.state,
        vao: attributeState,
        uniforms: uniformState,
        framebuffer: framebufferState,
        extensions: extensions,

        timer: timer,
        isBufferArgs: isBufferArgs
      };

      var sharedConstants = {
        primTypes: primTypes,
        compareFuncs: compareFuncs,
        blendFuncs: blendFuncs,
        blendEquations: blendEquations,
        stencilOps: stencilOps,
        glTypes: glTypes,
        orientationType: orientationType
      };

      check$1.optional(function () {
        sharedState.isArrayLike = isArrayLike;
      });

      if (extDrawBuffers) {
        sharedConstants.backBuffer = [GL_BACK];
        sharedConstants.drawBuffer = loop(limits.maxDrawbuffers, function (i) {
          if (i === 0) {
            return [0]
          }
          return loop(i, function (j) {
            return GL_COLOR_ATTACHMENT0$2 + j
          })
        });
      }

      var drawCallCounter = 0;
      function createREGLEnvironment () {
        var env = createEnvironment();
        var link = env.link;
        var global = env.global;
        env.id = drawCallCounter++;

        env.batchId = '0';

        // link shared state
        var SHARED = link(sharedState);
        var shared = env.shared = {
          props: 'a0'
        };
        Object.keys(sharedState).forEach(function (prop) {
          shared[prop] = global.def(SHARED, '.', prop);
        });

        // Inject runtime assertion stuff for debug builds
        check$1.optional(function () {
          env.CHECK = link(check$1);
          env.commandStr = check$1.guessCommand();
          env.command = link(env.commandStr);
          env.assert = function (block, pred, message) {
            block(
              'if(!(', pred, '))',
              this.CHECK, '.commandRaise(', link(message), ',', this.command, ');');
          };

          sharedConstants.invalidBlendCombinations = invalidBlendCombinations;
        });

        // Copy GL state variables over
        var nextVars = env.next = {};
        var currentVars = env.current = {};
        Object.keys(GL_VARIABLES).forEach(function (variable) {
          if (Array.isArray(currentState[variable])) {
            nextVars[variable] = global.def(shared.next, '.', variable);
            currentVars[variable] = global.def(shared.current, '.', variable);
          }
        });

        // Initialize shared constants
        var constants = env.constants = {};
        Object.keys(sharedConstants).forEach(function (name) {
          constants[name] = global.def(JSON.stringify(sharedConstants[name]));
        });

        // Helper function for calling a block
        env.invoke = function (block, x) {
          switch (x.type) {
            case DYN_FUNC$1:
              var argList = [
                'this',
                shared.context,
                shared.props,
                env.batchId
              ];
              return block.def(
                link(x.data), '.call(',
                argList.slice(0, Math.max(x.data.length + 1, 4)),
                ')')
            case DYN_PROP$1:
              return block.def(shared.props, x.data)
            case DYN_CONTEXT$1:
              return block.def(shared.context, x.data)
            case DYN_STATE$1:
              return block.def('this', x.data)
            case DYN_THUNK:
              x.data.append(env, block);
              return x.data.ref
            case DYN_CONSTANT$1:
              return x.data.toString()
            case DYN_ARRAY$1:
              return x.data.map(function (y) {
                return env.invoke(block, y)
              })
          }
        };

        env.attribCache = {};

        var scopeAttribs = {};
        env.scopeAttrib = function (name) {
          var id = stringStore.id(name);
          if (id in scopeAttribs) {
            return scopeAttribs[id]
          }
          var binding = attributeState.scope[id];
          if (!binding) {
            binding = attributeState.scope[id] = new AttributeRecord();
          }
          var result = scopeAttribs[id] = link(binding);
          return result
        };

        return env
      }

      // ===================================================
      // ===================================================
      // PARSING
      // ===================================================
      // ===================================================
      function parseProfile (options) {
        var staticOptions = options.static;
        var dynamicOptions = options.dynamic;

        var profileEnable;
        if (S_PROFILE in staticOptions) {
          var value = !!staticOptions[S_PROFILE];
          profileEnable = createStaticDecl(function (env, scope) {
            return value
          });
          profileEnable.enable = value;
        } else if (S_PROFILE in dynamicOptions) {
          var dyn = dynamicOptions[S_PROFILE];
          profileEnable = createDynamicDecl(dyn, function (env, scope) {
            return env.invoke(scope, dyn)
          });
        }

        return profileEnable
      }

      function parseFramebuffer (options, env) {
        var staticOptions = options.static;
        var dynamicOptions = options.dynamic;

        if (S_FRAMEBUFFER in staticOptions) {
          var framebuffer = staticOptions[S_FRAMEBUFFER];
          if (framebuffer) {
            framebuffer = framebufferState.getFramebuffer(framebuffer);
            check$1.command(framebuffer, 'invalid framebuffer object');
            return createStaticDecl(function (env, block) {
              var FRAMEBUFFER = env.link(framebuffer);
              var shared = env.shared;
              block.set(
                shared.framebuffer,
                '.next',
                FRAMEBUFFER);
              var CONTEXT = shared.context;
              block.set(
                CONTEXT,
                '.' + S_FRAMEBUFFER_WIDTH,
                FRAMEBUFFER + '.width');
              block.set(
                CONTEXT,
                '.' + S_FRAMEBUFFER_HEIGHT,
                FRAMEBUFFER + '.height');
              return FRAMEBUFFER
            })
          } else {
            return createStaticDecl(function (env, scope) {
              var shared = env.shared;
              scope.set(
                shared.framebuffer,
                '.next',
                'null');
              var CONTEXT = shared.context;
              scope.set(
                CONTEXT,
                '.' + S_FRAMEBUFFER_WIDTH,
                CONTEXT + '.' + S_DRAWINGBUFFER_WIDTH);
              scope.set(
                CONTEXT,
                '.' + S_FRAMEBUFFER_HEIGHT,
                CONTEXT + '.' + S_DRAWINGBUFFER_HEIGHT);
              return 'null'
            })
          }
        } else if (S_FRAMEBUFFER in dynamicOptions) {
          var dyn = dynamicOptions[S_FRAMEBUFFER];
          return createDynamicDecl(dyn, function (env, scope) {
            var FRAMEBUFFER_FUNC = env.invoke(scope, dyn);
            var shared = env.shared;
            var FRAMEBUFFER_STATE = shared.framebuffer;
            var FRAMEBUFFER = scope.def(
              FRAMEBUFFER_STATE, '.getFramebuffer(', FRAMEBUFFER_FUNC, ')');

            check$1.optional(function () {
              env.assert(scope,
                '!' + FRAMEBUFFER_FUNC + '||' + FRAMEBUFFER,
                'invalid framebuffer object');
            });

            scope.set(
              FRAMEBUFFER_STATE,
              '.next',
              FRAMEBUFFER);
            var CONTEXT = shared.context;
            scope.set(
              CONTEXT,
              '.' + S_FRAMEBUFFER_WIDTH,
              FRAMEBUFFER + '?' + FRAMEBUFFER + '.width:' +
              CONTEXT + '.' + S_DRAWINGBUFFER_WIDTH);
            scope.set(
              CONTEXT,
              '.' + S_FRAMEBUFFER_HEIGHT,
              FRAMEBUFFER +
              '?' + FRAMEBUFFER + '.height:' +
              CONTEXT + '.' + S_DRAWINGBUFFER_HEIGHT);
            return FRAMEBUFFER
          })
        } else {
          return null
        }
      }

      function parseViewportScissor (options, framebuffer, env) {
        var staticOptions = options.static;
        var dynamicOptions = options.dynamic;

        function parseBox (param) {
          if (param in staticOptions) {
            var box = staticOptions[param];
            check$1.commandType(box, 'object', 'invalid ' + param, env.commandStr);

            var isStatic = true;
            var x = box.x | 0;
            var y = box.y | 0;
            var w, h;
            if ('width' in box) {
              w = box.width | 0;
              check$1.command(w >= 0, 'invalid ' + param, env.commandStr);
            } else {
              isStatic = false;
            }
            if ('height' in box) {
              h = box.height | 0;
              check$1.command(h >= 0, 'invalid ' + param, env.commandStr);
            } else {
              isStatic = false;
            }

            return new Declaration(
              !isStatic && framebuffer && framebuffer.thisDep,
              !isStatic && framebuffer && framebuffer.contextDep,
              !isStatic && framebuffer && framebuffer.propDep,
              function (env, scope) {
                var CONTEXT = env.shared.context;
                var BOX_W = w;
                if (!('width' in box)) {
                  BOX_W = scope.def(CONTEXT, '.', S_FRAMEBUFFER_WIDTH, '-', x);
                }
                var BOX_H = h;
                if (!('height' in box)) {
                  BOX_H = scope.def(CONTEXT, '.', S_FRAMEBUFFER_HEIGHT, '-', y);
                }
                return [x, y, BOX_W, BOX_H]
              })
          } else if (param in dynamicOptions) {
            var dynBox = dynamicOptions[param];
            var result = createDynamicDecl(dynBox, function (env, scope) {
              var BOX = env.invoke(scope, dynBox);

              check$1.optional(function () {
                env.assert(scope,
                  BOX + '&&typeof ' + BOX + '==="object"',
                  'invalid ' + param);
              });

              var CONTEXT = env.shared.context;
              var BOX_X = scope.def(BOX, '.x|0');
              var BOX_Y = scope.def(BOX, '.y|0');
              var BOX_W = scope.def(
                '"width" in ', BOX, '?', BOX, '.width|0:',
                '(', CONTEXT, '.', S_FRAMEBUFFER_WIDTH, '-', BOX_X, ')');
              var BOX_H = scope.def(
                '"height" in ', BOX, '?', BOX, '.height|0:',
                '(', CONTEXT, '.', S_FRAMEBUFFER_HEIGHT, '-', BOX_Y, ')');

              check$1.optional(function () {
                env.assert(scope,
                  BOX_W + '>=0&&' +
                  BOX_H + '>=0',
                  'invalid ' + param);
              });

              return [BOX_X, BOX_Y, BOX_W, BOX_H]
            });
            if (framebuffer) {
              result.thisDep = result.thisDep || framebuffer.thisDep;
              result.contextDep = result.contextDep || framebuffer.contextDep;
              result.propDep = result.propDep || framebuffer.propDep;
            }
            return result
          } else if (framebuffer) {
            return new Declaration(
              framebuffer.thisDep,
              framebuffer.contextDep,
              framebuffer.propDep,
              function (env, scope) {
                var CONTEXT = env.shared.context;
                return [
                  0, 0,
                  scope.def(CONTEXT, '.', S_FRAMEBUFFER_WIDTH),
                  scope.def(CONTEXT, '.', S_FRAMEBUFFER_HEIGHT)]
              })
          } else {
            return null
          }
        }

        var viewport = parseBox(S_VIEWPORT);

        if (viewport) {
          var prevViewport = viewport;
          viewport = new Declaration(
            viewport.thisDep,
            viewport.contextDep,
            viewport.propDep,
            function (env, scope) {
              var VIEWPORT = prevViewport.append(env, scope);
              var CONTEXT = env.shared.context;
              scope.set(
                CONTEXT,
                '.' + S_VIEWPORT_WIDTH,
                VIEWPORT[2]);
              scope.set(
                CONTEXT,
                '.' + S_VIEWPORT_HEIGHT,
                VIEWPORT[3]);
              return VIEWPORT
            });
        }

        return {
          viewport: viewport,
          scissor_box: parseBox(S_SCISSOR_BOX)
        }
      }

      function parseAttribLocations (options, attributes) {
        var staticOptions = options.static;
        var staticProgram =
          typeof staticOptions[S_FRAG] === 'string' &&
          typeof staticOptions[S_VERT] === 'string';
        if (staticProgram) {
          if (Object.keys(attributes.dynamic).length > 0) {
            return null
          }
          var staticAttributes = attributes.static;
          var sAttributes = Object.keys(staticAttributes);
          if (sAttributes.length > 0 && typeof staticAttributes[sAttributes[0]] === 'number') {
            var bindings = [];
            for (var i = 0; i < sAttributes.length; ++i) {
              check$1(typeof staticAttributes[sAttributes[i]] === 'number', 'must specify all vertex attribute locations when using vaos');
              bindings.push([staticAttributes[sAttributes[i]] | 0, sAttributes[i]]);
            }
            return bindings
          }
        }
        return null
      }

      function parseProgram (options, env, attribLocations) {
        var staticOptions = options.static;
        var dynamicOptions = options.dynamic;

        function parseShader (name) {
          if (name in staticOptions) {
            var id = stringStore.id(staticOptions[name]);
            check$1.optional(function () {
              shaderState.shader(shaderType[name], id, check$1.guessCommand());
            });
            var result = createStaticDecl(function () {
              return id
            });
            result.id = id;
            return result
          } else if (name in dynamicOptions) {
            var dyn = dynamicOptions[name];
            return createDynamicDecl(dyn, function (env, scope) {
              var str = env.invoke(scope, dyn);
              var id = scope.def(env.shared.strings, '.id(', str, ')');
              check$1.optional(function () {
                scope(
                  env.shared.shader, '.shader(',
                  shaderType[name], ',',
                  id, ',',
                  env.command, ');');
              });
              return id
            })
          }
          return null
        }

        var frag = parseShader(S_FRAG);
        var vert = parseShader(S_VERT);

        var program = null;
        var progVar;
        if (isStatic(frag) && isStatic(vert)) {
          program = shaderState.program(vert.id, frag.id, null, attribLocations);
          progVar = createStaticDecl(function (env, scope) {
            return env.link(program)
          });
        } else {
          progVar = new Declaration(
            (frag && frag.thisDep) || (vert && vert.thisDep),
            (frag && frag.contextDep) || (vert && vert.contextDep),
            (frag && frag.propDep) || (vert && vert.propDep),
            function (env, scope) {
              var SHADER_STATE = env.shared.shader;
              var fragId;
              if (frag) {
                fragId = frag.append(env, scope);
              } else {
                fragId = scope.def(SHADER_STATE, '.', S_FRAG);
              }
              var vertId;
              if (vert) {
                vertId = vert.append(env, scope);
              } else {
                vertId = scope.def(SHADER_STATE, '.', S_VERT);
              }
              var progDef = SHADER_STATE + '.program(' + vertId + ',' + fragId;
              check$1.optional(function () {
                progDef += ',' + env.command;
              });
              return scope.def(progDef + ')')
            });
        }

        return {
          frag: frag,
          vert: vert,
          progVar: progVar,
          program: program
        }
      }

      function parseDraw (options, env) {
        var staticOptions = options.static;
        var dynamicOptions = options.dynamic;

        // TODO: should use VAO to get default values for offset properties
        // should move vao parse into here and out of the old stuff

        var staticDraw = {};
        var vaoActive = false;

        function parseVAO () {
          if (S_VAO in staticOptions) {
            var vao = staticOptions[S_VAO];
            if (vao !== null && attributeState.getVAO(vao) === null) {
              vao = attributeState.createVAO(vao);
            }

            vaoActive = true;
            staticDraw.vao = vao;

            return createStaticDecl(function (env) {
              var vaoRef = attributeState.getVAO(vao);
              if (vaoRef) {
                return env.link(vaoRef)
              } else {
                return 'null'
              }
            })
          } else if (S_VAO in dynamicOptions) {
            vaoActive = true;
            var dyn = dynamicOptions[S_VAO];
            return createDynamicDecl(dyn, function (env, scope) {
              var vaoRef = env.invoke(scope, dyn);
              return scope.def(env.shared.vao + '.getVAO(' + vaoRef + ')')
            })
          }
          return null
        }

        var vao = parseVAO();

        var elementsActive = false;

        function parseElements () {
          if (S_ELEMENTS in staticOptions) {
            var elements = staticOptions[S_ELEMENTS];
            staticDraw.elements = elements;
            if (isBufferArgs(elements)) {
              var e = staticDraw.elements = elementState.create(elements, true);
              elements = elementState.getElements(e);
              elementsActive = true;
            } else if (elements) {
              elements = elementState.getElements(elements);
              elementsActive = true;
              check$1.command(elements, 'invalid elements', env.commandStr);
            }

            var result = createStaticDecl(function (env, scope) {
              if (elements) {
                var result = env.link(elements);
                env.ELEMENTS = result;
                return result
              }
              env.ELEMENTS = null;
              return null
            });
            result.value = elements;
            return result
          } else if (S_ELEMENTS in dynamicOptions) {
            elementsActive = true;

            var dyn = dynamicOptions[S_ELEMENTS];
            return createDynamicDecl(dyn, function (env, scope) {
              var shared = env.shared;

              var IS_BUFFER_ARGS = shared.isBufferArgs;
              var ELEMENT_STATE = shared.elements;

              var elementDefn = env.invoke(scope, dyn);
              var elements = scope.def('null');
              var elementStream = scope.def(IS_BUFFER_ARGS, '(', elementDefn, ')');

              var ifte = env.cond(elementStream)
                .then(elements, '=', ELEMENT_STATE, '.createStream(', elementDefn, ');')
                .else(elements, '=', ELEMENT_STATE, '.getElements(', elementDefn, ');');

              check$1.optional(function () {
                env.assert(ifte.else,
                  '!' + elementDefn + '||' + elements,
                  'invalid elements');
              });

              scope.entry(ifte);
              scope.exit(
                env.cond(elementStream)
                  .then(ELEMENT_STATE, '.destroyStream(', elements, ');'));

              env.ELEMENTS = elements;

              return elements
            })
          } else if (vaoActive) {
            return new Declaration(
              vao.thisDep,
              vao.contextDep,
              vao.propDep,
              function (env, scope) {
                return scope.def(env.shared.vao + '.currentVAO?' + env.shared.elements + '.getElements(' + env.shared.vao + '.currentVAO.elements):null')
              })
          }
          return null
        }

        var elements = parseElements();

        function parsePrimitive () {
          if (S_PRIMITIVE in staticOptions) {
            var primitive = staticOptions[S_PRIMITIVE];
            staticDraw.primitive = primitive;
            check$1.commandParameter(primitive, primTypes, 'invalid primitve', env.commandStr);
            return createStaticDecl(function (env, scope) {
              return primTypes[primitive]
            })
          } else if (S_PRIMITIVE in dynamicOptions) {
            var dynPrimitive = dynamicOptions[S_PRIMITIVE];
            return createDynamicDecl(dynPrimitive, function (env, scope) {
              var PRIM_TYPES = env.constants.primTypes;
              var prim = env.invoke(scope, dynPrimitive);
              check$1.optional(function () {
                env.assert(scope,
                  prim + ' in ' + PRIM_TYPES,
                  'invalid primitive, must be one of ' + Object.keys(primTypes));
              });
              return scope.def(PRIM_TYPES, '[', prim, ']')
            })
          } else if (elementsActive) {
            if (isStatic(elements)) {
              if (elements.value) {
                return createStaticDecl(function (env, scope) {
                  return scope.def(env.ELEMENTS, '.primType')
                })
              } else {
                return createStaticDecl(function () {
                  return GL_TRIANGLES$1
                })
              }
            } else {
              return new Declaration(
                elements.thisDep,
                elements.contextDep,
                elements.propDep,
                function (env, scope) {
                  var elements = env.ELEMENTS;
                  return scope.def(elements, '?', elements, '.primType:', GL_TRIANGLES$1)
                })
            }
          } else if (vaoActive) {
            return new Declaration(
              vao.thisDep,
              vao.contextDep,
              vao.propDep,
              function (env, scope) {
                return scope.def(env.shared.vao + '.currentVAO?' + env.shared.vao + '.currentVAO.primitive:' + GL_TRIANGLES$1)
              })
          }
          return null
        }

        function parseParam (param, isOffset) {
          if (param in staticOptions) {
            var value = staticOptions[param] | 0;
            if (isOffset) {
              staticDraw.offset = value;
            } else {
              staticDraw.instances = value;
            }
            check$1.command(!isOffset || value >= 0, 'invalid ' + param, env.commandStr);
            return createStaticDecl(function (env, scope) {
              if (isOffset) {
                env.OFFSET = value;
              }
              return value
            })
          } else if (param in dynamicOptions) {
            var dynValue = dynamicOptions[param];
            return createDynamicDecl(dynValue, function (env, scope) {
              var result = env.invoke(scope, dynValue);
              if (isOffset) {
                env.OFFSET = result;
                check$1.optional(function () {
                  env.assert(scope,
                    result + '>=0',
                    'invalid ' + param);
                });
              }
              return result
            })
          } else if (isOffset) {
            if (elementsActive) {
              return createStaticDecl(function (env, scope) {
                env.OFFSET = 0;
                return 0
              })
            } else if (vaoActive) {
              return new Declaration(
                vao.thisDep,
                vao.contextDep,
                vao.propDep,
                function (env, scope) {
                  return scope.def(env.shared.vao + '.currentVAO?' + env.shared.vao + '.currentVAO.offset:0')
                })
            }
          } else if (vaoActive) {
            return new Declaration(
              vao.thisDep,
              vao.contextDep,
              vao.propDep,
              function (env, scope) {
                return scope.def(env.shared.vao + '.currentVAO?' + env.shared.vao + '.currentVAO.instances:-1')
              })
          }
          return null
        }

        var OFFSET = parseParam(S_OFFSET, true);

        function parseVertCount () {
          if (S_COUNT in staticOptions) {
            var count = staticOptions[S_COUNT] | 0;
            staticDraw.count = count;
            check$1.command(
              typeof count === 'number' && count >= 0, 'invalid vertex count', env.commandStr);
            return createStaticDecl(function () {
              return count
            })
          } else if (S_COUNT in dynamicOptions) {
            var dynCount = dynamicOptions[S_COUNT];
            return createDynamicDecl(dynCount, function (env, scope) {
              var result = env.invoke(scope, dynCount);
              check$1.optional(function () {
                env.assert(scope,
                  'typeof ' + result + '==="number"&&' +
                  result + '>=0&&' +
                  result + '===(' + result + '|0)',
                  'invalid vertex count');
              });
              return result
            })
          } else if (elementsActive) {
            if (isStatic(elements)) {
              if (elements) {
                if (OFFSET) {
                  return new Declaration(
                    OFFSET.thisDep,
                    OFFSET.contextDep,
                    OFFSET.propDep,
                    function (env, scope) {
                      var result = scope.def(
                        env.ELEMENTS, '.vertCount-', env.OFFSET);

                      check$1.optional(function () {
                        env.assert(scope,
                          result + '>=0',
                          'invalid vertex offset/element buffer too small');
                      });

                      return result
                    })
                } else {
                  return createStaticDecl(function (env, scope) {
                    return scope.def(env.ELEMENTS, '.vertCount')
                  })
                }
              } else {
                var result = createStaticDecl(function () {
                  return -1
                });
                check$1.optional(function () {
                  result.MISSING = true;
                });
                return result
              }
            } else {
              var variable = new Declaration(
                elements.thisDep || OFFSET.thisDep,
                elements.contextDep || OFFSET.contextDep,
                elements.propDep || OFFSET.propDep,
                function (env, scope) {
                  var elements = env.ELEMENTS;
                  if (env.OFFSET) {
                    return scope.def(elements, '?', elements, '.vertCount-',
                      env.OFFSET, ':-1')
                  }
                  return scope.def(elements, '?', elements, '.vertCount:-1')
                });
              check$1.optional(function () {
                variable.DYNAMIC = true;
              });
              return variable
            }
          } else if (vaoActive) {
            var countVariable = new Declaration(
              vao.thisDep,
              vao.contextDep,
              vao.propDep,
              function (env, scope) {
                return scope.def(env.shared.vao, '.currentVAO?', env.shared.vao, '.currentVAO.count:-1')
              });
            return countVariable
          }
          return null
        }

        var primitive = parsePrimitive();
        var count = parseVertCount();
        var instances = parseParam(S_INSTANCES, false);

        return {
          elements: elements,
          primitive: primitive,
          count: count,
          instances: instances,
          offset: OFFSET,
          vao: vao,

          vaoActive: vaoActive,
          elementsActive: elementsActive,

          // static draw props
          static: staticDraw
        }
      }

      function parseGLState (options, env) {
        var staticOptions = options.static;
        var dynamicOptions = options.dynamic;

        var STATE = {};

        GL_STATE_NAMES.forEach(function (prop) {
          var param = propName(prop);

          function parseParam (parseStatic, parseDynamic) {
            if (prop in staticOptions) {
              var value = parseStatic(staticOptions[prop]);
              STATE[param] = createStaticDecl(function () {
                return value
              });
            } else if (prop in dynamicOptions) {
              var dyn = dynamicOptions[prop];
              STATE[param] = createDynamicDecl(dyn, function (env, scope) {
                return parseDynamic(env, scope, env.invoke(scope, dyn))
              });
            }
          }

          switch (prop) {
            case S_CULL_ENABLE:
            case S_BLEND_ENABLE:
            case S_DITHER:
            case S_STENCIL_ENABLE:
            case S_DEPTH_ENABLE:
            case S_SCISSOR_ENABLE:
            case S_POLYGON_OFFSET_ENABLE:
            case S_SAMPLE_ALPHA:
            case S_SAMPLE_ENABLE:
            case S_DEPTH_MASK:
              return parseParam(
                function (value) {
                  check$1.commandType(value, 'boolean', prop, env.commandStr);
                  return value
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      'typeof ' + value + '==="boolean"',
                      'invalid flag ' + prop, env.commandStr);
                  });
                  return value
                })

            case S_DEPTH_FUNC:
              return parseParam(
                function (value) {
                  check$1.commandParameter(value, compareFuncs, 'invalid ' + prop, env.commandStr);
                  return compareFuncs[value]
                },
                function (env, scope, value) {
                  var COMPARE_FUNCS = env.constants.compareFuncs;
                  check$1.optional(function () {
                    env.assert(scope,
                      value + ' in ' + COMPARE_FUNCS,
                      'invalid ' + prop + ', must be one of ' + Object.keys(compareFuncs));
                  });
                  return scope.def(COMPARE_FUNCS, '[', value, ']')
                })

            case S_DEPTH_RANGE:
              return parseParam(
                function (value) {
                  check$1.command(
                    isArrayLike(value) &&
                    value.length === 2 &&
                    typeof value[0] === 'number' &&
                    typeof value[1] === 'number' &&
                    value[0] <= value[1],
                    'depth range is 2d array',
                    env.commandStr);
                  return value
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      env.shared.isArrayLike + '(' + value + ')&&' +
                      value + '.length===2&&' +
                      'typeof ' + value + '[0]==="number"&&' +
                      'typeof ' + value + '[1]==="number"&&' +
                      value + '[0]<=' + value + '[1]',
                      'depth range must be a 2d array');
                  });

                  var Z_NEAR = scope.def('+', value, '[0]');
                  var Z_FAR = scope.def('+', value, '[1]');
                  return [Z_NEAR, Z_FAR]
                })

            case S_BLEND_FUNC:
              return parseParam(
                function (value) {
                  check$1.commandType(value, 'object', 'blend.func', env.commandStr);
                  var srcRGB = ('srcRGB' in value ? value.srcRGB : value.src);
                  var srcAlpha = ('srcAlpha' in value ? value.srcAlpha : value.src);
                  var dstRGB = ('dstRGB' in value ? value.dstRGB : value.dst);
                  var dstAlpha = ('dstAlpha' in value ? value.dstAlpha : value.dst);
                  check$1.commandParameter(srcRGB, blendFuncs, param + '.srcRGB', env.commandStr);
                  check$1.commandParameter(srcAlpha, blendFuncs, param + '.srcAlpha', env.commandStr);
                  check$1.commandParameter(dstRGB, blendFuncs, param + '.dstRGB', env.commandStr);
                  check$1.commandParameter(dstAlpha, blendFuncs, param + '.dstAlpha', env.commandStr);

                  check$1.command(
                    (invalidBlendCombinations.indexOf(srcRGB + ', ' + dstRGB) === -1),
                    'unallowed blending combination (srcRGB, dstRGB) = (' + srcRGB + ', ' + dstRGB + ')', env.commandStr);

                  return [
                    blendFuncs[srcRGB],
                    blendFuncs[dstRGB],
                    blendFuncs[srcAlpha],
                    blendFuncs[dstAlpha]
                  ]
                },
                function (env, scope, value) {
                  var BLEND_FUNCS = env.constants.blendFuncs;

                  check$1.optional(function () {
                    env.assert(scope,
                      value + '&&typeof ' + value + '==="object"',
                      'invalid blend func, must be an object');
                  });

                  function read (prefix, suffix) {
                    var func = scope.def(
                      '"', prefix, suffix, '" in ', value,
                      '?', value, '.', prefix, suffix,
                      ':', value, '.', prefix);

                    check$1.optional(function () {
                      env.assert(scope,
                        func + ' in ' + BLEND_FUNCS,
                        'invalid ' + prop + '.' + prefix + suffix + ', must be one of ' + Object.keys(blendFuncs));
                    });

                    return func
                  }

                  var srcRGB = read('src', 'RGB');
                  var dstRGB = read('dst', 'RGB');

                  check$1.optional(function () {
                    var INVALID_BLEND_COMBINATIONS = env.constants.invalidBlendCombinations;

                    env.assert(scope,
                      INVALID_BLEND_COMBINATIONS +
                               '.indexOf(' + srcRGB + '+", "+' + dstRGB + ') === -1 ',
                      'unallowed blending combination for (srcRGB, dstRGB)'
                    );
                  });

                  var SRC_RGB = scope.def(BLEND_FUNCS, '[', srcRGB, ']');
                  var SRC_ALPHA = scope.def(BLEND_FUNCS, '[', read('src', 'Alpha'), ']');
                  var DST_RGB = scope.def(BLEND_FUNCS, '[', dstRGB, ']');
                  var DST_ALPHA = scope.def(BLEND_FUNCS, '[', read('dst', 'Alpha'), ']');

                  return [SRC_RGB, DST_RGB, SRC_ALPHA, DST_ALPHA]
                })

            case S_BLEND_EQUATION:
              return parseParam(
                function (value) {
                  if (typeof value === 'string') {
                    check$1.commandParameter(value, blendEquations, 'invalid ' + prop, env.commandStr);
                    return [
                      blendEquations[value],
                      blendEquations[value]
                    ]
                  } else if (typeof value === 'object') {
                    check$1.commandParameter(
                      value.rgb, blendEquations, prop + '.rgb', env.commandStr);
                    check$1.commandParameter(
                      value.alpha, blendEquations, prop + '.alpha', env.commandStr);
                    return [
                      blendEquations[value.rgb],
                      blendEquations[value.alpha]
                    ]
                  } else {
                    check$1.commandRaise('invalid blend.equation', env.commandStr);
                  }
                },
                function (env, scope, value) {
                  var BLEND_EQUATIONS = env.constants.blendEquations;

                  var RGB = scope.def();
                  var ALPHA = scope.def();

                  var ifte = env.cond('typeof ', value, '==="string"');

                  check$1.optional(function () {
                    function checkProp (block, name, value) {
                      env.assert(block,
                        value + ' in ' + BLEND_EQUATIONS,
                        'invalid ' + name + ', must be one of ' + Object.keys(blendEquations));
                    }
                    checkProp(ifte.then, prop, value);

                    env.assert(ifte.else,
                      value + '&&typeof ' + value + '==="object"',
                      'invalid ' + prop);
                    checkProp(ifte.else, prop + '.rgb', value + '.rgb');
                    checkProp(ifte.else, prop + '.alpha', value + '.alpha');
                  });

                  ifte.then(
                    RGB, '=', ALPHA, '=', BLEND_EQUATIONS, '[', value, '];');
                  ifte.else(
                    RGB, '=', BLEND_EQUATIONS, '[', value, '.rgb];',
                    ALPHA, '=', BLEND_EQUATIONS, '[', value, '.alpha];');

                  scope(ifte);

                  return [RGB, ALPHA]
                })

            case S_BLEND_COLOR:
              return parseParam(
                function (value) {
                  check$1.command(
                    isArrayLike(value) &&
                    value.length === 4,
                    'blend.color must be a 4d array', env.commandStr);
                  return loop(4, function (i) {
                    return +value[i]
                  })
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      env.shared.isArrayLike + '(' + value + ')&&' +
                      value + '.length===4',
                      'blend.color must be a 4d array');
                  });
                  return loop(4, function (i) {
                    return scope.def('+', value, '[', i, ']')
                  })
                })

            case S_STENCIL_MASK:
              return parseParam(
                function (value) {
                  check$1.commandType(value, 'number', param, env.commandStr);
                  return value | 0
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      'typeof ' + value + '==="number"',
                      'invalid stencil.mask');
                  });
                  return scope.def(value, '|0')
                })

            case S_STENCIL_FUNC:
              return parseParam(
                function (value) {
                  check$1.commandType(value, 'object', param, env.commandStr);
                  var cmp = value.cmp || 'keep';
                  var ref = value.ref || 0;
                  var mask = 'mask' in value ? value.mask : -1;
                  check$1.commandParameter(cmp, compareFuncs, prop + '.cmp', env.commandStr);
                  check$1.commandType(ref, 'number', prop + '.ref', env.commandStr);
                  check$1.commandType(mask, 'number', prop + '.mask', env.commandStr);
                  return [
                    compareFuncs[cmp],
                    ref,
                    mask
                  ]
                },
                function (env, scope, value) {
                  var COMPARE_FUNCS = env.constants.compareFuncs;
                  check$1.optional(function () {
                    function assert () {
                      env.assert(scope,
                        Array.prototype.join.call(arguments, ''),
                        'invalid stencil.func');
                    }
                    assert(value + '&&typeof ', value, '==="object"');
                    assert('!("cmp" in ', value, ')||(',
                      value, '.cmp in ', COMPARE_FUNCS, ')');
                  });
                  var cmp = scope.def(
                    '"cmp" in ', value,
                    '?', COMPARE_FUNCS, '[', value, '.cmp]',
                    ':', GL_KEEP);
                  var ref = scope.def(value, '.ref|0');
                  var mask = scope.def(
                    '"mask" in ', value,
                    '?', value, '.mask|0:-1');
                  return [cmp, ref, mask]
                })

            case S_STENCIL_OPFRONT:
            case S_STENCIL_OPBACK:
              return parseParam(
                function (value) {
                  check$1.commandType(value, 'object', param, env.commandStr);
                  var fail = value.fail || 'keep';
                  var zfail = value.zfail || 'keep';
                  var zpass = value.zpass || 'keep';
                  check$1.commandParameter(fail, stencilOps, prop + '.fail', env.commandStr);
                  check$1.commandParameter(zfail, stencilOps, prop + '.zfail', env.commandStr);
                  check$1.commandParameter(zpass, stencilOps, prop + '.zpass', env.commandStr);
                  return [
                    prop === S_STENCIL_OPBACK ? GL_BACK : GL_FRONT,
                    stencilOps[fail],
                    stencilOps[zfail],
                    stencilOps[zpass]
                  ]
                },
                function (env, scope, value) {
                  var STENCIL_OPS = env.constants.stencilOps;

                  check$1.optional(function () {
                    env.assert(scope,
                      value + '&&typeof ' + value + '==="object"',
                      'invalid ' + prop);
                  });

                  function read (name) {
                    check$1.optional(function () {
                      env.assert(scope,
                        '!("' + name + '" in ' + value + ')||' +
                        '(' + value + '.' + name + ' in ' + STENCIL_OPS + ')',
                        'invalid ' + prop + '.' + name + ', must be one of ' + Object.keys(stencilOps));
                    });

                    return scope.def(
                      '"', name, '" in ', value,
                      '?', STENCIL_OPS, '[', value, '.', name, ']:',
                      GL_KEEP)
                  }

                  return [
                    prop === S_STENCIL_OPBACK ? GL_BACK : GL_FRONT,
                    read('fail'),
                    read('zfail'),
                    read('zpass')
                  ]
                })

            case S_POLYGON_OFFSET_OFFSET:
              return parseParam(
                function (value) {
                  check$1.commandType(value, 'object', param, env.commandStr);
                  var factor = value.factor | 0;
                  var units = value.units | 0;
                  check$1.commandType(factor, 'number', param + '.factor', env.commandStr);
                  check$1.commandType(units, 'number', param + '.units', env.commandStr);
                  return [factor, units]
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      value + '&&typeof ' + value + '==="object"',
                      'invalid ' + prop);
                  });

                  var FACTOR = scope.def(value, '.factor|0');
                  var UNITS = scope.def(value, '.units|0');

                  return [FACTOR, UNITS]
                })

            case S_CULL_FACE:
              return parseParam(
                function (value) {
                  var face = 0;
                  if (value === 'front') {
                    face = GL_FRONT;
                  } else if (value === 'back') {
                    face = GL_BACK;
                  }
                  check$1.command(!!face, param, env.commandStr);
                  return face
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      value + '==="front"||' +
                      value + '==="back"',
                      'invalid cull.face');
                  });
                  return scope.def(value, '==="front"?', GL_FRONT, ':', GL_BACK)
                })

            case S_LINE_WIDTH:
              return parseParam(
                function (value) {
                  check$1.command(
                    typeof value === 'number' &&
                    value >= limits.lineWidthDims[0] &&
                    value <= limits.lineWidthDims[1],
                    'invalid line width, must be a positive number between ' +
                    limits.lineWidthDims[0] + ' and ' + limits.lineWidthDims[1], env.commandStr);
                  return value
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      'typeof ' + value + '==="number"&&' +
                      value + '>=' + limits.lineWidthDims[0] + '&&' +
                      value + '<=' + limits.lineWidthDims[1],
                      'invalid line width');
                  });

                  return value
                })

            case S_FRONT_FACE:
              return parseParam(
                function (value) {
                  check$1.commandParameter(value, orientationType, param, env.commandStr);
                  return orientationType[value]
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      value + '==="cw"||' +
                      value + '==="ccw"',
                      'invalid frontFace, must be one of cw,ccw');
                  });
                  return scope.def(value + '==="cw"?' + GL_CW + ':' + GL_CCW)
                })

            case S_COLOR_MASK:
              return parseParam(
                function (value) {
                  check$1.command(
                    isArrayLike(value) && value.length === 4,
                    'color.mask must be length 4 array', env.commandStr);
                  return value.map(function (v) { return !!v })
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      env.shared.isArrayLike + '(' + value + ')&&' +
                      value + '.length===4',
                      'invalid color.mask');
                  });
                  return loop(4, function (i) {
                    return '!!' + value + '[' + i + ']'
                  })
                })

            case S_SAMPLE_COVERAGE:
              return parseParam(
                function (value) {
                  check$1.command(typeof value === 'object' && value, param, env.commandStr);
                  var sampleValue = 'value' in value ? value.value : 1;
                  var sampleInvert = !!value.invert;
                  check$1.command(
                    typeof sampleValue === 'number' &&
                    sampleValue >= 0 && sampleValue <= 1,
                    'sample.coverage.value must be a number between 0 and 1', env.commandStr);
                  return [sampleValue, sampleInvert]
                },
                function (env, scope, value) {
                  check$1.optional(function () {
                    env.assert(scope,
                      value + '&&typeof ' + value + '==="object"',
                      'invalid sample.coverage');
                  });
                  var VALUE = scope.def(
                    '"value" in ', value, '?+', value, '.value:1');
                  var INVERT = scope.def('!!', value, '.invert');
                  return [VALUE, INVERT]
                })
          }
        });

        return STATE
      }

      function parseUniforms (uniforms, env) {
        var staticUniforms = uniforms.static;
        var dynamicUniforms = uniforms.dynamic;

        var UNIFORMS = {};

        Object.keys(staticUniforms).forEach(function (name) {
          var value = staticUniforms[name];
          var result;
          if (typeof value === 'number' ||
              typeof value === 'boolean') {
            result = createStaticDecl(function () {
              return value
            });
          } else if (typeof value === 'function') {
            var reglType = value._reglType;
            if (reglType === 'texture2d' ||
                reglType === 'textureCube') {
              result = createStaticDecl(function (env) {
                return env.link(value)
              });
            } else if (reglType === 'framebuffer' ||
                       reglType === 'framebufferCube') {
              check$1.command(value.color.length > 0,
                'missing color attachment for framebuffer sent to uniform "' + name + '"', env.commandStr);
              result = createStaticDecl(function (env) {
                return env.link(value.color[0])
              });
            } else {
              check$1.commandRaise('invalid data for uniform "' + name + '"', env.commandStr);
            }
          } else if (isArrayLike(value)) {
            result = createStaticDecl(function (env) {
              var ITEM = env.global.def('[',
                loop(value.length, function (i) {
                  check$1.command(
                    typeof value[i] === 'number' ||
                    typeof value[i] === 'boolean',
                    'invalid uniform ' + name, env.commandStr);
                  return value[i]
                }), ']');
              return ITEM
            });
          } else {
            check$1.commandRaise('invalid or missing data for uniform "' + name + '"', env.commandStr);
          }
          result.value = value;
          UNIFORMS[name] = result;
        });

        Object.keys(dynamicUniforms).forEach(function (key) {
          var dyn = dynamicUniforms[key];
          UNIFORMS[key] = createDynamicDecl(dyn, function (env, scope) {
            return env.invoke(scope, dyn)
          });
        });

        return UNIFORMS
      }

      function parseAttributes (attributes, env) {
        var staticAttributes = attributes.static;
        var dynamicAttributes = attributes.dynamic;

        var attributeDefs = {};

        Object.keys(staticAttributes).forEach(function (attribute) {
          var value = staticAttributes[attribute];
          var id = stringStore.id(attribute);

          var record = new AttributeRecord();
          if (isBufferArgs(value)) {
            record.state = ATTRIB_STATE_POINTER;
            record.buffer = bufferState.getBuffer(
              bufferState.create(value, GL_ARRAY_BUFFER$2, false, true));
            record.type = 0;
          } else {
            var buffer = bufferState.getBuffer(value);
            if (buffer) {
              record.state = ATTRIB_STATE_POINTER;
              record.buffer = buffer;
              record.type = 0;
            } else {
              check$1.command(typeof value === 'object' && value,
                'invalid data for attribute ' + attribute, env.commandStr);
              if ('constant' in value) {
                var constant = value.constant;
                record.buffer = 'null';
                record.state = ATTRIB_STATE_CONSTANT;
                if (typeof constant === 'number') {
                  record.x = constant;
                } else {
                  check$1.command(
                    isArrayLike(constant) &&
                    constant.length > 0 &&
                    constant.length <= 4,
                    'invalid constant for attribute ' + attribute, env.commandStr);
                  CUTE_COMPONENTS.forEach(function (c, i) {
                    if (i < constant.length) {
                      record[c] = constant[i];
                    }
                  });
                }
              } else {
                if (isBufferArgs(value.buffer)) {
                  buffer = bufferState.getBuffer(
                    bufferState.create(value.buffer, GL_ARRAY_BUFFER$2, false, true));
                } else {
                  buffer = bufferState.getBuffer(value.buffer);
                }
                check$1.command(!!buffer, 'missing buffer for attribute "' + attribute + '"', env.commandStr);

                var offset = value.offset | 0;
                check$1.command(offset >= 0,
                  'invalid offset for attribute "' + attribute + '"', env.commandStr);

                var stride = value.stride | 0;
                check$1.command(stride >= 0 && stride < 256,
                  'invalid stride for attribute "' + attribute + '", must be integer betweeen [0, 255]', env.commandStr);

                var size = value.size | 0;
                check$1.command(!('size' in value) || (size > 0 && size <= 4),
                  'invalid size for attribute "' + attribute + '", must be 1,2,3,4', env.commandStr);

                var normalized = !!value.normalized;

                var type = 0;
                if ('type' in value) {
                  check$1.commandParameter(
                    value.type, glTypes,
                    'invalid type for attribute ' + attribute, env.commandStr);
                  type = glTypes[value.type];
                }

                var divisor = value.divisor | 0;
                check$1.optional(function () {
                  if ('divisor' in value) {
                    check$1.command(divisor === 0 || extInstancing,
                      'cannot specify divisor for attribute "' + attribute + '", instancing not supported', env.commandStr);
                    check$1.command(divisor >= 0,
                      'invalid divisor for attribute "' + attribute + '"', env.commandStr);
                  }

                  var command = env.commandStr;

                  var VALID_KEYS = [
                    'buffer',
                    'offset',
                    'divisor',
                    'normalized',
                    'type',
                    'size',
                    'stride'
                  ];

                  Object.keys(value).forEach(function (prop) {
                    check$1.command(
                      VALID_KEYS.indexOf(prop) >= 0,
                      'unknown parameter "' + prop + '" for attribute pointer "' + attribute + '" (valid parameters are ' + VALID_KEYS + ')',
                      command);
                  });
                });

                record.buffer = buffer;
                record.state = ATTRIB_STATE_POINTER;
                record.size = size;
                record.normalized = normalized;
                record.type = type || buffer.dtype;
                record.offset = offset;
                record.stride = stride;
                record.divisor = divisor;
              }
            }
          }

          attributeDefs[attribute] = createStaticDecl(function (env, scope) {
            var cache = env.attribCache;
            if (id in cache) {
              return cache[id]
            }
            var result = {
              isStream: false
            };
            Object.keys(record).forEach(function (key) {
              result[key] = record[key];
            });
            if (record.buffer) {
              result.buffer = env.link(record.buffer);
              result.type = result.type || (result.buffer + '.dtype');
            }
            cache[id] = result;
            return result
          });
        });

        Object.keys(dynamicAttributes).forEach(function (attribute) {
          var dyn = dynamicAttributes[attribute];

          function appendAttributeCode (env, block) {
            var VALUE = env.invoke(block, dyn);

            var shared = env.shared;
            var constants = env.constants;

            var IS_BUFFER_ARGS = shared.isBufferArgs;
            var BUFFER_STATE = shared.buffer;

            // Perform validation on attribute
            check$1.optional(function () {
              env.assert(block,
                VALUE + '&&(typeof ' + VALUE + '==="object"||typeof ' +
                VALUE + '==="function")&&(' +
                IS_BUFFER_ARGS + '(' + VALUE + ')||' +
                BUFFER_STATE + '.getBuffer(' + VALUE + ')||' +
                BUFFER_STATE + '.getBuffer(' + VALUE + '.buffer)||' +
                IS_BUFFER_ARGS + '(' + VALUE + '.buffer)||' +
                '("constant" in ' + VALUE +
                '&&(typeof ' + VALUE + '.constant==="number"||' +
                shared.isArrayLike + '(' + VALUE + '.constant))))',
                'invalid dynamic attribute "' + attribute + '"');
            });

            // allocate names for result
            var result = {
              isStream: block.def(false)
            };
            var defaultRecord = new AttributeRecord();
            defaultRecord.state = ATTRIB_STATE_POINTER;
            Object.keys(defaultRecord).forEach(function (key) {
              result[key] = block.def('' + defaultRecord[key]);
            });

            var BUFFER = result.buffer;
            var TYPE = result.type;
            block(
              'if(', IS_BUFFER_ARGS, '(', VALUE, ')){',
              result.isStream, '=true;',
              BUFFER, '=', BUFFER_STATE, '.createStream(', GL_ARRAY_BUFFER$2, ',', VALUE, ');',
              TYPE, '=', BUFFER, '.dtype;',
              '}else{',
              BUFFER, '=', BUFFER_STATE, '.getBuffer(', VALUE, ');',
              'if(', BUFFER, '){',
              TYPE, '=', BUFFER, '.dtype;',
              '}else if("constant" in ', VALUE, '){',
              result.state, '=', ATTRIB_STATE_CONSTANT, ';',
              'if(typeof ' + VALUE + '.constant === "number"){',
              result[CUTE_COMPONENTS[0]], '=', VALUE, '.constant;',
              CUTE_COMPONENTS.slice(1).map(function (n) {
                return result[n]
              }).join('='), '=0;',
              '}else{',
              CUTE_COMPONENTS.map(function (name, i) {
                return (
                  result[name] + '=' + VALUE + '.constant.length>' + i +
                  '?' + VALUE + '.constant[' + i + ']:0;'
                )
              }).join(''),
              '}}else{',
              'if(', IS_BUFFER_ARGS, '(', VALUE, '.buffer)){',
              BUFFER, '=', BUFFER_STATE, '.createStream(', GL_ARRAY_BUFFER$2, ',', VALUE, '.buffer);',
              '}else{',
              BUFFER, '=', BUFFER_STATE, '.getBuffer(', VALUE, '.buffer);',
              '}',
              TYPE, '="type" in ', VALUE, '?',
              constants.glTypes, '[', VALUE, '.type]:', BUFFER, '.dtype;',
              result.normalized, '=!!', VALUE, '.normalized;');
            function emitReadRecord (name) {
              block(result[name], '=', VALUE, '.', name, '|0;');
            }
            emitReadRecord('size');
            emitReadRecord('offset');
            emitReadRecord('stride');
            emitReadRecord('divisor');

            block('}}');

            block.exit(
              'if(', result.isStream, '){',
              BUFFER_STATE, '.destroyStream(', BUFFER, ');',
              '}');

            return result
          }

          attributeDefs[attribute] = createDynamicDecl(dyn, appendAttributeCode);
        });

        return attributeDefs
      }

      function parseContext (context) {
        var staticContext = context.static;
        var dynamicContext = context.dynamic;
        var result = {};

        Object.keys(staticContext).forEach(function (name) {
          var value = staticContext[name];
          result[name] = createStaticDecl(function (env, scope) {
            if (typeof value === 'number' || typeof value === 'boolean') {
              return '' + value
            } else {
              return env.link(value)
            }
          });
        });

        Object.keys(dynamicContext).forEach(function (name) {
          var dyn = dynamicContext[name];
          result[name] = createDynamicDecl(dyn, function (env, scope) {
            return env.invoke(scope, dyn)
          });
        });

        return result
      }

      function parseArguments (options, attributes, uniforms, context, env) {
        var staticOptions = options.static;
        var dynamicOptions = options.dynamic;

        check$1.optional(function () {
          var KEY_NAMES = [
            S_FRAMEBUFFER,
            S_VERT,
            S_FRAG,
            S_ELEMENTS,
            S_PRIMITIVE,
            S_OFFSET,
            S_COUNT,
            S_INSTANCES,
            S_PROFILE,
            S_VAO
          ].concat(GL_STATE_NAMES);

          function checkKeys (dict) {
            Object.keys(dict).forEach(function (key) {
              check$1.command(
                KEY_NAMES.indexOf(key) >= 0,
                'unknown parameter "' + key + '"',
                env.commandStr);
            });
          }

          checkKeys(staticOptions);
          checkKeys(dynamicOptions);
        });

        var attribLocations = parseAttribLocations(options, attributes);

        var framebuffer = parseFramebuffer(options);
        var viewportAndScissor = parseViewportScissor(options, framebuffer, env);
        var draw = parseDraw(options, env);
        var state = parseGLState(options, env);
        var shader = parseProgram(options, env, attribLocations);

        function copyBox (name) {
          var defn = viewportAndScissor[name];
          if (defn) {
            state[name] = defn;
          }
        }
        copyBox(S_VIEWPORT);
        copyBox(propName(S_SCISSOR_BOX));

        var dirty = Object.keys(state).length > 0;

        var result = {
          framebuffer: framebuffer,
          draw: draw,
          shader: shader,
          state: state,
          dirty: dirty,
          scopeVAO: null,
          drawVAO: null,
          useVAO: false,
          attributes: {}
        };

        result.profile = parseProfile(options);
        result.uniforms = parseUniforms(uniforms, env);
        result.drawVAO = result.scopeVAO = draw.vao;
        // special case: check if we can statically allocate a vertex array object for this program
        if (!result.drawVAO &&
          shader.program &&
          !attribLocations &&
          extensions.angle_instanced_arrays &&
          draw.static.elements) {
          var useVAO = true;
          var staticBindings = shader.program.attributes.map(function (attr) {
            var binding = attributes.static[attr];
            useVAO = useVAO && !!binding;
            return binding
          });
          if (useVAO && staticBindings.length > 0) {
            var vao = attributeState.getVAO(attributeState.createVAO({
              attributes: staticBindings,
              elements: draw.static.elements
            }));
            result.drawVAO = new Declaration(null, null, null, function (env, scope) {
              return env.link(vao)
            });
            result.useVAO = true;
          }
        }
        if (attribLocations) {
          result.useVAO = true;
        } else {
          result.attributes = parseAttributes(attributes, env);
        }
        result.context = parseContext(context);
        return result
      }

      // ===================================================
      // ===================================================
      // COMMON UPDATE FUNCTIONS
      // ===================================================
      // ===================================================
      function emitContext (env, scope, context) {
        var shared = env.shared;
        var CONTEXT = shared.context;

        var contextEnter = env.scope();

        Object.keys(context).forEach(function (name) {
          scope.save(CONTEXT, '.' + name);
          var defn = context[name];
          var value = defn.append(env, scope);
          if (Array.isArray(value)) {
            contextEnter(CONTEXT, '.', name, '=[', value.join(), '];');
          } else {
            contextEnter(CONTEXT, '.', name, '=', value, ';');
          }
        });

        scope(contextEnter);
      }

      // ===================================================
      // ===================================================
      // COMMON DRAWING FUNCTIONS
      // ===================================================
      // ===================================================
      function emitPollFramebuffer (env, scope, framebuffer, skipCheck) {
        var shared = env.shared;

        var GL = shared.gl;
        var FRAMEBUFFER_STATE = shared.framebuffer;
        var EXT_DRAW_BUFFERS;
        if (extDrawBuffers) {
          EXT_DRAW_BUFFERS = scope.def(shared.extensions, '.webgl_draw_buffers');
        }

        var constants = env.constants;

        var DRAW_BUFFERS = constants.drawBuffer;
        var BACK_BUFFER = constants.backBuffer;

        var NEXT;
        if (framebuffer) {
          NEXT = framebuffer.append(env, scope);
        } else {
          NEXT = scope.def(FRAMEBUFFER_STATE, '.next');
        }

        if (!skipCheck) {
          scope('if(', NEXT, '!==', FRAMEBUFFER_STATE, '.cur){');
        }
        scope(
          'if(', NEXT, '){',
          GL, '.bindFramebuffer(', GL_FRAMEBUFFER$2, ',', NEXT, '.framebuffer);');
        if (extDrawBuffers) {
          scope(EXT_DRAW_BUFFERS, '.drawBuffersWEBGL(',
            DRAW_BUFFERS, '[', NEXT, '.colorAttachments.length]);');
        }
        scope('}else{',
          GL, '.bindFramebuffer(', GL_FRAMEBUFFER$2, ',null);');
        if (extDrawBuffers) {
          scope(EXT_DRAW_BUFFERS, '.drawBuffersWEBGL(', BACK_BUFFER, ');');
        }
        scope(
          '}',
          FRAMEBUFFER_STATE, '.cur=', NEXT, ';');
        if (!skipCheck) {
          scope('}');
        }
      }

      function emitPollState (env, scope, args) {
        var shared = env.shared;

        var GL = shared.gl;

        var CURRENT_VARS = env.current;
        var NEXT_VARS = env.next;
        var CURRENT_STATE = shared.current;
        var NEXT_STATE = shared.next;

        var block = env.cond(CURRENT_STATE, '.dirty');

        GL_STATE_NAMES.forEach(function (prop) {
          var param = propName(prop);
          if (param in args.state) {
            return
          }

          var NEXT, CURRENT;
          if (param in NEXT_VARS) {
            NEXT = NEXT_VARS[param];
            CURRENT = CURRENT_VARS[param];
            var parts = loop(currentState[param].length, function (i) {
              return block.def(NEXT, '[', i, ']')
            });
            block(env.cond(parts.map(function (p, i) {
              return p + '!==' + CURRENT + '[' + i + ']'
            }).join('||'))
              .then(
                GL, '.', GL_VARIABLES[param], '(', parts, ');',
                parts.map(function (p, i) {
                  return CURRENT + '[' + i + ']=' + p
                }).join(';'), ';'));
          } else {
            NEXT = block.def(NEXT_STATE, '.', param);
            var ifte = env.cond(NEXT, '!==', CURRENT_STATE, '.', param);
            block(ifte);
            if (param in GL_FLAGS) {
              ifte(
                env.cond(NEXT)
                  .then(GL, '.enable(', GL_FLAGS[param], ');')
                  .else(GL, '.disable(', GL_FLAGS[param], ');'),
                CURRENT_STATE, '.', param, '=', NEXT, ';');
            } else {
              ifte(
                GL, '.', GL_VARIABLES[param], '(', NEXT, ');',
                CURRENT_STATE, '.', param, '=', NEXT, ';');
            }
          }
        });
        if (Object.keys(args.state).length === 0) {
          block(CURRENT_STATE, '.dirty=false;');
        }
        scope(block);
      }

      function emitSetOptions (env, scope, options, filter) {
        var shared = env.shared;
        var CURRENT_VARS = env.current;
        var CURRENT_STATE = shared.current;
        var GL = shared.gl;
        sortState(Object.keys(options)).forEach(function (param) {
          var defn = options[param];
          if (filter && !filter(defn)) {
            return
          }
          var variable = defn.append(env, scope);
          if (GL_FLAGS[param]) {
            var flag = GL_FLAGS[param];
            if (isStatic(defn)) {
              if (variable) {
                scope(GL, '.enable(', flag, ');');
              } else {
                scope(GL, '.disable(', flag, ');');
              }
            } else {
              scope(env.cond(variable)
                .then(GL, '.enable(', flag, ');')
                .else(GL, '.disable(', flag, ');'));
            }
            scope(CURRENT_STATE, '.', param, '=', variable, ';');
          } else if (isArrayLike(variable)) {
            var CURRENT = CURRENT_VARS[param];
            scope(
              GL, '.', GL_VARIABLES[param], '(', variable, ');',
              variable.map(function (v, i) {
                return CURRENT + '[' + i + ']=' + v
              }).join(';'), ';');
          } else {
            scope(
              GL, '.', GL_VARIABLES[param], '(', variable, ');',
              CURRENT_STATE, '.', param, '=', variable, ';');
          }
        });
      }

      function injectExtensions (env, scope) {
        if (extInstancing) {
          env.instancing = scope.def(
            env.shared.extensions, '.angle_instanced_arrays');
        }
      }

      function emitProfile (env, scope, args, useScope, incrementCounter) {
        var shared = env.shared;
        var STATS = env.stats;
        var CURRENT_STATE = shared.current;
        var TIMER = shared.timer;
        var profileArg = args.profile;

        function perfCounter () {
          if (typeof performance === 'undefined') {
            return 'Date.now()'
          } else {
            return 'performance.now()'
          }
        }

        var CPU_START, QUERY_COUNTER;
        function emitProfileStart (block) {
          CPU_START = scope.def();
          block(CPU_START, '=', perfCounter(), ';');
          if (typeof incrementCounter === 'string') {
            block(STATS, '.count+=', incrementCounter, ';');
          } else {
            block(STATS, '.count++;');
          }
          if (timer) {
            if (useScope) {
              QUERY_COUNTER = scope.def();
              block(QUERY_COUNTER, '=', TIMER, '.getNumPendingQueries();');
            } else {
              block(TIMER, '.beginQuery(', STATS, ');');
            }
          }
        }

        function emitProfileEnd (block) {
          block(STATS, '.cpuTime+=', perfCounter(), '-', CPU_START, ';');
          if (timer) {
            if (useScope) {
              block(TIMER, '.pushScopeStats(',
                QUERY_COUNTER, ',',
                TIMER, '.getNumPendingQueries(),',
                STATS, ');');
            } else {
              block(TIMER, '.endQuery();');
            }
          }
        }

        function scopeProfile (value) {
          var prev = scope.def(CURRENT_STATE, '.profile');
          scope(CURRENT_STATE, '.profile=', value, ';');
          scope.exit(CURRENT_STATE, '.profile=', prev, ';');
        }

        var USE_PROFILE;
        if (profileArg) {
          if (isStatic(profileArg)) {
            if (profileArg.enable) {
              emitProfileStart(scope);
              emitProfileEnd(scope.exit);
              scopeProfile('true');
            } else {
              scopeProfile('false');
            }
            return
          }
          USE_PROFILE = profileArg.append(env, scope);
          scopeProfile(USE_PROFILE);
        } else {
          USE_PROFILE = scope.def(CURRENT_STATE, '.profile');
        }

        var start = env.block();
        emitProfileStart(start);
        scope('if(', USE_PROFILE, '){', start, '}');
        var end = env.block();
        emitProfileEnd(end);
        scope.exit('if(', USE_PROFILE, '){', end, '}');
      }

      function emitAttributes (env, scope, args, attributes, filter) {
        var shared = env.shared;

        function typeLength (x) {
          switch (x) {
            case GL_FLOAT_VEC2:
            case GL_INT_VEC2:
            case GL_BOOL_VEC2:
              return 2
            case GL_FLOAT_VEC3:
            case GL_INT_VEC3:
            case GL_BOOL_VEC3:
              return 3
            case GL_FLOAT_VEC4:
            case GL_INT_VEC4:
            case GL_BOOL_VEC4:
              return 4
            default:
              return 1
          }
        }

        function emitBindAttribute (ATTRIBUTE, size, record) {
          var GL = shared.gl;

          var LOCATION = scope.def(ATTRIBUTE, '.location');
          var BINDING = scope.def(shared.attributes, '[', LOCATION, ']');

          var STATE = record.state;
          var BUFFER = record.buffer;
          var CONST_COMPONENTS = [
            record.x,
            record.y,
            record.z,
            record.w
          ];

          var COMMON_KEYS = [
            'buffer',
            'normalized',
            'offset',
            'stride'
          ];

          function emitBuffer () {
            scope(
              'if(!', BINDING, '.buffer){',
              GL, '.enableVertexAttribArray(', LOCATION, ');}');

            var TYPE = record.type;
            var SIZE;
            if (!record.size) {
              SIZE = size;
            } else {
              SIZE = scope.def(record.size, '||', size);
            }

            scope('if(',
              BINDING, '.type!==', TYPE, '||',
              BINDING, '.size!==', SIZE, '||',
              COMMON_KEYS.map(function (key) {
                return BINDING + '.' + key + '!==' + record[key]
              }).join('||'),
              '){',
              GL, '.bindBuffer(', GL_ARRAY_BUFFER$2, ',', BUFFER, '.buffer);',
              GL, '.vertexAttribPointer(', [
                LOCATION,
                SIZE,
                TYPE,
                record.normalized,
                record.stride,
                record.offset
              ], ');',
              BINDING, '.type=', TYPE, ';',
              BINDING, '.size=', SIZE, ';',
              COMMON_KEYS.map(function (key) {
                return BINDING + '.' + key + '=' + record[key] + ';'
              }).join(''),
              '}');

            if (extInstancing) {
              var DIVISOR = record.divisor;
              scope(
                'if(', BINDING, '.divisor!==', DIVISOR, '){',
                env.instancing, '.vertexAttribDivisorANGLE(', [LOCATION, DIVISOR], ');',
                BINDING, '.divisor=', DIVISOR, ';}');
            }
          }

          function emitConstant () {
            scope(
              'if(', BINDING, '.buffer){',
              GL, '.disableVertexAttribArray(', LOCATION, ');',
              BINDING, '.buffer=null;',
              '}if(', CUTE_COMPONENTS.map(function (c, i) {
                return BINDING + '.' + c + '!==' + CONST_COMPONENTS[i]
              }).join('||'), '){',
              GL, '.vertexAttrib4f(', LOCATION, ',', CONST_COMPONENTS, ');',
              CUTE_COMPONENTS.map(function (c, i) {
                return BINDING + '.' + c + '=' + CONST_COMPONENTS[i] + ';'
              }).join(''),
              '}');
          }

          if (STATE === ATTRIB_STATE_POINTER) {
            emitBuffer();
          } else if (STATE === ATTRIB_STATE_CONSTANT) {
            emitConstant();
          } else {
            scope('if(', STATE, '===', ATTRIB_STATE_POINTER, '){');
            emitBuffer();
            scope('}else{');
            emitConstant();
            scope('}');
          }
        }

        attributes.forEach(function (attribute) {
          var name = attribute.name;
          var arg = args.attributes[name];
          var record;
          if (arg) {
            if (!filter(arg)) {
              return
            }
            record = arg.append(env, scope);
          } else {
            if (!filter(SCOPE_DECL)) {
              return
            }
            var scopeAttrib = env.scopeAttrib(name);
            check$1.optional(function () {
              env.assert(scope,
                scopeAttrib + '.state',
                'missing attribute ' + name);
            });
            record = {};
            Object.keys(new AttributeRecord()).forEach(function (key) {
              record[key] = scope.def(scopeAttrib, '.', key);
            });
          }
          emitBindAttribute(
            env.link(attribute), typeLength(attribute.info.type), record);
        });
      }

      function emitUniforms (env, scope, args, uniforms, filter, isBatchInnerLoop) {
        var shared = env.shared;
        var GL = shared.gl;

        var definedArrUniforms = {};
        var infix;
        for (var i = 0; i < uniforms.length; ++i) {
          var uniform = uniforms[i];
          var name = uniform.name;
          var type = uniform.info.type;
          var size = uniform.info.size;
          var arg = args.uniforms[name];
          if (size > 1) {
            // either foo[n] or foos, avoid define both
            if (!arg) {
              continue
            }
            var arrUniformName = name.replace('[0]', '');
            if (definedArrUniforms[arrUniformName]) {
              continue
            }
            definedArrUniforms[arrUniformName] = 1;
          }
          var UNIFORM = env.link(uniform);
          var LOCATION = UNIFORM + '.location';

          var VALUE;
          if (arg) {
            if (!filter(arg)) {
              continue
            }
            if (isStatic(arg)) {
              var value = arg.value;
              check$1.command(
                value !== null && typeof value !== 'undefined',
                'missing uniform "' + name + '"', env.commandStr);
              if (type === GL_SAMPLER_2D || type === GL_SAMPLER_CUBE) {
                check$1.command(
                  typeof value === 'function' &&
                  ((type === GL_SAMPLER_2D &&
                    (value._reglType === 'texture2d' ||
                    value._reglType === 'framebuffer')) ||
                  (type === GL_SAMPLER_CUBE &&
                    (value._reglType === 'textureCube' ||
                    value._reglType === 'framebufferCube'))),
                  'invalid texture for uniform ' + name, env.commandStr);
                var TEX_VALUE = env.link(value._texture || value.color[0]._texture);
                scope(GL, '.uniform1i(', LOCATION, ',', TEX_VALUE + '.bind());');
                scope.exit(TEX_VALUE, '.unbind();');
              } else if (
                type === GL_FLOAT_MAT2 ||
                type === GL_FLOAT_MAT3 ||
                type === GL_FLOAT_MAT4) {
                check$1.optional(function () {
                  check$1.command(isArrayLike(value),
                    'invalid matrix for uniform ' + name, env.commandStr);
                  check$1.command(
                    (type === GL_FLOAT_MAT2 && value.length === 4) ||
                    (type === GL_FLOAT_MAT3 && value.length === 9) ||
                    (type === GL_FLOAT_MAT4 && value.length === 16),
                    'invalid length for matrix uniform ' + name, env.commandStr);
                });
                var MAT_VALUE = env.global.def('new Float32Array([' +
                  Array.prototype.slice.call(value) + '])');
                var dim = 2;
                if (type === GL_FLOAT_MAT3) {
                  dim = 3;
                } else if (type === GL_FLOAT_MAT4) {
                  dim = 4;
                }
                scope(
                  GL, '.uniformMatrix', dim, 'fv(',
                  LOCATION, ',false,', MAT_VALUE, ');');
              } else {
                switch (type) {
                  case GL_FLOAT$8:
                    if (size === 1) {
                      check$1.commandType(value, 'number', 'uniform ' + name, env.commandStr);
                    } else {
                      check$1.command(
                        isArrayLike(value) && (value.length === size),
                        'uniform ' + name, env.commandStr);
                    }
                    infix = '1f';
                    break
                  case GL_FLOAT_VEC2:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 2 === 0 && value.length <= size * 2),
                      'uniform ' + name, env.commandStr);
                    infix = '2f';
                    break
                  case GL_FLOAT_VEC3:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 3 === 0 && value.length <= size * 3),
                      'uniform ' + name, env.commandStr);
                    infix = '3f';
                    break
                  case GL_FLOAT_VEC4:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 4 === 0 && value.length <= size * 4),
                      'uniform ' + name, env.commandStr);
                    infix = '4f';
                    break
                  case GL_BOOL:
                    if (size === 1) {
                      check$1.commandType(value, 'boolean', 'uniform ' + name, env.commandStr);
                    } else {
                      check$1.command(
                        isArrayLike(value) && (value.length === size),
                        'uniform ' + name, env.commandStr);
                    }
                    infix = '1i';
                    break
                  case GL_INT$3:
                    if (size === 1) {
                      check$1.commandType(value, 'number', 'uniform ' + name, env.commandStr);
                    } else {
                      check$1.command(
                        isArrayLike(value) && (value.length === size),
                        'uniform ' + name, env.commandStr);
                    }
                    infix = '1i';
                    break
                  case GL_BOOL_VEC2:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 2 === 0 && value.length <= size * 2),
                      'uniform ' + name, env.commandStr);
                    infix = '2i';
                    break
                  case GL_INT_VEC2:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 2 === 0 && value.length <= size * 2),
                      'uniform ' + name, env.commandStr);
                    infix = '2i';
                    break
                  case GL_BOOL_VEC3:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 3 === 0 && value.length <= size * 3),
                      'uniform ' + name, env.commandStr);
                    infix = '3i';
                    break
                  case GL_INT_VEC3:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 3 === 0 && value.length <= size * 3),
                      'uniform ' + name, env.commandStr);
                    infix = '3i';
                    break
                  case GL_BOOL_VEC4:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 4 === 0 && value.length <= size * 4),
                      'uniform ' + name, env.commandStr);
                    infix = '4i';
                    break
                  case GL_INT_VEC4:
                    check$1.command(
                      isArrayLike(value) && (value.length && value.length % 4 === 0 && value.length <= size * 4),
                      'uniform ' + name, env.commandStr);
                    infix = '4i';
                    break
                }
                if (size > 1) {
                  infix += 'v';
                  value = env.global.def('[' +
                  Array.prototype.slice.call(value) + ']');
                } else {
                  value = isArrayLike(value) ? Array.prototype.slice.call(value) : value;
                }
                scope(GL, '.uniform', infix, '(', LOCATION, ',',
                  value,
                  ');');
              }
              continue
            } else {
              VALUE = arg.append(env, scope);
            }
          } else {
            if (!filter(SCOPE_DECL)) {
              continue
            }
            VALUE = scope.def(shared.uniforms, '[', stringStore.id(name), ']');
          }

          if (type === GL_SAMPLER_2D) {
            check$1(!Array.isArray(VALUE), 'must specify a scalar prop for textures');
            scope(
              'if(', VALUE, '&&', VALUE, '._reglType==="framebuffer"){',
              VALUE, '=', VALUE, '.color[0];',
              '}');
          } else if (type === GL_SAMPLER_CUBE) {
            check$1(!Array.isArray(VALUE), 'must specify a scalar prop for cube maps');
            scope(
              'if(', VALUE, '&&', VALUE, '._reglType==="framebufferCube"){',
              VALUE, '=', VALUE, '.color[0];',
              '}');
          }

          // perform type validation
          check$1.optional(function () {
            function emitCheck (pred, message) {
              env.assert(scope, pred,
                'bad data or missing for uniform "' + name + '".  ' + message);
            }

            function checkType (type, size) {
              if (size === 1) {
                check$1(!Array.isArray(VALUE), 'must not specify an array type for uniform');
              }
              emitCheck(
                'Array.isArray(' + VALUE + ') && typeof ' + VALUE + '[0]===" ' + type + '"' +
                ' || typeof ' + VALUE + '==="' + type + '"',
                'invalid type, expected ' + type);
            }

            function checkVector (n, type, size) {
              if (Array.isArray(VALUE)) {
                check$1(VALUE.length && VALUE.length % n === 0 && VALUE.length <= n * size, 'must have length of ' + (size === 1 ? '' : 'n * ') + n);
              } else {
                emitCheck(
                  shared.isArrayLike + '(' + VALUE + ')&&' + VALUE + '.length && ' + VALUE + '.length % ' + n + ' === 0' +
                  ' && ' + VALUE + '.length<=' + n * size,
                  'invalid vector, should have length of ' + (size === 1 ? '' : 'n * ') + n, env.commandStr);
              }
            }

            function checkTexture (target) {
              check$1(!Array.isArray(VALUE), 'must not specify a value type');
              emitCheck(
                'typeof ' + VALUE + '==="function"&&' +
                VALUE + '._reglType==="texture' +
                (target === GL_TEXTURE_2D$3 ? '2d' : 'Cube') + '"',
                'invalid texture type', env.commandStr);
            }

            switch (type) {
              case GL_INT$3:
                checkType('number', size);
                break
              case GL_INT_VEC2:
                checkVector(2, 'number', size);
                break
              case GL_INT_VEC3:
                checkVector(3, 'number', size);
                break
              case GL_INT_VEC4:
                checkVector(4, 'number', size);
                break
              case GL_FLOAT$8:
                checkType('number', size);
                break
              case GL_FLOAT_VEC2:
                checkVector(2, 'number', size);
                break
              case GL_FLOAT_VEC3:
                checkVector(3, 'number', size);
                break
              case GL_FLOAT_VEC4:
                checkVector(4, 'number', size);
                break
              case GL_BOOL:
                checkType('boolean', size);
                break
              case GL_BOOL_VEC2:
                checkVector(2, 'boolean', size);
                break
              case GL_BOOL_VEC3:
                checkVector(3, 'boolean', size);
                break
              case GL_BOOL_VEC4:
                checkVector(4, 'boolean', size);
                break
              case GL_FLOAT_MAT2:
                checkVector(4, 'number', size);
                break
              case GL_FLOAT_MAT3:
                checkVector(9, 'number', size);
                break
              case GL_FLOAT_MAT4:
                checkVector(16, 'number', size);
                break
              case GL_SAMPLER_2D:
                checkTexture(GL_TEXTURE_2D$3);
                break
              case GL_SAMPLER_CUBE:
                checkTexture(GL_TEXTURE_CUBE_MAP$2);
                break
            }
          });

          var unroll = 1;
          switch (type) {
            case GL_SAMPLER_2D:
            case GL_SAMPLER_CUBE:
              var TEX = scope.def(VALUE, '._texture');
              scope(GL, '.uniform1i(', LOCATION, ',', TEX, '.bind());');
              scope.exit(TEX, '.unbind();');
              continue

            case GL_INT$3:
            case GL_BOOL:
              infix = '1i';
              break

            case GL_INT_VEC2:
            case GL_BOOL_VEC2:
              infix = '2i';
              unroll = 2;
              break

            case GL_INT_VEC3:
            case GL_BOOL_VEC3:
              infix = '3i';
              unroll = 3;
              break

            case GL_INT_VEC4:
            case GL_BOOL_VEC4:
              infix = '4i';
              unroll = 4;
              break

            case GL_FLOAT$8:
              infix = '1f';
              break

            case GL_FLOAT_VEC2:
              infix = '2f';
              unroll = 2;
              break

            case GL_FLOAT_VEC3:
              infix = '3f';
              unroll = 3;
              break

            case GL_FLOAT_VEC4:
              infix = '4f';
              unroll = 4;
              break

            case GL_FLOAT_MAT2:
              infix = 'Matrix2fv';
              break

            case GL_FLOAT_MAT3:
              infix = 'Matrix3fv';
              break

            case GL_FLOAT_MAT4:
              infix = 'Matrix4fv';
              break
          }

          if (infix.indexOf('Matrix') === -1 && size > 1) {
            infix += 'v';
            unroll = 1;
          }

          if (infix.charAt(0) === 'M') {
            scope(GL, '.uniform', infix, '(', LOCATION, ',');
            var matSize = Math.pow(type - GL_FLOAT_MAT2 + 2, 2);
            var STORAGE = env.global.def('new Float32Array(', matSize, ')');
            if (Array.isArray(VALUE)) {
              scope(
                'false,(',
                loop(matSize, function (i) {
                  return STORAGE + '[' + i + ']=' + VALUE[i]
                }), ',', STORAGE, ')');
            } else {
              scope(
                'false,(Array.isArray(', VALUE, ')||', VALUE, ' instanceof Float32Array)?', VALUE, ':(',
                loop(matSize, function (i) {
                  return STORAGE + '[' + i + ']=' + VALUE + '[' + i + ']'
                }), ',', STORAGE, ')');
            }
            scope(');');
          } else if (unroll > 1) {
            var prev = [];
            var cur = [];
            for (var j = 0; j < unroll; ++j) {
              if (Array.isArray(VALUE)) {
                cur.push(VALUE[j]);
              } else {
                cur.push(scope.def(VALUE + '[' + j + ']'));
              }
              if (isBatchInnerLoop) {
                prev.push(scope.def());
              }
            }
            if (isBatchInnerLoop) {
              scope('if(!', env.batchId, '||', prev.map(function (p, i) {
                return p + '!==' + cur[i]
              }).join('||'), '){', prev.map(function (p, i) {
                return p + '=' + cur[i] + ';'
              }).join(''));
            }
            scope(GL, '.uniform', infix, '(', LOCATION, ',', cur.join(','), ');');
            if (isBatchInnerLoop) {
              scope('}');
            }
          } else {
            check$1(!Array.isArray(VALUE), 'uniform value must not be an array');
            if (isBatchInnerLoop) {
              var prevS = scope.def();
              scope('if(!', env.batchId, '||', prevS, '!==', VALUE, '){',
                prevS, '=', VALUE, ';');
            }
            scope(GL, '.uniform', infix, '(', LOCATION, ',', VALUE, ');');
            if (isBatchInnerLoop) {
              scope('}');
            }
          }
        }
      }

      function emitDraw (env, outer, inner, args) {
        var shared = env.shared;
        var GL = shared.gl;
        var DRAW_STATE = shared.draw;

        var drawOptions = args.draw;

        function emitElements () {
          var defn = drawOptions.elements;
          var ELEMENTS;
          var scope = outer;
          if (defn) {
            if ((defn.contextDep && args.contextDynamic) || defn.propDep) {
              scope = inner;
            }
            ELEMENTS = defn.append(env, scope);
            if (drawOptions.elementsActive) {
              scope(
                'if(' + ELEMENTS + ')' +
                GL + '.bindBuffer(' + GL_ELEMENT_ARRAY_BUFFER$2 + ',' + ELEMENTS + '.buffer.buffer);');
            }
          } else {
            ELEMENTS = scope.def();
            scope(
              ELEMENTS, '=', DRAW_STATE, '.', S_ELEMENTS, ';',
              'if(', ELEMENTS, '){',
              GL, '.bindBuffer(', GL_ELEMENT_ARRAY_BUFFER$2, ',', ELEMENTS, '.buffer.buffer);}',
              'else if(', shared.vao, '.currentVAO){',
              ELEMENTS, '=', env.shared.elements + '.getElements(' + shared.vao, '.currentVAO.elements);',
              (!extVertexArrays ? 'if(' + ELEMENTS + ')' + GL + '.bindBuffer(' + GL_ELEMENT_ARRAY_BUFFER$2 + ',' + ELEMENTS + '.buffer.buffer);' : ''),
              '}');
          }
          return ELEMENTS
        }

        function emitCount () {
          var defn = drawOptions.count;
          var COUNT;
          var scope = outer;
          if (defn) {
            if ((defn.contextDep && args.contextDynamic) || defn.propDep) {
              scope = inner;
            }
            COUNT = defn.append(env, scope);
            check$1.optional(function () {
              if (defn.MISSING) {
                env.assert(outer, 'false', 'missing vertex count');
              }
              if (defn.DYNAMIC) {
                env.assert(scope, COUNT + '>=0', 'missing vertex count');
              }
            });
          } else {
            COUNT = scope.def(DRAW_STATE, '.', S_COUNT);
            check$1.optional(function () {
              env.assert(scope, COUNT + '>=0', 'missing vertex count');
            });
          }
          return COUNT
        }

        var ELEMENTS = emitElements();
        function emitValue (name) {
          var defn = drawOptions[name];
          if (defn) {
            if ((defn.contextDep && args.contextDynamic) || defn.propDep) {
              return defn.append(env, inner)
            } else {
              return defn.append(env, outer)
            }
          } else {
            return outer.def(DRAW_STATE, '.', name)
          }
        }

        var PRIMITIVE = emitValue(S_PRIMITIVE);
        var OFFSET = emitValue(S_OFFSET);

        var COUNT = emitCount();
        if (typeof COUNT === 'number') {
          if (COUNT === 0) {
            return
          }
        } else {
          inner('if(', COUNT, '){');
          inner.exit('}');
        }

        var INSTANCES, EXT_INSTANCING;
        if (extInstancing) {
          INSTANCES = emitValue(S_INSTANCES);
          EXT_INSTANCING = env.instancing;
        }

        var ELEMENT_TYPE = ELEMENTS + '.type';

        var elementsStatic = drawOptions.elements && isStatic(drawOptions.elements) && !drawOptions.vaoActive;

        function emitInstancing () {
          function drawElements () {
            inner(EXT_INSTANCING, '.drawElementsInstancedANGLE(', [
              PRIMITIVE,
              COUNT,
              ELEMENT_TYPE,
              OFFSET + '<<((' + ELEMENT_TYPE + '-' + GL_UNSIGNED_BYTE$8 + ')>>1)',
              INSTANCES
            ], ');');
          }

          function drawArrays () {
            inner(EXT_INSTANCING, '.drawArraysInstancedANGLE(',
              [PRIMITIVE, OFFSET, COUNT, INSTANCES], ');');
          }

          if (ELEMENTS && ELEMENTS !== 'null') {
            if (!elementsStatic) {
              inner('if(', ELEMENTS, '){');
              drawElements();
              inner('}else{');
              drawArrays();
              inner('}');
            } else {
              drawElements();
            }
          } else {
            drawArrays();
          }
        }

        function emitRegular () {
          function drawElements () {
            inner(GL + '.drawElements(' + [
              PRIMITIVE,
              COUNT,
              ELEMENT_TYPE,
              OFFSET + '<<((' + ELEMENT_TYPE + '-' + GL_UNSIGNED_BYTE$8 + ')>>1)'
            ] + ');');
          }

          function drawArrays () {
            inner(GL + '.drawArrays(' + [PRIMITIVE, OFFSET, COUNT] + ');');
          }

          if (ELEMENTS && ELEMENTS !== 'null') {
            if (!elementsStatic) {
              inner('if(', ELEMENTS, '){');
              drawElements();
              inner('}else{');
              drawArrays();
              inner('}');
            } else {
              drawElements();
            }
          } else {
            drawArrays();
          }
        }

        if (extInstancing && (typeof INSTANCES !== 'number' || INSTANCES >= 0)) {
          if (typeof INSTANCES === 'string') {
            inner('if(', INSTANCES, '>0){');
            emitInstancing();
            inner('}else if(', INSTANCES, '<0){');
            emitRegular();
            inner('}');
          } else {
            emitInstancing();
          }
        } else {
          emitRegular();
        }
      }

      function createBody (emitBody, parentEnv, args, program, count) {
        var env = createREGLEnvironment();
        var scope = env.proc('body', count);
        check$1.optional(function () {
          env.commandStr = parentEnv.commandStr;
          env.command = env.link(parentEnv.commandStr);
        });
        if (extInstancing) {
          env.instancing = scope.def(
            env.shared.extensions, '.angle_instanced_arrays');
        }
        emitBody(env, scope, args, program);
        return env.compile().body
      }

      // ===================================================
      // ===================================================
      // DRAW PROC
      // ===================================================
      // ===================================================
      function emitDrawBody (env, draw, args, program) {
        injectExtensions(env, draw);
        if (args.useVAO) {
          if (args.drawVAO) {
            draw(env.shared.vao, '.setVAO(', args.drawVAO.append(env, draw), ');');
          } else {
            draw(env.shared.vao, '.setVAO(', env.shared.vao, '.targetVAO);');
          }
        } else {
          draw(env.shared.vao, '.setVAO(null);');
          emitAttributes(env, draw, args, program.attributes, function () {
            return true
          });
        }
        emitUniforms(env, draw, args, program.uniforms, function () {
          return true
        }, false);
        emitDraw(env, draw, draw, args);
      }

      function emitDrawProc (env, args) {
        var draw = env.proc('draw', 1);

        injectExtensions(env, draw);

        emitContext(env, draw, args.context);
        emitPollFramebuffer(env, draw, args.framebuffer);

        emitPollState(env, draw, args);
        emitSetOptions(env, draw, args.state);

        emitProfile(env, draw, args, false, true);

        var program = args.shader.progVar.append(env, draw);
        draw(env.shared.gl, '.useProgram(', program, '.program);');

        if (args.shader.program) {
          emitDrawBody(env, draw, args, args.shader.program);
        } else {
          draw(env.shared.vao, '.setVAO(null);');
          var drawCache = env.global.def('{}');
          var PROG_ID = draw.def(program, '.id');
          var CACHED_PROC = draw.def(drawCache, '[', PROG_ID, ']');
          draw(
            env.cond(CACHED_PROC)
              .then(CACHED_PROC, '.call(this,a0);')
              .else(
                CACHED_PROC, '=', drawCache, '[', PROG_ID, ']=',
                env.link(function (program) {
                  return createBody(emitDrawBody, env, args, program, 1)
                }), '(', program, ');',
                CACHED_PROC, '.call(this,a0);'));
        }

        if (Object.keys(args.state).length > 0) {
          draw(env.shared.current, '.dirty=true;');
        }
        if (env.shared.vao) {
          draw(env.shared.vao, '.setVAO(null);');
        }
      }

      // ===================================================
      // ===================================================
      // BATCH PROC
      // ===================================================
      // ===================================================

      function emitBatchDynamicShaderBody (env, scope, args, program) {
        env.batchId = 'a1';

        injectExtensions(env, scope);

        function all () {
          return true
        }

        emitAttributes(env, scope, args, program.attributes, all);
        emitUniforms(env, scope, args, program.uniforms, all, false);
        emitDraw(env, scope, scope, args);
      }

      function emitBatchBody (env, scope, args, program) {
        injectExtensions(env, scope);

        var contextDynamic = args.contextDep;

        var BATCH_ID = scope.def();
        var PROP_LIST = 'a0';
        var NUM_PROPS = 'a1';
        var PROPS = scope.def();
        env.shared.props = PROPS;
        env.batchId = BATCH_ID;

        var outer = env.scope();
        var inner = env.scope();

        scope(
          outer.entry,
          'for(', BATCH_ID, '=0;', BATCH_ID, '<', NUM_PROPS, ';++', BATCH_ID, '){',
          PROPS, '=', PROP_LIST, '[', BATCH_ID, '];',
          inner,
          '}',
          outer.exit);

        function isInnerDefn (defn) {
          return ((defn.contextDep && contextDynamic) || defn.propDep)
        }

        function isOuterDefn (defn) {
          return !isInnerDefn(defn)
        }

        if (args.needsContext) {
          emitContext(env, inner, args.context);
        }
        if (args.needsFramebuffer) {
          emitPollFramebuffer(env, inner, args.framebuffer);
        }
        emitSetOptions(env, inner, args.state, isInnerDefn);

        if (args.profile && isInnerDefn(args.profile)) {
          emitProfile(env, inner, args, false, true);
        }

        if (!program) {
          var progCache = env.global.def('{}');
          var PROGRAM = args.shader.progVar.append(env, inner);
          var PROG_ID = inner.def(PROGRAM, '.id');
          var CACHED_PROC = inner.def(progCache, '[', PROG_ID, ']');
          inner(
            env.shared.gl, '.useProgram(', PROGRAM, '.program);',
            'if(!', CACHED_PROC, '){',
            CACHED_PROC, '=', progCache, '[', PROG_ID, ']=',
            env.link(function (program) {
              return createBody(
                emitBatchDynamicShaderBody, env, args, program, 2)
            }), '(', PROGRAM, ');}',
            CACHED_PROC, '.call(this,a0[', BATCH_ID, '],', BATCH_ID, ');');
        } else {
          if (args.useVAO) {
            if (args.drawVAO) {
              if (isInnerDefn(args.drawVAO)) {
                // vao is a prop
                inner(env.shared.vao, '.setVAO(', args.drawVAO.append(env, inner), ');');
              } else {
                // vao is invariant
                outer(env.shared.vao, '.setVAO(', args.drawVAO.append(env, outer), ');');
              }
            } else {
              // scoped vao binding
              outer(env.shared.vao, '.setVAO(', env.shared.vao, '.targetVAO);');
            }
          } else {
            outer(env.shared.vao, '.setVAO(null);');
            emitAttributes(env, outer, args, program.attributes, isOuterDefn);
            emitAttributes(env, inner, args, program.attributes, isInnerDefn);
          }
          emitUniforms(env, outer, args, program.uniforms, isOuterDefn, false);
          emitUniforms(env, inner, args, program.uniforms, isInnerDefn, true);
          emitDraw(env, outer, inner, args);
        }
      }

      function emitBatchProc (env, args) {
        var batch = env.proc('batch', 2);
        env.batchId = '0';

        injectExtensions(env, batch);

        // Check if any context variables depend on props
        var contextDynamic = false;
        var needsContext = true;
        Object.keys(args.context).forEach(function (name) {
          contextDynamic = contextDynamic || args.context[name].propDep;
        });
        if (!contextDynamic) {
          emitContext(env, batch, args.context);
          needsContext = false;
        }

        // framebuffer state affects framebufferWidth/height context vars
        var framebuffer = args.framebuffer;
        var needsFramebuffer = false;
        if (framebuffer) {
          if (framebuffer.propDep) {
            contextDynamic = needsFramebuffer = true;
          } else if (framebuffer.contextDep && contextDynamic) {
            needsFramebuffer = true;
          }
          if (!needsFramebuffer) {
            emitPollFramebuffer(env, batch, framebuffer);
          }
        } else {
          emitPollFramebuffer(env, batch, null);
        }

        // viewport is weird because it can affect context vars
        if (args.state.viewport && args.state.viewport.propDep) {
          contextDynamic = true;
        }

        function isInnerDefn (defn) {
          return (defn.contextDep && contextDynamic) || defn.propDep
        }

        // set webgl options
        emitPollState(env, batch, args);
        emitSetOptions(env, batch, args.state, function (defn) {
          return !isInnerDefn(defn)
        });

        if (!args.profile || !isInnerDefn(args.profile)) {
          emitProfile(env, batch, args, false, 'a1');
        }

        // Save these values to args so that the batch body routine can use them
        args.contextDep = contextDynamic;
        args.needsContext = needsContext;
        args.needsFramebuffer = needsFramebuffer;

        // determine if shader is dynamic
        var progDefn = args.shader.progVar;
        if ((progDefn.contextDep && contextDynamic) || progDefn.propDep) {
          emitBatchBody(
            env,
            batch,
            args,
            null);
        } else {
          var PROGRAM = progDefn.append(env, batch);
          batch(env.shared.gl, '.useProgram(', PROGRAM, '.program);');
          if (args.shader.program) {
            emitBatchBody(
              env,
              batch,
              args,
              args.shader.program);
          } else {
            batch(env.shared.vao, '.setVAO(null);');
            var batchCache = env.global.def('{}');
            var PROG_ID = batch.def(PROGRAM, '.id');
            var CACHED_PROC = batch.def(batchCache, '[', PROG_ID, ']');
            batch(
              env.cond(CACHED_PROC)
                .then(CACHED_PROC, '.call(this,a0,a1);')
                .else(
                  CACHED_PROC, '=', batchCache, '[', PROG_ID, ']=',
                  env.link(function (program) {
                    return createBody(emitBatchBody, env, args, program, 2)
                  }), '(', PROGRAM, ');',
                  CACHED_PROC, '.call(this,a0,a1);'));
          }
        }

        if (Object.keys(args.state).length > 0) {
          batch(env.shared.current, '.dirty=true;');
        }

        if (env.shared.vao) {
          batch(env.shared.vao, '.setVAO(null);');
        }
      }

      // ===================================================
      // ===================================================
      // SCOPE COMMAND
      // ===================================================
      // ===================================================
      function emitScopeProc (env, args) {
        var scope = env.proc('scope', 3);
        env.batchId = 'a2';

        var shared = env.shared;
        var CURRENT_STATE = shared.current;

        emitContext(env, scope, args.context);

        if (args.framebuffer) {
          args.framebuffer.append(env, scope);
        }

        sortState(Object.keys(args.state)).forEach(function (name) {
          var defn = args.state[name];
          var value = defn.append(env, scope);
          if (isArrayLike(value)) {
            value.forEach(function (v, i) {
              scope.set(env.next[name], '[' + i + ']', v);
            });
          } else {
            scope.set(shared.next, '.' + name, value);
          }
        });

        emitProfile(env, scope, args, true, true)

        ;[S_ELEMENTS, S_OFFSET, S_COUNT, S_INSTANCES, S_PRIMITIVE].forEach(
          function (opt) {
            var variable = args.draw[opt];
            if (!variable) {
              return
            }
            scope.set(shared.draw, '.' + opt, '' + variable.append(env, scope));
          });

        Object.keys(args.uniforms).forEach(function (opt) {
          var value = args.uniforms[opt].append(env, scope);
          if (Array.isArray(value)) {
            value = '[' + value.join() + ']';
          }
          scope.set(
            shared.uniforms,
            '[' + stringStore.id(opt) + ']',
            value);
        });

        Object.keys(args.attributes).forEach(function (name) {
          var record = args.attributes[name].append(env, scope);
          var scopeAttrib = env.scopeAttrib(name);
          Object.keys(new AttributeRecord()).forEach(function (prop) {
            scope.set(scopeAttrib, '.' + prop, record[prop]);
          });
        });

        if (args.scopeVAO) {
          scope.set(shared.vao, '.targetVAO', args.scopeVAO.append(env, scope));
        }

        function saveShader (name) {
          var shader = args.shader[name];
          if (shader) {
            scope.set(shared.shader, '.' + name, shader.append(env, scope));
          }
        }
        saveShader(S_VERT);
        saveShader(S_FRAG);

        if (Object.keys(args.state).length > 0) {
          scope(CURRENT_STATE, '.dirty=true;');
          scope.exit(CURRENT_STATE, '.dirty=true;');
        }

        scope('a1(', env.shared.context, ',a0,', env.batchId, ');');
      }

      function isDynamicObject (object) {
        if (typeof object !== 'object' || isArrayLike(object)) {
          return
        }
        var props = Object.keys(object);
        for (var i = 0; i < props.length; ++i) {
          if (dynamic.isDynamic(object[props[i]])) {
            return true
          }
        }
        return false
      }

      function splatObject (env, options, name) {
        var object = options.static[name];
        if (!object || !isDynamicObject(object)) {
          return
        }

        var globals = env.global;
        var keys = Object.keys(object);
        var thisDep = false;
        var contextDep = false;
        var propDep = false;
        var objectRef = env.global.def('{}');
        keys.forEach(function (key) {
          var value = object[key];
          if (dynamic.isDynamic(value)) {
            if (typeof value === 'function') {
              value = object[key] = dynamic.unbox(value);
            }
            var deps = createDynamicDecl(value, null);
            thisDep = thisDep || deps.thisDep;
            propDep = propDep || deps.propDep;
            contextDep = contextDep || deps.contextDep;
          } else {
            globals(objectRef, '.', key, '=');
            switch (typeof value) {
              case 'number':
                globals(value);
                break
              case 'string':
                globals('"', value, '"');
                break
              case 'object':
                if (Array.isArray(value)) {
                  globals('[', value.join(), ']');
                }
                break
              default:
                globals(env.link(value));
                break
            }
            globals(';');
          }
        });

        function appendBlock (env, block) {
          keys.forEach(function (key) {
            var value = object[key];
            if (!dynamic.isDynamic(value)) {
              return
            }
            var ref = env.invoke(block, value);
            block(objectRef, '.', key, '=', ref, ';');
          });
        }

        options.dynamic[name] = new dynamic.DynamicVariable(DYN_THUNK, {
          thisDep: thisDep,
          contextDep: contextDep,
          propDep: propDep,
          ref: objectRef,
          append: appendBlock
        });
        delete options.static[name];
      }

      // ===========================================================================
      // ===========================================================================
      // MAIN DRAW COMMAND
      // ===========================================================================
      // ===========================================================================
      function compileCommand (options, attributes, uniforms, context, stats) {
        var env = createREGLEnvironment();

        // link stats, so that we can easily access it in the program.
        env.stats = env.link(stats);

        // splat options and attributes to allow for dynamic nested properties
        Object.keys(attributes.static).forEach(function (key) {
          splatObject(env, attributes, key);
        });
        NESTED_OPTIONS.forEach(function (name) {
          splatObject(env, options, name);
        });

        var args = parseArguments(options, attributes, uniforms, context, env);

        emitDrawProc(env, args);
        emitScopeProc(env, args);
        emitBatchProc(env, args);

        return extend(env.compile(), {
          destroy: function () {
            args.shader.program.destroy();
          }
        })
      }

      // ===========================================================================
      // ===========================================================================
      // POLL / REFRESH
      // ===========================================================================
      // ===========================================================================
      return {
        next: nextState,
        current: currentState,
        procs: (function () {
          var env = createREGLEnvironment();
          var poll = env.proc('poll');
          var refresh = env.proc('refresh');
          var common = env.block();
          poll(common);
          refresh(common);

          var shared = env.shared;
          var GL = shared.gl;
          var NEXT_STATE = shared.next;
          var CURRENT_STATE = shared.current;

          common(CURRENT_STATE, '.dirty=false;');

          emitPollFramebuffer(env, poll);
          emitPollFramebuffer(env, refresh, null, true);

          // Refresh updates all attribute state changes
          var INSTANCING;
          if (extInstancing) {
            INSTANCING = env.link(extInstancing);
          }

          // update vertex array bindings
          if (extensions.oes_vertex_array_object) {
            refresh(env.link(extensions.oes_vertex_array_object), '.bindVertexArrayOES(null);');
          }
          for (var i = 0; i < limits.maxAttributes; ++i) {
            var BINDING = refresh.def(shared.attributes, '[', i, ']');
            var ifte = env.cond(BINDING, '.buffer');
            ifte.then(
              GL, '.enableVertexAttribArray(', i, ');',
              GL, '.bindBuffer(',
              GL_ARRAY_BUFFER$2, ',',
              BINDING, '.buffer.buffer);',
              GL, '.vertexAttribPointer(',
              i, ',',
              BINDING, '.size,',
              BINDING, '.type,',
              BINDING, '.normalized,',
              BINDING, '.stride,',
              BINDING, '.offset);'
            ).else(
              GL, '.disableVertexAttribArray(', i, ');',
              GL, '.vertexAttrib4f(',
              i, ',',
              BINDING, '.x,',
              BINDING, '.y,',
              BINDING, '.z,',
              BINDING, '.w);',
              BINDING, '.buffer=null;');
            refresh(ifte);
            if (extInstancing) {
              refresh(
                INSTANCING, '.vertexAttribDivisorANGLE(',
                i, ',',
                BINDING, '.divisor);');
            }
          }
          refresh(
            env.shared.vao, '.currentVAO=null;',
            env.shared.vao, '.setVAO(', env.shared.vao, '.targetVAO);');

          Object.keys(GL_FLAGS).forEach(function (flag) {
            var cap = GL_FLAGS[flag];
            var NEXT = common.def(NEXT_STATE, '.', flag);
            var block = env.block();
            block('if(', NEXT, '){',
              GL, '.enable(', cap, ')}else{',
              GL, '.disable(', cap, ')}',
              CURRENT_STATE, '.', flag, '=', NEXT, ';');
            refresh(block);
            poll(
              'if(', NEXT, '!==', CURRENT_STATE, '.', flag, '){',
              block,
              '}');
          });

          Object.keys(GL_VARIABLES).forEach(function (name) {
            var func = GL_VARIABLES[name];
            var init = currentState[name];
            var NEXT, CURRENT;
            var block = env.block();
            block(GL, '.', func, '(');
            if (isArrayLike(init)) {
              var n = init.length;
              NEXT = env.global.def(NEXT_STATE, '.', name);
              CURRENT = env.global.def(CURRENT_STATE, '.', name);
              block(
                loop(n, function (i) {
                  return NEXT + '[' + i + ']'
                }), ');',
                loop(n, function (i) {
                  return CURRENT + '[' + i + ']=' + NEXT + '[' + i + '];'
                }).join(''));
              poll(
                'if(', loop(n, function (i) {
                  return NEXT + '[' + i + ']!==' + CURRENT + '[' + i + ']'
                }).join('||'), '){',
                block,
                '}');
            } else {
              NEXT = common.def(NEXT_STATE, '.', name);
              CURRENT = common.def(CURRENT_STATE, '.', name);
              block(
                NEXT, ');',
                CURRENT_STATE, '.', name, '=', NEXT, ';');
              poll(
                'if(', NEXT, '!==', CURRENT, '){',
                block,
                '}');
            }
            refresh(block);
          });

          return env.compile()
        })(),
        compile: compileCommand
      }
    }

    function stats () {
      return {
        vaoCount: 0,
        bufferCount: 0,
        elementsCount: 0,
        framebufferCount: 0,
        shaderCount: 0,
        textureCount: 0,
        cubeCount: 0,
        renderbufferCount: 0,
        maxTextureUnits: 0
      }
    }

    var GL_QUERY_RESULT_EXT = 0x8866;
    var GL_QUERY_RESULT_AVAILABLE_EXT = 0x8867;
    var GL_TIME_ELAPSED_EXT = 0x88BF;

    var createTimer = function (gl, extensions) {
      if (!extensions.ext_disjoint_timer_query) {
        return null
      }

      // QUERY POOL BEGIN
      var queryPool = [];
      function allocQuery () {
        return queryPool.pop() || extensions.ext_disjoint_timer_query.createQueryEXT()
      }
      function freeQuery (query) {
        queryPool.push(query);
      }
      // QUERY POOL END

      var pendingQueries = [];
      function beginQuery (stats) {
        var query = allocQuery();
        extensions.ext_disjoint_timer_query.beginQueryEXT(GL_TIME_ELAPSED_EXT, query);
        pendingQueries.push(query);
        pushScopeStats(pendingQueries.length - 1, pendingQueries.length, stats);
      }

      function endQuery () {
        extensions.ext_disjoint_timer_query.endQueryEXT(GL_TIME_ELAPSED_EXT);
      }

      //
      // Pending stats pool.
      //
      function PendingStats () {
        this.startQueryIndex = -1;
        this.endQueryIndex = -1;
        this.sum = 0;
        this.stats = null;
      }
      var pendingStatsPool = [];
      function allocPendingStats () {
        return pendingStatsPool.pop() || new PendingStats()
      }
      function freePendingStats (pendingStats) {
        pendingStatsPool.push(pendingStats);
      }
      // Pending stats pool end

      var pendingStats = [];
      function pushScopeStats (start, end, stats) {
        var ps = allocPendingStats();
        ps.startQueryIndex = start;
        ps.endQueryIndex = end;
        ps.sum = 0;
        ps.stats = stats;
        pendingStats.push(ps);
      }

      // we should call this at the beginning of the frame,
      // in order to update gpuTime
      var timeSum = [];
      var queryPtr = [];
      function update () {
        var ptr, i;

        var n = pendingQueries.length;
        if (n === 0) {
          return
        }

        // Reserve space
        queryPtr.length = Math.max(queryPtr.length, n + 1);
        timeSum.length = Math.max(timeSum.length, n + 1);
        timeSum[0] = 0;
        queryPtr[0] = 0;

        // Update all pending timer queries
        var queryTime = 0;
        ptr = 0;
        for (i = 0; i < pendingQueries.length; ++i) {
          var query = pendingQueries[i];
          if (extensions.ext_disjoint_timer_query.getQueryObjectEXT(query, GL_QUERY_RESULT_AVAILABLE_EXT)) {
            queryTime += extensions.ext_disjoint_timer_query.getQueryObjectEXT(query, GL_QUERY_RESULT_EXT);
            freeQuery(query);
          } else {
            pendingQueries[ptr++] = query;
          }
          timeSum[i + 1] = queryTime;
          queryPtr[i + 1] = ptr;
        }
        pendingQueries.length = ptr;

        // Update all pending stat queries
        ptr = 0;
        for (i = 0; i < pendingStats.length; ++i) {
          var stats = pendingStats[i];
          var start = stats.startQueryIndex;
          var end = stats.endQueryIndex;
          stats.sum += timeSum[end] - timeSum[start];
          var startPtr = queryPtr[start];
          var endPtr = queryPtr[end];
          if (endPtr === startPtr) {
            stats.stats.gpuTime += stats.sum / 1e6;
            freePendingStats(stats);
          } else {
            stats.startQueryIndex = startPtr;
            stats.endQueryIndex = endPtr;
            pendingStats[ptr++] = stats;
          }
        }
        pendingStats.length = ptr;
      }

      return {
        beginQuery: beginQuery,
        endQuery: endQuery,
        pushScopeStats: pushScopeStats,
        update: update,
        getNumPendingQueries: function () {
          return pendingQueries.length
        },
        clear: function () {
          queryPool.push.apply(queryPool, pendingQueries);
          for (var i = 0; i < queryPool.length; i++) {
            extensions.ext_disjoint_timer_query.deleteQueryEXT(queryPool[i]);
          }
          pendingQueries.length = 0;
          queryPool.length = 0;
        },
        restore: function () {
          pendingQueries.length = 0;
          queryPool.length = 0;
        }
      }
    };

    var GL_COLOR_BUFFER_BIT = 16384;
    var GL_DEPTH_BUFFER_BIT = 256;
    var GL_STENCIL_BUFFER_BIT = 1024;

    var GL_ARRAY_BUFFER = 34962;

    var CONTEXT_LOST_EVENT = 'webglcontextlost';
    var CONTEXT_RESTORED_EVENT = 'webglcontextrestored';

    var DYN_PROP = 1;
    var DYN_CONTEXT = 2;
    var DYN_STATE = 3;

    function find (haystack, needle) {
      for (var i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
          return i
        }
      }
      return -1
    }

    function wrapREGL (args) {
      var config = parseArgs(args);
      if (!config) {
        return null
      }

      var gl = config.gl;
      var glAttributes = gl.getContextAttributes();
      var contextLost = gl.isContextLost();

      var extensionState = createExtensionCache(gl, config);
      if (!extensionState) {
        return null
      }

      var stringStore = createStringStore();
      var stats$$1 = stats();
      var extensions = extensionState.extensions;
      var timer = createTimer(gl, extensions);

      var START_TIME = clock();
      var WIDTH = gl.drawingBufferWidth;
      var HEIGHT = gl.drawingBufferHeight;

      var contextState = {
        tick: 0,
        time: 0,
        viewportWidth: WIDTH,
        viewportHeight: HEIGHT,
        framebufferWidth: WIDTH,
        framebufferHeight: HEIGHT,
        drawingBufferWidth: WIDTH,
        drawingBufferHeight: HEIGHT,
        pixelRatio: config.pixelRatio
      };
      var uniformState = {};
      var drawState = {
        elements: null,
        primitive: 4, // GL_TRIANGLES
        count: -1,
        offset: 0,
        instances: -1
      };

      var limits = wrapLimits(gl, extensions);
      var bufferState = wrapBufferState(
        gl,
        stats$$1,
        config,
        destroyBuffer);
      var elementState = wrapElementsState(gl, extensions, bufferState, stats$$1);
      var attributeState = wrapAttributeState(
        gl,
        extensions,
        limits,
        stats$$1,
        bufferState,
        elementState,
        drawState);
      function destroyBuffer (buffer) {
        return attributeState.destroyBuffer(buffer)
      }
      var shaderState = wrapShaderState(gl, stringStore, stats$$1, config);
      var textureState = createTextureSet(
        gl,
        extensions,
        limits,
        function () { core.procs.poll(); },
        contextState,
        stats$$1,
        config);
      var renderbufferState = wrapRenderbuffers(gl, extensions, limits, stats$$1, config);
      var framebufferState = wrapFBOState(
        gl,
        extensions,
        limits,
        textureState,
        renderbufferState,
        stats$$1);
      var core = reglCore(
        gl,
        stringStore,
        extensions,
        limits,
        bufferState,
        elementState,
        textureState,
        framebufferState,
        uniformState,
        attributeState,
        shaderState,
        drawState,
        contextState,
        timer,
        config);
      var readPixels = wrapReadPixels(
        gl,
        framebufferState,
        core.procs.poll,
        contextState,
        glAttributes, extensions, limits);

      var nextState = core.next;
      var canvas = gl.canvas;

      var rafCallbacks = [];
      var lossCallbacks = [];
      var restoreCallbacks = [];
      var destroyCallbacks = [config.onDestroy];

      var activeRAF = null;
      function handleRAF () {
        if (rafCallbacks.length === 0) {
          if (timer) {
            timer.update();
          }
          activeRAF = null;
          return
        }

        // schedule next animation frame
        activeRAF = raf.next(handleRAF);

        // poll for changes
        poll();

        // fire a callback for all pending rafs
        for (var i = rafCallbacks.length - 1; i >= 0; --i) {
          var cb = rafCallbacks[i];
          if (cb) {
            cb(contextState, null, 0);
          }
        }

        // flush all pending webgl calls
        gl.flush();

        // poll GPU timers *after* gl.flush so we don't delay command dispatch
        if (timer) {
          timer.update();
        }
      }

      function startRAF () {
        if (!activeRAF && rafCallbacks.length > 0) {
          activeRAF = raf.next(handleRAF);
        }
      }

      function stopRAF () {
        if (activeRAF) {
          raf.cancel(handleRAF);
          activeRAF = null;
        }
      }

      function handleContextLoss (event) {
        event.preventDefault();

        // set context lost flag
        contextLost = true;

        // pause request animation frame
        stopRAF();

        // lose context
        lossCallbacks.forEach(function (cb) {
          cb();
        });
      }

      function handleContextRestored (event) {
        // clear error code
        gl.getError();

        // clear context lost flag
        contextLost = false;

        // refresh state
        extensionState.restore();
        shaderState.restore();
        bufferState.restore();
        textureState.restore();
        renderbufferState.restore();
        framebufferState.restore();
        attributeState.restore();
        if (timer) {
          timer.restore();
        }

        // refresh state
        core.procs.refresh();

        // restart RAF
        startRAF();

        // restore context
        restoreCallbacks.forEach(function (cb) {
          cb();
        });
      }

      if (canvas) {
        canvas.addEventListener(CONTEXT_LOST_EVENT, handleContextLoss, false);
        canvas.addEventListener(CONTEXT_RESTORED_EVENT, handleContextRestored, false);
      }

      function destroy () {
        rafCallbacks.length = 0;
        stopRAF();

        if (canvas) {
          canvas.removeEventListener(CONTEXT_LOST_EVENT, handleContextLoss);
          canvas.removeEventListener(CONTEXT_RESTORED_EVENT, handleContextRestored);
        }

        shaderState.clear();
        framebufferState.clear();
        renderbufferState.clear();
        attributeState.clear();
        textureState.clear();
        elementState.clear();
        bufferState.clear();

        if (timer) {
          timer.clear();
        }

        destroyCallbacks.forEach(function (cb) {
          cb();
        });
      }

      function compileProcedure (options) {
        check$1(!!options, 'invalid args to regl({...})');
        check$1.type(options, 'object', 'invalid args to regl({...})');

        function flattenNestedOptions (options) {
          var result = extend({}, options);
          delete result.uniforms;
          delete result.attributes;
          delete result.context;
          delete result.vao;

          if ('stencil' in result && result.stencil.op) {
            result.stencil.opBack = result.stencil.opFront = result.stencil.op;
            delete result.stencil.op;
          }

          function merge (name) {
            if (name in result) {
              var child = result[name];
              delete result[name];
              Object.keys(child).forEach(function (prop) {
                result[name + '.' + prop] = child[prop];
              });
            }
          }
          merge('blend');
          merge('depth');
          merge('cull');
          merge('stencil');
          merge('polygonOffset');
          merge('scissor');
          merge('sample');

          if ('vao' in options) {
            result.vao = options.vao;
          }

          return result
        }

        function separateDynamic (object, useArrays) {
          var staticItems = {};
          var dynamicItems = {};
          Object.keys(object).forEach(function (option) {
            var value = object[option];
            if (dynamic.isDynamic(value)) {
              dynamicItems[option] = dynamic.unbox(value, option);
              return
            } else if (useArrays && Array.isArray(value)) {
              for (var i = 0; i < value.length; ++i) {
                if (dynamic.isDynamic(value[i])) {
                  dynamicItems[option] = dynamic.unbox(value, option);
                  return
                }
              }
            }
            staticItems[option] = value;
          });
          return {
            dynamic: dynamicItems,
            static: staticItems
          }
        }

        // Treat context variables separate from other dynamic variables
        var context = separateDynamic(options.context || {}, true);
        var uniforms = separateDynamic(options.uniforms || {}, true);
        var attributes = separateDynamic(options.attributes || {}, false);
        var opts = separateDynamic(flattenNestedOptions(options), false);

        var stats$$1 = {
          gpuTime: 0.0,
          cpuTime: 0.0,
          count: 0
        };

        var compiled = core.compile(opts, attributes, uniforms, context, stats$$1);

        var draw = compiled.draw;
        var batch = compiled.batch;
        var scope = compiled.scope;

        // FIXME: we should modify code generation for batch commands so this
        // isn't necessary
        var EMPTY_ARRAY = [];
        function reserve (count) {
          while (EMPTY_ARRAY.length < count) {
            EMPTY_ARRAY.push(null);
          }
          return EMPTY_ARRAY
        }

        function REGLCommand (args, body) {
          var i;
          if (contextLost) {
            check$1.raise('context lost');
          }
          if (typeof args === 'function') {
            return scope.call(this, null, args, 0)
          } else if (typeof body === 'function') {
            if (typeof args === 'number') {
              for (i = 0; i < args; ++i) {
                scope.call(this, null, body, i);
              }
            } else if (Array.isArray(args)) {
              for (i = 0; i < args.length; ++i) {
                scope.call(this, args[i], body, i);
              }
            } else {
              return scope.call(this, args, body, 0)
            }
          } else if (typeof args === 'number') {
            if (args > 0) {
              return batch.call(this, reserve(args | 0), args | 0)
            }
          } else if (Array.isArray(args)) {
            if (args.length) {
              return batch.call(this, args, args.length)
            }
          } else {
            return draw.call(this, args)
          }
        }

        return extend(REGLCommand, {
          stats: stats$$1,
          destroy: function () {
            compiled.destroy();
          }
        })
      }

      var setFBO = framebufferState.setFBO = compileProcedure({
        framebuffer: dynamic.define.call(null, DYN_PROP, 'framebuffer')
      });

      function clearImpl (_, options) {
        var clearFlags = 0;
        core.procs.poll();

        var c = options.color;
        if (c) {
          gl.clearColor(+c[0] || 0, +c[1] || 0, +c[2] || 0, +c[3] || 0);
          clearFlags |= GL_COLOR_BUFFER_BIT;
        }
        if ('depth' in options) {
          gl.clearDepth(+options.depth);
          clearFlags |= GL_DEPTH_BUFFER_BIT;
        }
        if ('stencil' in options) {
          gl.clearStencil(options.stencil | 0);
          clearFlags |= GL_STENCIL_BUFFER_BIT;
        }

        check$1(!!clearFlags, 'called regl.clear with no buffer specified');
        gl.clear(clearFlags);
      }

      function clear (options) {
        check$1(
          typeof options === 'object' && options,
          'regl.clear() takes an object as input');
        if ('framebuffer' in options) {
          if (options.framebuffer &&
              options.framebuffer_reglType === 'framebufferCube') {
            for (var i = 0; i < 6; ++i) {
              setFBO(extend({
                framebuffer: options.framebuffer.faces[i]
              }, options), clearImpl);
            }
          } else {
            setFBO(options, clearImpl);
          }
        } else {
          clearImpl(null, options);
        }
      }

      function frame (cb) {
        check$1.type(cb, 'function', 'regl.frame() callback must be a function');
        rafCallbacks.push(cb);

        function cancel () {
          // FIXME:  should we check something other than equals cb here?
          // what if a user calls frame twice with the same callback...
          //
          var i = find(rafCallbacks, cb);
          check$1(i >= 0, 'cannot cancel a frame twice');
          function pendingCancel () {
            var index = find(rafCallbacks, pendingCancel);
            rafCallbacks[index] = rafCallbacks[rafCallbacks.length - 1];
            rafCallbacks.length -= 1;
            if (rafCallbacks.length <= 0) {
              stopRAF();
            }
          }
          rafCallbacks[i] = pendingCancel;
        }

        startRAF();

        return {
          cancel: cancel
        }
      }

      // poll viewport
      function pollViewport () {
        var viewport = nextState.viewport;
        var scissorBox = nextState.scissor_box;
        viewport[0] = viewport[1] = scissorBox[0] = scissorBox[1] = 0;
        contextState.viewportWidth =
          contextState.framebufferWidth =
          contextState.drawingBufferWidth =
          viewport[2] =
          scissorBox[2] = gl.drawingBufferWidth;
        contextState.viewportHeight =
          contextState.framebufferHeight =
          contextState.drawingBufferHeight =
          viewport[3] =
          scissorBox[3] = gl.drawingBufferHeight;
      }

      function poll () {
        contextState.tick += 1;
        contextState.time = now();
        pollViewport();
        core.procs.poll();
      }

      function refresh () {
        textureState.refresh();
        pollViewport();
        core.procs.refresh();
        if (timer) {
          timer.update();
        }
      }

      function now () {
        return (clock() - START_TIME) / 1000.0
      }

      refresh();

      function addListener (event, callback) {
        check$1.type(callback, 'function', 'listener callback must be a function');

        var callbacks;
        switch (event) {
          case 'frame':
            return frame(callback)
          case 'lost':
            callbacks = lossCallbacks;
            break
          case 'restore':
            callbacks = restoreCallbacks;
            break
          case 'destroy':
            callbacks = destroyCallbacks;
            break
          default:
            check$1.raise('invalid event, must be one of frame,lost,restore,destroy');
        }

        callbacks.push(callback);
        return {
          cancel: function () {
            for (var i = 0; i < callbacks.length; ++i) {
              if (callbacks[i] === callback) {
                callbacks[i] = callbacks[callbacks.length - 1];
                callbacks.pop();
                return
              }
            }
          }
        }
      }

      var regl = extend(compileProcedure, {
        // Clear current FBO
        clear: clear,

        // Short cuts for dynamic variables
        prop: dynamic.define.bind(null, DYN_PROP),
        context: dynamic.define.bind(null, DYN_CONTEXT),
        this: dynamic.define.bind(null, DYN_STATE),

        // executes an empty draw command
        draw: compileProcedure({}),

        // Resources
        buffer: function (options) {
          return bufferState.create(options, GL_ARRAY_BUFFER, false, false)
        },
        elements: function (options) {
          return elementState.create(options, false)
        },
        texture: textureState.create2D,
        cube: textureState.createCube,
        renderbuffer: renderbufferState.create,
        framebuffer: framebufferState.create,
        framebufferCube: framebufferState.createCube,
        vao: attributeState.createVAO,

        // Expose context attributes
        attributes: glAttributes,

        // Frame rendering
        frame: frame,
        on: addListener,

        // System limits
        limits: limits,
        hasExtension: function (name) {
          return limits.extensions.indexOf(name.toLowerCase()) >= 0
        },

        // Read pixels
        read: readPixels,

        // Destroy regl and all associated resources
        destroy: destroy,

        // Direct GL state manipulation
        _gl: gl,
        _refresh: refresh,

        poll: function () {
          poll();
          if (timer) {
            timer.update();
          }
        },

        // Current time
        now: now,

        // regl Statistics Information
        stats: stats$$1
      });

      config.onDone(null, regl);

      return regl
    }

    return wrapREGL;

    })));
    //# sourceMappingURL=regl.js.map
    });

    const prepareRender$1 = (params) => {
      const defaults = {
      // extensions:['oes_element_index_uint']
      };
      const options = Object.assign(
        {},
        defaults,
        params.glOptions,
        {
          // canvas: (element.nodeName.toLowerCase() === 'canvas') ? element : undefined,
          // container: (element.nodeName.toLowerCase() !== 'canvas') ? element : undefined
          onDone: (err, callback) => {
            if (err) {
              throw err
            }
          }
        }
      );
      // setup regl
      const regl$1 = regl(options);// , (width, height))
      // setup draw command cache
      // const drawCache = {}
      const drawCache2 = new Map();

      // create the main draw command
      const command = (props) => {
        // console.log('params in render', props)
        props.rendering = Object.assign({}, renderDefaults, props.rendering);

        // props is the first parameter, the second one is a function, doing the actual rendering
        renderContext(regl$1)(props, (context) => {
          regl$1.clear({
            color: props.rendering.background,
            depth: 1
          });
          // this whole thing is very inneficiant and innelegant ... improve in the future
          if (props.entities) {
            // we need to sort transparents vs non transparents: transparent objects should be rendered last
            // since you can see 'behind' transparent ones, so what is behind needs to already be rendered
            props.entities
              .sort((a, b) => {
                const aTransparent = 'transparent' in a.visuals ? a.visuals.transparent : false;
                const bTransparent = 'transparent' in b.visuals ? b.visuals.transparent : false;
                return (aTransparent === bTransparent) ? 0 : aTransparent ? 1 : -1
              })
              .forEach((entity) => {
                const { visuals } = entity;
                const show = ('show' in visuals) ? visuals.show : true;
                if (show && visuals.drawCmd && props.drawCommands[visuals.drawCmd]) {
                  let drawCmd;
                  if (visuals.cacheId) {
                    drawCmd = drawCache2.get(visuals.cacheId);
                  } else {
                    visuals.cacheId = drawCache2.size;
                    drawCmd = props.drawCommands[visuals.drawCmd](regl$1, entity);
                    drawCache2.set(visuals.cacheId, drawCmd);
                  }
                  // console.log('drawing with', drawCmd, entity)
                  const drawParams = { // FIXME: horrible, tidy up !!: what is needed/should be passed to render pass ?
                    ...entity,
                    ...visuals,
                    camera: props.camera
                  };
                  drawCmd(drawParams);
                }
              });
          }
        });
      };
      // actual render function
      return function render (data) {
        // important for stats, correct resizing etc
        regl$1.poll();
        command(data);// meh ??
        // tick += 0.01
      }
    };

    var render$1 = prepareRender$1;

    const makeDrawGrid = (regl, params = {}) => {
      const positions = [];
      const defaults = {
        visuals: {
          color: [0, 0, 1, 1],
          fadeOut: false
        },
        ticks: 1,
        size: [16, 16],
        centered: false,
        lineWidth: 2
      };
      const visuals = Object.assign({}, defaults.visuals, params.visuals || {});
      const { fadeOut, color } = visuals;
      const { size, ticks, centered, lineWidth } = Object.assign({}, defaults, params);

      const width = size[0];
      const length = size[1];

      // if (false) {
      //   const halfWidth = width * 0.5
      //   const halfLength = length * 0.5
      //   // const gridLine =
      //   positions.push(-halfWidth, 0, 0)
      //   positions.push(halfWidth, 0, 0)
      // }

      if (centered) {
        const halfWidth = width * 0.5;
        const halfLength = length * 0.5;

        const remWidth = halfWidth % ticks;
        const widthStart = -halfWidth + remWidth;
        const widthEnd = -widthStart;

        const remLength = halfLength % ticks;
        const lengthStart = -halfLength + remLength;
        const lengthEnd = -lengthStart;

        const skipEvery = 0;

        for (let i = widthStart, j = 0; i <= widthEnd; i += ticks, j += 1) {
          if (j % skipEvery !== 0) {
            positions.push(lengthStart, i, 0);
            positions.push(lengthEnd, i, 0);
            positions.push(lengthStart, i, 0);
          }
        }
        for (let i = lengthStart, j = 0; i <= lengthEnd; i += ticks, j += 1) {
          if (j % skipEvery !== 0) {
            positions.push(i, widthStart, 0);
            positions.push(i, widthEnd, 0);
            positions.push(i, widthStart, 0);
          }
        }
      } else {
        for (let i = -width * 0.5; i <= width * 0.5; i += ticks) {
          positions.push(-length * 0.5, i, 0);
          positions.push(length * 0.5, i, 0);
          positions.push(-length * 0.5, i, 0);
        }

        for (let i = -length * 0.5; i <= length * 0.5; i += ticks) {
          positions.push(i, -width * 0.5, 0);
          positions.push(i, width * 0.5, 0);
          positions.push(i, -width * 0.5, 0);
        }
      }
      return regl({
        vert: `precision mediump float;

    uniform float camNear, camFar;
    uniform mat4 model, view, projection;

    attribute vec3 position;
    varying vec3 fragNormal, fragPosition;
    varying vec4 worldPosition;

    void main() {
      fragPosition = position;
      worldPosition = model * vec4(position, 1);
      vec4 glPosition = projection * view * worldPosition;
      gl_Position = glPosition;
    }`,
        frag: `precision mediump float;
    uniform vec4 color;
    varying vec3 fragNormal, fragPosition;
    varying vec4 worldPosition;

    uniform vec4 fogColor;
    uniform bool fadeOut;
    void main() {
      float dist = .5;
      if(fadeOut){
        dist = distance( vec2(0.,0.), vec2(worldPosition.x, worldPosition.y));
        dist *= 0.0025;
        dist = sqrt(dist);
      }

      gl_FragColor = mix(color, fogColor, dist);
    }
    `,

        attributes: {
          position: regl.buffer(positions)
        },
        count: positions.length / 3,
        uniforms: {
          model: (context, props) => props && props.model ? props.model : glMat4.identity([]),
          color: (context, props) => props && props.color ? props.color : color,
          fogColor: (context, props) => props && props.color
            ? [props.color[0], props.color[1], props.color[2], 0]
            : [color[0], color[1], color[2], 0.0],
          fadeOut: (context, props) => props && props.fadeOut !== undefined ? props.fadeOut : fadeOut
        },
        lineWidth: (context, props) => Math.min((props && props.lineWidth ? props.lineWidth : lineWidth), regl.limits.lineWidthDims[1]),
        primitive: 'lines',
        cull: {
          enable: true,
          face: 'front'
        },
        polygonOffset: {
          enable: true,
          offset: {
            factor: 1,
            units: Math.random() * 10
          }
        },
        blend: {
          enable: true,
          func: {
            src: 'src alpha',
            dst: 'one minus src alpha'
          }
        }

      })
    };

    var drawGrid = makeDrawGrid;

    const makeDrawMultiGrid = (regl, params) => {
      const defaults = {
        size: [50, 50],
        ticks: [10, 1]
      };
      const { size, ticks } = Object.assign({}, defaults, params);
      const drawMainGrid = drawGrid(regl, { size, ticks: ticks[0] });
      const drawSubGrid = drawGrid(regl, { size, ticks: ticks[1] });
      const drawGrid$1 = (props) => {
        drawMainGrid(props);
        drawSubGrid({ color: props.subColor, fadeOut: props.fadeOut });
      };
      return drawGrid$1
    };

    var multi = makeDrawMultiGrid;

    const drawAxis = (regl, params) => {
      const defaults = {
        xColor: [1, 0, 0, 1],
        yColor: [0, 1, 0, 1],
        zColor: [0, 0, 1, 1],
        size: 10,
        lineWidth: 3, // FIXME/ linewidth has been "deprecated" in multiple browsers etc, need a workaround,
        alwaysVisible: true // to have the widget alway visible 'on top' of the rest of the scene
      };
      let { size, xColor, yColor, zColor, lineWidth, alwaysVisible } = Object.assign({}, defaults, params);

      if (lineWidth > regl.limits.lineWidthDims[1]) {
        lineWidth = regl.limits.lineWidthDims[1];
      }
      const points = [
        0, 0, 0,
        size, 0, 0
      ];

      const commandParams = {
        frag: `precision mediump float;
    uniform vec4 color;
    void main() {
      gl_FragColor = color;
    }`,
        vert: `
    precision mediump float;
    attribute vec3 position;
    uniform mat4 model, view, projection;
    void main() {
      gl_Position = projection * view * model * vec4(position, 1);
    }`,

        uniforms: {
          model: (context, props) => props && props.model ? props.model : glMat4.identity([]),
          color: (context, props) => props.color,
          angle: (contet, props) => props.angle
        },
        attributes: {
          position: points
        },
        count: points.length / 3,
        primitive: 'line loop',
        lineWidth,
        depth: {
          enable: !alwaysVisible // disable depth testing to have the axis widget 'alway on top' of other items in the 3d viewer
        }
      };

      const xAxisModel = glMat4.identity([]);
      const yAxisModel = glMat4.rotateZ(glMat4.create(), glMat4.identity([]), Math.PI / 2);
      const zAxisModel = glMat4.rotateY(glMat4.create(), glMat4.identity([]), -Math.PI / 2);
      const single = regl(commandParams);
      return (props) => {
        const defaults = {
          model: glMat4.identity([])
        };
        props = Object.assign({}, defaults, props);
        return single([
          { color: xColor, model: glMat4.multiply(glMat4.create(), props.model, xAxisModel) }, // X
          { color: yColor, model: glMat4.multiply(glMat4.create(), props.model, yAxisModel) }, // Y
          { color: zColor, model: glMat4.multiply(glMat4.create(), props.model, zAxisModel) } // Z
        ])
      }
    };

    var drawAxis_1 = drawAxis;

    const vColorVert = `
precision mediump float;

uniform float camNear, camFar;
uniform mat4 model, view, projection, unormal;

attribute vec3 position, normal;
attribute vec4 color;

attribute float ao;
varying float ambientAo;

varying vec3 surfaceNormal, surfacePosition;
varying vec4 _worldSpacePosition;
varying vec4 vColor;

void main() {
  surfacePosition = (unormal * vec4(position, 1.0)).xyz;
  surfaceNormal = normalize((unormal * vec4(normal, 1.0)).xyz); //vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);
  vec4 worldSpacePosition = model * vec4(position, 1);
  _worldSpacePosition = worldSpacePosition;
  //gl_Position = projection * view * worldSpacePosition;

  vColor = color;

  //ambientAo = (1. - ao) * (0.5 * max(normal.x, 0.) + 0.5);

  vec4 glPosition = projection * view * model * vec4(position, 1);
  gl_Position = glPosition;
  //gl_Position = zBufferAdjust(glPosition, camNear, camFar);
}
`;
    const vColorFrag$1 = `
precision mediump float;
varying vec3 surfaceNormal, surfacePosition;

uniform float ambientLightAmount;
uniform float diffuseLightAmount;
uniform float specularLightAmount;

uniform vec3 lightDirection;
uniform vec4 lightColor;
uniform vec3 opacity;
uniform float uMaterialShininess;

varying vec4 vColor;
uniform vec4 ucolor;
uniform float vColorToggler;

uniform vec2 printableArea;
vec4 errorColor = vec4(0.15, 0.15, 0.15, 0.3);//vec4(0.15, 0.15, 0.15, 0.3);
varying vec4 _worldSpacePosition;
varying float ambientAo;

void main () {
  vec4 depth = gl_FragCoord;
  vec4 endColor = vColor * vColorToggler + ucolor * (1.0 - vColorToggler);

  vec3 ambient = ambientLightAmount * endColor.rgb ; //ambientAo * 

  float diffuseWeight = dot(surfaceNormal, lightDirection);
  vec3 diffuse = diffuseLightAmount * endColor.rgb * clamp(diffuseWeight , 0.0, 1.0 );

  //specular
  
  vec4 specularColor = vec4(lightColor);
  vec3 eyeDirection = normalize(surfacePosition.xyz);
  vec3 reflectionDirection = reflect(-lightDirection, -surfaceNormal);
  float specularLightWeight = pow(max(dot(reflectionDirection, eyeDirection), 0.0), uMaterialShininess);
  vec3 specular = specularColor.rgb * specularLightWeight * specularLightAmount;

  /*float light2Multiplier = 0.2;
  float diffuseWeight2 = dot(surfaceNormal, vec3(-lightDirection.x, lightDirection.y, lightDirection.z));
  vec3 diffuse2 = diffuseLightAmount * endColor.rgb * clamp(diffuseWeight2 , 0.0, 1.0 ) * light2Multiplier;

  float light3Multiplier = 0.2;  
  float diffuseWeight3 = dot(surfaceNormal, vec3(lightDirection.x, -lightDirection.y, lightDirection.z));
  vec3 diffuse3 = diffuseLightAmount * endColor.rgb * clamp(diffuseWeight3 , 0.0, 1.0 ) * light3Multiplier;

  float light4Multiplier = 0.2;  
  float diffuseWeight4 = dot(surfaceNormal, vec3(-lightDirection.x, -lightDirection.y, lightDirection.z));
  vec3 diffuse4 = diffuseLightAmount * endColor.rgb * clamp(diffuseWeight4 , 0.0, 1.0 ) * light4Multiplier;*/
  
  gl_FragColor = vec4((ambient + diffuse + specular), endColor.a);
  //gl_FragColor = vec4((ambient + diffuse + diffuse2 + diffuse3 + diffuse4), endColor.a);
}
`;

    var vColorShaders = { frag: vColorFrag$1, vert: vColorVert };

    const meshFrag$1 = `
precision mediump float;
varying vec3 surfaceNormal;
uniform float ambientLightAmount;
uniform float diffuseLightAmount;
uniform vec4 ucolor;
uniform vec3 lightDirection;
uniform vec3 opacity;

varying vec4 _worldSpacePosition;

uniform vec2 printableArea;

vec4 errorColor = vec4(0.15, 0.15, 0.15, 0.3);

void main () {
  vec4 depth = gl_FragCoord;

  float v = 0.8; // shadow value
  vec4 endColor = ucolor;

  vec3 ambient = ambientLightAmount * endColor.rgb;
  float cosTheta = dot(surfaceNormal, lightDirection);
  vec3 diffuse = diffuseLightAmount * endColor.rgb * clamp(cosTheta , 0.0, 1.0 );

  float cosTheta2 = dot(surfaceNormal, vec3(-lightDirection.x, -lightDirection.y, lightDirection.z));
  vec3 diffuse2 = diffuseLightAmount * endColor.rgb * clamp(cosTheta2 , 0.0, 1.0 );

  gl_FragColor = vec4((ambient + diffuse + diffuse2 * v), endColor.a);
}`;

    const meshVert$1 = `
precision mediump float;

uniform float camNear, camFar;
uniform mat4 model, view, projection;

attribute vec3 position, normal;

varying vec3 surfaceNormal, surfacePosition;
varying vec4 _worldSpacePosition;

void main() {
  surfacePosition = position;
  surfaceNormal = normal;
  vec4 worldSpacePosition = model * vec4(position, 1);
  _worldSpacePosition = worldSpacePosition;

  vec4 glPosition = projection * view * model * vec4(position, 1);
  gl_Position = glPosition;
}
`;

    var meshShaders$1 = { vert: meshVert$1, frag: meshFrag$1 };

    const { meshColor: meshColor$2 } = renderDefaults;

    const drawMesh = (regl, params = { extras: {} }) => {
      const defaults = {
        useVertexColors: true,
        dynamicCulling: true,
        geometry: undefined,
        color: meshColor$2
      };
      const { geometry, dynamicCulling, useVertexColors, color } = Object.assign({}, defaults, params);

      // let ambientOcclusion = vao(geometry.indices, geometry.positions, 64, 64)
      const ambientOcclusion = regl.buffer([]);

      // vertex colors or not ?
      const hasIndices = !!(geometry.indices && geometry.indices.length > 0);
      const hasNormals = !!(geometry.normals && geometry.normals.length > 0);
      const hasVertexColors = !!(useVertexColors && geometry.colors && geometry.colors.length > 0);
      const transforms = geometry.transforms || glMat4.create();
      const flip = glMat4.determinant(transforms) < 0;
      const cullFace = dynamicCulling
        ? (flip ? 'front' : 'back')
        : 'back';

      const vert = hasVertexColors ? vColorShaders.vert : meshShaders$1.vert;
      const frag = hasVertexColors ? vColorShaders.frag : meshShaders$1.frag;
      const modelMatrixInv = glMat4.invert(glMat4.create(), transforms);

      // console.log('type', geometry.type, 'color', color, hasVertexColors)

      let commandParams = {
        primitive: 'triangles',
        vert,
        frag,

        uniforms: {
          model: (context, props) => transforms ,
          ucolor: (context, props) => (props && props.color) ? props.color : color,
          // semi hack, woraround to enable/disable vertex colors !!!
          vColorToggler: (context, props) => (props && props.useVertexColors && props.useVertexColors === true) ? 1.0 : 0.0,
          // experimental
          unormal: (context, props) => {
            const modelViewMatrix = glMat4.invert(glMat4.create(), props.camera.view);
            glMat4.multiply(modelViewMatrix, modelMatrixInv, modelViewMatrix);
            glMat4.transpose(modelViewMatrix, modelViewMatrix);
            return modelViewMatrix
          }
        },
        attributes: {
          position: regl.buffer({ usage: 'static', type: 'float', data: geometry.positions }),
          ao: ambientOcclusion
        },
        cull: {
          enable: true,
          face: cullFace
        },
        depth: {
          enable: true
        },
        blend: {
          enable: true,

          func: { src: 'src alpha', dst: 'one minus src alpha' }
        }
      };

      if (geometry.cells) {
        commandParams.elements = geometry.cells;
      } else if (hasIndices) {
        commandParams.elements = regl.elements({ usage: 'static', type: 'uint16', data: geometry.indices });
      } else if (geometry.triangles) {
        commandParams.elements = geometry.triangles;
      } else {
        commandParams.count = geometry.positions.length / 3;
      }

      if (hasNormals) {
        commandParams.attributes.normal = regl.buffer({ usage: 'static', type: 'float', data: geometry.normals });
      }
      if (hasVertexColors) {
        commandParams.attributes.color = regl.buffer({ usage: 'static', type: 'float', data: geometry.colors });
      }

      // Splice in any extra params
      commandParams = Object.assign({}, commandParams, params.extras);
      return regl(commandParams)
    };

    var drawMesh_1 = drawMesh;

    const meshFrag = `
precision mediump float;
varying vec3 surfaceNormal;
uniform float ambientLightAmount;
uniform float diffuseLightAmount;
uniform vec4 ucolor;
uniform vec3 lightDirection;
uniform vec3 opacity;

varying vec4 _worldSpacePosition;

uniform vec2 printableArea;

vec4 errorColor = vec4(0.15, 0.15, 0.15, 0.3);

void main () {
  vec4 depth = gl_FragCoord;

  float v = 0.8; // shadow value
  vec4 endColor = ucolor;

  vec3 ambient = ambientLightAmount * endColor.rgb;
  float cosTheta = dot(surfaceNormal, lightDirection);
  vec3 diffuse = diffuseLightAmount * endColor.rgb * clamp(cosTheta , 0.0, 1.0 );

  float cosTheta2 = dot(surfaceNormal, vec3(-lightDirection.x, -lightDirection.y, lightDirection.z));
  vec3 diffuse2 = diffuseLightAmount * endColor.rgb * clamp(cosTheta2 , 0.0, 1.0 );

  gl_FragColor = vec4((ambient + diffuse + diffuse2 * v), endColor.a);
}`;

    const meshVert = `
precision mediump float;

uniform float camNear, camFar;
uniform mat4 model, view, projection;

attribute vec3 position, normal;

varying vec3 surfaceNormal, surfacePosition;
varying vec4 _worldSpacePosition;

void main() {
  surfacePosition = position;
  surfaceNormal = normal;
  vec4 worldSpacePosition = model * vec4(position, 1);
  _worldSpacePosition = worldSpacePosition;

  vec4 glPosition = projection * view * model * vec4(position, 1);
  gl_Position = glPosition;
}
`;

    var meshShaders = { vert: meshVert, frag: meshFrag };

    const vColorFrag = `
precision mediump float;
uniform vec4 ucolor;

void main () {
  gl_FragColor = ucolor;
}
`;
    var colorOnlyShaders = { frag: vColorFrag };

    const { meshColor: meshColor$1 } = renderDefaults;

    const drawLines = (regl, params = {}) => {
      const defaults = {
        color: meshColor$1,
        geometry: undefined
      };
      let { geometry, color } = Object.assign({}, defaults, params);

      if ('color' in geometry) color = geometry.color;

      const hasIndices = !!(geometry.indices && geometry.indices.length > 0);
      const hasNormals = !!(geometry.normals && geometry.normals.length > 0);

      // console.log('type', geometry.type, 'color', color, hasIndices, hasNormals)

      let commandParams = {
        primitive: 'lines',
        vert: meshShaders.vert,
        frag: colorOnlyShaders.frag,

        uniforms: {
          model: (context, props) => props.model || geometry.transforms || glMat4.create(),
          ucolor: (context, props) => (props && props.color) ? props.color : color
        },
        attributes: {
          position: regl.buffer({ usage: 'static', type: 'float', data: geometry.positions })
        }
      };

      if (hasIndices) {
        commandParams.elements = regl.elements({ usage: 'static', type: 'uint16', data: geometry.indices });
      }

      if (hasNormals) {
        commandParams.attributes.normal = regl.buffer({ usage: 'static', type: 'float', data: geometry.normals });
      }

      return regl(commandParams)
    };

    var drawLines_1 = drawLines;

    var epsilon = 0.000001;

    var create_1 = create;

    /**
     * Creates a new, empty vec3
     *
     * @returns {vec3} a new 3D vector
     */
    function create() {
        var out = new Float32Array(3);
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        return out
    }

    var clone_1 = clone;

    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {vec3} a vector to clone
     * @returns {vec3} a new 3D vector
     */
    function clone(a) {
        var out = new Float32Array(3);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out
    }

    var fromValues_1 = fromValues;

    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} a new 3D vector
     */
    function fromValues(x, y, z) {
        var out = new Float32Array(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out
    }

    var normalize_1 = normalize;

    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */
    function normalize(out, a) {
        var x = a[0],
            y = a[1],
            z = a[2];
        var len = x*x + y*y + z*z;
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
            out[0] = a[0] * len;
            out[1] = a[1] * len;
            out[2] = a[2] * len;
        }
        return out
    }

    var dot_1 = dot;

    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }

    var angle_1 = angle;





    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */
    function angle(a, b) {
        var tempA = fromValues_1(a[0], a[1], a[2]);
        var tempB = fromValues_1(b[0], b[1], b[2]);
     
        normalize_1(tempA, tempA);
        normalize_1(tempB, tempB);
     
        var cosine = dot_1(tempA, tempB);

        if(cosine > 1.0){
            return 0
        } else {
            return Math.acos(cosine)
        }     
    }

    var copy_1 = copy;

    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out
    }

    var set_1 = set;

    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */
    function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out
    }

    var equals_1 = equals;



    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals(a, b) {
      var a0 = a[0];
      var a1 = a[1];
      var a2 = a[2];
      var b0 = b[0];
      var b1 = b[1];
      var b2 = b[2];
      return (Math.abs(a0 - b0) <= epsilon * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
              Math.abs(a1 - b1) <= epsilon * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
              Math.abs(a2 - b2) <= epsilon * Math.max(1.0, Math.abs(a2), Math.abs(b2)))
    }

    var exactEquals_1 = exactEquals;

    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
    }

    var add_1 = add;

    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out
    }

    var subtract_1 = subtract;

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out
    }

    var sub = subtract_1;

    var multiply_1 = multiply;

    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out
    }

    var mul = multiply_1;

    var divide_1 = divide;

    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out
    }

    var div = divide_1;

    var min_1 = min$1;

    /**
     * Returns the minimum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function min$1(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out
    }

    var max_1 = max$1;

    /**
     * Returns the maximum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function max$1(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out
    }

    var floor_1 = floor;

    /**
     * Math.floor the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to floor
     * @returns {vec3} out
     */
    function floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      return out
    }

    var ceil_1 = ceil;

    /**
     * Math.ceil the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to ceil
     * @returns {vec3} out
     */
    function ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      return out
    }

    var round_1 = round;

    /**
     * Math.round the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to round
     * @returns {vec3} out
     */
    function round(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      return out
    }

    var scale_1 = scale;

    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out
    }

    var scaleAndAdd_1 = scaleAndAdd;

    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec3} out
     */
    function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + (b[0] * scale);
        out[1] = a[1] + (b[1] * scale);
        out[2] = a[2] + (b[2] * scale);
        return out
    }

    var distance_1 = distance;

    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1],
            z = b[2] - a[2];
        return Math.sqrt(x*x + y*y + z*z)
    }

    var dist = distance_1;

    var squaredDistance_1 = squaredDistance;

    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1],
            z = b[2] - a[2];
        return x*x + y*y + z*z
    }

    var sqrDist = squaredDistance_1;

    var length_1 = length;

    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
        var x = a[0],
            y = a[1],
            z = a[2];
        return Math.sqrt(x*x + y*y + z*z)
    }

    var len = length_1;

    var squaredLength_1 = squaredLength;

    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
        var x = a[0],
            y = a[1],
            z = a[2];
        return x*x + y*y + z*z
    }

    var sqrLen = squaredLength_1;

    var negate_1 = negate;

    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out
    }

    var inverse_1 = inverse;

    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */
    function inverse(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      return out
    }

    var cross_1 = cross;

    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function cross(out, a, b) {
        var ax = a[0], ay = a[1], az = a[2],
            bx = b[0], by = b[1], bz = b[2];

        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out
    }

    var lerp_1 = lerp;

    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec3} out
     */
    function lerp(out, a, b, t) {
        var ax = a[0],
            ay = a[1],
            az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out
    }

    var random_1 = random;

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec3} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec3} out
     */
    function random(out, scale) {
        scale = scale || 1.0;

        var r = Math.random() * 2.0 * Math.PI;
        var z = (Math.random() * 2.0) - 1.0;
        var zScale = Math.sqrt(1.0-z*z) * scale;

        out[0] = Math.cos(r) * zScale;
        out[1] = Math.sin(r) * zScale;
        out[2] = z * scale;
        return out
    }

    var transformMat4_1 = transformMat4;

    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */
    function transformMat4(out, a, m) {
        var x = a[0], y = a[1], z = a[2],
            w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out
    }

    var transformMat3_1 = transformMat3;

    /**
     * Transforms the vec3 with a mat3.
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m the 3x3 matrix to transform with
     * @returns {vec3} out
     */
    function transformMat3(out, a, m) {
        var x = a[0], y = a[1], z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out
    }

    var transformQuat_1 = transformQuat;

    /**
     * Transforms the vec3 with a quat
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */
    function transformQuat(out, a, q) {
        // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

        var x = a[0], y = a[1], z = a[2],
            qx = q[0], qy = q[1], qz = q[2], qw = q[3],

            // calculate quat * vec
            ix = qw * x + qy * z - qz * y,
            iy = qw * y + qz * x - qx * z,
            iz = qw * z + qx * y - qy * x,
            iw = -qx * x - qy * y - qz * z;

        // calculate result * inverse quat
        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return out
    }

    var rotateX_1 = rotateX;

    /**
     * Rotate a 3D vector around the x-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateX(out, a, b, c){
        var by = b[1];
        var bz = b[2];

        // Translate point to the origin
        var py = a[1] - by;
        var pz = a[2] - bz;

        var sc = Math.sin(c);
        var cc = Math.cos(c);

        // perform rotation and translate to correct position
        out[0] = a[0];
        out[1] = by + py * cc - pz * sc;
        out[2] = bz + py * sc + pz * cc;

        return out
    }

    var rotateY_1 = rotateY;

    /**
     * Rotate a 3D vector around the y-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateY(out, a, b, c){
        var bx = b[0];
        var bz = b[2];

        // translate point to the origin
        var px = a[0] - bx;
        var pz = a[2] - bz;
        
        var sc = Math.sin(c);
        var cc = Math.cos(c);
      
        // perform rotation and translate to correct position
        out[0] = bx + pz * sc + px * cc;
        out[1] = a[1];
        out[2] = bz + pz * cc - px * sc;
      
        return out
    }

    var rotateZ_1 = rotateZ;

    /**
     * Rotate a 3D vector around the z-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateZ(out, a, b, c){
        var bx = b[0];
        var by = b[1];

        //Translate point to the origin
        var px = a[0] - bx;
        var py = a[1] - by;
      
        var sc = Math.sin(c);
        var cc = Math.cos(c);

        // perform rotation and translate to correct position
        out[0] = bx + px * cc - py * sc;
        out[1] = by + px * sc + py * cc;
        out[2] = a[2];
      
        return out
    }

    var forEach_1 = forEach;

    var vec = create_1();

    /**
     * Perform some operation over an array of vec3s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    function forEach(a, stride, offset, count, fn, arg) {
            var i, l;
            if(!stride) {
                stride = 3;
            }

            if(!offset) {
                offset = 0;
            }
            
            if(count) {
                l = Math.min((count * stride) + offset, a.length);
            } else {
                l = a.length;
            }

            for(i = offset; i < l; i += stride) {
                vec[0] = a[i]; 
                vec[1] = a[i+1]; 
                vec[2] = a[i+2];
                fn(vec, vec, arg);
                a[i] = vec[0]; 
                a[i+1] = vec[1]; 
                a[i+2] = vec[2];
            }
            
            return a
    }

    var glVec3 = {
      EPSILON: epsilon
      , create: create_1
      , clone: clone_1
      , angle: angle_1
      , fromValues: fromValues_1
      , copy: copy_1
      , set: set_1
      , equals: equals_1
      , exactEquals: exactEquals_1
      , add: add_1
      , subtract: subtract_1
      , sub: sub
      , multiply: multiply_1
      , mul: mul
      , divide: divide_1
      , div: div
      , min: min_1
      , max: max_1
      , floor: floor_1
      , ceil: ceil_1
      , round: round_1
      , scale: scale_1
      , scaleAndAdd: scaleAndAdd_1
      , distance: distance_1
      , dist: dist
      , squaredDistance: squaredDistance_1
      , sqrDist: sqrDist
      , length: length_1
      , len: len
      , squaredLength: squaredLength_1
      , sqrLen: sqrLen
      , negate: negate_1
      , inverse: inverse_1
      , normalize: normalize_1
      , dot: dot_1
      , cross: cross_1
      , lerp: lerp_1
      , random: random_1
      , transformMat4: transformMat4_1
      , transformMat3: transformMat3_1
      , transformQuat: transformQuat_1
      , rotateX: rotateX_1
      , rotateY: rotateY_1
      , rotateZ: rotateZ_1
      , forEach: forEach_1
    };

    const cameraState$1 = {
      view: glMat4.identity(new Float32Array(16)),
      projection: glMat4.identity(new Float32Array(16)),
      matrix: glMat4.identity(new Float32Array(16)), // not sure if needed
      near: 1, // 0.01,
      far: 18000,
      up: [0, 0, 1],
      // distance: 10.0, // not sure if needed
      eye: new Float32Array(3), // same as position
      position: [450, 550, 700],
      target: [0, 0, 0],
      fov: Math.PI / 4,
      aspect: 1,
      viewport: [0, 0, 0, 0],
      projectionType: 'perspective'
    };

    const cameraProps$1 = {};
    const defaults$1 = Object.assign({}, cameraState$1, cameraProps$1);

    const setProjection$1 = (output, camera, input) => {
      // console.log('input', input, 'camera', camera)
      // context.viewportWidth / context.viewportHeight,
      const aspect = input.width / input.height;

      const projection = glMat4.perspective(glMat4.identity([]), camera.fov, aspect,
        camera.near,
        camera.far);
      const viewport = [0, 0, input.width, input.height];

      // optional mutation
      const out = output || {};
      out.projection = projection;
      out.aspect = aspect;
      out.viewport = viewport;

      return out
    };

    const update$1 = (output, camera) => {
      if (!camera) {
        camera = output;
      }
      const { position, target, up } = camera;
      const offset = glVec3.subtract([], position, target);
      const newPosition = glVec3.add(glVec3.create(), target, offset);
      const newView = glMat4.lookAt(glMat4.create(), newPosition, target, up);

      // optional mutation
      const out = output || {};
      out.position = newPosition;
      out.view = newView;
      return out
    };

    var perspectiveCamera$1 = { cameraState: cameraState$1, cameraProps: cameraProps$1, defaults: defaults$1, setProjection: setProjection$1, update: update$1 };

    const cameraState = {
      view: glMat4.identity(new Float32Array(16)),
      projection: glMat4.identity(new Float32Array(16)),
      matrix: glMat4.identity(new Float32Array(16)), // not sure if needed
      near: 1, // 0.01,
      far: 1300,
      up: [0, 0, 1],
      // distance: 10.0, // not sure if needed
      eye: new Float32Array(3), // same as position
      position: [150, 250, 200],
      target: [0, 0, 0],
      fov: Math.PI / 4,
      aspect: 1,
      viewport: [0, 0, 0, 0],
      zoom: 1,
      projectionType: 'orthographic'
    };

    const cameraProps = {};

    const setProjection = (camera, input) => {
      const { width, height } = input;
      // context.viewportWidth / context.viewportHeight,
      const aspect = width / height;
      const viewport = [0, 0, width, height];
      const multiplier = camera.zoom;

      const left = -width * multiplier;
      const right = width * multiplier;
      const bottom = -height * multiplier;
      const top = height * multiplier;

      const projection = glMat4.ortho([], left, right, bottom, top, camera.near, camera.far);
      return { projection, aspect, viewport }
    };

    var orthographicCamera = { cameraState, cameraProps, setProjection };

    const fromOrthographicToPerspective = (orthographicCamera) => {
      const { near, far, fov, zoom } = orthographicCamera;
      console.log('fov', fov, 'zoom', zoom);
      // : fov / zoom
      // recompute projection matrix to use perspective camera projection matrix
      const { viewport } = orthographicCamera;
      const projection = perspectiveCamera$1.setProjection(orthographicCamera, { width: viewport[2], height: viewport[3] });
      const { projectionType } = perspectiveCamera$1.cameraState;
      return Object.assign({}, orthographicCamera, projection, { projectionType }, { near, far, fov })
    };

    const fromPerspectiveToOrthographic = (perspectiveCamera) => {
      const { fov, aspect } = perspectiveCamera;

      // set the orthographic view rectangle to 0,0,width,height
      // see here : http://stackoverflow.com/questions/13483775/set-zoomvalue-of-a-perspective-equal-to-perspective
      // const target = perspectiveCamera.target === undefined ? vec3.create() : perspectiveCamera.target

      const distance = glVec3.length(glVec3.subtract([], perspectiveCamera.position, perspectiveCamera.target)) * 0.3;
      const width = Math.tan(fov) * distance * aspect;
      const height = Math.tan(fov) * distance;

      // const halfWidth = width
      // const halfHeight = height

      // const left = halfWidth
      // const right = -halfWidth
      // const top = -halfHeight
      // const bottom = halfHeight

      // we need to compute zoom from distance ? or pass it from controls ?

      // we re-use near, far, & projection matrix of orthographicCamera
      const { near, far, viewport } = perspectiveCamera;
      const fCam = { zoom: 1, near, far };
      const orthographicCamera$1 = orthographicCamera.cameraState;
      const projection = orthographicCamera.setProjection(fCam, { width, height });
      return Object.assign({}, orthographicCamera$1, perspectiveCamera, projection, { projectionType: orthographicCamera$1.projectionType, viewport })
      // return Object.assign({}, orthoCam, projection, {near, far, left, right, top, bottom, target})
    };

    const toPerspectiveView = ({ camera }) => {
      const offsetToTarget = glVec3.distance(camera.position, camera.target);
      const distance = offsetToTarget;
      const position = [distance, distance, distance];
      const view = glMat4.lookAt(glMat4.create(), position, camera.target, camera.up);

      return { view, position }
    };

    /**
     * Calculate the camera view and position for acheiving the given preset view.
     */
    const toPresetView = (viewName, { camera }) => {
      const presets = {
        top: [0, -0.000001, 1],
        bottom: [0, 0, -1],
        front: [0, 1, 0],
        back: [0, -1, 0],
        left: [-1, 0, 0],
        right: [1, 0, 0],
        undefined: [0, 0, 0]
      };

      const offsetToTarget = glVec3.distance(camera.position, camera.target);
      const position = glVec3.add(glVec3.create(), presets[viewName].map((x) => x * offsetToTarget), camera.target);
      const view = glMat4.lookAt(glMat4.create(), position, camera.target, camera.up);

      return { view, position }
    };

    var camera = {
      toPerspectiveView,
      toPresetView,
      fromOrthographicToPerspective,
      fromPerspectiveToOrthographic
    };

    /**
     * Flatten the given array into a single array of elements.
     * The given array can be composed of multiple depths of objects and or arrays.
     * @param {Array} array - array to flatten
     * @returns {Array} a flat array with a single list of elements
     * @alias module:array-utils.flatten
     * @example
     * const flat = flatten([[1], [2, 3, [4, 5]], 6]) // returns [1, 2, 3, 4, 5, 6]
     */
    const flatten$2 = (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten$2(val)) : acc.concat(val), []);

    var flatten_1 = flatten$2;

    /**
     * Compare function for sorting arrays of numbers.
     * @param {Number} a - first number
     * @param {Number} b - second number
     * @return {Number} result of a - b
     * @alias module:array-utils.fnNumberSort
     * @example
     * const numbers = [2, 1, 4, 3, 6, 5, 8, 7, 9, 0]
     * const sorted = numbers.sort(fnNumberSort)
     */
    const fnNumberSort = (a, b) => a - b;

    var fnNumberSort_1 = fnNumberSort;

    /**
     * Return the first element of the given array.
     * @param {*} array - anything
     * @returns {*} first element of the array, or undefined
     * @alias module:array-utils.head
     * @example
     * let element = head([1, 2])
     */
    const head = (array) => {
      if (!Array.isArray(array) || array.length === 0) {
        return undefined
      }
      return array[0]
    };

    var head_1 = head;

    /**
     * Insert the given element into the give array using the compareFunction.
     * @param {Array} array - array in which to insert
     * @param {*} element - element to insert into the array
     * @param {Function} compareFunction - a function that defines the sort order of elements
     * @alias module:array-utils.insertSorted
     * @example
     * const numbers = [1, 5]
     * const result = insertSorted(numbers, 3, fnNumberSort)
     */
    const insertSorted = (array, element, compareFunction) => {
      let leftbound = 0;
      let rightbound = array.length;
      while (rightbound > leftbound) {
        const testindex = Math.floor((leftbound + rightbound) / 2);
        const testelement = array[testindex];
        const compareresult = compareFunction(element, testelement);
        if (compareresult > 0) { // element > testelement
          leftbound = testindex + 1;
        } else {
          rightbound = testindex;
        }
      }
      array.splice(leftbound, 0, element);
      return array
    };

    var insertSorted_1 = insertSorted;

    /**
     * Return the Nth element of the given array.
     * @param {*} array - anything
     * @param {Number} index - index of the element to return
     * @returns {*} Nth element of the array, or undefined
     * @alias module:array-utils.nth
     * @example
     * let value = nth([1], 2) // undefined
     * let value = nth([1, 2, 3, 4, 5], 3) // 4
     */
    const nth = (array, index) => {
      if (!Array.isArray(array) || array.length < index) {
        return undefined
      }
      return array[index]
    };

    var nth_1 = nth;

    /**
     * Build an array of the given target length from an existing array and a padding value.
     * If the array is already larger than the target length, it will not be shortened.
     * @param {Array} anArray - the source array to copy into the result.
     * @param {*} padding - the value to add to the new array to reach the desired length.
     * @param {Number} targetLength - The desired length of the returned array.
     * @returns {Array} an array with at least 'target length" elements
     * @alias module:array-utils.padToLength
     * @example
     * const srcArray = [2, 3, 4]
     * const paddedArray = padToLength(srcArray, 0, 5)
     */
    const padToLength = (anArray, padding, targetLength) => {
      anArray = anArray.slice();
      while (anArray.length < targetLength) {
        anArray.push(padding);
      }
      return anArray
    };

    var padToLength_1 = padToLength;

    /**
     * Convert the given array to an array if not already an array.
     * @param {*} array - anything
     * @returns {Array} an array
     * @alias module:array-utils.toArray
     * @example
     * const array = toArray(1) // [1]
     */
    const toArray$1 = (array) => {
      if (Array.isArray(array)) return array
      if (array === undefined || array === null) return []
      return [array]
    };

    var toArray_1 = toArray$1;

    /**
     * Utility functions for arrays.
     * @module array-utils
     * @example
     * const { flatten, head } = require('@jscad/array-utils')
     */

    var src$1 = {
      flatten: flatten_1,
      fnNumberSort: fnNumberSort_1,
      head: head_1,
      insertSorted: insertSorted_1,
      nth: nth_1,
      padToLength: padToLength_1,
      toArray: toArray_1
    };

    // modified version of https://github.com/thibauts/vertices-bounding-box that also works with non nested positions
    const boundingBox = (positions) => {
      if (positions.length === 0) {
        return [[0, 0, 0], [0, 0, 0]]
      }

      const nested = (Array.isArray(positions) && Array.isArray(positions[0]));

      const dimensions = nested ? positions[0].length : 3;
      const min = new Array(dimensions);
      const max = new Array(dimensions);

      for (let i = 0; i < dimensions; i += 1) {
        min[i] = Infinity;
        max[i] = -Infinity;
      }

      if (nested) {
        positions.forEach((position) => {
          for (let i = 0; i < dimensions; i += 1) {
            const _position = nested ? position[i] : position;
            max[i] = _position > max[i] ? _position : max[i]; // position[i] > max[i] ? position[i] : max[i]
            min[i] = _position < min[i] ? _position : min[i]; // min[i] = position[i] < min[i] ? position[i] : min[i]
          }
        });
      } else {
        for (let j = 0; j < positions.length; j += dimensions) {
          for (let i = 0; i < dimensions; i += 1) {
            const _position = positions[i + j]; // nested ? positions[i] : position
            max[i] = _position > max[i] ? _position : max[i]; // position[i] > max[i] ? position[i] : max[i]
            min[i] = _position < min[i] ? _position : min[i]; // min[i] = position[i] < min[i] ? position[i] : min[i]
          }
        }
      }

      return [min, max]
    };
    var boundingBox_1 = boundingBox;

    const { flatten: flatten$1 } = src$1;



    /*
     * Compute the bounds of the given geometries.
     * See geometry-utils-V2
     * @param  {geometry|Array} geometries - geometry or list of geometries to measure
     * @return {Object} the bounds of the given geometries
     * bounds: {
     *   dia: 40,
     *   center: [0,20,8],
     *   min: [9, -10, 0],
     *   max: [15, 10, 4]
     *   size: [6,20,4]
     * }
     */
    const computeBounds = (...geometries) => {
      geometries = flatten$1(geometries);

      let bbox; // min and max
      geometries.forEach((geometry) => {
        let gbbox = boundingBox_1(geometry.positions);
        gbbox = gbbox.map((bounds) => glVec3.transformMat4(bounds, bounds, geometry.transforms));
        if (bbox) {
          glVec3.min(bbox[0], bbox[0], gbbox[0]);
          glVec3.max(bbox[1], bbox[1], gbbox[1]);
        } else {
          bbox = gbbox;
        }
      });

      const min = glVec3.min(glVec3.create(), bbox[1], bbox[0]);
      const max = glVec3.max(glVec3.create(), bbox[1], bbox[0]);

      const size = glVec3.subtract(glVec3.create(), max, min);
      let center = glVec3.scale(glVec3.create(), size, 0.5);
      center = glVec3.add(center, min, center);
      // aproximate diamter
      const dia = glVec3.distance(center, max);

      const bounds = {
        dia,
        center: [...center],
        min: [...min],
        max: [...max],
        size: [...size]
      };
      return bounds
    };

    var computeBounds_1 = computeBounds;

    var projectMat4 = project;

    /**
     * Multiplies the input vec by the specified matrix, 
     * applying a W divide, and stores the result in out 
     * vector. This is useful for projection,
     * e.g. unprojecting a 2D point into 3D space.
     *
     * @method  prj
     * @param {vec3} out the output vector
     * @param {vec3} vec the input vector to project
     * @param {mat4} m the 4x4 matrix to multiply with 
     * @return {vec3} the out vector
     */
    function project (out, vec, m) {
      var x = vec[0],
        y = vec[1],
        z = vec[2],
        a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3],
        a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7],
        a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11],
        a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];

      var lw = 1 / (x * a03 + y * a13 + z * a23 + a33);

      out[0] = (x * a00 + y * a10 + z * a20 + a30) * lw;
      out[1] = (x * a01 + y * a11 + z * a21 + a31) * lw;
      out[2] = (x * a02 + y * a12 + z * a22 + a32) * lw;
      return out
    }

    var cameraUnproject = unproject;

    /**
     * Unproject a point from screen space to 3D space.
     * The point should have its x and y properties set to
     * 2D screen space, and the z either at 0 (near plane)
     * or 1 (far plane). The provided matrix is assumed to already
     * be combined, i.e. projection * view.
     *
     * After this operation, the out vector's [x, y, z] components will
     * represent the unprojected 3D coordinate.
     *
     * @param  {vec3} out               the output vector
     * @param  {vec3} vec               the 2D space vector to unproject
     * @param  {vec4} viewport          screen x, y, width and height in pixels
     * @param  {mat4} invProjectionView combined projection and view matrix
     * @return {vec3}                   the output vector
     */
    function unproject (out, vec, viewport, invProjectionView) {
      var viewX = viewport[0],
        viewY = viewport[1],
        viewWidth = viewport[2],
        viewHeight = viewport[3];

      var x = vec[0],
        y = vec[1],
        z = vec[2];

      x = x - viewX;
      y = viewHeight - y - 1;
      y = y - viewY;

      out[0] = (2 * x) / viewWidth - 1;
      out[1] = (2 * y) / viewHeight - 1;
      out[2] = 2 * z - 1;
      return projectMat4(out, out, invProjectionView)
    }

    const { max, min, sqrt, PI, sin, cos, atan2 } = Math;



    // TODO: make it more data driven ?
    /*
    setFocus => modify the focusPoint input
    rotate => modify the angle input

    */
    /* cameras are assumed to have:
     projection
     view
     target (focal point)
     eye/position
     up
    */
    // TODO:  multiple data, sometimes redundant, needs simplification
    /*
    - camera state
    - camera props

    - controls state
    - controls props

    - other

    */

    const controlsProps = {
      limits: {
        minDistance: 0.01,
        maxDistance: 10000
      },
      drag: 0.27, // Decrease the momentum by 1% each iteration
      EPS: 0.000001,
      zoomToFit: {
        auto: true, // always tried to apply zoomTofit
        targets: 'all',
        tightness: 1.5 // how close should the fit be: the lower the tigher : 1 means very close, but fitting most of the time
      },
      // all these, not sure are needed in this shape
      userControl: {
        zoom: true,
        zoomSpeed: 1.0,
        rotate: true,
        rotateSpeed: 1.0,
        pan: true,
        panSpeed: 1.0
      },
      autoRotate: {
        enabled: false,
        speed: 1.0 // 30 seconds per round when fps is 60
      },
      autoAdjustPlanes: true // adjust near & far planes when zooming in &out
    };

    const controlsState = {
      // orbit controls state
      thetaDelta: 0,
      phiDelta: 0,
      scale: 1
    };

    const defaults = Object.assign({}, controlsState, controlsProps);

    const update = ({ controls, camera }, output) => {
      // custom z up is settable, with inverted Y and Z (since we use camera[2] => up)
      const { EPS, drag } = controls;
      const { position, target } = camera;
      const up = controls.up ? controls.up : camera.up;

      let curThetaDelta = controls.thetaDelta;
      const curPhiDelta = controls.phiDelta;
      const curScale = controls.scale;

      const offset = glVec3.subtract([], position, target);
      let theta;
      let phi;

      // console.log('target', target)
      // console.log(matrix)

      if (up[2] === 1) {
        // angle from z-axis around y-axis, upVector : z
        theta = atan2(offset[0], offset[1]);
        // angle from y-axis
        phi = atan2(sqrt(offset[0] * offset[0] + offset[1] * offset[1]), offset[2]);
      } else {
        // in case of y up
        theta = atan2(offset[0], offset[2]);
        phi = atan2(sqrt(offset[0] * offset[0] + offset[2] * offset[2]), offset[1]);
      // curThetaDelta = -(curThetaDelta)
      }

      if (controls.autoRotate.enabled && controls.userControl.rotate) {
        curThetaDelta += 2 * Math.PI / 60 / 60 * controls.autoRotate.speed;
      }

      theta += curThetaDelta;
      phi += curPhiDelta;

      // restrict phi to be betwee EPS and PI-EPS
      phi = max(EPS, min(PI - EPS, phi));
      // multiply by scaling effect and restrict radius to be between desired limits
      const radius = max(controls.limits.minDistance, min(controls.limits.maxDistance, glVec3.length(offset) * curScale));

      if (up[2] === 1) {
        offset[0] = radius * sin(phi) * sin(theta);
        offset[2] = radius * cos(phi);
        offset[1] = radius * sin(phi) * cos(theta);
      } else {
        offset[0] = radius * sin(phi) * sin(theta);
        offset[1] = radius * cos(phi);
        offset[2] = radius * sin(phi) * cos(theta);
      }

      const newPosition = glVec3.add(glVec3.create(), target, offset);
      const newView = glMat4.lookAt(glMat4.create(), newPosition, target, up);

      const dragEffect = 1 - max(min(drag, 1.0), 0.01);
      const positionChanged = glVec3.distance(position, newPosition) > 0.001;

      /* let newMatrix = mat4.create()
      newMatrix = mat4.lookAt(newMatrix, newPosition, target, up)
      newMatrix = mat4.translate(matrix, matrix, newPosition) */

      // update camera matrix
      // let quaternion = quatFromRotationMatrix(mat4.lookAt(mat4.create(), [0, 0, 0], target, up))
      // let newMatrix = composeMat4(mat4.create(), newPosition, quaternion, [1, 1, 1])

      // view = newMatrix

      /* if (output) {
        output.controls.thetaDelta = curThetaDelta * dragEffect
      } */

      return {
        // controls state
        controls: {
          thetaDelta: curThetaDelta * dragEffect,
          phiDelta: curPhiDelta * dragEffect,
          scale: 1,
          changed: positionChanged
        },
        // camera state
        camera: {
          position: newPosition,
          view: newView
        }
        // matrix: newMatrix
      }
    };

    /**
      * compute camera state to rotate the camera
      * @param {Object} controls the controls data/state
      * @param {Object} camera the camera data/state
      * @param {Float} angle value of the angle to rotate
      * @return {Object} the updated camera data/state
    */
    const rotate = ({ controls, camera, speed = 1 }, angle) => {
      let {
        thetaDelta,
        phiDelta
      } = controls;

      if (controls.userControl.rotate) {
        thetaDelta += (angle[0] * speed);
        phiDelta += (angle[1] * speed);
      }

      return {
        controls: {
          thetaDelta,
          phiDelta
        },
        camera
      }
    };

    /**
      * compute camera state to zoom the camera
      * @param {Object} controls the controls data/state
      * @param {Object} camera the camera data/state
      * @param {Float} zoomDelta value of the zoom
      * @return {Object} the updated camera data/state
    */
    const zoom = ({ controls, camera, speed = 1 }, zoomDelta = 0) => {
      let { scale } = controls;

      if (controls.userControl.zoom && camera && zoomDelta !== undefined && zoomDelta !== 0 && !isNaN(zoomDelta)) {
        const sign = Math.sign(zoomDelta) === 0 ? 1 : Math.sign(zoomDelta);
        zoomDelta = (zoomDelta / zoomDelta) * sign * speed;// controls.userControl.zoomSpeed
        // adjust zoom scaling based on distance : the closer to the target, the lesser zoom scaling we apply
        // zoomDelta *= Math.exp(Math.max(camera.scale * 0.05, 1))
        // updated scale after we will apply the new zoomDelta to the current scale
        const newScale = (zoomDelta + controls.scale);
        // updated distance after the scale has been updated, used to prevent going outside limits
        const newDistance = glVec3.distance(camera.position, camera.target) * newScale;

        if (newDistance > controls.limits.minDistance && newDistance < controls.limits.maxDistance) {
          scale += zoomDelta;
        }
        // for ortho cameras
        if (camera.projectionType === 'orthographic') {
          const distance = glVec3.length(glVec3.subtract([], camera.position, camera.target)) * 0.3;
          const width = Math.tan(camera.fov) * distance * camera.aspect;
          const height = Math.tan(camera.fov) * distance;

          const projection = orthographicCamera.setProjection(camera, { width, height });
          camera = projection;
        }

        /* if (controls.autoAdjustPlanes) {
          // these are empirical values , after a LOT of testing
          const distance = vec3.squaredDistance(camera.target, camera.position)
          camera.near = Math.min(Math.max(5, distance * 0.0015), 100)
        } */
      }
      return { controls: { scale }, camera }
    };

    /**
      * compute camera state to pan the camera
      * @param {Object} controls the controls data/state
      * @param {Object} camera the camera data/state
      * @param {Float} delta value of the raw pan delta
      * @return {Object} the updated camera data/state
    */
    const pan = ({ controls, camera, speed = 1 }, delta) => {
      const unproject = cameraUnproject;
      const { projection, view, viewport } = camera;
      const combinedProjView = glMat4.multiply([], projection, view);
      const invProjView = glMat4.invert([], combinedProjView);

      const panStart = [
        viewport[2],
        viewport[3],
        0
      ];
      const panEnd = [
        viewport[2] - delta[0],
        viewport[3] + delta[1],
        0
      ];
      const unPanStart = unproject([], panStart, viewport, invProjView);
      const unPanEnd = unproject([], panEnd, viewport, invProjView);
      const eyeDistance = glVec3.distance(camera.position, camera.eye);

      const offset = glVec3.subtract([], unPanStart, unPanEnd).map((x) => x * speed * eyeDistance * controls.scale);

      return {
        controls,
        camera: {
          position: glVec3.add(glVec3.create(), camera.position, offset),
          target: glVec3.add(glVec3.create(), camera.target, offset)
        }
      }
    };

    /**
      * compute camera state to 'fit' an object on screen
      * Note1: this is a non optimal but fast & easy implementation
      * @param {Object} controls the controls data/state
      * @param {Object} camera the camera data/state
      * @param {Array} entities - an array of entities (see entitiesFromSolids)
      * @return {Object} the updated camera data/state
    */
    const zoomToFit = ({ controls, camera, entities }) => {
      // our camera.fov is already in radian, no need to convert
      const { zoomToFit } = controls;
      if (zoomToFit.targets !== 'all') {
        return { controls, camera }
      }

      if (entities.length === 0) return { controls, camera }

      // compute the overall bounds
      const geometries = entities.map((entity) => entity.geometry);
      const bounds = computeBounds_1(geometries);

      // fixme: for now , we only use the first item
      const { fov, target, position } = camera;
      const { tightness } = Object.assign({}, zoomToFit, controlsProps.zoomToFit);
      /*
        - x is scaleForIdealDistance
        - currentDistance is fixed
        - how many times currentDistance * x = idealDistance
        So
        x = idealDistance / currentDistance
      */
      const idealDistanceFromCamera = (bounds.dia * tightness) / Math.tan(fov / 2.0);
      const currentDistance = glVec3.distance(target, position);
      const scaleForIdealDistance = idealDistanceFromCamera / currentDistance;

      return {
        camera: { target: bounds.center },
        controls: { scale: scaleForIdealDistance }
      }
    };

    /**
      * compute controls state to 'reset it' to the given state
      * Note1: this is a non optimal but fast & easy implementation
      * @param {Object} controls the controls data/state
      * @param {Object} camera the camera data/state
      * @param {Object} desiredState the state to reset the camera to: defaults to default values
      * @return {Object} the updated camera data/state
    */
    const reset = ({ controls, camera }, desiredState) => {
      const options = {
        camera: {
          position: desiredState.camera.position,
          target: desiredState.camera.target,
          projection: glMat4.perspective([], camera.fov, camera.aspect, camera.near, camera.far),
          view: desiredState.camera.view
        },
        controls: {
          thetaDelta: desiredState.controls.thetaDelta,
          phiDelta: desiredState.controls.phiDelta,
          scale: desiredState.controls.scale
        }
      };
      return options
    };

    var orbitControls$1 = {
      controlsProps,
      controlsState,
      defaults,
      update,
      rotate,
      zoom,
      pan,
      zoomToFit,
      reset
    };

    const maxIndex$2 = Math.floor(65535 / 2); // two vertices per segment

    /*
     * Convert the given solid into one or more geometries for rendering.
     * @param {Object} options - options for conversion
     * @param {Array} options.color - RGBA of solid
     * @param {geom2} solid - the solid to convert
     * @return {Array} list of new geometries
     */
    const geom2ToGeometries = (options, solid) => {
      let { color } = options;

      const sides = solid.sides;
      if (sides.length === 0) return []

      if ('color' in solid) color = solid.color;
      const isTransparent = (color[3] < 1.0);

      const numgeometries = Math.floor(sides.length / (maxIndex$2)) + 1;

      const geometries = [];
      for (let g = 0; g < numgeometries; g++) {
        const offset = g * maxIndex$2;
        const endset = Math.min(offset + maxIndex$2, sides.length);
        const positions = [];
        for (let i = offset; i < endset; i++) {
          const side = sides[i];
          positions.push([side[0][0], side[0][1], 0]);
          positions.push([side[1][0], side[1][1], 0]);
        }
        // assemble the geometry
        const normals = positions.map((x) => [0, 0, -1]);
        const indices = positions.map((x, i) => i);
        const transforms = solid.transforms ? glMat4.clone(solid.transforms) : glMat4.create();

        // FIXME positions should be Float32Array buffers to eliminate another conversion
        // FIXME normals should be Float32Array buffers to eliminate another conversion
        // FIXME indices should be Uint16Array buffers to eliminate another conversion
        geometries.push({ type: '2d', positions, normals, indices, transforms, color, isTransparent });
      }
      return geometries
    };

    var geom2ToGeometries_1 = geom2ToGeometries;

    const maxIndex$1 = 65535;

    /*
     * Convert the given solid into one or more geometries for rendering.
     * @param {Object} options - options for conversion
     * @param {Array} options.color - RGBA of solid
     * @param {Float} options.normalThreshold - threshold beyond which to split normals
     * @param {Boolean} options.smoothLighting - set to true in order to use interpolated vertex normals
     * this creates nice round spheres but does not represent the shape of the actual model
     * @param {geom3} solid - the solid to convert
     * @return {Array} list of new geometries
     */
    const geom3ToGeometries = (options, solid) => {
      let { color, smoothLighting, normalThreshold } = options;

      if ('color' in solid) color = solid.color;

      const polygons = solid.polygons;
      const transforms = solid.transforms ? glMat4.clone(solid.transforms) : glMat4.create();

      const geometries = [];

      let setstart = 0;
      while (setstart < polygons.length) {
        // calculate end of this set
        let vcount = 0;
        let setend = setstart;
        for (let i = setstart; i < polygons.length; i++) {
          vcount += polygons[i].vertices.length;
          if (vcount > maxIndex$1) break
          setend++;
        }
        // temporary storage
        // create attributes of geometry
        const positions = [];
        const normals = [];
        const indices = [];
        const colors = [];
        const isTransparent = true;

        for (let i = setstart; i < setend; i++) {
          const polygon = polygons[i];
          const vertices = polygon.vertices;

          const normal = calculateNormal(polygon);
          const faceColor = polygonColor(polygon, color);

          const polygonIndices = [];
          for (let j = 0; j < vertices.length; j++) {
            const vertex = vertices[j];

            const position = [vertex[0], vertex[1], vertex[2]];
            positions.push(position);
            normals.push(normal);
            colors.push(faceColor);

            const index = positions.length - 1;
            polygonIndices.push(index);
          }
          // add indices to list
          for (let j = 2; j < polygonIndices.length; j++) {
            indices.push([polygonIndices[0], polygonIndices[j - 1], polygonIndices[j]]);
          }
        }
        // FIXME positions should be Float32Array buffers to eliminate another conversion
        // FIXME normals should be Float32Array buffers to eliminate another conversion
        // FIXME indices should be Uint16Array buffers to eliminate another conversion
        // FIXME colors should be Float32Array buffers to eliminate another conversion
        // assemble the geometry
        const geometry = {
          type: '3d',
          positions,
          normals,
          indices,
          colors,
          transforms,
          isTransparent
        };
        geometries.push(geometry);

        // continue on
        setstart = setend;
      }
      return geometries
    };

    /**
     * return the color information of a polygon
     * @param {Object} polygon a polygon
     * @param {Object} color a default color
     * @returns {Array}  `[r, g, b, a]`
     */
    const polygonColor = (polygon, color) => {
      let faceColor = color;

      if (polygon.color) {
        faceColor = polygon.color;
      }
      // opaque is default
      if (faceColor && faceColor.length < 4) {
        faceColor.push(1.0);
      }
      return faceColor
    };

    /*
     * Calculate the normal of the given polygon
     */
    const calculateNormal = (polygon) => {
      if (polygon.plane) return glVec3.clone(polygon.plane)

      const vertices = polygon.vertices;
      const ba = glVec3.create();
      glVec3.subtract(ba, vertices[1], vertices[0]);
      const ca = glVec3.create();
      glVec3.subtract(ca, vertices[2], vertices[0]);
      const normal = glVec3.create();
      glVec3.cross(normal, ba, ca);
      glVec3.normalize(normal, normal);
      return normal
    };

    var geom3ToGeometries_1 = geom3ToGeometries;

    // The only data types accepted by WebGL (and OpenGL ES 2.0) for indices are unsigned bytes and unsigned shorts.
    // Since an unsigned short has a range of 0-65535, this means that gl.DrawElements can only reference 65k vertices per draw call.
    const maxIndex = Math.floor(65535 / 2) - 2; // two vertices per segment, less closing segment

    /*
     * Convert the given solid into one or more geometries for rendering.
     * @param {Object} options - options for conversion
     * @param {Array} options.color - RGBA of solid
     * @param {path2} solid - the solid to convert
     * @return {Array} list of new geometries
     */
    const path2ToGeometries = (options, solid) => {
      let { color } = options;

      const points = solid.points;
      if (points.length === 0) return []

      if ('color' in solid) color = solid.color;
      const isTransparent = (color[3] < 1.0);

      const numgeometries = Math.floor(points.length / (maxIndex)) + 1;

      const geometries = [];
      for (let g = 0; g < numgeometries; g++) {
        const offset = g * maxIndex;
        const endset = Math.min(offset + maxIndex, points.length);
        const positions = [];
        let prevvertice;
        for (let i = offset; i < endset; i++) {
          const point = points[i];
          if (prevvertice) {
            positions.push([prevvertice[0], prevvertice[1], 0]);
            positions.push([point[0], point[1], 0]);
          }
          prevvertice = point;
        }
        // add the last segment if necessary
        if ((g + 1) === numgeometries && solid.isClosed && prevvertice) {
          const point = points[0];
          positions.push([prevvertice[0], prevvertice[1], 0]);
          positions.push([point[0], point[1], 0]);
        }
        // assemble the geometry
        const normals = positions.map((x) => [0, 0, -1]);
        const indices = positions.map((x, i) => i); // FIXME: temporary, not really needed, need to change drawLines
        const transforms = solid.transforms ? glMat4.clone(solid.transforms) : glMat4.create();

        // FIXME positions should be Float32Array buffers to eliminate another conversion
        // FIXME normals should be Float32Array buffers to eliminate another conversion
        // FIXME indices should be Uint16Array buffers to eliminate another conversion
        geometries.push({ type: '2d', positions, normals, indices, transforms, color, isTransparent });
      }
      return geometries
    };

    var path2ToGeometries_1 = path2ToGeometries;

    const { flatten, toArray } = src$1;

    const { meshColor } = renderDefaults;





    /*
     * Assemble a set of renderable entities from the given geometries.
     */
    const assembleEntities = (geometries) => {
      const entities = geometries.map((geometry) => {
        const visuals = {
          drawCmd: geometry.type === '2d' ? 'drawLines' : 'drawMesh',
          show: true,
          transparent: geometry.isTransparent,
          useVertexColors: true
        };
        const entity = {
          geometry,
          visuals
        };
        return entity
      });
      return entities
    };

    /**
     * Convert the given solids into renderable entities.
     * Each 'solid' (V2 geometry) is converted to a WEBGL renderable 'geometry'.
     * The resulting entities are passed as properities to the render.
     * @param {Object} options - options for construction
     * @param {Array} [options.color] - color for rendering, if the solid does not provide a color
     * @param {Boolean} [options.smoothNormals=true] - smooth the normals of 3d solids, rendering a smooth surface
     * @returns {Array} an array of renderable entities
     */
    const entitiesFromSolids$1 = (options, ...solids) => {
      const defaults = {
        color: meshColor,
        smoothNormals: true
      };
      const { color, smoothNormals } = Object.assign({}, defaults, options);

      solids = flatten(toArray(solids));
      solids = solids.filter((solid) => solid && (solid instanceof Object));

      const entities = [];
      solids.forEach((solid) => {
        let geometries = [];
        if ('sides' in solid) {
          geometries = geom2ToGeometries_1({ color }, solid);
        } else if ('points' in solid) {
          geometries = path2ToGeometries_1({ color }, solid);
        } else if ('polygons' in solid) {
          geometries = geom3ToGeometries_1({
            smoothLighting: smoothNormals,
            normalThreshold: 0.3,
            color
          }, solid);
        }
        entities.push(...assembleEntities(geometries));
      });
      return entities
    };

    var entitiesFromSolids_1 = entitiesFromSolids$1;

    var src = {
      prepareRender: render$1,
      drawCommands: {
        // draw commands should bootstrap themselves the first time they are run
        drawGrid: multi,
        drawAxis: drawAxis_1,
        drawMesh: drawMesh_1,
        drawLines: drawLines_1
      },
      cameras: {
        camera: camera,
        orthographic: orthographicCamera,
        perspective: perspectiveCamera$1
      },
      controls: {
        orbit: orbitControls$1
      },
      entitiesFromSolids: entitiesFromSolids_1

    };
    var src_1 = src.prepareRender;
    var src_2 = src.drawCommands;
    var src_3 = src.cameras;
    var src_4 = src.controls;
    var src_5 = src.entitiesFromSolids;

    var prepareRender=src_1;var perspectiveCamera=src_3.perspective;var perspectiveCameraStateDefaults=perspectiveCamera.defaults;var orbitControls=src_4.orbit;var orbitControlsStateDefaults=orbitControls.defaults;var entitiesFromSolids=src_5;var prepareDrawCommands=src_2;var Shape=function(){function Shape(solidCallback,spawnsTab,axis,grid,shapeName){if(spawnsTab===void 0){spawnsTab=false;}if(axis===void 0){axis=false;}if(grid===void 0){grid=false;}if(shapeName===void 0){shapeName="Shape";}this.spawnsTab=spawnsTab;this.axis=axis;this.grid=grid;this.shapeName=shapeName;this.getSolid=solidCallback;}Shape.prototype.toReplString=function(){return "<"+this.shapeName+">"};return Shape}();function looseInstanceOf(object,c){var _a;var objectName=(_a=object===null||object===void 0?void 0:object.constructor)===null||_a===void 0?void 0:_a.name;var className=c===null||c===void 0?void 0:c.name;return objectName!==undefined&&className!==undefined&&objectName===className}

    function render(canvas,shape){var _a;var prepareRenderOptions={glOptions:{gl:(_a=canvas.getContext("webgl2"))!==null&&_a!==void 0?_a:undefined}};var preparedRenderer=prepareRender(prepareRenderOptions);var perspectiveCamera$1=perspectiveCamera;var perspectiveCameraState=perspectiveCameraStateDefaults;perspectiveCamera$1.setProjection(perspectiveCameraState,perspectiveCameraState,{width:512,height:512});perspectiveCamera$1.update(perspectiveCameraState,perspectiveCameraState);var orbitControls$1=orbitControls;var orbitControlsState=orbitControlsStateDefaults;var geometries=entitiesFromSolids({},shape.getSolid());var shapeBoundingBox=measurements_6(shape.getSolid());var maxSize=Math.ceil(Math.max(shapeBoundingBox[1][0],shapeBoundingBox[1][1],shapeBoundingBox[1][2]));var grid={visuals:{drawCmd:"drawGrid",show:shape.grid,color:[0,0,0,1],subColor:[0,0,1,0.5],fadeOut:false,transparent:true},size:[maxSize*2,maxSize*2],ticks:[1,1]};var axis={visuals:{drawCmd:"drawAxis",show:shape.axis},size:maxSize*1.2};var renderOptions={camera:perspectiveCameraState,drawCommands:prepareDrawCommands,entities:__spreadArray([grid,axis],geometries)};var lastX=0;var lastY=0;var rotateSpeed=0.002;var panSpeed=1;var zoomSpeed=0.08;var rotateDelta=[0,0];var panDelta=[0,0];var zoomDelta=0;var pointerDown=false;var zoomToFit=true;var updateView=true;function doRotatePanZoom(){if(rotateDelta[0]||rotateDelta[1]){var updated=orbitControls$1.rotate({controls:orbitControlsState,camera:perspectiveCameraState,speed:rotateSpeed},rotateDelta);orbitControlsState=__assign(__assign({},orbitControlsState),updated.controls);updateView=true;rotateDelta=[0,0];}if(panDelta[0]||panDelta[1]){var updated=orbitControls$1.pan({controls:orbitControlsState,camera:perspectiveCameraState,speed:panSpeed},panDelta);orbitControlsState=__assign(__assign({},orbitControlsState),updated.controls);panDelta=[0,0];perspectiveCameraState=__assign(__assign({},perspectiveCameraState),updated.camera);updateView=true;}if(zoomDelta){var updated=orbitControls$1.zoom({controls:orbitControlsState,camera:perspectiveCameraState,speed:zoomSpeed},zoomDelta);orbitControlsState=__assign(__assign({},orbitControlsState),updated.controls);zoomDelta=0;updateView=true;}if(zoomToFit){orbitControlsState.zoomToFit.tightness=1.5;var updated=orbitControls$1.zoomToFit({controls:orbitControlsState,camera:perspectiveCameraState,entities:geometries});orbitControlsState=__assign(__assign({},orbitControlsState),updated.controls);perspectiveCameraState=__assign(__assign({},perspectiveCameraState),updated.camera);zoomToFit=false;updateView=true;}}function updateAndRender(timestamp){doRotatePanZoom();if(updateView){var updates=orbitControls$1.update({controls:orbitControlsState,camera:perspectiveCameraState});orbitControlsState=__assign(__assign({},orbitControlsState),updates.controls);updateView=orbitControlsState.changed;perspectiveCameraState=__assign(__assign({},perspectiveCameraState),updates.camera);perspectiveCamera$1.update(perspectiveCameraState);renderOptions=__assign(__assign({},renderOptions),{camera:perspectiveCameraState});preparedRenderer(renderOptions);}window.requestAnimationFrame(updateAndRender);}window.requestAnimationFrame(updateAndRender);function moveHandler(ev){if(!pointerDown)return;var dx=lastX-ev.pageX;var dy=ev.pageY-lastY;var shiftKey=ev.shiftKey===true;if(shiftKey){panDelta[0]+=dx;panDelta[1]+=dy;}else {rotateDelta[0]-=dx;rotateDelta[1]-=dy;}lastX=ev.pageX;lastY=ev.pageY;ev.preventDefault();}function downHandler(ev){pointerDown=true;lastX=ev.pageX;lastY=ev.pageY;canvas.setPointerCapture(ev.pointerId);ev.preventDefault();}function upHandler(ev){pointerDown=false;canvas.releasePointerCapture(ev.pointerId);ev.preventDefault();}function wheelHandler(ev){zoomDelta+=ev.deltaY;}function doubleClickHandler(ev){zoomToFit=true;ev.preventDefault();}canvas.addEventListener("pointermove",moveHandler);canvas.addEventListener("pointerdown",downHandler);canvas.addEventListener("pointerup",upHandler);canvas.addEventListener("wheel",wheelHandler,{passive:true});canvas.addEventListener("dblclick",doubleClickHandler);}

    var CsgCanvas=function(_super){__extends(CsgCanvas,_super);function CsgCanvas(props){var _this=_super.call(this,props)||this;_this.canvas=null;_this.state={};return _this}CsgCanvas.prototype.componentDidMount=function(){if(this.canvas){var potentialShape=this.props.context.result.value;if(looseInstanceOf(potentialShape,Shape)){render(this.canvas,potentialShape);}}};CsgCanvas.prototype.render=function(){var _this=this;return React__default['default'].createElement("div",{style:{width:"100%",display:"flex",paddingLeft:"20px",paddingRight:"20px",flexDirection:"column",justifyContent:"center"}},React__default['default'].createElement("canvas",{id:"csgCanvas",ref:function(r){_this.canvas=r;},width:512,height:512}))};return CsgCanvas}(React__default['default'].Component);var index = {toSpawn:function(context){var potentialShape=context.result.value;if(looseInstanceOf(potentialShape,Shape)){try{return potentialShape.spawnsTab}catch(error){console.error(error);}return false}return false},body:function(context){return React__default['default'].createElement(CsgCanvas,{context:context})},label:"CSG Tab",iconName:"shapes"};

    return index;

}(React));
