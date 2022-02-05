import { UPDATE_ARMENIAN, UPDATE_TRANSLIT, UPDATE_ENGLISH } from '../actions/languages';
import { UPDATE_SCROLL, UPDATE_SLIDE } from '../actions/displays';
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

const scroll  = (scroll = { isScroll: true}, action) => {
    switch (action.type) {
        case UPDATE_SCROLL:
            return { isScroll: action.isScroll }
        default:
            return scroll;
    }
}

const slide  = (slide = { isSlide: false}, action) => {
    switch (action.type) {
        case UPDATE_SLIDE:
            return { isSlide: action.isSlide }
        default:
            return slide;
    }
}

export default combineReducers({ english, armenian, translit, scroll, slide });