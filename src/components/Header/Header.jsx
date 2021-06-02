import React, { Component } from 'react'
import backImg from '../../assets/images/back.png'
import './index.less'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    clickLeft() {
        this.props.clickLeft()
    }

    componentDidMount() {
        console.log(this.props.history);
    }

    render() {
        return (
            <div className="header">
                {!this.props.isHome ? <div className="left" onClick={this.clickLeft.bind(this)}>
                    {this.props.left}
                </div> : ''}
                <div className="title">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

Header.defaultProps = {
    clickLeft: () => null,
    left: <img src={backImg} alt=""></img>,
    right: null,
    title: '标题'
}
export default Header