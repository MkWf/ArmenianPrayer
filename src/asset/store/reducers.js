import { UPDATE_USERNAME, UPDATE_ARMENIAN, UPDATE_TRANSLIT, UPDATE_ENGLISH } from '../actions/languages';
import { combineReducers } from 'redux';

const user  = (user = { username: true}, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return { username: action.username }
        default:
            return user;
    }
}

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


export default combineReducers({ user, english, armenian, translit });