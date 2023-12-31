import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledTitle = styled.h2`
	color: #000000;
	font-family: DM Serif Text;
	font-size: 36px;
	font-style: normal;
	font-weight: 400;
	line-height: 44px;

	@media ${Device.tablet} {
		font-size: 20px;
	}

	@media ${Device.phone} {
		font-size: 30px;
	}
`

export default StyledTitle