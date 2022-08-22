import React from 'react'

const PhoneNoField = (props: any) => {

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
            <div onClick={() => props.setUsa(true)}>USA</div>
            {props.usa === true ?

                // <input
                //     style={props.variant === 'standard' ? standardTheme
                //         : props.variant === 'filled' ? filledTheme
                //             : outlinedTheme}
                //     id={props.id}
                //     value={props.value}
                //     name={props.name}
                //     inputmode="numeric"
                //     className={props.rootClass}
                //     type={'text'}
                //     pattern="[0-9]*"
                //     placeholder={props.placeholder}
                //     onChange={props.onChange}
                //     disabled={props.disabled}
                //     {...props}
                // /> 

                <label onChange={props.onChange}>
                    (<input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit area code" size={2} />) -
                    <input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit prefix" size={2} /> -
                    <input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" aria-label="4-digit number" size={3} />
                </label>

                : null}
            <div onClick={() => props.setInd(true)}>IND</div>
            {props.ind === true ? <input
                style={props.variant === 'standard' ? standardTheme
                    : props.variant === 'filled' ? filledTheme
                        : outlinedTheme}
                id={props.id}
                value={props.value}
                name={props.name}
                className={props.rootClass}
                type={'number'}
                pattern="[0-9]*"
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
                {...props}
            /> : null}
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </>
    )
}

export default PhoneNoField