module.exports = {
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
}