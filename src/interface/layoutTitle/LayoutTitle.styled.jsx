import styled from 'styled-components'
import { Device } from '../../responsive'

const StyledTitle = styled.h2`
	max-width: 511px;
	color: #000000;
	font-family: DM Serif Text;
	font-size: 48px;
	font-style: normal;
	font-weight: 400;
	line-height: 56px;

	@media ${Device.tablet} {
		font-size: 42px;
		line-height: 48px;
	}

	@media ${Device.phone} {
		font-size: 48px;
		line-height: 56px;
	}
`

export default StyledTitle