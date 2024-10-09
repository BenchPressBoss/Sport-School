import './Input.module.scss'

type InputProps = {
	inputType: string
	placeholder: string
}

function Input({ inputType, placeholder }: InputProps) {
	return (
		<div className='input-wrapper'>
			<input type={inputType} placeholder={placeholder} className='input' />
		</div>
	)
}

export default Input
