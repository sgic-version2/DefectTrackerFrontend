import React from 'react'
import { Divider } from '@material-ui/core'
import Countdown from 'antd/lib/statistic/Countdown'
import { Row, Col } from 'antd';

const projectRemainingTime = () => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
    return (
        <div>
            <h4 style={{ fontWeight: 800 }}>Project Performance</h4>
            <Divider />
            <Row gutter={16}>
                <Col span={12}>
                    <Countdown title="Library System" value={deadline} />
                </Col>
                <Col span={12}>
                    <Countdown title="Defect System" value={deadline} format="DD:HH:mm:ss" />
                </Col>
                <Col span={12}>
                    <Countdown title="Countdown" value={deadline} />
                </Col>
                <Col span={12}>
                    <Countdown title="HRM System" value={deadline} format="DD:HH:mm:ss" />
                </Col>
                <Col span={12}>
                    <Countdown title="Leave Management System" value={deadline} />
                </Col>
                <Col span={12}>
                    <Countdown title="School Management System" value={deadline} format="HH:mm:ss" />
                </Col>
            </Row>
        </div>
    )
}

export default projectRemainingTime
