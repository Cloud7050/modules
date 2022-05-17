/* [Imports] */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import chalk from 'chalk';
import Low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { dirname, join } from 'path';
import commonJS from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import { fileURLToPath } from 'url';
import modules from '../../modules.json';
import {
  BUILD_PATH,
  DATABASE_KEY,
  DATABASE_NAME,
  MODULES_PATH,
  NODE_MODULES_PATTERN,
  SOURCE_PATH,
  SOURCE_PATTERN,
  SUPPRESSED_WARNINGS,
} from './constants.js';

/* [Main] */
let filePath = join(
  dirname(fileURLToPath(import.meta.url)),
  `${DATABASE_NAME}.json`
);
let adapter = new FileSync(filePath);
let database = new Low(adapter);

function getTimestamp() {
  return database.get(DATABASE_KEY);
}

function isPathModified(path, storedTimestamp) {
  //TODO
  return true;
}

function removeDuplicates(array) {
  return [...new Set(array)];
}

function makeDefaultConfig() {
  return {
    onwarn(warning, warn) {
      if (SUPPRESSED_WARNINGS.includes(warning.code)) return;

      warn(warning);
    },
    plugins: [
      typescript(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
        include: [SOURCE_PATTERN],
      }),
      resolve({
        // Source Academy's modules run in a browser environment. The default setting (false) may
        // cause compilation issues when using some imported packages.
        // https://github.com/rollup/plugins/tree/master/packages/node-resolve#browser
        browser: true,
        // Tells rollup to look for locally installed modules instead of preferring built-in ones.
        // Node's built-in modules include `fs` and `path`, which the jsdom browser environment does
        // not have.
        // https://github.com/rollup/plugins/tree/master/packages/node-resolve#preferbuiltins
        preferBuiltins: false,
      }),
      commonJS({
        include: NODE_MODULES_PATTERN,
      }),
      injectProcessEnv({
        NODE_ENV: process.env.NODE_ENV,
      }),
      filesize({
        showMinifiedSize: false,
        showGzippedSize: false,
      }),
      copy({
        targets: [{ src: MODULES_PATH, dest: BUILD_PATH }],
      }),
    ],
  };
}

function bundleNameToSourceFolder(bundleName) {
  return `${SOURCE_PATH}bundles/${bundleName}/`;
}

function tabNameToSourceFolder(tabName) {
  return `${SOURCE_PATH}tabs/${tabName}/`;
}

/* [Exports] */
export function getRollupBundleNames(skipUnmodified) {
  // All module bundles
  let moduleNames = Object.keys(modules);

  // Skip modules whose files haven't been modified
  if (skipUnmodified) {
    let storedTimestamp = getTimestamp();

    moduleNames = moduleNames.filter((moduleName) => {
      // Check module bundle
      let bundleSourceFolder = bundleNameToSourceFolder(moduleName);
      if (isPathModified(bundleSourceFolder, storedTimestamp)) return true;

      // Check each module tab
      for (let tabName of modules[moduleName].tabs) {
        let tabSourceFolder = tabNameToSourceFolder(tabName);
        if (isPathModified(tabSourceFolder, storedTimestamp)) return true;
      }

      return false;
    });
  }

  // All module tabs
  let tabNames = moduleNames.flatMap((moduleName) => modules[moduleName].tabs);
  tabNames = removeDuplicates(tabNames);

  return {
    bundleNames: moduleNames,
    tabNames,
  };
}

export function bundleNamesToConfigs(names) {
  let defaultConfig = makeDefaultConfig();

  console.log(chalk.greenBright('Configured module bundles:'));
  let configs = names.map((bundleName) => {
    console.log(chalk.blueBright(bundleName));

    return {
      ...defaultConfig,

      input: `${bundleNameToSourceFolder(bundleName)}index.ts`,
      output: {
        file: `${BUILD_PATH}bundles/${bundleName}.js`,
        format: 'iife',
      },
    };
  });

  return configs;
}

export function tabNamesToConfigs(names) {
  let defaultConfig = makeDefaultConfig();

  console.log(chalk.greenBright('Configured module tabs:'));
  let configs = names.map((tabName) => {
    console.log(chalk.blueBright(tabName));

    return {
      ...defaultConfig,

      input: `${tabNameToSourceFolder(tabName)}index.tsx`,
      output: {
        file: `${BUILD_PATH}tabs/${tabName}.js`,
        format: 'iife',

        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
      },
      external: ['react', 'react-dom'],
    };
  });

  return configs;
}

//TODO plugin event hook
export function updateTimestamp() {
  let newTimestamp = new Date().getTime();
  database.set(DATABASE_KEY, newTimestamp).write();
}
