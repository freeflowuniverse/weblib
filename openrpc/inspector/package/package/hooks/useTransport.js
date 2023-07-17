"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = require("react");
var client_js_1 = require("@open-rpc/client-js");
var Transport_1 = require("@open-rpc/client-js/build/transports/Transport");
var getTransportFromType = function (uri, transports, transport, transportOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var localTransport, localTransportType, intermediateTransport_1, InterTransport;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                localTransportType = transports.find(function (value) {
                    return value.type === transport.type && value.name === transport.name;
                });
                if (!(((_a = localTransportType) === null || _a === void 0 ? void 0 : _a.type) === "websocket")) return [3 /*break*/, 1];
                localTransport = new client_js_1.WebSocketTransport(uri);
                return [3 /*break*/, 6];
            case 1:
                if (!(((_b = localTransportType) === null || _b === void 0 ? void 0 : _b.type) === "http")) return [3 /*break*/, 2];
                localTransport = new client_js_1.HTTPTransport(uri, transportOptions);
                return [3 /*break*/, 6];
            case 2:
                if (!(((_c = localTransportType) === null || _c === void 0 ? void 0 : _c.type) === "postmessageiframe")) return [3 /*break*/, 3];
                localTransport = new client_js_1.PostMessageIframeTransport(uri);
                return [3 /*break*/, 6];
            case 3:
                if (!(((_d = localTransportType) === null || _d === void 0 ? void 0 : _d.type) === "postmessagewindow")) return [3 /*break*/, 4];
                localTransport = new client_js_1.PostMessageWindowTransport(uri);
                return [3 /*break*/, 6];
            case 4:
                if (!(((_e = localTransportType) === null || _e === void 0 ? void 0 : _e.type) === "plugin")) return [3 /*break*/, 6];
                return [4 /*yield*/, getTransportFromType(localTransportType.uri, transports, localTransportType.transport)];
            case 5:
                intermediateTransport_1 = _f.sent();
                InterTransport = /** @class */ (function (_super) {
                    __extends(InterTransport, _super);
                    function InterTransport() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    InterTransport.prototype.connect = function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var results;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, intermediateTransport_1.connect()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, intermediateTransport_1.sendData({
                                                internalID: 0,
                                                request: {
                                                    jsonrpc: "2.0",
                                                    method: "connect",
                                                    params: [uri],
                                                    id: 0,
                                                },
                                            })];
                                    case 2:
                                        results = _a.sent();
                                        intermediateTransport_1.subscribe("notification", function (data) {
                                            _this.transportRequestManager.transportEventChannel.emit("notification", data);
                                        });
                                        intermediateTransport_1.subscribe("error", function (data) {
                                            _this.transportRequestManager.transportEventChannel.emit("error", data);
                                        });
                                        return [2 /*return*/, results];
                                }
                            });
                        });
                    };
                    InterTransport.prototype.sendData = function (data) {
                        return intermediateTransport_1.sendData({
                            internalID: 0,
                            request: {
                                jsonrpc: "2.0",
                                method: "sendData",
                                params: [data.request],
                                id: 0,
                            },
                        });
                    };
                    InterTransport.prototype.close = function () {
                        intermediateTransport_1.unsubscribe();
                        intermediateTransport_1.sendData({
                            internalID: 0,
                            request: {
                                jsonrpc: "2.0",
                                method: "close",
                                params: [],
                                id: 0,
                            },
                        });
                        intermediateTransport_1.close();
                    };
                    return InterTransport;
                }(Transport_1.Transport));
                localTransport = new InterTransport();
                _f.label = 6;
            case 6: return [2 /*return*/, localTransport];
        }
    });
}); };
var useTransport = function (transports, url, defaultTransportType, transportOptions) {
    var _a = react_1.useState(), transport = _a[0], setTransport = _a[1];
    var _b = react_1.useState(false), transportConnected = _b[0], setTransportConnected = _b[1];
    var _c = react_1.useState(defaultTransportType), transportType = _c[0], setTransportType = _c[1];
    var _d = react_1.useState(), error = _d[0], setError = _d[1];
    react_1.useEffect(function () {
        if (!transportType) {
            return;
        }
        var doSetTransport = function () { return __awaiter(void 0, void 0, void 0, function () {
            var localTransport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (transport) {
                            transport.unsubscribe();
                            transport.close();
                        }
                        return [4 /*yield*/, getTransportFromType(url, transports, transportType, transportOptions)];
                    case 1:
                        localTransport = _a.sent();
                        return [2 /*return*/, localTransport.connect().then(function () {
                                setTransportConnected(true);
                                setTransport(localTransport);
                            }).catch(function (e) {
                                localTransport.unsubscribe();
                                localTransport.close();
                                throw e;
                            })];
                }
            });
        }); };
        doSetTransport()
            .catch(function (e) {
            setTransportConnected(false);
            setTransport(undefined);
            setError(e);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transportType, url, transports, transportOptions]);
    var setSelectedTransportType = function (t) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setTransportConnected(false);
            setTransportType(t);
            return [2 /*return*/];
        });
    }); };
    return [transport, setSelectedTransportType, error, transportConnected];
};
exports.default = useTransport;
