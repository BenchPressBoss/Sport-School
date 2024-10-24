import styles from './WorkoutCard.module.scss'

type WorkoutCardProps = {
	title: string
	description: string
	image: string
	number: number
}
function WorkoutCard({ title, description, image, number }: WorkoutCardProps) {
	return (
		<div className={styles.wrapper}>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
			<span className='workout-number'>
				{number < 10 ? `0${number}` : number}
			</span>
		</div>
	)
}

export default WorkoutCard
