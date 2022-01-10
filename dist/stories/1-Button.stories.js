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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = exports.Text = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var addon_actions_1 = require("@storybook/addon-actions");
var demo_1 = require("@storybook/react/demo");
exports.default = {
    title: 'Button',
    component: demo_1.Button,
};
var Text = function () { return (0, jsx_runtime_1.jsx)(demo_1.Button, __assign({ onClick: (0, addon_actions_1.action)('clicked') }, { children: "Hello Button" }), void 0); };
exports.Text = Text;
var Emoji = function () { return ((0, jsx_runtime_1.jsx)(demo_1.Button, __assign({ onClick: (0, addon_actions_1.action)('clicked') }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ role: "img", "aria-label": "so cool" }, { children: "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF" }), void 0) }), void 0)); };
exports.Emoji = Emoji;
