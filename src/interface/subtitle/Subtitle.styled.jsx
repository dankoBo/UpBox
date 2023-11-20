import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledSubtitle = styled.p`
	color: #000000;
	font-family: DM Sans;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.18px;

	@media ${Device.tablet} {
		font-size: 14px;
		letter-spacing: 0.14px;
	}

	@media ${Device.phone} {
		font-size: 18px;
		letter-spacing: 0.18px;
	}
`

export default StyledSubtitle