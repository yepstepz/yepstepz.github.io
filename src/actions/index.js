import RU_text from '../templates/text/ru_text';
import ENG_text from '../templates/text/eng_text';
const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
const Languages = {
    RU: 'RU',
    ENG: 'ENG'
}
const Text = {
    RU: RU_text,
    ENG: ENG_text
}
function selectLanguage(lang,  text){
    return {
        type : SELECT_LANGUAGE,
        lang: lang,
        text: text
    }
}
export {SELECT_LANGUAGE, Languages, selectLanguage, Text}