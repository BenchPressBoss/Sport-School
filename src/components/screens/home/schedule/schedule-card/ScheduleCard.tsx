import styles from './ScheduleCard.module.scss'

type scheduleCardTypes = {
	time: string
	category: string
	during: string
	name: string
}

function ScheduleCard({ time, category, during, name }: scheduleCardTypes) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.timeCategory}>
				<p>{time}</p>
				<p>{category}</p>
			</div>
			<div className={styles.duringTrainerName}>
				<p>{during}</p>
				<p>{name}</p>
			</div>
		</div>
	)
}

export default ScheduleCard
