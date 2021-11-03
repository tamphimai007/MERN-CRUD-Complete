import React from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Row,
    Col,
    Card
} from 'antd';
const InsertColumn1 = () => {
    return (
        <>
            <Form.Item
                label="หัวข้อข่าว"
                name="title"
                rules={[{ required: true, message: 'กรุณาป้อนข้อมูลหัวข้อข่าว!' }]}

            >
                <Input />
            </Form.Item>

            <Form.Item label="วันที่เริ่ม/สิ้นสุด" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="startDate"
                    rules={[{ required: true, message: 'กรุณาป้อนข้อมูวันที่เริ่ม!' }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name="endDate"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <DatePicker />
                </Form.Item>
            </Form.Item>

            <Form.Item
                label="รายละเอียด"
                name="detail"
                rules={[{ required: true, message: 'กรุณาป้อนข้อมูล รายละเอียด!' }]}
            >
                <Input.TextArea />
            </Form.Item>
            <hr />
            <Form.Item
                label="พิกัด MGRS ข่าว"
                name="mgrs"
                rules={[{ required: true, message: 'กรุณาป้อนข้อมูล MGRS!' }]}
            >
                <Input style={{ width: 160 }} />
            </Form.Item>

            <Form.Item label="DD" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="ddLat"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="ddLon"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Input />
                </Form.Item>
            </Form.Item>

            <Form.Item label="DMS" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="dmsLat"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="dmsLon"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Input />
                </Form.Item>
            </Form.Item>
            <hr />
            <Form.Item label="ประเทศ/จังหวัด" style={{ marginBottom: 0 }}>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="ประเทศ">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="จังหวัด">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
            </Form.Item>

            <Form.Item label="อำเภอ/ตำบล" style={{ marginBottom: 0 }}>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="อำเภอ">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="ตำบล">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
            </Form.Item>

            <Form.Item label="พิกัดสถานที่" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="locationLat"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="locationLon"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Input />
                </Form.Item>
            </Form.Item>
        </>
    )
}

export default InsertColumn1
