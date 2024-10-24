import styles from './Btn.module.scss'

type buttonTypes = {
	text: string
}
function Btn({ text }: buttonTypes) {
	return <button className={styles.button}>{text}</button>
}

export default Btn
