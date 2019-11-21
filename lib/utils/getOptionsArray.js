
const getCurrentEnvParams = require('./getCurrentEnvParams');

const defaultOptions = {
  search: null,
  replace: null,
  flags: 'g', // 默认全局替换
};

function getOptionsArray (config) {

  const totalParams = getCurrentEnvParams(config);

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
