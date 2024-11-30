import './Link.module.scss'

type linkTypes = {
	text: string
	href: string
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
	className?: string
}

function Link({ text, href, onClick, className }: linkTypes) {
	return (
		<a href={href} onClick={onClick} className={className}>
			{text}
		</a>
	)
}

export default Link
