import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import authSlice from './reduxToolkit/auth/AuthSlice';



const reducers = combineReducers({
    auth : authSlice

});


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authSlice']
};

const persistedReducer = persistReducer(persistConfig, reducers);



const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})


export default store;