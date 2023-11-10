import HeaderLogo from '../../components/header/headerLogo/HeaderLogo';
import { HeaderLayoutWrapper } from './HeaderLayout.styled'

function HeaderLayout() {
	return (
		<HeaderLayoutWrapper>
			<HeaderLogo />
		</HeaderLayoutWrapper>
	);
}

export default HeaderLayout;