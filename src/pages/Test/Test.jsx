import React, { useState } from 'react';
import './style.less'

const Test = () => {
    const [count] = useState(0);

    return <div className="test">
        <p>{count}</p>
        <button>Click me!</button>
    </div>
}

export default Test;

