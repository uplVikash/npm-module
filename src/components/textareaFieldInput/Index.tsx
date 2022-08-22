/**
 * @uplShreya
 * This component taken from Flo
 */

import React from "react";
//import { EmailStartIcon } from "../emailFieldInput/image/svg_files";
const TextAreaField = (props: any) => {

    // const outlinedTheme = {
    //     minHeight: '50px',
    //     minWidth: '200px',
    //     border: props.error ? '1px solid #ff0505' : '1px solid #000000',
    //     outline: 'none'
    // }

    // const standardTheme = {
    //     minHeight: '50px',
    //     minWidth: '200px',
    //     boxSizing: 'border-box',
    //     borderBottom: props.error ? '1px solid #ff0505' : '1px solid #000000',
    //     borderTop: 'none',
    //     borderLeft: 'none',
    //     borderRight: 'none',
    //     outline: 'none',
    //     background: 'transparent',
    //     WebkitTransition: '0.5s',
    //     transition: '0.5s'
    // }

    // const filledTheme = {
    //     minHeight: '50px',
    //     minWidth: '200px',
    //     boxSizing: 'border-box',
    //     borderBottom: props.error ? '1px solid #ff0505' : '1px solid #000000',
    //     borderTop: 'none',
    //     borderLeft: 'none',
    //     borderRight: 'none',
    //     outline: 'none',
    //     background: '#d7d7d74f',
    //     WebkitTransition: '0.5s',
    //     transition: '0.5s',
    //     borderTopLeftRadius: '4px',
    //     borderTopRightRadius: '4px'
    // }
    // const autoResize = {
    //     transition: '0.5s',
    //     minWidth: '200px',
    //     maxWidth: '20px',
    //     minHeight: '50px',


    // }


    return (
        <div>
            <label className={`${props.textArealabelClass}`}>{props.label}</label>
            <form>
                <textarea
                    // style={props.variant === 'standard' ? standardTheme
                    //     : props.variant === 'filled' ? filledTheme
                    //         : autoResize}

                    id={props.id}
                    value={props.value}
                    name={props.name}
                    className={props.rootClass}
                    type={props.type ?? 'text'}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    multiline
                    rows={props.rows}
                    cols={props.cols}
                    {...props}
                />
            </form>
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default TextAreaField;
