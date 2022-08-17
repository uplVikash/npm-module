import React from 'react'
import PasswordFieldInput from './components/passwordfieldinput'
import TextFieldInput from './components/textfieldinput/Index'

const TextField = (props: any) => {
	return (
		<>
		<TextFieldInput {...props} />
		</>
	)
}
const PasswordField = (props: any) => {
	return (
		<>
		<PasswordFieldInput {...props} />
		</>
	)
}

export { TextField , PasswordField}