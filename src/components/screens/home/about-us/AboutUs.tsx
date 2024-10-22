import Btn from '@components/ui/btn/Btn'

import styles from './AboutUs.module.scss'

function AboutUs() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.aboutUs}>
				<h1>About us</h1>
				<p></p>
			</div>
			<form action=''>
				<input type='text' />
				<input type='text' />
				<Btn text='Book a workout' />
			</form>
		</div>
	)
}

export default AboutUs
