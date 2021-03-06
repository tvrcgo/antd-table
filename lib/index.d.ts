import * as React from 'react';
import 'antd/dist/antd.less';
import './index.less';
import { TableProps } from 'antd/es/table';
interface DataTableProps {
    onChange?: (rows: any[]) => void;
    onFetch?: (page: number, size: number) => Promise<FetchResponse>;
    multiSelect?: boolean;
    rowAction?: JSX.Element[];
    rowActionTitle?: string;
    batchAction?: JSX.Element[];
}
interface FetchResponse {
    data: any[];
    total: number;
}
export default class DataTable extends React.Component<DataTableProps & TableProps<any>, any> {
    state: {
        selectedRowKeys: never[];
        selectedRows: never[];
        loading: boolean;
        data: never[];
        page: {
            current: number;
            pageSize: number;
            total: number;
        };
    };
    componentDidMount(): void;
    refresh: () => Promise<void>;
    fetch: (page: any, size: any) => Promise<void>;
    render(): JSX.Element;
}
export declare const Action: ({ children, ...props }: {
    [x: string]: any;
    children: any;
}) => React.DetailedReactHTMLElement<{
    [x: string]: any;
}, HTMLElement>;
export {};
