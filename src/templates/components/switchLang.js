import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectLanguage, Languages, Text} from '../../actions/index';
let switchLang = ({onClick}) => {
    return(
    <div className="switchLanguage">
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
let Switcher = connect(
    mapStateToProps,
    mapDispatchToProps
)(switchLang)

export default Switcher;