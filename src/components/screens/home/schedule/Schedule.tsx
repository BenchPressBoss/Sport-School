import { useState } from 'react'

import styles from './Schedule.module.scss'
import ScheduleCard from './schedule-card/ScheduleCard'
import { ScheduleData } from './schedule-card/scheduleCard.data'

type scheduleTypes = {
	weekDay: string
	src: string
	alt: string
}
function Schedule({ weekDay, src, alt }: scheduleTypes) {
	const [isOpen, setIsOpen] = useState(false)
	const daySchedule = ScheduleData[weekDay]

	const toggleSchedule = () => setIsOpen(!isOpen)
	return (
		<>
			<div className={styles.info} onClick={toggleSchedule}>
				<p>{weekDay}</p>
				<img src={src} alt={alt} />
			</div>
			<div className={styles.schedule}>
				<div
					className={`${styles.dayScheduleWrapper} ${isOpen ? styles.open : 'styles.closed'}`}
				>
					{daySchedule.map(day => (
						<ScheduleCard
							time={day.time}
							category={day.category}
							during={day.during}
							name={day.name}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Schedule
