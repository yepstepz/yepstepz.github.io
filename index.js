var style = require('./src/sass/cv.scss');
var template = require('./src/pug/index.pug');
let html = template('./index.js');
document.querySelector('body').innerHTML = html;