import * as React from 'react'
import { Table, Button, Spin } from 'antd'
import './index.less'

interface ExtProps {
  title: string
  onChange: (rows: any[]) => void
  onFetch: (page: number, size: number) => {}
  multiSelect: boolean
  rowAction: JSX.Element[]
  rowActionTitle: string
  batchAction: JSX.Element[]
}

export default class DataTable extends React.Component<any, any> {
  state = {
    selectedRowKeys: [],
    selectedRows: [],
    loading: this.props.loading || false,
    data: [],
    page: {
      current: 1,
      pageSize: 10,
      total: 0
    }
  }

  componentDidMount() {
    this.refresh()
  }

  refresh = async () => {
    const { page } = this.state
    await this.fetch(page.current, page.pageSize)
  }

  fetch = async (page, size) => {
    const { onFetch, dataSource } = this.props
    // 远程加载
    if (onFetch) {
      const source = await onFetch(page, size)
      if (source && source.data && source.total) {
        this.setState({
          data: source.data,
          page: {
            current: page,
            pageSize: size,
            total: source.total
          }
        })
      }
    } else if (dataSource) {
      // 静态数据
      this.setState({
        data: dataSource,
        page: {
          current: page,
          pageSize: size,
          total: dataSource.length
        }
      })
    }

  }

  render() {
    const { selectedRowKeys, selectedRows, loading, data, page } = this.state
    const {
      title,
      onFetch,
      onChange,
      multiSelect,
      rowAction,
      rowActionTitle,
      batchAction = [],
      ...props
    } = this.props

    // 翻页
    const pagination = {
      ...page,
      onChange: async (page, size) => {
        await this.fetch(page, size)
      },
      showSizeChanger: false,
      onShowSizeChange: (page, size) => {
        this.setState({
          page: {
            ...this.state.page,
            current: page,
            pageSize: size
          }
        })
      }
    }

    // 多选
    const rowSelection = {
      selectedRowKeys,
      hideDefaultSelections: true,
      onChange: (rowKeys, rows) => {
        this.setState({
          selectedRowKeys: rowKeys,
          selectedRows: rows
        })
        onChange && onChange(rows)
      }
    }
    // 操作区
    const columns = rowAction ? props.columns && props.columns.concat({
      title: rowActionTitle || '操作',
      width: '15%',
      render: (_, row) => {
        return (
          <ul className='row-action'>
            {rowAction.map((action, i) => (
              <li key={`act-${i}`}>
                <a
                  key={i}
                  href='javascript:;'
                  onClick={() => action.props.onClick(row)}
                >
                  {action.props.children}
                </a>
              </li>
            ))}
          </ul>
        )
      }
    }) : props.columns

    return (
      <div className='component-table'>
        <div className='table-header'>
          <h2 className='title'>{title}</h2>
          <div className='batch-action'>
            {batchAction.map((action, i) => (
              <Button
                key={i}
                onClick={() => action.props.onClick(selectedRows)}
                type={action.props.type || 'primary'}
                disabled={loading}
              >
                {action.props.children}
              </Button>
            ))}
          </div>
        </div>
        <Spin spinning={loading}>
          <Table
            size='middle'
            rowKey={(row: any) => row._id || row.id}
            {...props}
            columns={columns}
            dataSource={data}
            pagination={pagination}
            rowSelection={multiSelect && rowSelection || undefined}
          />
        </Spin>
      </div>
    )
  }
}

export const Action = ({ children, ...props }) => {
  return React.cloneElement(children, props)
}

