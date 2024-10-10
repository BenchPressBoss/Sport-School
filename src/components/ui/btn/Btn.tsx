import './Btn.module.scss'

type buttonTypes = {
	text: string
}
function Btn({ text }: buttonTypes) {
	return <button>{text}</button>
}

export default Btn
