import styled from 'styled-components'
import { Device } from '../../../responsive'

const CardContainer = styled.div`
	height: 415px;
	border: 1px solid green;
	display: flex;
	justify-content: space-between;

	@media ${Device.tablet} {
		
	}

	@media ${Device.phone} {
		
	}
`

const CardImage = styled.div`
	width: 50%;
	height: 415px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid yellow;
`

const TitleSubtitleContainer = styled.div`
	width: 50%;
	height: 184px;
	padding: 0 16px;
	border: 1px solid skyblue;
`

export { CardContainer, CardImage, TitleSubtitleContainer }