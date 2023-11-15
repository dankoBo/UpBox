import styled from 'styled-components'

const BannerWrapper = styled.div`
	height: 510px;
	width: 100%;
	margin-top: 30px;
	display: flex;
	justify-content: right;
	border: 1px solid red;
	position: relative;
`

const BannerContainer = styled.div`
	height: 510px;
	width: 1355px;
	display: flex;
	align-items: center;
	border: 1px solid blue;
`

export { BannerWrapper, BannerContainer }