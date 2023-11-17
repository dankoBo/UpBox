import styled from 'styled-components'

const BannerWrapper = styled.div`
	height: 510px;
	width: 100%;
	margin-top: 30px;
	position: relative;
`

const BannerContainer = styled.div`
	height: 510px;
	width: 1355px;
	display: flex;
	align-items: center;

	@media (max-width: 980px) {
		align-items: baseline;
	}
`

export { BannerWrapper, BannerContainer }