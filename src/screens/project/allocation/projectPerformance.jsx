import React from 'react'
import { Progress } from 'antd'
import { Divider } from '@material-ui/core'

const projectPerformance = () => {
    return (
        <div>
            <h4 style={{ fontWeight: 800 }}>Project Performance</h4>
            <Divider />
            <h5>Library System</h5>
            <Progress percent={30} status="active" />
            <h5>Defect System</h5>
            <Progress percent={50} status="active" />
            <h5>HRM System</h5>
            <Progress percent={70} status="active" />
            <h5>Leave Management System</h5>
            <Progress percent={100} />
            <h5>School Management System</h5>
            <Progress percent={50} status="active" />
        </div>
    )
}

export default projectPerformance
