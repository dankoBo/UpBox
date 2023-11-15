import desktopBannerBox from '../../../assets/desktop/banner/Box.png'
import tabletBannerBox from '../../../assets/tablet/banner/Box.png'
import mobileBannerBox from '../../../assets/mobile/banner/Box.png'
import { Device } from '../../../responsive'
import StyledImage from './BannerImage.styled'

function BannerImage() {
	return (
			<picture>
				<source media={Device.phone} srcSet={mobileBannerBox} />
				<source media={Device.tablet} srcSet={tabletBannerBox} />
				<StyledImage src={desktopBannerBox} alt="present box" />
			</picture>
	);
}

export default BannerImage;