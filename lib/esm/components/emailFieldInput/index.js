/**
 * @uplShreya
 * This component taken from Pictplay
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
//  import { EmailStartIcon } from "../../common/svg_files";
// import { EmailStartIcon } from "../../common/svg_files";
//  import styles from "./Index.module.css";
var EmailField = function (props) {
    //    const emailStartSvg = React.useState(EmailStartIcon);
    /**
     * clickEnter for enter button
     * @param e
     */
    // const clickEnter = (e: any) => {
    // if (e.key === "Enter") {
    // Do code here
    //         props.clickEnter();
    //     }
    // };
    // const onChange = (event: any) => {
    //     props.onChange(event);
    // };
    return (React.createElement("div", { className: "textfieldinput flex flex-col ".concat(props.extracls) },
        React.createElement("label", { className: "".concat(props.lableCls) }, props.label),
        React.createElement(TextField, __assign({}, props, { autoFocus: props.autoFocus, onChange: props.onChange, disabled: props.disabled, id: props.id, variant: "outlined", label: props.inputLabel, defaultValue: props.defaultValue, 
            //  className={`${styles.textfieldclass} ${
            //    props.textnewclass ? props.textnewclass : ""
            //  }`}
            type: "email", autoComplete: "off", name: props.textinputname, multiline: props.multiline, rows: props.rows, fullWidth: props.fullwidthState, placeholder: props.placeholder, error: props.error, value: props.value, onKeyPress: props.clickEnter, required: props.required, helperText: props.helperText, "data-cy": props.dataCy, InputProps: {
            // startAdornment: (
            //   <InputAdornment position="start">
            //     {/* {emailStartSvg} */}
            //     </InputAdornment>
            // ),
            }, tabIndex: props.tabIndex }))));
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
