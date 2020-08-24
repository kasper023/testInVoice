import React, { useState } from 'react';
import { Table, Button, Space, Modal, Input, Form } from 'antd';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function Buyer(props) {
    console.log(props.location, 'here')
    return(
        <div>
             <p>Имя: {props.location.state.name}</p>
             <p>Средний чек: {props.location.state.average}</p>
             <p>Кол-во покупок: {props.location.state.purchaseAmount}</p>
             <p>Общая выручка: {props.location.state.total}</p>
        </div>
    )
}
export default  withRouter(Buyer);