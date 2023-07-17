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
var monaco = __importStar(require("monaco-editor"));
var initVimMode = require("monaco-vim").initVimMode; //tslint:disable-line
// Vim Mode:
// Press Chord Ctrl-K, Ctrl-V => the action will run if it is enabled
var useMonacoVimMode = function (editor) {
    var _a = react_1.useState(), vimMode = _a[0], setVimMode = _a[1];
    react_1.useEffect(function () {
        if (!editor) {
            return;
        }
        editor.addAction({
            id: "vim-mode",
            label: "Vim Mode",
            keybindings: [
                monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_V),
            ],
            contextMenuGroupId: "navigation",
            contextMenuOrder: 1.5,
            run: function () {
                if (vimMode) {
                    vimMode.dispose();
                }
                setVimMode(initVimMode(editor));
            },
        });
        return function () {
            if (vimMode) {
                vimMode.dispose();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor]);
    return [editor, vimMode];
};
exports.default = useMonacoVimMode;
