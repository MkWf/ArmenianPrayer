import { UPDATE_USERNAME, UPDATE_ARMENIAN, UPDATE_TRANSLIT, UPDATE_ENGLISH } from '../actions/users';
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



//Imagine that in the future you want to keep state about movies. You'll probably need a movies reducer, which handles it's 
//own set of actions. The best way to keep track of state is to keep the actions related to each kind of object in your data 
//model in a different reducer. However, when it comes to exporting them, we need to combine all the reducers so that we end up 
//with a single entrypoint for our state. Redux provides a helper function to do this and we shall use it
export default combineReducers({ user, english, armenian, translit });