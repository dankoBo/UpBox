import styled from 'styled-components'
import { Device } from '../../../responsive'

const CardContainer = styled.div`
	width: 575px;
	height: 290px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	border: 4px solid rgba(196, 196, 196, 0.3);

	@media ${Device.tablet} {
		width: 305px;
		height: 155px;
		margin: 10px 0;
	}

	@media ${Device.phone} {
		width: 348px;
		height: 188px;
	}
`

export { CardContainer }