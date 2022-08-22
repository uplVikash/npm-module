/**
 * @uplShreya
 * This component taken from Flo
 */

import React from "react";
const TextAreaField = (props: any) => {

    const TextAreaTheme = {
        display: 'block',
        width: '30%',
        height: '8rem',
        resize: 'both',
    }

    return (
        <div>
            <label className={`${props.textArealabelClass}`}>{props.label}</label>
                <textarea
                    style={TextAreaTheme}
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
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default TextAreaField;
