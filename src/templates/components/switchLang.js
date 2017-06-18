import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectLanguage, Languages, Text} from '../../actions/index';
let switchLang = ({onClick}) => {
    return(
    <div className="switchLanguage">
        <div className="switchLanguage__item RU" onClick={e => {
            e.preventDefault();
            onClick(Languages.RU, Text.RU);
        }}
        >{Languages.RU}</div>
        <div className="switchLanguage__item ENG" onClick={e => {
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
        onClick: (lang, text, links) => {
            console.log(lang, text, links)
            dispatch(selectLanguage(lang, text, links))
        }
    }
}
let Switcher = connect(
    mapStateToProps,
    mapDispatchToProps
)(switchLang)

export default Switcher;