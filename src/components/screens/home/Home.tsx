import Layout from '@components/layout/Layout'

import './Home.module.scss'
import AboutUs from './about-us/AboutUs'
import Main from './main/Main'

function Home() {
	const week = ['Monday', 'Tuesday', 'Wednesday']

	return (
		<Layout>
			<Main />
			<AboutUs />
		</Layout>
	)
}

export default Home
