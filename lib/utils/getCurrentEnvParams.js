
const getCurrentEnv = require('./getCurrentEnv');

function getCurrentEnvParams (config) {

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

  return totalParams;
}

module.exports = getCurrentEnvParams;
