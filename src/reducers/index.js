import {Languages, SELECT_LANGUAGE, Text} from '../actions/index';
import { combineReducers } from 'redux';
const initialState = {
    lang: Languages.ENG,
    text: Text.ENG
}
function changeLanguage(state=initialState.text, action){
    switch (action.type){
        case SELECT_LANGUAGE:
            return action.text
        default:
            return state;
    }
}
const cvApp = combineReducers({
    changeLanguage
})
export default cvApp;