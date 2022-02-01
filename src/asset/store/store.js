import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,  //save changes asynchronously
    stateReconciler: autoMergeLevel2, //reconcile the application state in case the system encounters some error.
}

const initialState = {};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };