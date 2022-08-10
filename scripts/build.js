const path = require('path')
const fsExtra = require('fs-extra')
// 引入vite导出的build方法，用它来创建
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// https://vitejs.dev/guide/build.html   --> Library Mode

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'juice-ui',
          fileName: 'juice-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

// 创建package.json文件
const createPackageJson = () => {
  const fileStr = `{
    "name": "juice-ui",
    "version": "0.0.0",
    "main": "juice-ui.umd.js",
    "module": "juice-ui.es.js",
    "github": "",
    "description": "我的组件库",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/GabeYuan/juice-ui.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/GabeYuan/juice-ui/issues"
    }
  }`

  fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
}

const buildLib = async () => {
  await buildAll()

  createPackageJson()
}

buildLib()