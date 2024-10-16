import Layout from '@components/layout/Layout'

import styles from './Home.module.scss'
import Schedule from './schedule/Schedule'

function Home() {
	const week = ['Monday', 'Tuesday', 'Wednesday']

	return (
		<Layout>
			<div className={styles.wrapper}>
				{week.map(day => (
					<Schedule weekDay={day} src='/icons/Plus.svg' alt='plusImg' />
				))}
			</div>
		</Layout>
	)
}

export default Home
