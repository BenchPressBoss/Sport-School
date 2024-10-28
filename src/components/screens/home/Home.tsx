import Layout from '@components/layout/Layout'

import AboutUs from './about-us/AboutUs'
import Main from './main/Main'
import OurClasses from './our-classes/OutClasses'
import Pricing from './pricing/Pricing'
import Schedule from './schedule/Schedule'
import Team from './team/Team'

function Home() {
	const week = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]

	return (
		<Layout>
			<Main />
			<AboutUs />
			<OurClasses />
			<Team />
			<Pricing />
			<Schedule weekDay={week} />
		</Layout>
	)
}

export default Home
