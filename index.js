var style = require('./src/sass/cv.scss');
var template = require('./src/pug/index.pug');
var html = template();
document.querySelector('body').innerHTML = html;