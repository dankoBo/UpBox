import AuthPannelContainer from './AuthPannel.styled'
import LayoutTitle from '../../../interface/layoutTitle/LayoutTitle'
import BorderedButton from '../../../interface/borderedButton/BorderedButton';
import Subtitle from '../../../interface/subtitle/Subtitle';

function AuthPannel() {
	return (
		<AuthPannelContainer>
			<LayoutTitle titleText="Look good without leaving your house."/>
			<Subtitle subtitleText="Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month." />
			<BorderedButton name="Sign up" />
		</AuthPannelContainer>
	);
}

export default AuthPannel;