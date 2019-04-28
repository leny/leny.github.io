/* leny/leny.github.io
 *
 * /rollup.config.js
 *
 * coded by leny@flatLand!
 * started at 28/04/2019
 */

import babel from "rollup-plugin-babel";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import {terser} from "rollup-plugin-terser";

const PRODUCTION = !process.env.ROLLUP_WATCH;

export default {
    input: "src/main.js",
    output: {
        sourcemap: true,
        file: "public/bundle.js",
        format: "iife",
        name: "app",
    },
    plugins: [
        babel({
            include: ["./src/**/*.js"],
        }),
        svelte({
            dev: !PRODUCTION,
            css: css => css.write("public/main.css"),
        }),
        resolve(),
        commonjs(),
        PRODUCTION && terser(),
    ],
};
