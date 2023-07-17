import { Dispatch } from "react";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
import { JSONRPCLog } from "@open-rpc/logs-react";
interface ITab {
    name: string;
    content?: any;
    logs: JSONRPCLog[];
    editing?: boolean;
    url?: string;
    openrpcDocument?: OpenrpcDocument;
}
declare const useTabs: (defaultTabs?: ITab[] | undefined) => {
    setTabContent: (ti: number, content: any) => void;
    setTabEditing: (tab: ITab, editing: boolean) => void;
    setTabIndex: Dispatch<import("react").SetStateAction<number>>;
    setTabName: (tab: ITab, name: string) => void;
    tabs: ITab[];
    setTabs: Dispatch<any>;
    handleClose: (event: import("react").MouseEvent<{}, MouseEvent>, index: number) => void;
    tabIndex: number;
    handleLabelChange: (ev: any, tab: ITab) => void;
    setTabUrl: (ti: number, url: string) => void;
    setTabLogs: (ti: number, logs: import("@open-rpc/logs-react/package/components/logsReact/logsReact").IJSONRPCLog[]) => void;
    setTabOpenRPCDocument: (ti: number, openrpcDocument: OpenrpcDocument | undefined) => void;
};
export default useTabs;
