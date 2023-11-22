import ContentContainer from './HowItWorksContent.styled'
import HowItWorksCard from '../howItWorksCard/HowItWorksCard'
import SetupCardImage from '../../../components/howItWorks/setupCardImage/SetupCardImage'
import CustomBoxCardImage from '../../../components/howItWorks/customBoxCardImage/CustomBoxCardImage'
import TryItCardImage from '../../../components/howItWorks/tryItCardImage/TryItCardImage'

function HowItWorksContent() {
	return (
		<ContentContainer>
			<HowItWorksCard
				image={ <SetupCardImage /> }
				titleText="Setup your profile & preferences"
				subtitleText="Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you."
			/>
			<HowItWorksCard
				image={ <CustomBoxCardImage /> }
				titleText="Review your custom box"
				subtitleText="Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house."
			/>
			<HowItWorksCard
				image={<TryItCardImage />}
				titleText="Try it on at home"
				subtitleText="Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with."
			/>
		</ContentContainer>
	);
}

export default HowItWorksContent;