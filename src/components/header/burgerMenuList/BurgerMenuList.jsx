import { ListContainer, ListItem, StyledLogInButton } from './BurgerMenuList.styled'
import NavigationLink from '../../../interface/navigationLink/NavigationLink'
import { RiArrowRightSLine } from 'react-icons/ri'

function BurgerMenuList() {
	return (
		<ListContainer>
			<ListItem>
				<NavigationLink name="This month" />
			</ListItem>
			<ListItem>
				<NavigationLink name="Skin" />
			</ListItem>
			<ListItem>
				<NavigationLink name="Hair" />
			</ListItem>
			<ListItem>
				<NavigationLink name="Bath" />
			</ListItem>
			<ListItem>
				<NavigationLink name="Sale" />
			</ListItem>
			<StyledLogInButton>
				Log In
				<RiArrowRightSLine />
			</StyledLogInButton>
		</ListContainer>
	);
}

export default BurgerMenuList;