import LogInButton from '../../../interface/logInButton/LogInButton';
import NavigationLink from '../../../interface/navigationLink/NavigationLink';
import NavigationContainer from './HeaderNavigation.styled'

function HeaderNavigation() {
	return (
		<NavigationContainer>
			<NavigationLink name="This month" />
			<NavigationLink name="Skin" />
			<NavigationLink name="Hair" />
			<NavigationLink name="Bath" />
			<NavigationLink name="Sale" />
			<LogInButton />
		</NavigationContainer>
	);
}

export default HeaderNavigation;