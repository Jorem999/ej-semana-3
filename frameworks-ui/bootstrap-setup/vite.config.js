const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),

  resolve: {
    alias: {
      '~bootstarp': path.resolve(__dirname,'node_modules/bootstrap')
    }
  },

   build: {
  outDir: '../dist'
},

  server: {
    port: 8080,
    hot: true
  }
  
}

/*  build: {
  outDir: '../dist'
},*/
