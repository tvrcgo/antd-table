import * as React from 'react';
import './index.less';
export default class DataTable extends React.Component<any, any> {
    state: {
        selectedRowKeys: never[];
        selectedRows: never[];
        loading: any;
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
