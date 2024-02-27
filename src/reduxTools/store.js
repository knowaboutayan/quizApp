import {configureStore} from '@reduxjs/toolkit'
import quizReducer from './slice'
export const store = configureStore({
    reducer:quizReducer
    
})
