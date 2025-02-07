import { defineConfig } from '@rslib/core';


export default defineConfig({
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  lib: [
    {
      format: 'esm',
      autoExtension: false,
      output: {
        filename: { js: `[name].mjs` },
      },
      dts: {
        bundle: false,
      },
    },
    {
      format: 'cjs',
    },
  ],
  output: {
    cleanDistPath: true,
  },
});
