import { BannerWrapper, BannerContainer } from './BannerLayout.styled'
import AuthPannel from '../../components/banner/authPannel/AuthPannel'
import BannerPicture from '../../components/banner/bannerPicture/BannerPicture'



function BannerLayout() {
	return (
		<BannerWrapper>
			<BannerContainer>
				<AuthPannel />
			</BannerContainer>
			<BannerPicture />
		</BannerWrapper>
	);
}

export default BannerLayout;