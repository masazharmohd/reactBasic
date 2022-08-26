import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.css"

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [sampleQue, setSampleQue] = useState({
        title: "",
        score: null,
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
    });

    const addQuestion = (sampleQue) => {
        const newQue = [sampleQue, ...questions]
        setQuestions(newQue)
        console.log(sampleQue, ...questions)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
    }

    return (
        <div className="main">
            <div className="header">
                <div className="logo"><h2>Quiz Portal</h2></div>
                <div className="scoreBorad"><h4>Total Score : {score}</h4></div>
                <div className="buttonDiv"><button className="btn" onClick={() => addQuestion(sampleQue)}>Add Question</button></div>
            </div>
            {
                questions.length > 0 ? (
                    <div className="formDiv">
                        <label>Title</label>
                        <input type="text" name="title" onChange={handleChange} placeholder="Enter Title" />

                        <label>Score</label>
                        <input type="number" name="score" onChange={handleChange} placeholder="Enter Score" />

                        <label>Option</label>
                        <input type="text" name="option1" onChange={handleChange} placeholder="Enter first option" />

                        <label>Option</label>
                        <input type="text" name="option2" onChange={handleChange} placeholder="Enter second" />

                        <label>Option</label>
                        <input type="text" name="option3" onChange={handleChange} placeholder="Enter third option" />

                        <label>Option</label>
                        <input type="text" name="option4" onChange={handleChange} placeholder="Enter fourth option" />

                        <label>Answer</label>
                        <input type="text" name="answer" onChange={handleChange} placeholder="Enter Answer" />

                        <button className="btn">Submit</button>
                    </div>
                ) :
                    ""
            }
        </div>
    )
}
export default Quiz;