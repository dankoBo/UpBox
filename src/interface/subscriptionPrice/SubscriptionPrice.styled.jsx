import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledTitle = styled.h3`
	color: #000000;
	font-family: DM Sans;
	font-size: 44px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 5.28px;

	@media ${Device.tablet} {
		font-size: 24px;
		letter-spacing: 2.88px;
	}

	@media ${Device.phone} {
		font-size: 30px;
		letter-spacing: 3.6px;
	}
`

export default StyledTitle