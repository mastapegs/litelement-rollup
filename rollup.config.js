import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

const copyConfig = {
  targets: [
    { src: 'src/html-templates/*', dest: 'public' },
    { src: 'src/styles.css', dest: 'public/css' }
  ],
};

export default {
  input: 'src/index.ts',
  output: {
    name: 'main',
    file: 'public/bundle.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    copy(copyConfig),
    resolve(),
    commonjs(),
    typescript(),
    production && terser(),
  ]
};