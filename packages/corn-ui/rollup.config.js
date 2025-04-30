import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import fs from "fs"
import { glob } from "glob"

// 清理目录
if (fs.existsSync("dist")) {
  fs.rmSync("dist", { recursive: true, force: true })
}

// 查找所有组件入口
const componentEntries = glob
  .sync("components/*/index.ts")
  .reduce((acc, file) => {
    const name = file.split("/")[1]
    acc[`components/${name}/index`] = file
    return acc
  }, {})

// 创建多入口配置
export default [
  // 主入口
  {
    input: "index.ts",
    output: {
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "../../tsconfig.json",
        declaration: true,
        declarationDir: "dist",
        outDir: "dist",
      }),
    ],
    external: ["lit", "lit/decorators.js"],
  },
  // 各组件单独入口
  {
    input: componentEntries,
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: ".",
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "../../tsconfig.json",
        declaration: true,
        declarationDir: "dist",
        outDir: "dist",
      }),
    ],
    external: ["lit", "lit/decorators.js"],
  },
]
