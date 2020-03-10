import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    preserveModules: true,
    input: require.resolve("crocks"),
    output: {
      dir,
      format,
      sourcemap: true
    },
    plugins: [resolve(), commonjs(), terser()]
  };
}

export default [createConfig("module"), createConfig("system")];
