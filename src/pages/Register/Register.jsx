import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import { postRegister } from '../../api';
import './style.less';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        }
    }
    goBack() {
        const { history: { go } } = this.props
        go(-1)
    }

    async handleRegister () {
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
        const { data, code, message } = await postRegister(obj);
        console.log(message, '=====')
        if (code === 200) {
            window.localStorage.setItem('userInfo', JSON.stringify(data));
            this.props.history.push('/home');
        } else {
            Toast.fail(message);
        }
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
                <div className="login-btn" onClick={this.handleRegister.bind(this)}>注册并登录</div>
            </div>
        )
    }
}

export default Register;
