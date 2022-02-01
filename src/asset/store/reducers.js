import { UPDATE_USERNAME } from '../actions/users';
import { combineReducers } from 'redux';

//This particular reducer will take care to update our user's data. Reducers always receive two parameters.
//The first one, is the current application state. The initial application state just consists of an object with the property 
//username inside it. Since the user hasn't entered their name, the username property defaults to the empty string. It is common 
//practice to encode the initial application state using default function arguments in reducers.
//The second is the action to handle. For now we only have one kind of action but in the future we'll have one for updating the email 
//address, another to update the password, one for the profile photo...
const user  = (user = { username: ''}, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return { username: action.username }
        default:
            return user;
    }
}

//It's also common practice to use a switch statement to divide the logic which must be performed for each action in a reducer. 
//On each branch of the switch statement, we return an updated version of the state, taking care that it is a new object and not just 
//the same object with updated properties (this is critical for React to work properly).
//Finally, we always return the same, unmodified, state object in the default branch of the switch statement. This is so that in case 
//we receive an action which is not handled by this reducer (e.g. some action that updates some other part of the state), the state is 
//not modified.


//Imagine that in the future you want to keep state about movies. You'll probably need a movies reducer, which handles it's 
//own set of actions. The best way to keep track of state is to keep the actions related to each kind of object in your data 
//model in a different reducer. However, when it comes to exporting them, we need to combine all the reducers so that we end up 
//with a single entrypoint for our state. Redux provides a helper function to do this and we shall use it
export default combineReducers({ user });


import { UPDATE_ARMENIAN, UPDATE_TRANSLIT, UPDATE_ENGLISH } from '../actions/users';

const language = (language = { languages: ''}, action) => {
    switch (action.type) {
        case UPDATE_ARMENIAN:
            return { languages: action.languages }
        case UPDATE_TRANSLIT:
            return { languages: action.languages }
        case UPDATE_ENGLISH:
            return { languages: action.languages }
        default:
            return language;
    }
}