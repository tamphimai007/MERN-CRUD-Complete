import React from 'react'
import ExampleNav from '../../layout/ExampleNav';
import { Col, Row } from 'antd';
import InsertColumn1 from './component/form/InsertColumn1';
import InsertColumn2 from './component/form/InsertColumn2';

const ExIntell = () => {
    return (
        <div className="container-fluid">
            <Row>
                <Col span={4}>
                    <ExampleNav />
                </Col>
                <Col span={10}>
                    <h1>สถานการณ์ข่าว</h1>
                    {/* Code */}
                    <InsertColumn1 />
                    {/* Code */}
                </Col>
                <Col span={10}>
                    <InsertColumn2 />
                </Col>
            </Row>
        </div>
    )
}

export default ExIntell
