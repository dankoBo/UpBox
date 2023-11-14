import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledButton = styled.button`
	padding: 10px 30px;
	border-radius: 300px;
	background-color: #FFFFFF;
	border: 2px solid #4A4A4A;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease;

	color: #000000;
	font-family: "DM Sans";
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 1.68px;
	text-transform: uppercase;

	&:hover {
		background-color: #EF8094;
		border: 2px solid #EF8094;
		color: #FFFFFF;
	}

	@media ${Device.tablet} {
		padding: 7px 11px;
		font-size: 10px;
		letter-spacing: 1.2px;
  	}

	@media (max-width: 520px) {
		padding: 4px 10px;
		font-size: 7px;
		letter-spacing: 1px;
	}
`

export default StyledButton