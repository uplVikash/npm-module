import React from 'react'
import EmailField from './components/emailFieldInput/Index';
import PhoneNoField from './components/phoneNoFieldInput/Index';
import TextField from './components/textFieldinput/Index'

const EmailFieldInput = (props: any): JSX.Element => {

	return (
		<EmailField {...props} />
	)
}

const TextFieldInput = (props: any) => {
	return (
			<TextField {...props} />
	)
}

const PhoneNoFieldInput = (props: any) => {
	return (
			<PhoneNoField {...props} />
	)
}


export { TextFieldInput, EmailFieldInput, PhoneNoFieldInput }
