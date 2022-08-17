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
import React from 'react';
import EmailField from './components/emailFieldInput/Index';
import TextFieldInput from './components/textfieldinput/Index';
var EmailFieldInput = function (props) {
    return (React.createElement(EmailField, __assign({}, props)));
};
var TextField = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(TextFieldInput, __assign({}, props))));
};
export { TextField, EmailFieldInput };
