import React, { useState } from 'react'
import AdminNav from '../../layout/AdminNav';
import { Col, Row, Table, Checkbox } from 'antd';

const AdminLearning = () => {
    //user
    const [user, setUser] = useState(
        [
            { id: '1', name: 'tam', fruits: ['banana'] },
            { id: '2', name: 'noon', fruits: ['apple', 'banana', 'coconut'] },
            { id: '3', name: 'roitai', fruits: ['apple','coconut'] },
        ]
    )

    // checkbox
    const data = ['apple', 'banana', 'coconut'];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'ผลไม้',
            render: (record) => (
                <>
                    {data.map(item =>
                        <Checkbox defaultChecked={
                            record.fruits.includes(item)
                        }>
                            {item}</Checkbox>
                    )}
                </>
            )
        }
    ]
    return (
        <div className="container-fluid">
            <Row>
                <Col span={2}>
                    <AdminNav />
                </Col>
                <Col>
                    <h1>การตั้งค่า Default Checkbox</h1>
                    {/* Code */}
                    <Table columns={columns} dataSource={user} />
                    {/* Code */}
                </Col>
            </Row>
        </div>
    )
}

export default AdminLearning
