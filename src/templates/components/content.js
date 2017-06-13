import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import TextContent from './text';
import Header from './header';
import Footer from './footer';
import Switcher from './switchLang';
import {selectLanguage, Languages, Text} from '../../actions/index';

const Content = ({content}) => {
    return (
        <div>
            <Header/>
            <TextContent text={content.text}/>
            <Footer links={content.links}/>
        </div>
    )


}
function mapStateToProps(state) {
    return {
        content: state.changeLanguage
    }
}
let changeContent = connect(
    mapStateToProps,
    null
)(Content)
export default changeContent;
