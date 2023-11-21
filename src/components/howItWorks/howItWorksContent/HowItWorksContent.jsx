import ContentContainer from './HowItWorksContent.styled'
import HowItWorksCard from '../howItWorksCard/HowItWorksCard'
import SetupCardImage from '../../../interface/setupCardImage/SetupCardImage'
import CustomBoxCardImage from '../../../interface/customBoxCardImage/CustomBoxCardImage'
import TryItCardImage from '../../../interface/tryItCardImage/TryItCardImage'

function HowItWorksContent() {
	return (
		<ContentContainer>
			<HowItWorksCard
				image={<SetupCardImage />}
			/>
			<HowItWorksCard
				image={<CustomBoxCardImage />}
			/>
			<HowItWorksCard
				image={<TryItCardImage />}
			/>
		</ContentContainer>
	);
}

export default HowItWorksContent;