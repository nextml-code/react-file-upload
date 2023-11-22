import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";

const peerDependencies = ["react", "react-dom"];

const extensions = [".js", ".jsx"];

export default {
  input: "src/library.js",

  output: {
    file: "./lib/index.js",
    format: "cjs",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    exports: "auto",
  },

  plugins: [
    json(),
    postcss({
      plugins: [],
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    nodeResolve({
      customResolveOptions: {
        moduleDirectories: ["node_modules"],
      },
      extensions,
      preferBuiltins: true,
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
      plugins: ["@babel/transform-runtime"],
      extensions,
      babelHelpers: "runtime",
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
  ],
  external: peerDependencies,
};
