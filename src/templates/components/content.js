import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import TextContent from './text';
import Header from './header';
import Footer from './footer';
import Switcher from './switchLang';
import {selectLanguage, Languages, Text} from '../../actions/index';

const Content = ({text}) => {
    return (
        <div>
            <Header/>
            <TextContent text={text}/>
            <Footer/>
        </div>
    )


}
function mapStateToProps(state) {
    return {
        text: state.changeLanguage
    }
}
let changeContent = connect(
    mapStateToProps,
    null
)(Content)
export default changeContent;
