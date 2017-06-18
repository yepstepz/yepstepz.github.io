import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TextContent from './text';
import Header from './header';
import Footer from './footer';

const Content = ({content}) => {
    return (
        <div className="rootComponent">
            <Header/>
            <TextContent content={content}/>
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
