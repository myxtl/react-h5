import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import routes from '../../router'
import './style.less'

class Tab extends Component {
    changeIndex(item) {
        this.props.history.push(item.url)
    }

    render() {
        const {tabList, history: {location: {pathname}}} = this.props
        let showTab = false
        routes.forEach((item, index) => {
            if (item.path === pathname) {
                showTab = item.isTab
            }
        })
        return (
            showTab ? <nav className="tab">
                {
                    tabList.map((item, index) => (
                        
                        <div className={pathname === item.url ? 'tabItem active' : 'tabItem'}
                             key={index}
                             onClick={this.changeIndex.bind(this, item)}
                        >
                            <div className={pathname === item.url ? 'itemIcon activeIcon' : 'itemIcon'}>
                                <i className={item.icon}></i>
                            </div>
                            <div className="itemName noSelect">{item.name}</div>
                        </div>
                    ))
                }
            </nav> : null
        )
    }
}

export default withRouter(Tab)