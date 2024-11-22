import { defineConfig } from '@rslib/core';


export default defineConfig({
  source: {
    entry: {
      index: './src/index.d.ts',
    },
  },
  lib: [
    {
      format: 'esm',
      dts: {
        bundle: true,
      },
    },
  ],
  output: {
    cleanDistPath: true,
  },
});
