import Header from './header/Header'

type layoutTypes = {
	children: React.ReactNode
}
function Layout({ children }: layoutTypes) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default Layout
