import React, { useState } from "react";
import Index from ".";

const Index1 = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            {show ? <Index /> : null}
            <button onClick={() => setShow(!show)}>
                Click ME</button>
        </>
    );
}

export default Index1;