// stringFunctions.js

const _ = require('lodash');
const validator = require('validator');

function concatenate(str1, str2) {
    return _.trim(str1) + _.trim(str2);
}

function toUpperCase(str) {
    return _.toUpper(str);
}

function toLowerCase(str) {
    return _.toLower(str);
}

function trimSpaces(str) {
    return _.trim(str);
}

function isEmail(str) {
    return validator.isEmail(str);
}

module.exports = {
    concatenate,
    toUpperCase,
    toLowerCase,
    trimSpaces,
    isEmail,
};
