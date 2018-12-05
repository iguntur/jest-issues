const Module = require('module');

module.exports.isModule = input => input instanceof Module;
