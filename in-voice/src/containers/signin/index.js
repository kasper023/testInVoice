import React from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { withRouter } from 'react-router-dom';
import './signin.css';
import axios from 'axios';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};


function Signin(props) {
    const onFinish = values => {
        console.log('Success:', values);
        let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        let password_verify = regex.test(values.password)
        if (password_verify) {
            axios.get(`https://api.github.com/users/${values.username}`).then(
                data => props.history.push(`/dashboard/terminals`),
                localStorage.setItem('user', values.username)
            ).catch(err => message.error(`Такого пользователя нету`))
        } else {
            message.error(`Пароль некорректный`)
        }     
    };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return(
        <div className="container">
            <img className="logo" src="https://3dnews.ru/assets/external/illustrations/2020/03/17/1006161/i75_ArticleImage_23542.jpg"/>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item                
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder="Логин" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Пароль" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
       
    )
}

export default withRouter(Signin);