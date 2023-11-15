import { BannerWrapper, BannerContainer } from './BannerLayout.styled'
import AuthPannel from '../../components/banner/authPannel/AuthPannel'
import BannerImage from '../../components/banner/bannerImage/BannerImage';

function BannerLayout() {
	return (
		<BannerWrapper>
			<BannerContainer>
				<AuthPannel />
			</BannerContainer>
				<BannerImage />
		</BannerWrapper>
	);
}

export default BannerLayout;