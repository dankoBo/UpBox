import desktopImage from '../../assets/desktop/howItWorks/Custom_Box.png'
import tabletImage from '../../assets/tablet/howItWorks/Custom_Box.png'
import mobileImage from '../../assets/mobile/howItWorks/Custom_Box.png'
import { Device } from '../../responsive'

function CustomBoxCardImage() {
	return (
			<picture>
				<source media={Device.phone} srcSet={mobileImage} />
				<source media={Device.tablet} srcSet={tabletImage} />
				<img src={desktopImage} alt="custom box" />
			</picture>
	)
}

export default CustomBoxCardImage;