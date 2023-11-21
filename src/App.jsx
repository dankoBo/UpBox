import { Global, AppWrapper } from './App.styled'
import BannerLayout from './layouts/bannerLayout/BannerLayout'
import HeaderLayout from './layouts/headerLayout/HeaderLayout'
import HowItWorksLayout from './layouts/howItWorksLayout/HowItWorksLayout'
import YourPlan from './layouts/yourPlanLayout/YourPlan.Jsx'

function App() {

	return (
		<AppWrapper>
			<Global />
			<HeaderLayout />
			<BannerLayout />
			<YourPlan />
			<HowItWorksLayout />
		</AppWrapper>
	)
}

export default App
