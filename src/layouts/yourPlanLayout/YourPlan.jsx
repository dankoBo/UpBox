import { YourPlanWrapper, YourCardsContainer, YourPlanContainer } from './YourPlan.styled'
import LayoutTitle from '../../interface/layoutTitle/LayoutTitle'
import Subtitle from '../../interface/subtitle/Subtitle'
import YourPlanCard from '../../components/yourPlan/yourPlanCard/YourPlanCard';


function YourPlan() {
	return (
		<YourPlanWrapper>
			<YourPlanContainer>
				<LayoutTitle titleText="Pick your plan" />
				<YourCardsContainer>
					<YourPlanCard />
					<YourPlanCard />
				</YourCardsContainer>
				<Subtitle subtitleText="Your plan auto-renews at the end of 30 days from the 1st day you signed-up." />
			</YourPlanContainer>
		</YourPlanWrapper>
	);
}

export default YourPlan;