import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'


/**
 * Rollup Configuration
 */
export default defineConfig([
  {
    input: 'src/browser.ts',
    output: [
      {
        dir: 'dist',
        name: 'js',
        format: 'umd',
        sourcemap: false,
        entryFileNames: 'index.[name].js',
        chunkFileNames: 'index.[name]-[hash].js'
      }
    ],
    plugins: [
      typescript({ sourceMap: false }),
      terser(),
      babel({
        extensions: ['.ts'],
        babelHelpers: 'bundled',
        exclude: ['node_modules']
      })
    ]
  },

  {
    input: 'src/simpler.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'named',
        sourcemap: false,
        entryFileNames: 'index.[name].cjs',
        chunkFileNames: 'index.[name]-[hash].cjs'
      },
      {
        dir: 'dist',
        format: 'es',
        exports: 'named',
        sourcemap: false,
        entryFileNames: 'index.[name].mjs',
        chunkFileNames: 'index.[name]-[hash].mjs'
      }
    ],
    plugins: [
      typescript({ sourceMap: false }),
      terser()
    ]
  },

  {
    input: 'src/simpler.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
      sourcemap: false
    },
    plugins: [dts()]
  }
])
