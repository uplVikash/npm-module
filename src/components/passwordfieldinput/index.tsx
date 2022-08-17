import React from 'react'

const PasswordFieldInput = (props : any) => {
  return (
    <>
      {props.outlined &&
        <>
          <p className={props.textlabelClass}>{props.textLabel}</p>
          <input
            style={{
              minHeight: '50px',
              minWidth: '200px',
            }}
            id={props.id}
            value={props.value}
            name={props.name}
            className={props.rootClass}
            type='password'
            placeholder={props.placeholder}
            onChange={props.onChange}
            disabled={props.disabled}
            {...props}
          />
          <p className={props.helpertextClass} style={{ color: 'red' }}>{props.helpertext}</p>
        </>}

      {props.standard &&
        <>
          <p className={props.labelClass}>{props.textLabel}</p>
          <input
            style={{
              minHeight: '50px',
              minWidth: '200px',
              boxSizing: 'border-box',
              borderBottom: '1px solid #000000',
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
            type='password'
            placeholder={props.placeholder}
            onChange={props.onChange}
            disabled={props.disabled}
            {...props}
          />
          <p className={props.helpertextClass} style={{ color: 'red' }}>{props.helpertext}</p>
        </>}

      {props.filled &&
        <>
          <p className={props.labelClass}>{props.textLabel}</p>
          <input
            style={{
              minHeight: '50px',
              minWidth: '200px',
              boxSizing: 'border-box',
              borderBottom: '1px solid #000000',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              outline: 'none',
              background: '#f0f0f0',
              WebkitTransition: '0.5s',
              transition: '0.5s',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px'
            }}
            id={props.id}
            value={props.value}
            name={props.name}
            className={props.rootClass}
            type='password'
            placeholder={props.placeholder}
            onChange={props.onChange}
            disabled={props.disabled}
            {...props}
          />
          <p className={props.helpertextClass} style={{ color: 'red' }}>{props.helpertext}</p>
        </>}
    </>
  )
}

export default PasswordFieldInput