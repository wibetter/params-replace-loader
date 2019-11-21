
const getCurrentEnv = require('./getCurrentEnv');

const defaultOptions = {
  search: null,
  replace: null,
  flags: 'g', // 默认全局替换
};

function getOptionsArray (config) {

  const currentEnv = getCurrentEnv(); // 获取当前执行命令参数：--env

  const paramsOptions = config;

  let commonParams, envParams, totalParams;

  if (paramsOptions) {
    commonParams = paramsOptions.common || {};

    if (currentEnv) {
      envParams = paramsOptions[currentEnv] || {};
    }
  }

  totalParams = Object.assign({}, commonParams, envParams);

  const optionsArray = [];

  for (const searchVal in totalParams) {
    optionsArray.push(Object.assign({}, defaultOptions, {
      search: searchVal,
      replace: totalParams[searchVal],
    }));
  }

  return optionsArray;
}

module.exports = getOptionsArray;
