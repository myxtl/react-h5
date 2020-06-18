import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.less'


const Test = (props) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState({});
    const handleClick = () => {
        setCount(count + 1);
    }

    // useEffect(async () => {
    //     const res = await axios.get('https://hb.4coder.org.cn/poster_json/poster_34.json?time=2020521164532');
    //     setData(res);
    // })

    return <div className="test">
        <p>{count}</p>
        <button onClick={handleClick}>Click me!</button>
    </div>
}

export default Test;

