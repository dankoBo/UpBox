import { CardContainer } from './YourPlanCard.styled'
import ComponentTitle from '../../../interface/componentTitle/ComponentTitle'
import FilledButton from '../../../interface/filledButton/FilledButton'

function YourPlanCard() {
	return (
		<CardContainer>
			<ComponentTitle  />
			<FilledButton />
		</CardContainer>
	);
}

export default YourPlanCard;