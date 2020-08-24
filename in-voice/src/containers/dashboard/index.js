import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
    DatabaseOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import './dashboard.css';
import Terminal from '../../components/terminal';
import Buyers from '../../components/buyers';
import { Link } from 'react-router-dom'; 
import { Route } from 'react-router';
import Axios from 'axios';
import Buyer from '../../components/buyer';
import Miscallenous from '../miscallenous';

const { Header, Sider, Content } = Layout;



function Dashboard() {
    const [user, setUser] = useState('qwerty')
    const getUser = async() => {
        setUser((await Axios.get(`https://api.github.com/users/${localStorage.getItem('user')}`)).data)
    }
    useEffect(getUser, [])
    
    return (
        <Layout style={{height: '100%'}}>
            <Sider
                trigger={null}
                style={{
                    width: '20vw',
                    maxHeight: '200vh',
                    minHeight: '100vh',
                    padding: '20px 0',
                    position: 'relative'
                }}
            >
                <img className="avatar" src={user.avatar_url}/>
                <p style={{color: 'white'}}>{user.login}</p>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<DatabaseOutlined />}>
                        <Link to={`/dashboard/terminals`}>Терминалы</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to={`/dashboard/buyers`}>Клиенты</Link>
                    </Menu.Item>
                </Menu>
                <p 
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'white'
                    }}
                >Copyright © 2020 </p>
            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        // margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Route exact path={`/dashboard/terminals`} component={Terminal}/>
                    <Route exact path={`/dashboard/buyers`} component={Buyers}/>
                    <Route exact path={`/dashboard/buyer/:id`} component={Buyer}/>
                    <Route path = {`/dashboard/`} exact component={Miscallenous}/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard;