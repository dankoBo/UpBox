import desktopBannerBox from '../../../assets/desktop/banner/Box.png'
import tabletBannerBox from '../../../assets/tablet/banner/Box.png'
import mobileBannerBox from '../../../assets/mobile/banner/Box.png'
import { Device } from '../../../responsive'
import StyledPicture from './BannerPicture.styled'

import customBox from '../../../assets/desktop/banner/Box_630.png'

function BannerPicture() {
	return (
		<picture>
			<source media={Device.phone} srcSet={mobileBannerBox} />
			<source media={Device.tablet} srcSet={tabletBannerBox} />
			<source media="(max-width: 1280px)" srcSet={customBox} />
			<StyledPicture src={desktopBannerBox} alt="present box" />
		</picture>
	);
}

export default BannerPicture;