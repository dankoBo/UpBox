import { CardContainer, CardImage, TitleSubtitleConbtainer } from './HowItWorksCard.styled'
import ComponentTitle from '../../../interface/componentTitle/ComponentTitle'
import Subtitle from '../../../interface/subtitle/Subtitle'

function HowItWorksCard(props) {
	return (
		<CardContainer>
			<CardImage>
				{props.image}
			</CardImage>
			<TitleSubtitleConbtainer>
				<ComponentTitle titleText="Setup your profile & preferences" />
				<Subtitle subtitleText="Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you." />
			</TitleSubtitleConbtainer>
		</CardContainer>
	);
}

export default HowItWorksCard;