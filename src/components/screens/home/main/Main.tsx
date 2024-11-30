import Btn from '@components/ui/btn/Btn'

import styles from './Main.module.scss'

function Main() {
	return (
		<div className={styles.wrapper}>
			<img
				src='/public/img/HomeBg.jpg'
				alt='HomeBg'
				className={styles.homeBg}
			/>
			<div className={styles.info}>
				<h1>
					WORK HARD. <br />
					FEEL PROUD.
				</h1>
				<p>
					Join Lintense Fitness today to improve your well-being and transform
					your body and mind through guided workouts.
				</p>
				<Btn text='Learn more' />
			</div>
		</div>
	)
}

export default Main
