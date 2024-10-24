import styles from './TeamCard.module.scss'

type teamCardProps = {
	src: string
	name: string
	category: string
}

function TeamCard({ src, name, category }: teamCardProps) {
	return (
		<div className={styles.wrapper}>
			<img src={src} alt='trainerPhoto' className={styles.trainerPhoto} />
			<div className={styles.info}>
				<h1>{name}</h1>
				<p>{category}</p>
			</div>
		</div>
	)
}

export default TeamCard
