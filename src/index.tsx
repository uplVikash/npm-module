import React from 'react'
import EmailField from './components/emailFieldInput/Index';
import TextField from './components/textfieldinput/Index'

const EmailFieldInput = (props: any): JSX.Element => {

	return (
		<EmailField {...props} />
	)
}

const TextFieldInput = (props: any) => {
	return (
		<>
			<TextField {...props} />
		</>
	)
}

export { TextFieldInput, EmailFieldInput }
