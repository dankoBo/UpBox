import { BannerWrapper, BannerContainer } from './BannerLayout.styled'
import AuthPannel from '../../components/banner/authPannel/AuthPannel'


function BannerLayout() {
	return (
		<BannerWrapper>
			<BannerContainer>
				<AuthPannel />
			</BannerContainer>
		</BannerWrapper>
	);
}

export default BannerLayout;