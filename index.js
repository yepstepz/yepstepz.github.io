import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cvApp from './src/reducers/index';
import Content from './src/templates/components/content';
import './src/templates/sass/cv.scss';
const store = createStore(cvApp);

render (
    <Provider store={store}>
        <Content/>
    </Provider>,
    document.getElementById('root')
)

