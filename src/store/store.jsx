import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './burgerSlice'

export default configureStore({
	reducer: {
		burger: burgerReducer,
	},
});