
/*
  loaderMain: webpack-loader功能模块入口
  loader-utils: webpack官方提供的工具类，其中getOptions用于获取loader中的option
 */
const { getOptions } = require('loader-utils');
const mainAction = require('./mainAction').action;

function loaderMain (source, map) {
  //  关闭loader缓存
  if (this.cacheable) this.cacheable(false);

  const thisConfig = getOptions(this);
  let newSource = source;

  newSource = mainAction(newSource, thisConfig);

  this.callback(null, newSource, map);
}

module.exports = loaderMain;
