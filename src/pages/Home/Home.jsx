import React, { Component } from 'react';
import './style.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick = () => {
        this.props.history.push('/test')
    }

    render() {
        return (
            <div className="page-home">
               <div onClick={this.handleClick.bind(this)}>跳转至test页面</div>
            </div>
        )
    }
}

export default Home;
