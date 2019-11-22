const mainAction = require('../lib/mainAction');

// 录入测试内容文件
const params = require('./params');
const testContent = require('./testContent');

// 获取当前环境变量
console.log('当前环境变量:' + mainAction.getCurrentEnv());

// 获取当前环境params
console.log('当前环境params：');
console.log(mainAction.getCurrentEnvParams(params));

console.log('params-replace执行前：');
console.log(testContent);

const newCont = mainAction.action(JSON.stringify(testContent), params);

console.log('params-replace执行后：');
console.log(newCont);



