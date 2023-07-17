"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var openrpcTheme_1 = require("../themes/openrpcTheme");
var use_dark_mode_1 = __importDefault(require("use-dark-mode"));
var Inspector_1 = __importDefault(require("./Inspector"));
var useQueryParams_1 = __importDefault(require("../hooks/useQueryParams"));
var monaco = __importStar(require("monaco-editor"));
var useOpenrpcDocument_1 = __importDefault(require("../hooks/useOpenrpcDocument"));
var App = function () {
    var darkMode = use_dark_mode_1.default();
    var query = useQueryParams_1.default()[0];
    var theme = darkMode.value ? openrpcTheme_1.darkTheme : openrpcTheme_1.lightTheme;
    var openrpcDocument = useOpenrpcDocument_1.default(query.openrpcDocument, query.schemaUrl);
    react_1.useEffect(function () {
        var t = darkMode.value ? "vs-dark" : "vs";
        monaco.editor.setTheme(t);
    }, [darkMode.value]);
    return (react_1.default.createElement(core_2.MuiThemeProvider, { theme: theme },
        react_1.default.createElement(core_1.CssBaseline, null),
        react_1.default.createElement(Inspector_1.default, { onToggleDarkMode: darkMode.toggle, darkMode: darkMode.value, customTransport: query.customTransport, transport: query.transport, url: query.url, openrpcDocument: openrpcDocument, request: query.request })));
};
exports.default = App;
