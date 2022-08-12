import React from 'react'

const TextFieldInput = (props: any) => {

  return (
    <>
      {props.default &&
        <>
          <p className={props.textlabelClass}>{props.textLabel}</p>
          <input
            id={props.id}
            value={props.value}
            name={props.name}
            className={props.rootClass}
            type='text'
            placeholder={props.placeholder}
            onChange={props.onChange}
            disabled={props.disabled}
            {...props}
          />
        </>}

      {props.underLine &&
        <>
          <p className={props.labelClass}>{props.textLabel}</p>
          <input
            style={{
              padding: ' 8px 0px',
              boxSizing: 'border-box',
              borderBottom: '1px solid #ffffff',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              outline: 'none',
              background: 'transparent',
              WebkitTransition: '0.5s',
              transition: '0.5s'
            }}
            id={props.id}
            value={props.value}
            name={props.name}
            className={props.rootClass}
            type='text'
            placeholder={props.placeholder}
            onChange={props.onChange}
            disabled={props.disabled}
            {...props}
          />
        </>}
    </>
  )
}

export default TextFieldInput