import Btn from '@components/ui/btn/Btn'
import Input from '@components/ui/input/Input'

import styles from './AboutUs.module.scss'

function AboutUs() {
	return (
		<div className={styles.wrapper}>
			<h1>About us</h1>
			<div className={styles.info}>
				<p>
					<span>
						Lintense Fitness provides a relaxing, open atmosphere for exercise
						and wellness activities for everyone who cares about their
						well-being.{' '}
					</span>
					<br />
					<br /> Our center gives a warm welcome to all abilities and all age
					groups and we believe that our friendly atmosphere sets us apart as
					something special in the world of fitness training. Whether you are
					old or young, we hope to have something to excite you.
				</p>
				<form action=''>
					<Input inputType='Name' placeholder='Enter your name...' />
					<Input inputType='Email' placeholder='Enter your email...' />
					<div>
						<Btn text='Book a workout' />
					</div>
				</form>
			</div>
		</div>
	)
}

export default AboutUs
