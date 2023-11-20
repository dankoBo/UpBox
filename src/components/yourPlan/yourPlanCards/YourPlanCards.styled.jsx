import styled from 'styled-components'
import { Device } from '../../../responsive'

const CardsContainer = styled.div`
	width: 100%;
	margin: 60px 0 45px;
	display: flex;
	justify-content: space-between;

	@media ${Device.tablet} {
		margin: 40px 0 22px;
		flex-direction: column;
		align-items: center;
	}

	@media ${Device.phone} {
		margin: 80px 0 15px;
		flex-direction: column;
		align-items: center;
	}
`

export default CardsContainer