## 使用 `pnpm workspace` 时打包 dts 会报错

在根目录下运行以下命令进行构建

```bash
pnpm i && pnpm build
```

`pack-1` 打包无问题, `pack-2` 引用 `pack-1`, `pack-2` 打包 dts 时会报错:

```ts
error   API Extractor Error
error   Error: Error parsing the configuration object:
The "mainEntryPointFilePath" path does not exist: D:\GitHub\rslib-bug-report\packages\pack-2\.rslib\declarations\index.d.ts
    at bundleDts (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/rsbuild-plugin-dts@0.1.0_@microsoft+api-extractor@7.47.12_@rsbuild+core@1.1.4_typescript@5.6.3/node_modules/rsbuild-plugin-dts/dist/apiExtractor.js:40:15)
    at bundleDtsIfNeeded (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/rsbuild-plugin-dts@0.1.0_@microsoft+api-extractor@7.47.12_@rsbuild+core@1.1.4_typescript@5.6.3/node_modules/rsbuild-plugin-dts/dist/dts.js:94:19)
    at async generateDts (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/rsbuild-plugin-dts@0.1.0_@microsoft+api-extractor@7.47.12_@rsbuild+core@1.1.4_typescript@5.6.3/node_modules/rsbuild-plugin-dts/dist/dts.js:126:19)
    at async process.<anonymous> (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/rsbuild-plugin-dts@0.1.0_@microsoft+api-extractor@7.47.12_@rsbuild+core@1.1.4_typescript@5.6.3/node_modules/rsbuild-plugin-dts/dist/dts.js:131:9)
error   Failed to build.
error   Error occurred in esm DTS generation
    at handler (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/rsbuild-plugin-dts@0.1.0_@microsoft+api-extractor@7.47.12_@rsbuild+core@1.1.4_typescript@5.6.3/node_modules/rsbuild-plugin-dts/dist/index.js:61:57)
    at Object.call (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/@rsbuild+core@1.1.4/node_modules/@rsbuild/core/dist/index.js:2389:36)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async onDone (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/@rsbuild+core@1.1.4/node_modules/@rsbuild/core/dist/index.js:2436:30)
    at async Object.fn (file:///D:/GitHub/rslib-bug-report/node_modules/.pnpm/@rsbuild+core@1.1.4/node_modules/@rsbuild/core/dist/index.js:2420:76)
 ELIFECYCLE  Command failed with exit code 1.
```
