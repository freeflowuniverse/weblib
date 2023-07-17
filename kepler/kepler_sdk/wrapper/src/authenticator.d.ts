import { SessionConfig, Session } from ".";
import { WalletProvider } from "./walletProvider";
export declare function startSession(wallet: WalletProvider, config?: Partial<SessionConfig>): Promise<Session>;
export declare function activateSession(session: Session, url: string): Promise<Authenticator>;
export declare class Authenticator {
    private orbitId;
    private serializedSession;
    constructor(session: Session);
    invocationHeaders: (service: string, action: string, path: string) => Promise<HeadersInit>;
    getOrbitId: () => string;
}
