import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const BurgerMenuContainer = styled.div`
	position: relative;
`

const BurgerMenuIcon = styled.div`
	cursor: pointer;
`

const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
	width: 41px;
	height: 31px;
`

const StyledImCross = styled(ImCross)`
	width: 41px;
	height: 31px;
`

export { BurgerMenuContainer, BurgerMenuIcon, StyledGiHamburgerMenu, StyledImCross }