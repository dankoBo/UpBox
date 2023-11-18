import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledButton = styled.button`
	padding: 20px 30px;
	border-radius: 300px;
	border: 4px solid #EF8094;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	cursor: pointer;

	color: #000000;
	font-family: DM Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 1.92px;
	text-transform: uppercase;

	&:hover {
		background-color: #EF8094;
		color: #FFFFFF;
	}

	@media ${Device.tablet} {
		padding: 15px 30px;	
	}

	@media ${Device.phone} {
		padding: 20px 30px;
	}

	
`

export default StyledButton