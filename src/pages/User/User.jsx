import React, { Component } from 'react'

class User extends Component {
    handleLogout() {
        window.localStorage.clear();
        this.props.history.push('/login')
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
