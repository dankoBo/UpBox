import { CardContainer, CardImage, TitleSubtitleContainer } from './HowItWorksCard.styled'
import ComponentTitle from '../../../interface/componentTitle/ComponentTitle'
import Subtitle from '../../../interface/subtitle/Subtitle'

function HowItWorksCard(props) {
	return (
		<CardContainer>
			<CardImage>
				{props.image}
			</CardImage>
			<TitleSubtitleContainer>
				<ComponentTitle titleText={props.titleText} />
				<Subtitle subtitleText={props.subtitleText} />
			</TitleSubtitleContainer>
		</CardContainer>
	);
}

export default HowItWorksCard;