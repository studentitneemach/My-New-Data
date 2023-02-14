import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import CartSlice from './cart-slice';
const store = configureStore({
    reducer : { ui : uiSlice.reducer,cart : CartSlice.reducer}
})
export default store;
