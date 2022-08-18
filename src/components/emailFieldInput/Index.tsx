/**
 * @uplShreya
 * This component taken from Pictplay
 */

import React from "react";
import PropTypes from "prop-types";
//import { EmailStartIcon } from "../emailFieldInput/image/svg_files";
const EmailField = (props: any) => {
    // const emailStartSvg = useState(EmailStartIcon);

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
        <div>
            <label className={`${props.lableCls}`}>{props.label}</label>
            <form>
                <input
                    style={props.variant === 'standard' ? standardTheme
                        : props.variant === 'filled' ? filledTheme
                            : outlinedTheme}
                    id={props.id}
                    value={props.value}
                    name={props.name}
                    className={props.rootClass}
                    type={props.type ?? 'email'}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    {...props}
                />
            </form>
            {/* <form>
                <input
                    id={props.id} type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </form> */}
        </div>
    );
};

EmailField.prototype = {
    inputLabel: PropTypes.string,
    textnewclass: PropTypes.string,
    textinputname: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    error: PropTypes.bool,
    fullwidthState: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    inputProps: PropTypes.object,
    required: PropTypes.bool,
    value: PropTypes.string,
    clickEnter: PropTypes.func,
    helperText: PropTypes.string,
    dataCy: PropTypes.string,
    tabIndex: PropTypes.number,
};

export default EmailField;
