import React, { Component } from 'react'
import http from '../../utils/http'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.getCategoryList();
    }

    getCategoryList = async () => {
        let res = await http.get('/category/query');
        console.log(res)
    }

    render() {
        return (
            <div>
                PageCategory
            </div>
        )
    }
}

export default Category;
