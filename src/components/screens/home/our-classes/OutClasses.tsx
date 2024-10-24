import { OurClassesData } from './OurClasses.data'
import styles from './OurClasses.module.scss'
import WorkoutCard from './workout-card/WorkoutCard'

function OurClasses() {
	return (
		<div className={styles.wrapper}>
			<h1>Our classes</h1>
			<p>
				At Lintense Fitness, we offer a wide range of workouts and classes for
				everyone. Whatever your goal is, rest assured that our coaches have what
				you prefer.
			</p>
			<div className={styles.container}>
				{OurClassesData.map(item => (
					<WorkoutCard
						description={item.description}
						title={item.title}
						number={item.number}
						image={item.image}
					/>
				))}
			</div>
		</div>
	)
}

export default OurClasses
