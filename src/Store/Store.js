import {configureStore} from '@reduxjs/toolkit'
import CategoryReducer from './Slices/CategorySlice'

const store = configureStore({
    reducer: {
        category: CategoryReducer.reducer,
    }
})

export default store