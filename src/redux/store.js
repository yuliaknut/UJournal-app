import { configureStore } from '@reduxjs/toolkit';
import entriesSliceReducer from './entriesSlice'

export default configureStore({
    reducer: {
        entriesSlice: entriesSliceReducer
    }
});