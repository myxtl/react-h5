import React, { Component } from 'react'

class Register extends Component {
    goBack() {
        const { history: { go } } = this.props
        go(-1)
    }
    render() {
        return (
            <div>
                <div className="btn" onClick={this.goBack.bind(this)}>返回登录</div>
            </div>
        )
    }
}

export default Register;
