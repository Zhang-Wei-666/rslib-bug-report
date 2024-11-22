## 使用 `dts.bundle: true` 并没有打包完全

运行以下命令进行构建

```bash
pnpm i && pnpm build
```

查看打包产物 [dist/index.d.ts](./dist/index.d.ts) 中可以发现以下内容未被打包

```ts
import type { UpperCaseCharacters } from './internal';
import type { WordSeparators } from './internal';
```
