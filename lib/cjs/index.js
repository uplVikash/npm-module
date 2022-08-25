"use strict";
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
exports.PhoneNoFieldInput = exports.EmailFieldInput = exports.TextFieldInput = void 0;
var react_1 = __importDefault(require("react"));
var Index_1 = __importDefault(require("./components/emailFieldInput/Index"));
var Index_2 = __importDefault(require("./components/phoneNoFieldInput/Index"));
var Index_3 = __importDefault(require("./components/textFieldinput/Index"));
var EmailFieldInput = function (props) {
    return (react_1.default.createElement(Index_1.default, __assign({}, props)));
};
exports.EmailFieldInput = EmailFieldInput;
var TextFieldInput = function (props) {
    return (react_1.default.createElement(Index_3.default, __assign({}, props)));
};
exports.TextFieldInput = TextFieldInput;
var PhoneNoFieldInput = function (props) {
    return (react_1.default.createElement(Index_2.default, __assign({}, props)));
};
exports.PhoneNoFieldInput = PhoneNoFieldInput;
