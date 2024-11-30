import Btn from '@components/ui/btn/Btn'
import MediaLInk from '@components/ui/media-link/MediaLInk'

import styles from './Footer.module.scss'

function Footer() {
	return (
		<footer>
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<div className={styles.moreAboutUs}>
						<h1>Find out more about us</h1>
						<p>Get Your Quote or Call: +1 (800) 756-32-56</p>
						<Btn text='Request consultation' />
					</div>
					<div className={styles.contactUs}>
						<h3>Contact Us</h3>
						<br />
						<p>
							<span>+1 (800) 756-32-56</span> <br />
							mail@demolink.org
							<br />
							<br />
							2099 Walnut Hill Ln <br />
							Lafayette, CA 55262
						</p>
					</div>
					<div className={styles.socialMedia}>
						<h3>Social media</h3>
						<br />
						<div className={styles.links}>
							<MediaLInk icon='/icons/Twitter.svg' href='https://x.com' />
							<MediaLInk
								icon='/icons/Facebook.svg'
								href='https://www.facebook.com'
							/>
							<MediaLInk
								icon='/icons/Insta.svg'
								href='https://www.instagram.com/'
							/>
							<MediaLInk
								icon='/icons/Telegram.svg'
								href='https://web.telegram.org'
							/>
						</div>
					</div>
				</div>
				<div className={styles.rightsBlock}>
					<p>
						<span className={styles.title}>Lintense Fitness</span> © 2024. All
						rights reserved <br /> <br />
						<span className={styles.description}>
							Established in 2011, Lintense Fitness gives a warm welcome to all
							abilities and all age-groups.We have fully qualified, experienced
							coaches who are on hand to assist and work with you at all times.{' '}
						</span>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
