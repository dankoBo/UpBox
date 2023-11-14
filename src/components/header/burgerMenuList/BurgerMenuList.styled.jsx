import styled from 'styled-components'
import StyledButton from '../../../interface/logInButton/LogInButton.styled';

const ListContainer = styled.ul`
	width: 100px;
	position: absolute;
	top: 40px;
	right: 0px;
`

const ListItem = styled.li`
	text-align: center;
	padding: 3px 0;
	border-bottom: 1px solid #000000;
`

const StyledLogInButton = styled(StyledButton)`
	margin: 4px auto;
	border: 1px solid red;
`

export { ListContainer, ListItem, StyledLogInButton }