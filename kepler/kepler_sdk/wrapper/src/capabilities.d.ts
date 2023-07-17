import { Authenticator } from "./authenticator";
export declare class Capabilities {
    private url;
    private auth;
    constructor(url: string, auth: Authenticator);
    get(query: string): Promise<{
        [cid: string]: CapSummary;
    }>;
    invoke: (params: {
        headers: HeadersInit;
        body?: Blob;
    }) => Promise<Response>;
}
export declare type Capability = {
    action: string;
    resource: string;
};
export declare type CapSummary = {
    capabilities: Capability[];
    delegator: string;
    delegate: string;
    parents: string[];
    raw: string;
};
