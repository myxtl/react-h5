/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 14:59:38
 */
import React, {Component, Fragment} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Login from '../../pages/Login';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(window.localStorage.getItem('userInfo'));
        this.state = {
            userInfo: user,
            isLogoin: user ? true : false
        }
    }

    componentDidMount() {
        const {history} = this.props;
        if (!this.state.isLogoin) {
            history.replace("/login");
        }
    }
    
    componentWillMount() {
        const {history} = this.props;
        if (!this.state.isLogoin) {
            history.replace("/login");
        }
    }

    render() {
        let {hasTab, ...rest} = this.props;
        return this.state.isLogoin ?
            (<Route {...rest} render={(props) => {
                return (
                    <div className={hasTab ? 'tabPageContent' : 'noTabPageContent'}>
                        <Component {...props} />
                    </div>
                )
            }}/>) : (<Route {...rest} render={(props) => (
                <Fragment>
                    <Login/>
                </Fragment>
            )}/>)
    }
}

export default withRouter(PrivateRoute);