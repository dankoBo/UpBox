import BurgerMenuList from '../burgerMenuList/BurgerMenuList'
import { BurgerMenuContainer, BurgerMenuIcon, StyledGiHamburgerMenu, StyledImCross } from './BurgerMenu.styled'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, closeMenu } from '../../../store/burgerSlice';

function BurgerMenu() {
	const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.burger.isOpen);
	
	return (
		<BurgerMenuContainer>
			<BurgerMenuIcon>
				{
					isOpen ? <StyledImCross onClick={() => dispatch(toggleMenu())} /> : <StyledGiHamburgerMenu onClick={() => dispatch(toggleMenu())} />
				}
			</BurgerMenuIcon>
			{
				isOpen ? <BurgerMenuList closeMenu={closeMenu} /> : ''
			} 
		</BurgerMenuContainer>
	)
}

export default BurgerMenu;