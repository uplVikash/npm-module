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
import PhoneNoField from './components/phoneNoFieldInput/Index';
import TextField from './components/textFieldinput/Index';
var EmailFieldInput = function (props) {
    return (React.createElement(EmailField, __assign({}, props)));
};
var TextFieldInput = function (props) {
    return (React.createElement(TextField, __assign({}, props)));
};
var PhoneNoFieldInput = function (props) {
    return (React.createElement(PhoneNoField, __assign({}, props)));
};
export { TextFieldInput, EmailFieldInput, PhoneNoFieldInput };
