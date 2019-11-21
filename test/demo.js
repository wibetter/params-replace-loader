const mainAction = require('../lib/mainAction');

// 录入测试内容文件
const params = require('./params');
const testContent = require('./testContent');

const newCont = mainAction(JSON.stringify(testContent), params);

console.log(newCont);



