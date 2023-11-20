import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledButton = styled.button`
	padding: 20px 18px;
	border-radius: 300px;
	border: 4px solid #EF8094;
	background-color: #EF8094;
	cursor: pointer;

	color: #FFFFFF;
	text-align: center;
	text-transform: uppercase;
	font-family: DM Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 1.92px;

	&:hover {
		border: 4px solid #EF8094;
		background-color: #FFFFFF;
		color: #000000;
	}


	@media ${Device.tablet} {
		padding: 10px 10px;
		font-size: 8px;
		letter-spacing: 0.96px;
	}

	@media ${Device.phone} {
		padding: 10px 20px;
		font-size: 14px;
		letter-spacing: 1.68px;
	}
`

export default StyledButton