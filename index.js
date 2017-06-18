import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cvApp from './src/reducers/index';
import Content from './src/templates/components/content';
import './src/templates/sass/cv.scss';
const store = createStore(cvApp);

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

let responsibilityBtn = document.getElementsByClassName('experience__item__listBtn');
let langBtn = document.getElementsByClassName('switchLanguage__item');

iterateCollection(responsibilityBtn)( (node) => {
    node.onclick = (e) => {
        e.target.classList.toggle('opened');
        e.target.nextSibling.classList.toggle('showed');
    }
})

iterateCollection(langBtn)( (node) => {
    node.onClick = () => {
        node.classList.toggle('active');
    }
})
