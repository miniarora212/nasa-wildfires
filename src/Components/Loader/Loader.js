import React from 'react'
import { Spin, Space } from 'antd';
import './Loader.css'

const Loader = () => {
// Loader will show when data is fetching from the API
    return (
        <div className="loaderContainer">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}

export default Loader
