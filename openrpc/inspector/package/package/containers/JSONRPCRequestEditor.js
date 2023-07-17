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
var react_monaco_editor_1 = __importDefault(require("@etclabscore/react-monaco-editor"));
var monaco = __importStar(require("monaco-editor"));
var window_size_1 = __importDefault(require("@rehooks/window-size"));
var monaco_add_json_schema_diagnostics_1 = require("@etclabscore/monaco-add-json-schema-diagnostics");
var openrpcDocumentToJSONRPCSchema_1 = __importDefault(require("../helpers/openrpcDocumentToJSONRPCSchema"));
var useMonacoVimMode_1 = __importDefault(require("../hooks/useMonacoVimMode"));
var JSONRPCRequestEditor = function (props) {
    var _a = react_1.useState(), editor = _a[0], setEditor = _a[1];
    useMonacoVimMode_1.default(editor);
    var windowSize = window_size_1.default();
    react_1.useEffect(function () {
        if (editor) {
            editor.layout();
        }
    }, [windowSize, editor]);
    react_1.useEffect(function () {
        if (!editor) {
            return;
        }
        var modelName = (props.openrpcDocument && props.openrpcDocument.info) ? props.openrpcDocument.info.title : "inspector";
        var modelUriString = "inmemory://" + modelName + "-" + Math.random() + ".json";
        var modelUri = monaco.Uri.parse(modelUriString);
        var model = monaco.editor.createModel(props.value || "", "json", modelUri);
        editor.setModel(model);
        var schema = {
            type: "object",
            properties: {
                jsonrpc: {
                    type: "string",
                    const: "2.0",
                },
                id: {
                    oneOf: [
                        {
                            type: "string",
                        },
                        {
                            type: "number",
                        },
                    ],
                },
                method: {
                    type: "string",
                },
            },
        };
        if (props.openrpcDocument) {
            schema = openrpcDocumentToJSONRPCSchema_1.default(props.openrpcDocument);
        }
        else {
            schema = {
                additionalProperties: false,
                properties: __assign(__assign({}, schema.properties), { params: {
                        oneOf: [
                            { type: "array" },
                            { type: "object" },
                        ],
                    } }),
            };
        }
        monaco_add_json_schema_diagnostics_1.addDiagnostics(modelUri.toString(), schema, monaco);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.openrpcDocument, editor]);
    function handleEditorDidMount(_, ed) {
        setEditor(ed);
    }
    var handleChange = function (ev, value) {
        if (props.onChange) {
            props.onChange(value);
        }
    };
    return (react_1.default.createElement(react_monaco_editor_1.default, { height: "100%", width: "100%", value: props.value, editorDidMount: handleEditorDidMount, editorOptions: {
            minimap: {
                enabled: false,
            },
            automaticLayout: true,
            fixedOverflowWidgets: true,
        }, language: "json", onChange: handleChange }));
};
exports.default = JSONRPCRequestEditor;
