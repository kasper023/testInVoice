import React, { useState } from 'react';
import { Table, Button, Space, Modal, Input, Form } from 'antd';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function Buyer(props) {
    console.log(props.location, 'here')
    const [data, setData] = useState([{
        key: props.location.state.key,
        name: props.location.state.name,
        average: props.location.state.average,
        purchaseAmount: props.location.state.purchaseAmount,
        total: props.location.state.total
    }])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
            // render: (text, record) => <Link to={{pathname: `/dashboard/buyer/${record.key}`, state: {name: record.name}}}>{text}</Link>
        },
        {
          title: 'Name',
          dataIndex: 'name',
          filters: data.map((item) => ({text: item.name, value: item.name})),
          onFilter: (value, record) => record.name.indexOf(value) === 0,
        },
        {
          title: 'Average',
          dataIndex: 'average',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.average - b.average,
        },
        {
            title: 'PurchaseAmount',
            dataIndex: 'purchaseAmount',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.purchaseAmount - b.purchaseAmount,
        },
        {
            title: 'Age',
            dataIndex: 'total',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.total - b.total,
        },
       
      ];
    return(
        <div>
             <Table columns={columns} dataSource={data}/>
        </div>
       
    )
}

export default  withRouter(Buyer);