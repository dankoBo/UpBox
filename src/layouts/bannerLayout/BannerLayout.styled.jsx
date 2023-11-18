import styled from 'styled-components'
import { Device } from '../../responsive'

const BannerWrapper = styled.div`
	height: 510px;
	width: 100%;
	margin-top: 30px;
	position: relative;

	@media (max-width: 585px) {
		height: 700px;
	}

	@media ${Device.phone} {
		height: 945px;
	}
`

const BannerContainer = styled.div`
	height: 510px;
	margin-left: 65px;
	display: flex;
	align-items: center;

	@media (max-width: 1000px) {
		align-items: baseline;
		margin-left: 50px;
	}

	@media ${Device.tablet} {
		margin-left: 40px;
	}

	@media (max-width: 500px) {
		margin: 0;
	}
`

export { BannerWrapper, BannerContainer }