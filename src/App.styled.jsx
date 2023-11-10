import styled, { createGlobalStyle } from 'styled-components'
import DMSans from './assets/fonts/DMSans-VariableFont_opsz,wght.ttf'
import DMSerifText from './assets/fonts/DMSerifText-Regular.ttf'

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: gray;
	}

	li {
		list-style: none;
	}

	@font-face {
		font-family: 'DM Sans';
		src: url(${DMSans}) format('truetype');
	}

	@font-face {
		font-family: 'DM Serif Text';
		src: url(${DMSerifText}) format('truetype');
	}
`

const AppWrapper = styled.div`
	max-width: 1440px;
	height: 100vh;
	margin: 0 auto;
	background: #FFF;
	border: 1px solid red;
`

export { Global, AppWrapper }