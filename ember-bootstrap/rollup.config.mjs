import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { fileURLToPath } from 'url';
import { Addon } from '@embroider/addon-dev/rollup';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if you need to.
  output: addon.output(),

  // Mark @embroider/macros as external so they're resolved at app build time
  external: ['@embroider/macros'],

  plugins: [
    // Remove leftover build artifacts when starting a new build.
    addon.clean(),

    // Resolve ember-bootstrap/* imports to relative paths during build
    alias({
      entries: [
        { find: /^ember-bootstrap\/(.*)$/, replacement: path.resolve(__dirname, 'src/$1') },
      ],
    }),

    // These are the modules that users should be able to import from your
    // addon. Anything not listed here may get optimized away.
    addon.publicEntrypoints([
      // Main entry points
      'index.js',
      'config.js',
      'version.js',
      'template-registry.js',
      'macros-config.js',

      // Components
      'components/**/*.js',

      // Helpers
      'helpers/**/*.js',

      // Modifiers
      'modifiers/**/*.js',

      // Utils
      'utils/**/*.js',

      // Initializers
      'initializers/**/*.js',
    ]),

    // These are the modules that should get reexported into the traditional
    // "app" tree. Things in here should also be in publicEntrypoints above, but
    // not everything in publicEntrypoints necessarily needs to go here.
    addon.appReexports([
      // Components
      'components/**/*.js',

      // Helpers
      'helpers/**/*.js',

      // Modifiers
      'modifiers/**/*.js',

      // Initializers
      'initializers/**/*.js',
    ]),

    // Follow the V2 Addon rules about dependencies. Your code can import from
    // `dependencies` and `peerDependencies` as well as standard Ember-provided
    // package names.
    addon.dependencies(),

    // Resolve node_modules and TypeScript files
    nodeResolve({
      extensions: ['.js', '.ts'],
    }),

    // This babel config should *not* apply presets or compile away ES modules.
    // It exists only to provide development niceties for you, like template
    // colocation and decorators.
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts'],
    }),

    // Ensure that standalone .hbs files are properly integrated as part of the
    // build. We do this on a file-by-file basis, so they get processed through
    // babel's template compilation.
    addon.hbs(),

    // addons are allowed to contain imports of .css files, which we want to
    // resolve and passthrough as assets.
    addon.keepAssets(['**/*.css']),

    // Copy CSS files to dist
    copy({
      targets: [{ src: 'src/styles/**/*', dest: 'dist/styles' }],
      hook: 'writeBundle',
    }),
  ],
};
