import React, { useState } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import {
    UserAddOutlined,
    AppstoreOutlined,
    HomeOutlined,
    LoginOutlined,
    DownOutlined
} from '@ant-design/icons';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const { SubMenu } = Menu;


const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state }))
    const history = useHistory();

    const [current, setCurrent] = useState('mail')
    const handleClick = e => {
        console.log('click ', e);
        setCurrent({ current: e.key });
    };

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            payload: null
        });
        history.push('/');
    }


    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

            <Menu.Item key="mail" icon={<HomeOutlined />}>
                <Link to="/"> Home</Link>
            </Menu.Item>

            <Menu.Item key="admin" icon={<AppstoreOutlined />}>
                <Link to="/admin/dashboard"> WorkShop</Link>
            </Menu.Item>
            <Menu.Item key="example" icon={<AppstoreOutlined />}>
                <Link to="/example/dashboard"> Example</Link>
            </Menu.Item>

            {!user && (
                <Menu.Item
                    className="float-right"
                    key="register"
                    icon={<UserAddOutlined />}>
                    <Link to="/register">Register</Link>
                </Menu.Item>
            )}

            {!user && (
                <Menu.Item
                    className="float-right"
                    key="login"
                    icon={<LoginOutlined />}>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            )}

            {user && (
                <SubMenu
                    className="float-right"
                    key="SubMenu"
                    icon={<DownOutlined />}
                    title={user.name}>
                    <Menu.Item
                        key="login"
                        icon={<LoginOutlined />}
                        onClick={logout}
                    >
                        Logout
                </Menu.Item>
                </SubMenu>
            )}

        </Menu>
    )
}

export default Navbar
