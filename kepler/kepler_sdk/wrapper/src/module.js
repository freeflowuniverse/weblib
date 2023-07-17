"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siweToDelegationHeaders = exports.generateHostSIWEMessage = exports.invoke = exports.completeSessionSetup = exports.prepareSession = exports.makeOrbitId = void 0;
var msg = "Has Kepler been initialised? 'global.keplerModule' is not of the expected type";
function getModule() {
    try {
        // @ts-ignore
        return global.keplerModule;
    }
    catch (e) {
        throw "".concat(msg, ": ").concat(e);
    }
}
var makeOrbitId = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return (_a = getModule()).makeOrbitId.apply(_a, args);
    }
    catch (e) {
        throw "".concat(msg, ": ").concat(e);
    }
};
exports.makeOrbitId = makeOrbitId;
var prepareSession = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return (_a = getModule()).prepareSession.apply(_a, args);
    }
    catch (e) {
        throw "".concat(msg, ": ").concat(e);
    }
};
exports.prepareSession = prepareSession;
var completeSessionSetup = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return (_a = getModule()).completeSessionSetup.apply(_a, args);
    }
    catch (e) {
        throw "".concat(msg, ": ").concat(e);
    }
};
exports.completeSessionSetup = completeSessionSetup;
var invoke = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return (_a = getModule()).invoke.apply(_a, args);
    }
    catch (e) {
        throw "".concat(msg, ": ").concat(e);
    }
};
exports.invoke = invoke;
var generateHostSIWEMessage = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return (_a = getModule()).generateHostSIWEMessage.apply(_a, args);
    }
    catch (e) {
        throw "".concat(msg, ": ").concat(e);
    }
};
exports.generateHostSIWEMessage = generateHostSIWEMessage;
var siweToDelegationHeaders = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return (_a = getModule()).siweToDelegationHeaders.apply(_a, args);
    }
    catch (e) {
        throw "".concat(msg, ": ").concat(e);
    }
};
exports.siweToDelegationHeaders = siweToDelegationHeaders;
