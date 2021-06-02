import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { postLogin } from '../../api';
import './style.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        }
    }
    async submitLogin() {
        let obj = {
            ...this.state
        }
        if (!obj.phone) {
            Toast.fail('请输入手机号！');
            return;
        }
        if (!obj.password) {
            Toast.fail('请输入密码！');
            return
        }
        const { data, code, message } = await postLogin(obj);
        if (code === 200) {
            window.localStorage.setItem('userInfo', JSON.stringify(data));
            this.props.history.push('/home');
        } else {
            Toast.fail(message);
        }

    }

    register = () => {
        this.props.history.push('/register');
    }
    render() {
        const { phone, password } = this.state;
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-item">
                        <p>手机号</p>
                        <input placeholder="请输入手机号" name="phone" value={phone} onChange={e => this.setState({ phone: e.target.value })} />
                    </div>
                    <div className="login-item">
                        <p>密码</p>
                        <input placeholder="请输入密码" name="password" value={password} onChange={e => this.setState({ password: e.target.value })} />
                    </div>
                </div>
                <div className="login-btn" onClick={this.submitLogin.bind(this)}>立即登录</div>
                <div className="go-register" onClick={this.register.bind(this)}>前往注册</div>
            </div>
        )
    }
}

export default Login;
