import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from './action';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Demo from './components/demo';
import Index1 from './components/useContext.js/index1';
import FocusInput from './components/focusInput';
import Quiz from './components/quiz';

const Data = createContext();


function App() {

  // const mystate = useSelector((state) => state.change);
  // const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "Azhar",
    age: 25,
    number: 8953,
    add: "Village and Post"
  });

  return (
    <div className="App">
      <Quiz>

      </Quiz>
      {/* <Demo data={data} >
        <p>This is children props</p>
      </Demo>
      <Demo data={data}>
        <button>Action</button>
      </Demo>
      <FocusInput></FocusInput>
      <Contact data={data} >
        <button>Action</button>
      </Contact> */}
      {/* <Home data={data}/> */}
      {/* <Data.Provider value={"Welcome to GFG"}> */}
      {/* <Data.Provider value={123}> */}
      {/* <Data.Provider value={data}>
        <Index1 />
      </Data.Provider> */}

      {/* <BrowserRouter>
        <div className="Navbar">
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      

      {/* <Home />
      <About />
      <Contact /> */}
    </div>
  );
}

export default App;
export { Data };
