import HeaderLogo from '../../components/header/headerLogo/HeaderLogo';
import HeaderNavigation from '../../components/header/headerNavigation/HeaderNavigation';
import { HeaderLayoutWrapper } from './HeaderLayout.styled'

function HeaderLayout() {
	return (
		<HeaderLayoutWrapper>
			<HeaderLogo />
			<HeaderNavigation />
		</HeaderLayoutWrapper>
	);
}

export default HeaderLayout;