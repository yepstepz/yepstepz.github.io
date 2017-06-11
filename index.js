import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cvApp from './src/reducers/index';
import Layout from './src/templates/components/layout';
import './src/templates/sass/cv.scss';
const store = createStore(cvApp);

render (
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('root')
)

