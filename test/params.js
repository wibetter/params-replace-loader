
const envParams = {
  common: { // 通用参数
    '#version#': '20191121.1',
  },
  local: { // 本地开发环境
    '#dataApiBase#': 'http://dev.sina.cn',
    '#assetsPublicPath#': 'http://dev.sina.cn',
    '#routeBasePath#': '/',
  },
  test: { // 线上测试环境配置参数
    '#dataApiBase#': '//goodtool666.cn/',
    '#assetsPublicPath#': '//goodtool666.cn/_test/_spa/sportNews', // 静态资源引用路径
    '#routeBasePath#': '/_test/_spa/sportNews/', // 路由根地址
  },
  online: { // 线上正式环境配置参数
    '#dataApiBase#': '//goodtool666.cn/',
    '#assetsPublicPath#': '//goodtool666.cn/_spa/sportNews',
    '#routeBasePath#': '/_spa/sportNews/',
  },
};

module.exports = envParams;
