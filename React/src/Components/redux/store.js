import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice' //Import the reducers from the slice

export default configureStore({
  reducer:  {counter: counterReducer},
})