import { useEffect, useState } from 'react'

import Link from '@components/ui/link/Link'

import styles from './Header.module.scss'

function Header() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	const handleScroll = () => {
		if (window.scrollY > 0) setIsScrolled(true)
		else {
			setIsScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	return (
		<header className={isScrolled ? styles.scrolled : ''}>
			<div className={styles.content}>
				<a className={styles.logo} href='http://localhost:5173/'>
					<h1>
						linten<span>se</span>
					</h1>
					<br />
					<p>FINTESS</p>
				</a>
				<nav>
					{/* сделать вывод через map */}
					<Link text='About Us' href='#about-us' />
					<Link text='Our Classes' href='#our-classes' />
					<Link text='Team' href='#team' />
					<Link text='Pricing' href='#pricing' />
					<Link text='Schedule' href='#schedule' />
					<Link text='Gallery' href='#gallery' />
					<Link text='Contacts' href='#contacts' />
				</nav>
			</div>
		</header>
	)
}

export default Header
