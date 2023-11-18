import { Global, AppWrapper } from './App.styled'
import BannerLayout from './layouts/bannerLayout/BannerLayout'
import HeaderLayout from './layouts/headerLayout/HeaderLayout'
import YourPlan from './layouts/yourPlanLayout/YourPlan.Jsx'

function App() {

	return (
		<AppWrapper>
			<Global />
			<HeaderLayout />
			<BannerLayout />
			<YourPlan />
		</AppWrapper>
	)
}

export default App
