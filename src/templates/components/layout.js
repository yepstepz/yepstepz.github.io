import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import Content from './content.js';
const Layout = () => {
    return(
        <div>
            <Content/>
        </div>
    )
}


export default Layout;