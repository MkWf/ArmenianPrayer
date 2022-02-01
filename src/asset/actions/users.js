//Actions have a type, which is used to tell the reducer which part of the state it should update.
//We create the type as a constant. You could just use plain strings, but doing it this way allows you to export it from the module 
//and enforce consistency with your JS linter.
export const UPDATE_USERNAME = 'UPDATE_USERNAME';

//And we create the corresponding action factory. An action factory is just a function that outputs an object with the type field 
//and any other data required to update the state.
export const updateUsername = (username) => ({ type: UPDATE_USERNAME, username });
