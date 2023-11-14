import { Global, AppWrapper } from './App.styled'
import BannerLayout from './layouts/bannerLayout/BannerLayout'
import HeaderLayout from './layouts/headerLayout/HeaderLayout'

function App() {

	return (
		<AppWrapper>
			<Global />
			<HeaderLayout />
			<BannerLayout />
		</AppWrapper>
	)
}

export default App
