import React, { Component } from 'react';

import {login} from '../../api'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async submitLogin() {
        const res = await login({userName: 'myxtl',password: 'qwer1234'});
        window.localStorage.setItem('userInfo', JSON.stringify(res.data));
        this.props.history.push('/home');
    }
    register = () => {
        this.props.history.push('/register');
    }
    render() {
        console.log('pageLogin')
        return (
            <div>
                <div className="login-btn" onClick={this.submitLogin.bind(this)}>
                    登录
                </div>
                <div className="login-btn" onClick={this.register.bind(this)}>
                    注册
                </div>
            </div>
        )
    }
}

export default Login;
