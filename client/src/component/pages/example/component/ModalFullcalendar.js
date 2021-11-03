import React, { useState } from 'react'
import { Modal, Button } from 'antd';

const ModalFullcalendar = ({ open,setOpen }) => {
    const [isModalVisible, setIsModalVisible] = useState(open);
    console.log(open)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setOpen(!open);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
      </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default ModalFullcalendar
