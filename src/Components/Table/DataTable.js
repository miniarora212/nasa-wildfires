import React from 'react'
import * as PropTypes from 'prop-types';
import Loader from '../Loader/Loader'
import { Table } from 'antd';
import './DataTable.css'
const DataTable = (props) => {
    const {tableData, isLoading} = props;
    const pageSizes = [5, 10, 20, 50] // Page size for the Pagination
    const defaultPageSize = 5;

    return (
        <>
            {
                isLoading ? <Loader />
                    :
                    <div className="TableContainer mt-5">
                        <h2 className="table-heading">
                            Wildfires Data
                        </h2>
                        <Table
                            dataSource={tableData}
                            pagination={tableData.length <= 5 ? false : { defaultPageSize: defaultPageSize, showSizeChanger: true, pageSizeOptions:pageSizes }}
                            columns={[{
                                title: "ID", dataIndex: "id", key: "id"
                            },
                            {
                                title: "Start Date", dataIndex: "startdate", key: "startdate"
                            }, {
                                title: "Closed Date", dataIndex: "closeddate", key: "closeddate"
                            }, {
                                title: "Title", dataIndex: "title", key: "title"
                            }, {
                                // eslint-disable-next-line
                                title: "Source Info", dataIndex: "inciweb", key: "inciweb", render: text => <a target='_blank' href={text}>View</a>,
                            },]}
                            rowKey='id'
                        />;
                    </div>
            }
        </>
    )
}

DataTable.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    tableData: PropTypes.array.isRequired,
  }

export default DataTable
