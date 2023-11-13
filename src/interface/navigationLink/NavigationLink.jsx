import StyledLink from './NavigationLink.styled'

function NavigationLink(props) {
	return <StyledLink href="#">{props.name}</StyledLink>
}

export default NavigationLink;