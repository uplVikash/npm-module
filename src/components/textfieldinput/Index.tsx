import React from 'react'

const TextFieldInput = (props: any) => {
  return (
    <>
    <p className={props.lableClass}>{props.lable}</p>
    <input 
    id={props.id}
    value={props.value}
    name={props.name}
    className={props.rootClass} 
    type={props.type} 
    placeholder={props.placeholder} 
    onChange={props.onChange}
    disabled={props.disabled}
    {...props}
    />
    </>
  )
}

export default TextFieldInput