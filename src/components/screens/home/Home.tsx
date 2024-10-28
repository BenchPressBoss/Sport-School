import Layout from '@components/layout/Layout'

import AboutUs from './about-us/AboutUs'
import Gallery from './gallery/Gallery'
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
			<AboutUs id='about-us' />
			<OurClasses id='our-classes' />
			<Team id='team' />
			<Pricing id='pricing' />
			<Schedule weekDay={week} id='schedule' />
			<Gallery id='gallery' />
		</Layout>
	)
}

export default Home
