import * as mod from "../../wasm";
declare type KeplerModule = typeof mod;
export declare const makeOrbitId: KeplerModule["makeOrbitId"];
export declare const prepareSession: KeplerModule["prepareSession"];
export declare const completeSessionSetup: KeplerModule["completeSessionSetup"];
export declare const invoke: KeplerModule["invoke"];
export declare const generateHostSIWEMessage: KeplerModule["generateHostSIWEMessage"];
export declare const siweToDelegationHeaders: KeplerModule["siweToDelegationHeaders"];
export {};
