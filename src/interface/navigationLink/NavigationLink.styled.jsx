import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledLink = styled.a`
	color: #000000;
	font-family: "DM Sans", sans-serif;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 2.24px;
	text-decoration: none;
	text-transform: uppercase;

	@media ${Device.tablet} {
		font-size: 10px;
		letter-spacing: 1.6px;
	}
`

export default StyledLink