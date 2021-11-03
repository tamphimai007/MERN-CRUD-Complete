import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    Select,
    Divider
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// functions
import {
    createCommander, listCommander,
    createCommanderPosition, listCommanderPosition,
    createOrg, listOrg,
    createPlatform, listPlatform,
    createArmType, listArmType,
    createArmRole1, listArmRole1,
    createArmRole2, listArmRole2,
    createSource, listSource
} from '../../functions/intell'


const InsertColumn2 = () => {
    const [items, setItems] = useState(['jack', 'lucy'])

    const [commander, setCommander] = useState([])
    const [commanderPosition, setCommanderPosition] = useState([])
    const [org, setOrg] = useState([])
    const [platform, setPlatform] = useState([])
    const [armType, setArmtype] = useState([])
    const [armRole1, setArmrole1] = useState([])
    const [armRole2, setArmrole2] = useState([])
    const [source, setSource] = useState([])

    const [dataCommander, setDataCommander] = useState([])
    const [dataCommanderPosition, setDataCommanderPosition] = useState([])
    const [dataOrg, setDataOrg] = useState([])
    const [dataPlatform, setDataPlatform] = useState([])
    const [dataArmType, setDataArmtype] = useState([])
    const [dataArmRole1, setDataArmrole1] = useState([])
    const [dataArmRole2, setDataArmrole2] = useState([])
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        loadData()
    }, [])
    const loadData = () => {
        listCommander()
            .then(res => {
                setDataCommander(res.data)
            }).catch(err => {
                console.log(err)
            })
        listCommanderPosition()
            .then(res => {
                setDataCommanderPosition(res.data)
            }).catch(err => {
                console.log(err)
            })
        listOrg()
            .then(res => {
                setDataOrg(res.data)
            }).catch(err => {
                console.log(err)
            })
        listPlatform()
            .then(res => {
                setDataPlatform(res.data)
            }).catch(err => {
                console.log(err)
            })
        listArmType()
            .then(res => {
                setDataArmtype(res.data)
            }).catch(err => {
                console.log(err)
            })
        listArmRole1()
            .then(res => {
                setDataArmrole1(res.data)
            }).catch(err => {
                console.log(err)
            })
        listArmRole2()
            .then(res => {
                setDataArmrole2(res.data)
            }).catch(err => {
                console.log(err)
            })
        listSource()
            .then(res => {
                setDataSource(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    // Commander ผู้บังคับบัญชา

    const onNameCommanderChange = event => {
        setCommander(event.target.value);
    };
    const onChangeCommanderPosition = event => {
        setCommanderPosition(event.target.value);
    };
    const onChangeOrg = event => {
        setOrg(event.target.value);
    };
    const onChangePlatform = event => {
        setPlatform(event.target.value);
    };
    const onChangeArmType = event => {
        setArmtype(event.target.value);
    };
    const onChangeArmRole1 = event => {
        setArmrole1(event.target.value);
    };
    const onChangeArmRole2 = event => {
        setArmrole2(event.target.value);
    };
    const onChangeSource = event => {
        setSource(event.target.value);
    };

    const addItemCommander = () => {
        // console.log('addItem', name);
        createCommander({ commander })
            .then(res => {
                console.log(res)
                loadData()
                setCommander('')
            }).catch(err => {
                console.log(err)
            })
    };
    const addItemCommanderPosition = () => {
        createCommanderPosition({ commanderPosition })
            .then(res => {
                console.log(res)
                loadData()
                setCommanderPosition('')
            }).catch(err => {
                console.log(err)
            })
    };
    const addItemOrg = () => {
        createOrg({ org })
            .then(res => {
                console.log(res)
                loadData()
                setOrg('')
            }).catch(err => {
                console.log(err)
            })
    };
    const addItemPlatform = () => {
        createPlatform({ platform })
            .then(res => {
                console.log(res)
                loadData()
                setPlatform('')
            }).catch(err => {
                console.log(err)
            })
    };
    const addItemArmType = () => {
        createArmType({ armType })
            .then(res => {
                console.log(res)
                loadData()
                setArmtype('')
            }).catch(err => {
                console.log(err)
            })
    };
    const addItemArmRole1 = () => {
        createArmRole1({ armRole1 })
            .then(res => {
                console.log(res)
                loadData()
                setArmrole1('')
            }).catch(err => {
                console.log(err)
            })
    };
    const addItemArmRole2 = () => {
        createArmRole2({ armRole2 })
            .then(res => {
                console.log(res)
                loadData()
                setArmrole2('')
            }).catch(err => {
                console.log(err)
            })
    };
    const addItemSource = () => {
        createSource({ source })
            .then(res => {
                console.log(res)
                loadData()
                setSource('')
            }).catch(err => {
                console.log(err)
            })
    };
    // /Commander ผู้บังคับบัญชา

    console.log(commander)
    return (
        <>
            {/* test */}
            <br/><br/>
            {/* <Select
                showSearch
                style={{ width: 240 }}
                placeholder="custom dropdown render"
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                            <Input style={{ flex: 'auto' }} value={commander} onChange={onNameCommanderChange} />
                            <a
                                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                onClick={addItemCommander}
                            >
                                <PlusOutlined /> Add item
              </a>
                        </div>
                    </div>
                )}
            >
                {items.map(item => (
                    <Select.Option key={item}>{item}</Select.Option>
                ))}
            </Select> */}
            {/* test */}
            <Form.Item label="ความน่าเชื่อถือ/ระดับ" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="reliability"
                    rules={[{ required: true, message: 'กรุณาป้อนข้อมูล ความน่าเชื่อถือ!' }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="ความน่าเชื่อถือ">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="level"
                    rules={[{ required: true, message: 'กรุณาป้อนข้อมูล ระดับ!' }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="ระดับ">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
            </Form.Item>
            <hr />

            <Form.Item label="ผบ./ตำแหน่ง" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="commander"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="ผู้บังคับบัญชา"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={commander} onChange={onNameCommanderChange} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemCommander}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataCommander.map(item => (
                            <Select.Option key={item._id} value={item.commander}>{item.commander}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>






                <Form.Item
                    name="commanderPosition"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="ตำแหน่ง"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={commanderPosition} onChange={onChangeCommanderPosition} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemCommanderPosition}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataCommanderPosition.map(item => (
                            <Select.Option key={item._id} value={item.commanderPosition}>{item.commanderPosition}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form.Item>

            <Form.Item label="หน่วยงาน/สนามบิน" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="org"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="หน่วยงาน"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={org} onChange={onChangeOrg} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemOrg}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataOrg.map(item => (
                            <Select.Option key={item._id} value={item.org}>{item.org}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="airFieldTH"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="สนามบิน">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
            </Form.Item>
            <hr />

            <Form.Item label="เหตุการณ์" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="eventType"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="ประเภทเหตุการณ์หลัก">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="subEventType"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="ประเภทเหตุการณ์ย่อย">
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
            </Form.Item>

            <Form.Item label="แหล่งข่าว" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="source"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="แหล่งข่าว"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={source} onChange={onChangeSource} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemSource}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataSource.map(item => (
                            <Select.Option key={item._id} value={item.source}>{item.source}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form.Item>

            <Form.Item label="platform" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="platform"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="platform"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={platform} onChange={onChangePlatform} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemPlatform}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataPlatform.map(item => (
                            <Select.Option key={item._id} value={item.platform}>{item.platform}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="armType"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="armType"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={armType} onChange={onChangeArmType} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemArmType}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataArmType.map(item => (
                            <Select.Option key={item._id} value={item.armType}>{item.armType}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

            </Form.Item>

            <Form.Item label="armRole1/armRole2" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="armRole1"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="armRole1"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={armRole1} onChange={onChangeArmRole1} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemArmRole1}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataArmRole1.map(item => (
                            <Select.Option key={item._id} value={item.armRole1}>{item.armRole1}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="armRole2"
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="armRole2"
                        dropdownRender={menu => (
                            <div>
                                {menu}
                                <Divider style={{ margin: '4px 0' }} />
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={armRole2} onChange={onChangeArmRole2} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={addItemArmRole2}
                                    >
                                        <PlusOutlined /> Add item
                      </a>
                                </div>
                            </div>
                        )}
                    >
                        {dataArmRole2.map(item => (
                            <Select.Option key={item._id} value={item.armRole2}>{item.armRole2}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form.Item>
        </>
    )
}

export default InsertColumn2
