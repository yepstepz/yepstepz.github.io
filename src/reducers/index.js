import React from 'react';
import { createStore } from 'redux';

let langSwitcher = (state = 'RU', action) => {
    let newState;
    switch (action.type){
        case 'RU':
            newState = 'RU'
            return newState;
        case 'ENG':
            newState = 'ENG'
            return newState;
        default:
            return state;
    }
}
let store = createStore(langSwitcher);
export default store;