import styled from 'styled-components'
import { Device } from '../../responsive'

const YourPlanWrapper = styled.div`
	padding: 71px 85px 0;
	width: 100%;

	@media ${Device.tablet} {
		padding: 27px 47px 0;
	}

	@media ${Device.phone} {
		padding: 0px 15px;
	}
`

const YourPlanContainer = styled.div`
	max-width: 1270px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export { YourPlanWrapper, YourPlanContainer }