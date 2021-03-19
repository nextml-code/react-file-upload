import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = "./lib/index.js";

const extensions = [".js", ".jsx"];

export default {
  input: "./src/index.jsx",
  output: {
    file: outputFile,
    format: "cjs",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    exports: "auto",
  },
  external: [
    "react",
    "react-dom",
    /@babel\/runtime/,
    "styled-components",
    /@fortawesome\//,
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        "@babel/preset-react",
      ],
      plugins: ["@babel/transform-runtime"],
      extensions,
      babelHelpers: "runtime",
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
};
