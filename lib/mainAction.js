
/*
  mainAction: 主要功能模块
 */

const getOptionsArray = require('./getOptionsArray');
const replace = require('./replace');

function mainAction (source, thisConfig) {

  const optionsArray = getOptionsArray(thisConfig);
  let newSource = source;

  for (const options of optionsArray) {
    newSource = replace(newSource, options);
  }

  return newSource;
}

module.exports = mainAction;
