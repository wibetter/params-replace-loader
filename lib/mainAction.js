
/*
  mainAction: 主要功能模块
 */

const getOptionsArray = require('./utils/getOptionsArray');
const replace = require('./utils/replace');

/*
  getCurrentEnv和getCurrentEnvParams作为单独模块进行输出
 */
const getCurrentEnv = require('./utils/getCurrentEnv');
const getCurrentEnvParams = require('./utils/getCurrentEnvParams');

function mainAction (source, thisConfig) {

  const optionsArray = getOptionsArray(thisConfig);
  let newSource = source;

  for (const options of optionsArray) {
    newSource = replace(newSource, options);
  }

  return newSource;
}

module.exports = {
  getCurrentEnv,
  getCurrentEnvParams,
  action: mainAction,
};
