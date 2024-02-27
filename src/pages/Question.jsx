import { useDispatch, useSelector } from "react-redux";
import { Suspense, useState } from "react";
import useApiHandeler from "../hook/codingQueAPI";
import QuestionNanswer from "../components/QuestionNanswer";
import { setFetchData } from "../reduxTools/slice";
import { Link, useNavigate } from "react-router-dom";
import ErrorBox from "../Error/ErrorBox";
import AlertBox from "../Error/AlartBox";
import serverError from '../images/serverError.png';
import systemError from '../images/systemError.png';
const Question = () => {
    const [topic, difficulty, type] = [useSelector(state => state.quizTopic), useSelector(state => state.quizDifficulty), useSelector(state => state.quizType)];
    const navigate = useNavigate()
   
    let data = useApiHandeler(topic, difficulty);
    console.log(data)


    {
        if (localStorage.getItem('quizTopic') === '' || topic == '' || difficulty == "" || localStorage.getItem('quizDifficulty') === '' || localStorage.getItem('quizType') === "") {

            {
                return (<ErrorBox icon={systemError} errorText="Quiz Topic or Quiz Type not selected" navigateTo="/" navigateText="home" timeOutTime="8000" />)
            }
        }
        else if (data == 'error') {
            //     return <div>SEVER ERROR{setTimeout(() => {
            //         navigate("/")
            //     }, 8000)}</div>
            return <ErrorBox icon={serverError} errorText="Internal server error" navigateTo="/" navigateText="home" />
        }
        else if (data.length > 0) {

            const dispatch = useDispatch()
            const correctAnswer = (answers = {}) => {
                const options = Object.values(answers)
                const keys = Object.keys(answers)

                for (let i = 0; i < options.length; i++) {
                    if (options[i] === 'true') {
                        return (keys[i])

                    }
                }
            }

            let correctAnswerData = data.map((ele) => [ele.id, correctAnswer(ele.
                correct_answers
            )])
           
            dispatch(setFetchData(correctAnswerData))
            window.addEventListener('DOMContentLoaded',localStorage.clear())
            const submitRequest = () => {
                confirm('Are you sure to submit?') ? navigate('/result') : '';
            }

            return (

                <>
                
                    <div>
                        <h2>{type}</h2>
                    </div>
                    <div>

                    </div>

                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div>
                            <h3>Full Marks ::{data.length * 2}</h3>
                            <Suspense fallback={<div>fallback</div>}>
                            {data.map((ele, index1) => <QuestionNanswer key={ele} questionID={ele["id"]} question={ele["question"]} index={index1} options={ele["answers"]} marks={'02'} multianswered={ele.multiple_correct_answers} />)}
                            </Suspense>
                        </div>
                        <div className="flex center-align">

                            <button type="submit" onClick={submitRequest}><i className="fa fa-tick"></i>Submit</button>

                        </div>

                    </form>

                  

                </>)
        }
    }
}




export default Question
