import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cvApp from './src/reducers/index';
import Content from './src/templates/components/content';
import './src/templates/sass/cv.scss';
const store = createStore(cvApp);

function getColor(){
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var rgba = "rgba("+r+', '+g+', '+b+", 0.5)";
    return rgba;
}
function iterateCollection (collection) {
    return function(f) {
        for(var i = 0; collection[i]; i++) {
            f(collection[i], i);
        }
    }
}

render (
    <Provider store={store}>
        <Content/>
    </Provider>,
    document.getElementById('root')
)

let skills = document.getElementsByClassName('skills__List__item');
let responsibilityBtn = document.getElementsByClassName('experience__item__listBtn');
let langBtn = document.getElementsByClassName('switchLanguage__item');
iterateCollection(skills)( (node) => {
 node.style.background = getColor();
})
iterateCollection(responsibilityBtn)( (node) => {
    node.onclick = (e) => {
        e.target.nextSibling.classList.toggle('showed');
    }
})
iterateCollection(langBtn)( (node) => {
    console.log(node.classList);
    node.onClick = () => {
        node.classList.toggle('active');
    }
})