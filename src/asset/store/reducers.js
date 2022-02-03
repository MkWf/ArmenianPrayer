import { UPDATE_ARMENIAN, UPDATE_TRANSLIT, UPDATE_ENGLISH } from '../actions/languages';
import { combineReducers } from 'redux';

const english  = (english = { isEnglish: true}, action) => {
    switch (action.type) {
        case UPDATE_ENGLISH:
            return { isEnglish: action.isEnglish }
        default:
            return english;
    }
}

const armenian  = (armenian = { isArmenian: true}, action) => {
    switch (action.type) {
        case UPDATE_ARMENIAN:
            return { isArmenian: action.isArmenian }
        default:
            return armenian;
    }
}

const translit  = (translit = { isTranslit: true}, action) => {
    switch (action.type) {
        case UPDATE_TRANSLIT:
            return { isTranslit: action.isTranslit }
        default:
            return translit;
    }
}


export default combineReducers({ english, armenian, translit });