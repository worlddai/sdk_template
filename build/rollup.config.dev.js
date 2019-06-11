import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
    entry: 'src/index.js',
    moduleName: 'Animals',
    format: 'umd',
    dest: 'dist/animals.js',
    plugins: [
        resolve({
            browser: true,
        }),
        json(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
    sourceMap: true,
};
