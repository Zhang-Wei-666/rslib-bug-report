## devDependencies 中的依赖未被打包进产物中

运行以下命令进行构建

```bash
pnpm i && pnpm build
```

查看打包产物 [dist/index.d.ts](./dist/index.d.ts) 中可以发现 `type-fest` 未被打包进去

根据 [Handle Third-Party Dependencies](https://lib.rsbuild.dev/guide/advanced/third-party-deps#default-handling-of-third-party-dependencies) 的描述, 默认情况下, `devDependencies` 中的依赖是会被打包的