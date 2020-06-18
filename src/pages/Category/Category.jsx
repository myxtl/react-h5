import React, { Component } from 'react'
import { getCategory } from '../../api'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.getCategoryList();
    }

    getCategoryList = async () => {
        const res = await getCategory();
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
