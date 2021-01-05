import React, { Component } from 'react'
import Order from '../../components/Order/Order'

class Orders extends Component {
    render() {
        return (
            <div>
                <div>  <h2 style={{ textAlign: 'center', border: '2px solid lightblue', boxSizing: 'border-box' }}>Your Orders</h2> </div>
                <Order />
                <Order />
            </div>
        )
    }
}

export default Orders