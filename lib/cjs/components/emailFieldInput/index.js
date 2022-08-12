"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var prop_types_1 = __importDefault(require("prop-types"));
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
    return (react_1.default.createElement("div", { className: "textfieldinput flex flex-col ".concat(props.extracls) },
        react_1.default.createElement("label", { className: "".concat(props.lableCls) }, props.label),
        react_1.default.createElement(material_1.TextField, __assign({}, props, { autoFocus: props.autoFocus, onChange: props.onChange, disabled: props.disabled, id: props.id, variant: "outlined", label: props.inputLabel, defaultValue: props.defaultValue, 
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
    inputLabel: prop_types_1.default.string,
    textnewclass: prop_types_1.default.string,
    textinputname: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
    defaultValue: prop_types_1.default.string,
    error: prop_types_1.default.bool,
    fullwidthState: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    inputProps: prop_types_1.default.object,
    required: prop_types_1.default.bool,
    value: prop_types_1.default.string,
    clickEnter: prop_types_1.default.func,
    helperText: prop_types_1.default.string,
    dataCy: prop_types_1.default.string,
    tabIndex: prop_types_1.default.number,
};
exports.default = EmailField;
