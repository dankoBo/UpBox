import CardsContainer from './YourPlanCards.styled'
import YourPlanCard from '../yourPlanCard/YourPlanCard'

function YourPlanCards() {
	return (
		<CardsContainer>
			<YourPlanCard
				titleText="Monthly"
				priceText="$18 / mo"
				name="Find your box"
			/>
			<YourPlanCard
				titleText="Monthly"
				priceText="$15 / mo"
				name="Find your box"
			/>
		</CardsContainer>
	);
}

export default YourPlanCards;