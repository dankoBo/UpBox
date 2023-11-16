import styled from 'styled-components'
import { Device } from '../../../responsive'

const NavigationContainer = styled.ul`
	width: 732px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	@media ${Device.tablet} {
		width: 470px;
	}

	@media (max-width: 620px) {
		width: 370px;
	}

	@media (max-width: 520px) {
		width: 300px;
	}
	
	@media (max-width: 440px) {
		width: 250px;
		flex-wrap: wrap;
		justify-content: space-around;
	}
`

export default NavigationContainer