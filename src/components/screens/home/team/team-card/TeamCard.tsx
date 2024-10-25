import MediaLInk from '@components/ui/media-link/MediaLInk'

import styles from './TeamCard.module.scss'

type teamCardProps = {
	src: string
	name: string
	category: string
}

function TeamCard({ src, name, category }: teamCardProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.imgWrapper}>
				<img src={src} alt='trainerPhoto' className={styles.trainerPhoto} />
				<div className={styles.socialMediaLinks}>
					<MediaLInk icon='/icons/Twitter.svg' />
					<MediaLInk icon='/icons/Facebook.svg' />
					<MediaLInk
						icon='/icons/Insta.svg'
						href='https://www.instagram.com/bench_press_boss/?next=%2F'
					/>
					<MediaLInk
						icon='/icons/Telegram.svg'
						href='https://web.telegram.org/k/#@BenchWorks'
					/>
				</div>
			</div>
			<div className={styles.info}>
				<h1>{name}</h1>
				<p>{category}</p>
			</div>
		</div>
	)
}

export default TeamCard
