import { useState } from "react"

import '../css/Quizq&aBox.css'

const QuestionNanswer = ({ display = 'hidden', index = 0, questionID = null, question = 'Question Loading...', options = {}, marks = 0, multiAnswerd = false, setUserResponse = '' }) => {
    const optionKey = Object.keys(options)
    const [optionVal, setOptionVal] = useState([])
    class userResponse {

        constructor(questionID, response, marks) {
            this.questionID = questionID;
            this.response = response;
            this.marks = marks
        }
    }


    const recordResponse = (questionID = '', response = '', marks = '0') => {
        const tempResponse = new userResponse(questionID, response, marks)
        setUserResponse(tempResponse)

    }

    return (
        <div id="qNa-box" className="flex flex-direction-column margin-auto" style={{ display: `${display}` }}>
            <div >
                <h3><b>({index + 1})</b> {question}</h3>

            </div>
            <h5 style={{ display: 'inline', textAlign: 'right', margin: 0 }}>[marks:{marks}]</h5>
            <hr width='100%' />
            <div className="flex flex-direction-row flex-wrap center-align '',">
                {
                    optionKey.map((ele) => (options[ele] != null) ? <div key={"options" + ele} id='input'><label><input optionID={ele} type="radio" value={optionVal} onChange={(e) => { setOptionVal(e.target.value); recordResponse(questionID, ele, marks) }} name={multiAnswerd ? '' : `same${questionID}`} />{options[ele]}</label></div> : null)
                }
            </div>
        </div>
    )
}

export default QuestionNanswer