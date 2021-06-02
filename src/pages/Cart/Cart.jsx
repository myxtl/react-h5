import React, { Component } from 'react'
import Header from '../../components/Header'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    goBack() {
        const { history: { go } } = this.props
        go(-1)
    }
    render() {
        return (
            <div>
                <Header clickLeft={this.goBack.bind(this)} title='收款方式'></Header>
            </div>
        )
    }
}

export default Cart;
