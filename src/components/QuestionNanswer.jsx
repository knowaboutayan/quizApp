import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import '../css/Quizq&aBox.css'
import { setUserResponse } from "../reduxTools/slice"
const QuestionNanswer = ({ display = 'hidden', index = 0, questionID = null, question = 'Question Loading...', options = {}, marks = 0, multiAnswerd = false }) => {
    const optionKey = Object.keys(options)
    const dispatch = useDispatch()

    const [optionVal, setOptionVal] = useState([])


    const recordResponse = (questionID = '', response = '', marks = '0') => {
        const tempResponse = [questionID, response, marks]
        dispatch(setUserResponse(tempResponse))
    }

    return (
        <div id="qNa-box" className="flex flex-direction-column margin-auto" style={{ display: `${display}` }}>
            <div className="flex flex-direction-row  justify-space-between">
                <h3><b>({index + 1})</b> {question}</h3>
                <div> <h4>[marks:{marks}]</h4></div>
            </div>
            <hr width='100%' />
            <div className="flex flex-direction-row flex-wrap center-align '',">
                {
                    optionKey.map((ele) => (options[ele] != null) ? <div key={"options" + ele} id='input'><label><input optionID={ele} type="radio" value={optionVal} onChange={(e) => { setOptionVal(e.target.value); recordResponse(questionID, ele, marks) }} name={ multiAnswerd ? '' : `same${questionID}`} />{options[ele]}</label></div> : null)
                }
            </div>
        </div>
    )
}

export default QuestionNanswer