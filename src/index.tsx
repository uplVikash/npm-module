import React from 'react'
import PasswordField from './components/passwordfieldinput'
import TextFieldInput from './components/textfieldinput/Index'

const TextField = (props: any) => {
	return (
		
		<TextFieldInput {...props} />
		
	)
}
const PasswordFieldInput = (props: any) => {
	return (
	
		<PasswordField {...props} />
	
	)
}

export { TextField , PasswordFieldInput}