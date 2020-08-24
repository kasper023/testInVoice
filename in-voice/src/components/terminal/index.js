import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Modal, Input, Form } from 'antd';

function Terminal() {
    const [visible, setVisible] = useState(false);
    const [terminals, setTerminals] = useState([]);
    const [newData, setNewData] = useState({
        key: ``,
        name: ``,
        description: ``
    })

    const getData = () => {
      if(localStorage.getItem('terminals')) {
        setTerminals(JSON.parse(localStorage.getItem('terminals')))
      }
    }

    useEffect(getData, [])

    const openModal = () => {
        setVisible(true);
    }

    const handleCancel = () => {
        setVisible(false);
    }
    
    const handleOk = () => {
        if (newData.name && newData.description) {
            handleCancel();
            const data = [...terminals, {key: terminals.length, name: newData.name, description: newData.description}]
            setTerminals(data);
            localStorage.setItem('terminals', JSON.stringify(data));
            setNewData({});
        }
       
    }
    const deleteTerminal = index => {
      const data = terminals.filter((item) => item.key != index)
      setTerminals(data)
      localStorage.setItem('terminals', JSON.stringify(data))
    }
    const onChange = e => {
        const { name, value } = e.target;
        setNewData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
         
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
       
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <p style={{cursor: 'pointer'}} onClick={() => deleteTerminal(record.key)}>Delete</p>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: 0,
          name: 'John Brown',
          description: 'New York No. 1 Lake Park',
        },
        {
          key: 1,
          name: 'Jim Green',
          description: 'London No. 1 Lake Park'
        },
      ];
    return(
        <div>
            <Button
              onClick={openModal}
              style={{margin: '20px 0'}}
            >
              Добавить терминал
            </Button>
            <Table columns={columns} dataSource={terminals} pagination={{pageSizeOptions: [5, 10, 15], defaultPageSize: 5, showSizeChanger: true}}/>
            <Modal
          title="Добавить терминал"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
            <Form>
                <Form.Item>
                    <Input name="name" placeholder='Name' value={newData.name} onChange={onChange}/>
                </Form.Item>
                <Form.Item>
                    <Input name="description" placeholder='Description' value={newData.description} onChange={onChange}/>
                </Form.Item>
                
            </Form>
        </Modal>
        </div>

        
    )
}

export default Terminal;