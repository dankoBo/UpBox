import styled from 'styled-components'
import { Device } from '../../responsive'

const HeaderLayoutWrapper = styled.div`
	max-width: 1270px;
	margin: 0 auto;
	padding: 17px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid red;

	@media ${Device.tablet} {
		padding: 0;
	}
`

export { HeaderLayoutWrapper }