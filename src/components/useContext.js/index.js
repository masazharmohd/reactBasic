import React, { useContext } from 'react';
import { Data } from '../../App';

const Index = ({ name }) => {
    const context = useContext(Data);
    return (
        <>
        <h1>{context.name}</h1>
        <h1>{context.age}</h1>
        <h1>{context.number}</h1>
        <h1>{context.add}</h1>
        </>
    )
}

export default Index;