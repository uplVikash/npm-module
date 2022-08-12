/**
 * @uplShreya
 * This component taken from Pictplay
 */

import React from "react";
// import { TextField } from "@mui/material";
import PropTypes from "prop-types";
// import { EmailStartIcon } from "../../common/svg_files";
// import { EmailStartIcon } from "../../common/svg_files";
// import styles from "./Index.module.css";

const EmailField = (props: any) => {
    //   const emailStartSvg = React.useState(EmailStartIcon);

    /**
     * clickEnter for enter button
     * @param e
     */
    // const clickEnter = (e: any) => {
    //     if (e.key === "Enter") {
    //         // Do code here
    //         props.clickEnter();
    //     }
    // };

    // const onChange = (event: any) => {
    //     props.onChange(event);
    // };

    return (
        <div>
            <label className={`${props.lableCls}`}>{props.label}</label>
            <input
                id={props.id}
                value={props.value}
                name={props.name}
                className={props.rootClass}
                type='email'
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
                {...props}
            />
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
