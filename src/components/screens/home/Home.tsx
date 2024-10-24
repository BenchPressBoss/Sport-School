import Layout from '@components/layout/Layout'

import AboutUs from './about-us/AboutUs'
import Main from './main/Main'
import OurClasses from './our-classes/OutClasses'
import Team from './team/Team'

function Home() {
	const week = ['Monday', 'Tuesday', 'Wednesday']

	return (
		<Layout>
			<Main />
			<AboutUs />
			<OurClasses />
			<Team></Team>
		</Layout>
	)
}

export default Home
