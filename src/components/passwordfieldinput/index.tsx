import React from 'react'
// import passwordshoweye from "./Image/passwordshoweye.svg"
// import passwordhideeye from "./Image/passwordhideeye.svg"
const PasswordField = (props : any) => {

    const outlinedTheme = {
        minHeight: '50px',
        minWidth: '200px',
        border: props.error ? '1px solid #ff0505' : '1px solid #000000',
        outline: 'none'
      }
    
      const standardTheme = {
        minHeight: '50px',
        minWidth: '200px',
        boxSizing: 'border-box',
        borderBottom: props.error ? '1px solid #ff0505' : '1px solid #000000',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        outline: 'none',
        background: 'transparent',
        WebkitTransition: '0.5s',
        transition: '0.5s'
      }
    
      const filledTheme = {
        minHeight: '50px',
        minWidth: '200px',
        boxSizing: 'border-box',
        borderBottom: props.error ? '1px solid #ff0505' : '1px solid #000000',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        outline: 'none',
        background: '#d7d7d74f',
        WebkitTransition: '0.5s',
        transition: '0.5s',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
      }
  return (
    <>
    <p className={props.textlabelClass}>{props.Label}</p>
    <div style={{position: 'relative'}}>
    <input
      style={props.variant === 'standard' ? standardTheme
        : props.variant === 'filled' ? filledTheme
          : outlinedTheme}
      id={props.id}
      value={props.value}
      name={props.name}
      className={props.rootClass}
      type= {props.showpassword ? "text" : "password"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
      {...props}
    />
    <div >
    {!props.showpassword ? (
                    <img onClick={()=>props.onClick()} src={props.showimg} alt="show" style={{position: 'absolute', cursor:"pointer",top: '15px',left:'140px'}}/>
                  ) : (
                    <img onClick={()=>props.onClick()} src={props.hideimg} alt="hide" style={{position: 'absolute', cursor:"pointer",top: '15px',left:'140px'}}/>
                  )}
    </div>
    </div>
    <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
  </>
  )
}

export default PasswordField