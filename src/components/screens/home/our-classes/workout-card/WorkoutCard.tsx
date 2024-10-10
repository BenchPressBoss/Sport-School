import './WorkoutCard.module.scss'

type WorkoutCardProps = {
	title: string
	description: string
	image: string
	number: number
}
function WorkoutCard({ title, description, image, number }: WorkoutCardProps) {
	return (
		<div>
			<img src={image} alt={title} className='workout-image' />
			<h3>{title}</h3>
			<p>{description}</p>
			<span className='workout-number'>
				{number < 10 ? `0${number}` : number}
			</span>
		</div>
	)
}

export default WorkoutCard
