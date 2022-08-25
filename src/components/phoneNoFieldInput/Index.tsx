import React from 'react'

const PhoneNoField = (props: any) => {
    let updatedValue:any=''
    let newOutput:any

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
    const formatPhoneNumber = (value: any)=> {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;
      
        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, "");
      
        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;
      
        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early
        if (phoneNumberLength < 4) return phoneNumber;
      
        // if phoneNumberLength is greater than 4 and less the 7 we start to return
        // the formatted number
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
      
        // finally, if the phoneNumberLength is greater then seven, we add the last
        // bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`;
      }
    const onChange = (e: any) => {
        updatedValue=updatedValue+(e.target.value).toString();
        newOutput=formatPhoneNumber((updatedValue))
        console.log("i'm in module",newOutput)
    }

    return (
        <>
            <p className={props.textlabelClass}>{props.Label}</p>
            {/* <div onClick={() => props.setUsa(true)}>USA</div>
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
            /> : null} */}
            <input
                style={props.variant === 'standard' ? standardTheme
                    : props.variant === 'filled' ? filledTheme
                        : outlinedTheme}
                id={props.id}
                // value={props.value}
                value={newOutput}
                name={props.name}
                className={props.rootClass}
                // type='tel'
                // pattern="[0-9]*"
                placeholder={props.placeholder}
                onChange={(e:any)=>onChange(e)}
                disabled={props.disabled}
                {...props}
            />
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </>
    )
}

export default PhoneNoField