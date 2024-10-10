// stringhlp.js
const { concatenate, toUpperCase, toLowerCase, trimSpaces, isEmail } = require('./stringFunctions');

function formatString(str) {
    return toUpperCase(trimSpaces(str));
}

function combineStrings(str1, str2) {
    return concatenate(trimSpaces(str1), trimSpaces(str2));
}

function checkEmail(str) {
    return isEmail(str) ? `${str} is a valid email.` : `${str} is not a valid email.`;
}

module.exports = {
    formatString,
    combineStrings,
    checkEmail,
};
