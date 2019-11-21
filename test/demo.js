const mainAction = require('../lib/mainAction');

// 录入测试内容文件
const params = require('./params');
const testContent = require('./testContent');

console.log('params-replace执行前：');
console.log(testContent);
console.log('\n');

const newCont = mainAction(JSON.stringify(testContent), params);

console.log('params-replace执行后：');
console.log(newCont);



