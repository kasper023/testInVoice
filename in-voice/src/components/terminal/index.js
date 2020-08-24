import React, { useState } from 'react';
import { Table, Button, Space, Modal, Input, Form } from 'antd';

function Terminal() {
    const [visible, setVisible] = useState(false);
    const [terminals, setTerminals] = useState([]);
    const [newData, setNewData] = useState({
        key: ``,
        name: ``,
        description: ``
    })

    const openModal = () => {
        setVisible(true);
    }

    const handleCancel = () => {
        setVisible(false);
    }
    
    const handleOk = () => {
        if (newData.name && newData.description) {
            handleCancel();
            setTerminals([...terminals, {key: terminals.length, name: newData.name, description: newData.description}]);
        }
       
    }
    const getData = terminals => {
        return setTerminals(terminals)
    }
    const deleteTerminal = index => {
      setTerminals(terminals.filter((item) => item.key != index))
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
              <p onClick={() => deleteTerminal(record.key)}>Delete</p>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          name: 'John Brown',
          description: 'New York No. 1 Lake Park',
        },
        {
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
            <Table columns={columns} dataSource={terminals} />
            <Modal
          title="Добавить терминал"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
            <Form>
                <Form.Item>
                    <Input name="name" value={newData.name} onChange={onChange}/>
                </Form.Item>
                <Form.Item>
                    <Input name="description" value={newData.description} onChange={onChange}/>
                </Form.Item>
                
            </Form>
        </Modal>
        </div>

        
    )
}

export default Terminal;