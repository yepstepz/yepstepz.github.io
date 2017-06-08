import React from 'react';
import Locale from './modules/locale.js';
let template = require('./pug/index.pug');
let html = template();
class Layout extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div className="container">
                <Locale/>
            </div>
        )
    }
}
export default Layout;