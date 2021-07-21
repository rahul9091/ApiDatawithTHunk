import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import booksReducer from './reducer/booksReducer'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['bookMarks']
}

const rootReducer = combineReducers({
    booksReducer: persistReducer(persistConfig,booksReducer)
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
export const persistor = persistStore(store);