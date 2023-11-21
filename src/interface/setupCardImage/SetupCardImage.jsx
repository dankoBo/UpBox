import desktopImage from '../../assets/desktop/howItWorks/Set_Up.png'
import tabletImage from '../../assets/tablet/howItWorks/Set_Up.png'
import mobileImage from '../../assets/mobile/howItWorks/Set_Up.png'
import { Device } from '../../responsive'

function SetupCardImage() {
	return (
			<picture>
				<source media={Device.phone} srcSet={mobileImage} />
				<source media={Device.tablet} srcSet={tabletImage} />
				<img src={desktopImage} alt="setup" />
			</picture>
	)
}

export default SetupCardImage;