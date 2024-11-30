import { PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<div className={styles.layout}>
				<div className={styles.wrapper}>
					<main>{children}</main>
				</div>
			</div>
			<div id='contacts'>
				<Footer />
			</div>
		</>
	)
}

export default Layout
