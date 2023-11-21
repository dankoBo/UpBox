import desktopImage from '../../assets/desktop/howItWorks/Try_It.png'
import tabletImage from '../../assets/tablet/howItWorks/Try_It.png'
import mobileImage from '../../assets/mobile/howItWorks/Try_It.png'
import { Device } from '../../responsive'

function TryItCardImage() {
	return (
			<picture>
				<source media={Device.phone} srcSet={mobileImage} />
				<source media={Device.tablet} srcSet={tabletImage} />
				<img src={desktopImage} alt="try it" />
			</picture>
	)
}

export default TryItCardImage;