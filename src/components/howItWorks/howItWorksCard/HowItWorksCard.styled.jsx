import styled from 'styled-components'

const CardContainer = styled.div`
	height: 415px;
	border: 1px solid green;
	display: flex;
	justify-content: space-between;
`

const CardImage = styled.div`
	width: 411px;
	height: 415px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid yellow;
`

const TitleSubtitleConbtainer = styled.div`
	width: 500px;
	height: 158px;
`

export { CardContainer, CardImage, TitleSubtitleConbtainer }