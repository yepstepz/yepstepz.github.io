import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {selectLanguage, Languages, Text} from '../../actions/index';

const Content = ({text, onClick}) => {
    return (
        <div>
            <div onClick={e => {
                e.preventDefault();
                onClick(Languages.RU, Text.RU);
            }}
            >{Languages.RU}</div>
            <div onClick={e => {
                e.preventDefault();
                onClick(Languages.ENG, Text.ENG);
            }}
            >{Languages.ENG}</div>
            <div class="container">
                {text}

            </div>
        </div>
    )


}
function mapStateToProps(state) {
    return {
        text: state.changeLanguage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (lang, text) => {
            dispatch(selectLanguage(lang, text))
        }
    }
}
let changeContent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)
export default changeContent;
