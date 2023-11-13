import styled from 'styled-components'
import { Device } from '../../../responsive'

const NavigationContainer = styled.div`
	width: 732px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid green;
	
	@media ${Device.tablet} {
		width: 470px;
	}

	@media (max-width: 620px) {
		width: 420px;
		
	}
`

export default NavigationContainer