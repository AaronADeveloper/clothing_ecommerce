import { combineReducers } from 'redux';
import userReducer from '../redux/user/user.reducer';
import shopReducer from '../redux/shop/shop.reducer';
import cartReducer from '../redux/cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)