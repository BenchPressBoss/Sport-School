import { useRef, useState } from 'react'

import { TeamDataItems } from './Team.data'
import styles from './Team.module.scss'
import TeamCard from './team-card/TeamCard'

function Team() {
	const [isLeftSlider, setIsLeftSlider] = useState<boolean>(true)
	const sliderContainerRef = useRef<HTMLDivElement | null>(null)
	const slideDistance = 430

	const toggleLeft = () => {
		const newTransform = isLeftSlider ? -slideDistance : slideDistance
		sliderContainerRef.current.style.transform = `translateX(${newTransform}px)`
		setIsLeftSlider(!isLeftSlider)
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
						!isLeftSlider ? styles.toRightSliderButton : styles.rightButton
					}
					onClick={toggleLeft}
				></button>
			</div>
		</div>
	)
}

export default Team
