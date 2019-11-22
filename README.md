## Params replace loader for [Webpack](http://webpack.github.io/)

用于项目环境变量批量自动替换的webpack-loader。


## 用法说明:

### 一、params-replace-loader的用处
#### 1. 目的
   根据当前的webpack执行环境（或者也称 当前node 命令执行环境），
自动将项目源代码中的指定变量替换对应的项目参数值。
其中源代码包括js、css、vue、html等文件，当然也可以自行设置需要替换的项目源文件，
注意事项：需要提前设置源代码中需要替换的参数值

#### 2. 使用的场景
1. 不同的执行环境中，静态资源的引用根地址不同；
2. 不同的执行环境中，SPA的路由根地址不同；
3. 不同的执行环境中，数据接口的根地址不同；
4. 不同的执行环境中，其他需要根据当前执行环境设置不同的数值场景；
5. 也可以设置全局自动替换项目参数；


### 二、params-replace-loader的使用方法

#### 2.1. 安装:

```bash
$ npm install --save-dev params-replace-loader
```

或者：
```bash
$ yarn add params-replace-loader --save-dev
```

#### 2.2. 设置当前执行环境（用于告知params-replace-loader当前的执行环境是什么）

#####    2.2.1. 在命令行直接设置env参数值
```bash
$ node ./test/demo.js --env=test
```
注：以上命令通过--env告知params-replace-loader，当前的执行环境是 test.

#####    2.2.2. 也可以在package.json中的scripts设置env参数值
```bash
  "scripts": {
    "test": "node ./test/demo.js --env=online"
  }
```
注：以上命令通过--env告知params-replace-loader，当前的执行环境是 online.

####    2.3. 设置环境变量（以下实例设置了三个执行环境的项目参数）
```bash
   envParams: { // 项目系统环境变量
      common: { // 通用参数
        '#version#': '20191121.1',
        ...
      },
      local: { // 本地开发环境
        '#dataApiBase#': 'http://localhost',
        '#assetsPublicPath#': 'http://localhost',
        '#routeBasePath#': '/',
        ...
      },
      test: { // 线上测试环境配置参数
        '#dataApiBase#': '//goodtool666.cn/',
        '#assetsPublicPath#': '//goodtool666.cn/_test/_spa/sportNews', // 静态资源引用路径
        '#routeBasePath#': '/_test/_spa/sportNews/', // 路由根地址
        ...
      },
      online: { // 线上正式环境配置参数
        '#dataApiBase#': '//goodtool666.cn/',
        '#assetsPublicPath#': '//goodtool666.cn/_spa/sportNews',
        '#routeBasePath#': '/_spa/sportNews/',
        ...
      },
      ...
   }
```
注：以上envParams放在projectConfig中。

####    2.4. 引用params-replace-loader
注：如果只是将params-replace-loader当webpack-loader使用，无需自己引用（安装后即可直接使用）

```bash
  // 导入params-replace-loader
  const paramsReplaceAction = require('params-replace-loader');

  // 导入params-replace-loader的主功能模块，不以webpack-loader的方式使用
  const paramsReplaceAction = require('params-replace-loader/lib/mainAction');

  // params-replace-loader提供的方法：获取当前执行环境的所有配置数据
  const currentConfig = paramsReplaceAction.getCurrentEnvParams(projectConfig.envParams);

  // params-replace-loader提供的方法：获取当前执行环境
  const currentConfig = paramsReplaceAction.getCurrentEnv();

```

####    2.5. 在webpack中使用params-replace-loader，
配置 你的`webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|vue|css|html)$/,
        loader: 'params-replace-loader',
        options: projectConfig.envParams
       }
    ]
  }
}
```

或者：
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