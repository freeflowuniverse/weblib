"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kepler = exports.hostOrbit = exports.activateSession = exports.OrbitConnection = void 0;
var kepler_sdk_wrapper_1 = require("@spruceid/kepler-sdk-wrapper");
Object.defineProperty(exports, "OrbitConnection", { enumerable: true, get: function () { return kepler_sdk_wrapper_1.OrbitConnection; } });
Object.defineProperty(exports, "activateSession", { enumerable: true, get: function () { return kepler_sdk_wrapper_1.activateSession; } });
Object.defineProperty(exports, "hostOrbit", { enumerable: true, get: function () { return kepler_sdk_wrapper_1.hostOrbit; } });
var kepler_sdk_wrapper_2 = require("@spruceid/kepler-sdk-wrapper");
var kepler_sdk_wasm_1 = __importDefault(require("@spruceid/kepler-sdk-wasm"));
var Kepler = /** @class */ (function (_super) {
    __extends(Kepler, _super);
    /**
     * Initialise a Kepler instance.
     *
     * @param wallet The controller of the orbit that you wish to access.
     * @param config Optional configuration for Kepler.
     */
    function Kepler(wallet, config) {
        return _super.call(this, wallet, config) || this;
    }
    /** Make a connection to an orbit.
     *
     * This method handles the creation and connection to an orbit in Kepler. This method should
     * usually be used without providing any ConnectionOptions:
     * ```ts
     * let orbitConnection = await kepler.orbit();
     * ```
     * In this case the orbit ID will be derived from the wallet's address. The wallet will be
     * asked to sign a message delegating access to a session key for 1 hour. If the orbit does not
     * already exist in the Kepler instance, then the wallet will be asked to sign another message
     * to permit the Kepler instance to host the orbit.
     *
     * @param config Optional parameters to configure the orbit connection.
     * @returns Returns undefined if the Kepler instance was unable to host the orbit.
     */
    Kepler.prototype.orbit = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = global;
                        return [4 /*yield*/, kepler_sdk_wasm_1.default];
                    case 1:
                        _a.keplerModule = _b.sent();
                        return [2 /*return*/, _super.prototype.orbit.call(this, config)];
                }
            });
        });
    };
    return Kepler;
}(kepler_sdk_wrapper_2.Kepler));
exports.Kepler = Kepler;
