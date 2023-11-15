import StyledButton from './BorderedButton.styled'
import { RiArrowRightSLine } from 'react-icons/ri'

function BorderedButton(props) {
	return <StyledButton>
				{props.name} <RiArrowRightSLine />
			</StyledButton>;
}

export default BorderedButton;