const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')
// 引入vite导出的build方法，用它来创建
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 组件目录
const componentsDir = path.resolve(__dirname, '../src')
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
  createPackageJson()
}

// 创建package.json文件
const createPackageJson = name => {
  const fileStr = `{
    "name": "${name ? name : 'juice-ui'}",
    "version": "0.0.0",
    "main": "${name ? 'index' : 'juice-ui'}.umd.js",
    "module": "${name ? 'index' : 'juice-ui'}.es.js",
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
  // 存在包名称，给单组件生成package.json文件
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )

  createPackageJson(name)
}

const buildLib = async () => {
  await buildAll()

  // 创建单组件包
  // 获取组件名称组成的数组
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}

buildLib()
