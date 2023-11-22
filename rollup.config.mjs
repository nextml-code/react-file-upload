import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";

const peerDependencies = ["react", "react-dom"];

const extensions = [".js", ".jsx"];

export default {
  input: "src/index.jsx",

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
