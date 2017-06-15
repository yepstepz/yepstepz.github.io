import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import TextContent from './text';
import Header from './header';
import Footer from './footer';
import Profile from './profile';
import Links from './links';
import Switcher from './switchLang';
import {selectLanguage, Languages, Text} from '../../actions/index';

const Content = ({content}) => {
    return (
        <div>
            <Header/>
            <Profile/>
            <Links link={content.links} />
            <TextContent text={content.text}/>
            <Footer/>
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
