import styled from 'styled-components'
import { Device } from '../../../responsive'

const AuthPannelContainer = styled.div`
	max-width: 511px;
	height: 318px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	z-index: 1;

	@media ${Device.tablet} {
		width: 364px;
		height: 267px;
	}

	@media (max-width: 500px) {
		margin: 0 auto;
	}

	@media ${Device.phone} {
		width: 307px;
		height: 493px;
	}
`

export default AuthPannelContainer