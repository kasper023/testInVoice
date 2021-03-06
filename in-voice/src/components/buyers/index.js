import React, { useState } from 'react';
import { Table, Button, Space, Modal, Input, Form } from 'antd';
import { Link } from 'react-router-dom';

function Buyers() {
    const [data, setData] = useState([
      {
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
      },
      {
        key: '4',
        name: 'Eska',
        average: 5000,
        purchaseAmount: 50,
        total: 123123123
      },
      {
        key: '5',
        name: 'Eska Sarinov',
        average: 3000,
        purchaseAmount: 25,
        total: 3312312
      },
      {
        key: '6',
        name: 'Zhaneka Shaikassym',
        average: 10000,
        purchaseAmount: 40,
        total: 100000
      },
      {
        key: '7',
        name: 'Eska',
        average: 5000,
        purchaseAmount: 50,
        total: 123123123
      },
      {
        key: '8',
        name: 'Eska Sarinov',
        average: 3000,
        purchaseAmount: 25,
        total: 3312312
      },
      {
        key: '9',
        name: 'Zhaneka Shaikassym',
        average: 10000,
        purchaseAmount: 40,
        total: 100000
      },
      {
        key: '10',
        name: 'Eska',
        average: 5000,
        purchaseAmount: 50,
        total: 123123123
      },
      {
        key: '11',
        name: 'Eska Sarinov',
        average: 3000,
        purchaseAmount: 25,
        total: 3312312
      },
      {
        key: '12',
        name: 'Zhaneka Shaikassym',
        average: 10000,
        purchaseAmount: 40,
        total: 100000
      },
      {
        key: '13',
        name: 'Eska',
        average: 5000,
        purchaseAmount: 50,
        total: 123123123
      },
      {
        key: '14',
        name: 'Eska Sarinov',
        average: 3000,
        purchaseAmount: 25,
        total: 3312312
      },
      {
        key: '15',
        name: 'Zhaneka Shaikassym',
        average: 10000,
        purchaseAmount: 40,
        total: 100000
      },
      ])
      const valuesForFilter = (data) => {
        let flags = [], output = [], l = data.length;
        for(let i = 0; i < l; i++) {
            if( flags[data[i].text]) continue;
            flags[data[i].text] = true;
            output.push(data[i]);
        }
        return output
      }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
            render: (text, record) => <Link to={{pathname: `/dashboard/buyer/${record.key}`, state: {key: record.key, name: record.name, average: record.average, purchaseAmount: record.purchaseAmount, total: record.total}}}>{text}</Link>
        },
        {
          title: 'Имя',
          dataIndex: 'name',
          filters: valuesForFilter(data.map((item) => ({text: item.name, value: item.name}))),
          onFilter: (value, record) => record.name.indexOf(value) === 0,
        },
        {
          title: 'Средний чек',
          dataIndex: 'average',
          // defaultSortOrder: 'descend',
          sorter: (a, b) => a.average - b.average,
        },
        {
            title: 'Кол-во покупок',
            dataIndex: 'purchaseAmount',
            // defaultSortOrder: 'descend',
            sorter: (a, b) => a.purchaseAmount - b.purchaseAmount,
        },
        {
            title: 'Общая выручка',
            dataIndex: 'total',
            // defaultSortOrder: 'descend',
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

