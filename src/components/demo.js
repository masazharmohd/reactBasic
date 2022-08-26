import React, { Children } from "react";

const Demo = (props) => {

    
    return (
        <div>
            <h1>Demo {props.data.name}</h1>
            {props.children}
        </div>
    )
}

export default Demo;