import React, { useState } from 'react';
import { Table, Button, Space, Modal, Input, Form } from 'antd';
import { Link } from 'react-router-dom';

function Buyers() {
    const [data, setData] = useState([{
        key: '1',
        name: 'Eska',
        average: 5000,
        purchaseAmount: 50,
        total: 123123123
      },
      {
          key: '2',
          name: 'Eska Sarinov',
          average: 3000,
          purchaseAmount: 25,
          total: 3312312
        },
        {
          key: '3',
          name: 'Zhaneka Shaikassym',
          average: 10000,
          purchaseAmount: 40,
          total: 100000
        }])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
            render: (text, record) => <Link to={{pathname: `/dashboard/buyer/${record.key}`, state: {key: record.key, name: record.name, average: record.average, purchaseAmount: record.purchaseAmount, total: record.total}}}>{text}</Link>
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
            title: 'Total',
            dataIndex: 'total',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.total - b.total,
        },
       
      ];
      
     
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }
    return (
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={{pageSizeOptions: [5, 10, 15], defaultPageSize: 5, showSizeChanger: true}} />
    )
}

export default Buyers;

