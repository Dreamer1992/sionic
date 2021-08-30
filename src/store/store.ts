import {configureStore} from '@reduxjs/toolkit'
import {ProductActionTypes} from '../types/product';
import {reducer as ormReducer} from "./orm";

const store = configureStore({
    reducer: {
        orm: ormReducer,
    },
})

store.dispatch({type: ProductActionTypes.CREATE_PRODUCT, payload: {name: "A starter product 1", category: 1}});
store.dispatch({type: ProductActionTypes.CREATE_PRODUCT, payload: {name: "A starter product 1.2", category: 1}});
store.dispatch({type: ProductActionTypes.CREATE_PRODUCT, payload: {name: "A starter product 2", category: 2}});
store.dispatch({type: ProductActionTypes.CREATE_PRODUCT, payload: {name: "A starter product 2.1", category: 2}});
store.dispatch({type: ProductActionTypes.CREATE_PRODUCT, payload: {name: "A starter product 3.1", category: 3}});
store.dispatch({type: ProductActionTypes.CREATE_PRODUCT, payload: {name: "A starter product 3.1", category: 3}});

export default store;