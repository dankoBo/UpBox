import { useState, useEffect } from 'react'
import HeaderLogo from '../../components/header/headerLogo/HeaderLogo';
import HeaderNavigation from '../../components/header/headerNavigation/HeaderNavigation';
import { HeaderLayoutWrapper } from './HeaderLayout.styled'
import BurgerMenu from '../../components/header/burgerMenu/BurgerMenu'

function HeaderLayout() {
	const [mobileWidth, setMobileWidth] = useState(false);

	useEffect(() => {
		const checkWidth = () => {
			if (window.innerWidth <= 375) {
				setMobileWidth(true);
			} else {
				setMobileWidth(false);
			}
		};
	
		checkWidth();
	
		window.addEventListener('resize', checkWidth);
	
		return () => {
		  window.removeEventListener('resize', checkWidth);
		};
	}, []);

	return (
		<HeaderLayoutWrapper>
			<HeaderLogo />
			{
				mobileWidth ? <BurgerMenu /> : <HeaderNavigation />
			}
		</HeaderLayoutWrapper>
	);
}

export default HeaderLayout;