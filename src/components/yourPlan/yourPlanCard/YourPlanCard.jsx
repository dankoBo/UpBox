import { CardContainer } from './YourPlanCard.styled'
import ComponentTitle from '../../../interface/componentTitle/ComponentTitle'
import FilledButton from '../../../interface/filledButton/FilledButton'
import SubscriptionPrice from '../../../interface/subscriptionPrice/SubscriptionPrice'

function YourPlanCard(props) {
	return (
		<CardContainer>
			<ComponentTitle titleText={props.titleText}/>
			<SubscriptionPrice priceText={props.priceText} />
			<FilledButton name={props.name} />
		</CardContainer>
	);
}

export default YourPlanCard;