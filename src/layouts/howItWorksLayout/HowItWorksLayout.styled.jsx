import styled from 'styled-components'
import { Device } from '../../responsive'

const HowItWorksLayoutWrapper = styled.div`
	height: 1814px;
	padding: 50px 192px 0;
	border: 1px solid red;

	@media ${Device.tablet} {
		padding: 50px 50px 0;
	}

	@media ${Device.phone} {
		padding: 50px 30px 0;
	}

`

export default HowItWorksLayoutWrapper