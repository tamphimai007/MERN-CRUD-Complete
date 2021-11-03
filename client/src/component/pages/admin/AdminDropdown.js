import React, { useState, useEffect } from 'react'
import AdminNav from '../../layout/AdminNav';
import { Col, Row } from 'antd';

import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

//function 
import { createDropdown, listDropdown } from '../../functions/dropdownlis';


const { Option } = Select;

const AdminDropdown = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        listDropdown()
            .then(res => {
                setItems(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    console.log(items)

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const addItem = () => {
        createDropdown({ name })
            .then(res => {
                loadData()
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container-fluid">
            <Row>
                <Col span={4}>
                    <AdminNav />
                </Col>
                <Col>
                    <h1>เรามาสร้าง Dropdown List ให้ค้นหา/เพิ่มข้อมูล ได้กันครับ</h1>
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
                                    <Input style={{ flex: 'auto' }} value={name} onChange={(e) => onNameChange(e)} />
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
                        {items.map(item => (
                            <Option key={item._id} value={item.name}>{item.name}</Option>
                        ))}
                    </Select>

                    {/* Code */}
                </Col>
            </Row>
        </div>
    )
}

export default AdminDropdown
