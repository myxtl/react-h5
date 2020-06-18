import React, { Component } from 'react'
import axios from 'axios';

class User extends Component {
    
    handleLogout() {
        window.localStorage.clear();
        this.props.history.push('/login')
    }

    componentDidMount() {
        axios.get('https://hb.4coder.org.cn/poster_json/poster_34.json').then(res => {
            
        })
    }

    render() {
        return (
            <div>
                <div className="logout" onClick={this.handleLogout.bind(this)}>
                    退出登录
                </div>
            </div>
        )
    }
}

export default User;
