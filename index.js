var template = require('./src/pug/index.pug');
var html = template();
document.querySelector('body').innerHTML = html;