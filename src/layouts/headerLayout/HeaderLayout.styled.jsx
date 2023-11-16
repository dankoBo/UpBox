import styled from 'styled-components'
import { Device } from '../../responsive'

const HeaderLayoutWrapper = styled.div`
	max-width: 1270px;
	margin: 0 auto;
	padding: 17px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${Device.tablet} {
		max-width: 675px;
		padding: 17px 0;
	}

	@media ${Device.phone} {
		max-width: 348px;
	}
`

export { HeaderLayoutWrapper }