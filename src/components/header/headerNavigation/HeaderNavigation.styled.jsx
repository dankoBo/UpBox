import styled from 'styled-components'
import { Device } from '../../../responsive'

const NavigationContainer = styled.ul`
	width: 732px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	@media ${Device.tablet} {
		width: 400px;
	}

	@media (max-width: 640px) {
		width: 370px;
	}

	@media (max-width: 600px) {
		height: 100%;
		width: 250px;
		flex-wrap: wrap;
		align-content: space-around;
		justify-content: space-around;
	}

	
`

export default NavigationContainer