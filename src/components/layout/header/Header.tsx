import Link from '@components/ui/link/Link'

import './Header.module.scss'

function Header() {
	return (
		<header>
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
		</header>
	)
}

export default Header
