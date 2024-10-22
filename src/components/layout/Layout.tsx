import { PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'

function Layout({ children }: PropsWithChildren) {
	return (
		<div className={styles.layout}>
			<div className={styles.wrapper}>
				<Header />
				<main>{children}</main>
			</div>
		</div>
	)
}

export default Layout
