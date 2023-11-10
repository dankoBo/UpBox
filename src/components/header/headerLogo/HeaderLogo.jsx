import desktopLogo from '../../../assets/desktop/header/Desktop_Logo.png'
import tabletLogo from '../../../assets/tablet/header/Tablet_Logo.png'
import mobileLogo from '../../../assets/mobile/header/Mobile_Logo.png'
import { Device } from '../../../responsive'

function HeaderLogo() {
	return (
		<picture>
			<source media={Device.phone} srcSet={mobileLogo} />
			<source media={Device.tablet} srcSet={tabletLogo} />
			<img src={desktopLogo} alt="logo" />
		</picture>
	)
}

export default HeaderLogo;