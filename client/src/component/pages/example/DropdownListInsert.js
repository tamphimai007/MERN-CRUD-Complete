import React, { useState, useEffect } from 'react'
import ExampleNav from '../../layout/ExampleNav';
import {
    Col,
    Row,
    Input,
    Select,
    Divider
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// function
import { createDropdown, listDropdown } from './functions/dropdownlist'

const AdminLearning = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        listDropdown()
            .then(res => {
                setData(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    console.log(data)


    const onNameChange = event => {
        setName(event.target.value);
    };

    const addItem = () => {
        console.log('addItem', name);
        createDropdown({ name })
            .then(res => {
                console.log(res.data)
                loadData();
            }).catch(err => {
                console.log(err)
            })
    };
    return (
        <div className="container-fluid">
            <Row>
                <Col span={4}>
                    <ExampleNav />
                </Col>
                <Col>
                    <h1>ตัวอย่าง Dropdown List Insert ได้</h1>
                    {/* Code */}
                    <Select
                        showSearch
                        style={{ width: 240 }}
                        placeholder="custom dropdown render"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItem}
                                    >
                                        <PlusOutlined /> Add item
              </a>
                                </div>
                            </div>
                        )}
                    >
                        {data.map(item => (
                            <Select.Option key={item._id} value={item.name}>{item.name}</Select.Option>
                        ))}
                    </Select>

                    {/* Code */}
                </Col>
            </Row>
        </div>
    )
}

export default AdminLearning
