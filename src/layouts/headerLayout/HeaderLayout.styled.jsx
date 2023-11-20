import styled from 'styled-components'
import { Device } from '../../responsive'

const HeaderLayoutWrapper = styled.div`
	height: 90px;
	padding: 0px 65px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1000px) {
		padding: 0px 50px;
	}

	@media ${Device.tablet} {
		height: 70px;
		padding: 0px 40px;
	}

	@media (max-width: 500px) {
		padding: 0px 15px;
	}

	@media ${Device.phone} {
		height: 90px;
		padding: 17px 15px;
	}
`

export { HeaderLayoutWrapper }