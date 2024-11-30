import styles from './MediaLInk.module.scss'

type mediaLinkProps = {
	icon: string
	href?: string
}

function MediaLInk({ icon, href }: mediaLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={styles.mediaLink}
		>
			<img src={icon} alt='mediaLinkIcon' className={styles.iconImg} />
		</a>
	)
}

export default MediaLInk
