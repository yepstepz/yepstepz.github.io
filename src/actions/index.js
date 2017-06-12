import React, {PropTypes} from 'react';
import RUtext from '../templates/text/ru_text';
import ENGtext from '../templates/text/eng_text';
const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
const Languages = {
    RU: 'RU',
    ENG: 'ENG'
}
const Text = {
    RU: <RUtext/>,
    ENG: <ENGtext/>
}
function selectLanguage(lang,  text){
    return {
        type : SELECT_LANGUAGE,
        lang: lang,
        text: text
    }
}
export {SELECT_LANGUAGE, Languages, selectLanguage, Text}