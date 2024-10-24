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
				<h1>
					linten<span>se</span>
				</h1>
				<nav>
					{/* сделать вывод через map */}
					<Link text='About Us' href='' />
					<Link text='Our Classes' href='' />
					<Link text='Team' href='' />
					<Link text='Pricing' href='' />
					<Link text='Schedule' href='' />
					<Link text='Gallery' href='' />
					<Link text='Contacts' href='' />
				</nav>
			</div>
		</header>
	)
}

export default Header
