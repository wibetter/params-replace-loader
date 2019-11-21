const getOptionsArray = require('./getOptionsArray');
const replace = require('./replace');

function mainAction (source, thisConfig) { // map,
  //  关闭loader缓存
  if (this.cacheable) this.cacheable(false);

  const optionsArray = getOptionsArray(thisConfig || this);
  let newSource = source;

  for (const options of optionsArray) {
    newSource = replace(newSource, options);
  }

  if (this.callback) {
    this.callback(null, newSource, map);
  } else {
    return newSource;
  }

}

module.exports = mainAction;
