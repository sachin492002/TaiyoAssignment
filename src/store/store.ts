
import { configureStore } from '@reduxjs/toolkit';


import contactReducer from './contactSlice';
import {Api} from "./service";

// @ts-ignore
// @ts-ignore
export const store = configureStore({

    reducer: {
        contacts: contactReducer,
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware),
});