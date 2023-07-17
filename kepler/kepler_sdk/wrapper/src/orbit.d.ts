import { Authenticator } from "./authenticator";
import { WalletProvider } from "./walletProvider";
import { CapSummary } from "./capabilities";
/**
 * a connection to an orbit in a Kepler instance.
 *
 * This class provides methods for interacting with an orbit. Construct an instance of this class using {@link Kepler.orbit}.
 */
export declare class OrbitConnection {
    private orbitId;
    private kv;
    private caps;
    /** @ignore */
    constructor(keplerUrl: string, authn: Authenticator);
    /** Get the id of the connected orbit.
     *
     * @returns The id of the connected orbit.
     */
    id(): string;
    /** Store an object in the connected orbit.
     *
     * Supports storing values that are of type string,
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object | Object},
     * and values that are a {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | Blob} or Blob-like
     * (e.g. {@link https://developer.mozilla.org/en-US/docs/Web/API/File | File}).
     * ```ts
     * await orbitConnection.put('a', 'value');
     * await orbitConnection.put('b', {x: 10});
     *
     * let blob: Blob = new Blob(['value'], {type: 'text/plain'});
     * await orbitConnection.put('c', blob);
     *
     * let file: File = fileList[0];
     * await orbitConnection.put('d', file);
     * ```
     *
     * @param key The key with which the object is indexed.
     * @param value The value to be stored.
     * @param req Optional request parameters. Request Headers can be passed via the `headers` property.
     * @returns A {@link Response} without the `data` property.
     */
    put(key: string, value: any, req?: Request): Promise<Response>;
    /** Retrieve an object from the connected orbit.
     *
     * String and Object values, along with
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | Blobs}
     * of type `text/plain` or `application/json` are converted into their respective
     * types on retrieval:
     * ```ts
     * await orbitConnection.put('string', 'value');
     * await orbitConnection.put('json', {x: 10});
     *
     * let blob = new Blob(['value'], {type: 'text/plain'});
     * await orbitConnection.put('stringBlob', blob);
     *
     * let blob = new Blob([{x: 10}], {type: 'application/json'});
     * await orbitConnection.put('jsonBlob', blob);
     *
     * let stringData: string = await orbitConnection.get('string').then(({ data }) => data);
     * let jsonData: {x: number} = await orbitConnection.get('json').then(({ data }) => data);
     * let stringBlobData: string = await orbitConnection.get('stringBlob').then(({ data }) => data);
     * let jsonBlobData: {x: number} = await orbitConnection.get('jsonBlob').then(({ data }) => data);
     * ```
     *
     * If the object has any other MIME type then a Blob will be returned:
     * ```ts
     * let blob = new Blob([new ArrayBuffer(8)], {type: 'image/gif'});
     * await orbitConnection.put('gif', blob);
     * let gifData: Blob = await orbitConnection.get('gif').then(({ data }) => data);
     * ```
     *
     * Alternatively you can retrieve any object as a
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | ReadableStream},
     * by supplying request parameters:
     * ```ts
     * let data = await orbitConnection.get('key', {streamBody: true}).then(
     *   ({ data }: { data?: ReadableStream }) => {
     *     // consume the stream
     *   }
     * );
     * ```
     *
     * @param key The key with which the object is indexed.
     * @param req Optional request parameters.
     * @returns A {@link Response} with the `data` property (see possible types in the documentation above).
     */
    get(key: string, req?: Request): Promise<Response>;
    /** Delete an object from the connected orbit.
     *
     * @param key The key with which the object is indexed.
     * @param req Optional request parameters (unused).
     * @returns A {@link Response} without the `data` property.
     */
    delete(key: string, req?: Request): Promise<Response>;
    /** List objects in the connected orbit.
     *
     * The list of keys is retrieved as a list of strings:
     * ```ts
     * let keys: string[] = await orbitConnection.list().then(({ data }) => data);
     * ```
     * Optionally, you can retrieve the list of objects as a
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | ReadableStream},
     * by supplying request parameters:
     * ```ts
     * let data = await orbitConnection.list("", {streamBody: true}).then(
     *   ({ data }: { data?: ReadableStream }) => {
     *     // consume the stream
     *   }
     * );
     * ```
     *
     * @param prefix The prefix that the returned keys should have.
     * @param req Optional request parameters.
     * @returns A {@link Response} with the `data` property as a string[].
     */
    list(prefix?: string, req?: Request): Promise<Response>;
    /** Retrieve metadata about an object from the connected orbit.
     *
     * @param key The key with which the object is indexed.
     * @param req Optional request parameters (unused).
     * @returns A {@link Response} without the `data` property.
     */
    head(key: string, req?: Request): Promise<Response>;
    sessions(): Promise<{
        [cid: string]: CapSummary;
    }>;
    deleteAll(prefix?: string): Promise<Response[]>;
}
/** Optional request parameters.
 *
 * Not all options are applicable on every {@link OrbitConnection} method. See the documentation
 * of each method to discover what options are supported.
 */
export declare type Request = {
    /** Request to receive the data as a {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream | ReadableStream}. */
    streamBody?: boolean;
    /** Add additional entries to the request HTTP Headers. */
    headers?: {
        [key: string]: string;
    };
};
/** Response from kepler requests.
 *
 * The methods on {@link OrbitConnection} return a Response that may have `data` property. See the
 * documentation of each method to discover whether a method will return data and what type you
 * can expect.
 */
export declare type Response = {
    /** Whether the request was successful or not. */
    ok: boolean;
    /** The HTTP status code of the response from Kepler. */
    status: number;
    /** The textual representation of the HTTP status of the response from Kepler. */
    statusText: string;
    /** Metadata about the object and the request. */
    headers: Headers;
    /** The body of the response from Kepler. */
    data?: any;
};
export declare const hostOrbit: (wallet: WalletProvider, keplerUrl: string, orbitId: string, domain?: string) => Promise<Response>;