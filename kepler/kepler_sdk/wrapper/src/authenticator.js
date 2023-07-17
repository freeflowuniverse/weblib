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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = exports.activateSession = exports.startSession = void 0;
var module_1 = require("./module");
function startSession(wallet, config) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function () {
        var address, _h, chainId, _j, domain;
        var _this = this;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    if (!((_a = config === null || config === void 0 ? void 0 : config.address) !== null && _a !== void 0)) return [3 /*break*/, 1];
                    _h = _a;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, wallet.getAddress()];
                case 2:
                    _h = (_k.sent());
                    _k.label = 3;
                case 3:
                    address = _h;
                    if (!((_b = config === null || config === void 0 ? void 0 : config.chainId) !== null && _b !== void 0)) return [3 /*break*/, 4];
                    _j = _b;
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, wallet.getChainId()];
                case 5:
                    _j = (_k.sent());
                    _k.label = 6;
                case 6:
                    chainId = _j;
                    domain = (_c = config === null || config === void 0 ? void 0 : config.domain) !== null && _c !== void 0 ? _c : window.location.hostname;
                    return [2 /*return*/, Promise.resolve({
                            address: address,
                            chainId: chainId,
                            domain: domain,
                            issuedAt: (_d = config === null || config === void 0 ? void 0 : config.issuedAt) !== null && _d !== void 0 ? _d : new Date(Date.now()).toISOString(),
                            notBefore: config === null || config === void 0 ? void 0 : config.notBefore,
                            expirationTime: (_e = config === null || config === void 0 ? void 0 : config.expirationTime) !== null && _e !== void 0 ? _e : new Date(Date.now() + 1000 * 60 * 60).toISOString(),
                            actions: (_f = config === null || config === void 0 ? void 0 : config.actions) !== null && _f !== void 0 ? _f : {
                                kv: { "": ["put", "get", "list", "del", "metadata"] },
                                capabilities: { "": ["read"] },
                            },
                            orbitId: (_g = config === null || config === void 0 ? void 0 : config.orbitId) !== null && _g !== void 0 ? _g : (0, module_1.makeOrbitId)(address, chainId),
                            parents: config === null || config === void 0 ? void 0 : config.parents,
                            jwk: config === null || config === void 0 ? void 0 : config.jwk,
                        })
                            .then(JSON.stringify)
                            .then(module_1.prepareSession)
                            .then(JSON.parse)
                            .then(function (preparedSession) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            var _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = [__assign({}, preparedSession)];
                                        _b = {};
                                        return [4 /*yield*/, wallet.signMessage(preparedSession.siwe)];
                                    case 1: return [2 /*return*/, (__assign.apply(void 0, _a.concat([(_b.signature = _c.sent(), _b)])))];
                                }
                            });
                        }); })
                            .then(JSON.stringify)
                            .then(module_1.completeSessionSetup)
                            .then(JSON.parse)];
            }
        });
    });
}
exports.startSession = startSession;
function activateSession(session, url) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url + "/delegate", {
                        method: "POST",
                        headers: session.delegationHeader,
                    })];
                case 1:
                    res = _a.sent();
                    if (res.status === 200) {
                        return [2 /*return*/, new Authenticator(session)];
                    }
                    else {
                        throw {
                            status: res.status,
                            msg: "Failed to delegate to session key",
                        };
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.activateSession = activateSession;
var Authenticator = /** @class */ (function () {
    function Authenticator(session) {
        var _this = this;
        this.invocationHeaders = function (service, action, path) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, (0, module_1.invoke)(this.serializedSession, service, path, action).then(JSON.parse)];
        }); }); };
        this.getOrbitId = function () { return _this.orbitId; };
        this.orbitId = session.orbitId;
        this.serializedSession = JSON.stringify(session);
    }
    return Authenticator;
}());
exports.Authenticator = Authenticator;
