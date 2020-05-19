import React, { Component } from 'react';

import './style.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async submitLogin() {
        const userInfo = {userName: 'myxtl',password: 'qwer1234'};
        // const res = await login({userName: 'myxtl',password: 'qwer1234'});
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.props.history.push('/home');
    }
    register = () => {
        this.props.history.push('/register');
    }
    render() {
        return (
            <div className="login">
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
