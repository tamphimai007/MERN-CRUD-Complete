import React from 'react'
import ExampleNav from '../../layout/ExampleNav';
import { Col, Row } from 'antd';

const ExampleDashboard = () => {
    return (
        <div className="container-fluid">
            <Row>
                <Col span={4}>
                    <ExampleNav />
                </Col>
                <Col>
                    <h1>Example Dashboard</h1>
                    {/* Code */}

                    {/* Code */}
                </Col>
            </Row>
        </div>
    )
}

export default ExampleDashboard
