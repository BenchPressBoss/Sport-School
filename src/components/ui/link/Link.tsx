import './Link.module.scss'

type linkTypes = {
	text: string
	href: string
}

function Link({ text, href }: linkTypes) {
	return <a href={href}>{text}</a>
}

export default Link
