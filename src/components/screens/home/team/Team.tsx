import { useRef, useState } from 'react'

import { TeamDataItems } from './Team.data'
import styles from './Team.module.scss'
import TeamCard from './team-card/TeamCard'

function Team() {
	const [isLeftSlider, setIsLeftSlider] = useState(true)
	const sliderContainerRef = useRef(null)

	const toggleLeft = () => {
		if (isLeftSlider) {
			sliderContainerRef.current.style.transform = 'translateX(-430px)' // сдвиг на 100px
			setIsLeftSlider(!isLeftSlider)
		} else {
			sliderContainerRef.current.style.transform = 'translateX(+430px)' // сдвиг на 100px
			setIsLeftSlider(!isLeftSlider)
		}
		console.log(isLeftSlider)
	}
	return (
		<div className={styles.wrapper}>
			<h1>Meet our team members</h1>
			<p>
				Lintense is a team of qualified, friendly, and helpful coaches always
				ready to help you achieve your goals in various types of workouts.
			</p>
			<div className={styles.sliderContainer} ref={sliderContainerRef}>
				<div className={styles.sliderItems}>
					{TeamDataItems.map(i => (
						<TeamCard
							src={i.img}
							category={i.category}
							name={i.name}
							key={i.id}
						/>
					))}
				</div>
			</div>
			<div className={styles.sliderButtons}>
				<button
					className={
						isLeftSlider ? styles.toLeftSliderButton : styles.leftButton
					}
					onClick={toggleLeft}
				></button>
				<button
					className={
						isLeftSlider ? styles.rightButton : styles.toRightSliderButton
					}
					onClick={toggleLeft}
				></button>
			</div>
		</div>
	)
}

export default Team
