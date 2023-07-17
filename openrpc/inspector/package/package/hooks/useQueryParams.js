"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var qs = __importStar(require("qs"));
var useQueryParams = function (depth) {
    var parse = function () {
        return qs.parse(window.location.search, {
            ignoreQueryPrefix: true,
            depth: depth || 100,
            decoder: function (str) {
                if (/^([+-]?[0-9]\d*|0)$/.test(str)) {
                    return parseInt(str, 10);
                }
                if (str === "false") {
                    return false;
                }
                if (str === "true") {
                    return true;
                }
                return decodeURIComponent(str);
            },
        });
    };
    var query = react_1.useState(parse())[0];
    return [query];
};
exports.default = useQueryParams;
