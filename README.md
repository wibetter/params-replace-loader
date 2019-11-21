# Params replace loader for [Webpack](http://webpack.github.io/)

用于项目环境变量批量自动替换的webpack-loader。

## 安装:

```bash
$ npm install --save-dev params-replace-loader
```

## 用法说明:

待填写

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|vue|css|html)$/,
        loader: 'params-replace-loader',
        options: {
           common: {
             '#version#': '20191121.1',
           },
           local: {
             '#assetsPublicPath#': 'http://localhost',
             '#routeBasePath#': '/',
             ...
           },
           online: {
             '#assetsPublicPath#': '//goodtool666.cn/_spa/sportNews',
             '#routeBasePath#': '/_spa/sportNews/',
           },
           ...
        }
      }
    ]
  }
}
```