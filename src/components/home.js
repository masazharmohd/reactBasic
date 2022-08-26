import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNum, decNum } from "../action";

const Home = (data) => {
    const mystate = useSelector(state => state.change);
    const dispatch = useDispatch();
    console.log("Azhar",data)
  return (
    <div className="main">
      <h1>Home Page</h1>
      <h2>Increment/Decrement the number using Redux.</h2>
      <div className="app">
        <h1>{data.data.age + mystate}</h1>
        <button onClick={() => dispatch(incNum())}>+</button>
        <button onClick={() => dispatch(decNum())}>-</button>
      </div>
    </div>
  );
}

export default Home;
