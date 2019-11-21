const indexAction = require('../index');

// 录入测试内容文件
const params = require('./params');
const template = require('./template.html');

const newCont = indexAction(template, params);

console.log(newCont);



