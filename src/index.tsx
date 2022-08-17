import React from 'react'
import EmailField from './components/emailFieldInput/Index';
import TextFieldInput from './components/textfieldinput/Index'

const EmailFieldInput = (props: any): JSX.Element => {

	return (
		<EmailField {...props} />
	)
}

const TextField = (props: any) => {
	return (
		<>
		<TextFieldInput {...props} />
		</>
	)
}

export { TextField, EmailFieldInput }
