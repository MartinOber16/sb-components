"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToStorybook = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var addon_links_1 = require("@storybook/addon-links");
var demo_1 = require("@storybook/react/demo");
exports.default = {
    title: 'Welcome',
    component: demo_1.Welcome,
};
var ToStorybook = function () { return (0, jsx_runtime_1.jsx)(demo_1.Welcome, { showApp: (0, addon_links_1.linkTo)('Button') }, void 0); };
exports.ToStorybook = ToStorybook;
exports.ToStorybook.story = {
    name: 'to Storybook',
};
