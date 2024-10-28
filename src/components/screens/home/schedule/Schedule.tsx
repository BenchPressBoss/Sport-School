import { useState } from 'react'

import styles from './Schedule.module.scss'
import ScheduleCard from './schedule-card/ScheduleCard'
import { ScheduleData } from './schedule-card/scheduleCard.data'

type scheduleTypes = {
	weekDay: string[]
	id: string
}

function Schedule({ weekDay, id }: scheduleTypes) {
	const [openDays, setOpenDays] = useState<{ [key: string]: boolean }>({})

	const toggleSchedule = (day: string) => {
		setOpenDays(prevState => ({ ...prevState, [day]: !prevState[day] }))
	}

	return (
		<div className={styles.wrapper} id={id}>
			<div className={styles.title}>
				<h1>Schedule</h1>
				<p>
					Interested in joining our classes and workouts? Consult the schedule
					below to find out when our workouts take place. You can also learn
					more about each class duration below.
				</p>
			</div>
			{weekDay.map(day => (
				<div key={day} className={styles.container}>
					<div className={styles.info} onClick={() => toggleSchedule(day)}>
						<p>{day}</p>
						<img
							src={openDays[day] ? './icons/Minus.svg' : '/icons/Plus.svg'}
							alt={openDays[day] ? 'minusIcon' : 'plusIcon'}
						/>
					</div>
					<div className={styles.schedule}>
						<div
							className={`${styles.dayScheduleWrapper} ${openDays[day] ? styles.open : styles.closed}`}
						>
							{(ScheduleData[day] || []).map(schedule => (
								<ScheduleCard
									time={schedule.time}
									category={schedule.category}
									during={schedule.during}
									name={schedule.name}
									key={schedule.id}
								/>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Schedule
