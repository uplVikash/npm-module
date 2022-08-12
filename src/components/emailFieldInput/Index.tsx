/**
 * @uplShreya
 * This component taken from Pictplay
 */

import React from "react";
import { TextField } from "@mui/material";
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
    const clickEnter = (e: any) => {
        if (e.key === "Enter") {
            // Do code here
            props.clickEnter();
        }
    };

    const onChange = (event: any) => {
        props.onChange(event);
    };

    return (
        <div className={`textfieldinput flex flex-col ${props.extracls}`}>
            <label className={`${props.lableCls}`}>{props.label}</label>
            <TextField
                autoFocus={props.autoFocus}
                onChange={onChange}
                disabled={props.disabled}
                id={props.id}
                variant="outlined"
                label={props.inputLabel}
                defaultValue={props.defaultValue}
                // className={`${styles.textfieldclass} ${
                //   props.textnewclass ? props.textnewclass : ""
                // }`}
                type={"email"}
                autoComplete="off"
                name={props.textinputname}
                multiline={props.multiline}
                rows={props.rows}
                fullWidth={props.fullwidthState}
                placeholder={props.placeholder}
                error={props.error}
                value={props.value}
                onKeyPress={clickEnter}
                required={props.required}
                helperText={props.helperText}
                data-cy={props.dataCy}
                InputProps={
                    {
                        // startAdornment: (
                        //   <InputAdornment position="start">
                        //     {/* {emailStartSvg} */}
                        //     </InputAdornment>
                        // ),
                    }
                }
                tabIndex={props.tabIndex}
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
