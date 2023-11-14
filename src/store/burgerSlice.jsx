import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
    name: 'burger',
	initialState: {
		isOpen: false,
	},
	reducers: {
		toggleMenu(state) {
			state.isOpen = !state.isOpen;
		},

		closeMenu(state) {
			state.isOpen = false;
		},
	},
});

export const { toggleMenu, closeMenu } = burgerSlice.actions
export default burgerSlice.reducer