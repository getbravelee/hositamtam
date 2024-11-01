const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  outputDir: '../src/main/webapp/static',
  publicPath: '/static/',
  devServer: {
    proxy: 'http://localhost:8080'
  }
})
