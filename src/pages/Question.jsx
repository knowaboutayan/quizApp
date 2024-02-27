import { useDispatch, useSelector } from "react-redux";
import { Suspense, useState } from "react";
import useApiHandeler from "../hook/codingQueAPI";
import { setFetchData, setQuizResultShown } from "../reduxTools/slice";
import { Link, useNavigate } from "react-router-dom";
import ErrorBox from "../Error/ErrorBox";
import serverError from '../images/serverError.png';
import done from '../images/done.png';
import systemError from '../images/systemError.png';
import loading from '../images/loading.gif';
import Buttons from "../buttons/Buttons";
import { lazy } from "react";
const QuestionNanswer = lazy(() => import("../components/QuestionNanswer"));
const Question = () => {
    const [topic, difficulty, type] = [useSelector(state => state.quizTopic), useSelector(state => state.quizDifficulty), useSelector(state => state.quizType)];
    const navigate = useNavigate()
    const isQuizResultShown = useSelector(state => state.quizResultShown)
    const data = useApiHandeler(topic, difficulty);
    console.log(data)
    if (data.length == 0) {
        return <div className="flex center-align"><ErrorBox icon={loading} errorText="Loading... please wait"  ></ErrorBox></div>
    }
    else if (localStorage.getItem('quizTopic') === '' || topic === '' || difficulty === "" || localStorage.getItem('quizDifficulty') === '' || localStorage.getItem('quizType') === "") {
        return (
            <div className="flex center-align">
                <ErrorBox icon={systemError} errorText="Quiz Topic or Quiz Type not selected" navigateTo="/" navigateText="home" timeOutTime="8000" />
            </div>
        )
    } else if (data === 'error' || data == false) {
        return (
            <div className="flex center-align">
                <ErrorBox icon={serverError} errorText="Internal server error" navigateTo="/" navigateText="home" />
            </div>
        )
    } else if (isQuizResultShown) {
        return (
            <div className="flex center-align">
                <ErrorBox icon={done} errorText="Form Already Submitted" navigateTo="/" navigateText="home" timeOutTime="2000" />
            </div>
        )
    } else if (data.length > 0) {
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
        let correctAnswerData = data.map((ele) => [ele.id, correctAnswer(ele.correct_answers)])

        dispatch(setFetchData(correctAnswerData))
        dispatch(setQuizResultShown(false))
        window.addEventListener('DOMContentLoaded', localStorage.clear())
        const submitRequest = () => {
            confirm('Are you sure to submit?') ? navigate('/result') : '';
        }

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    <h2>{type}</h2>
                </div>
                <div></div>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div>
                        <section className="flex flex-direction-row flex-wrap justify-space-between margin-auto" style={{ width: '60%' }}>
                            <div className="flex center-align"><h3>FULL MARKS ::{data.length * 2}</h3></div>
                            <div className="flex center-align"><h3>TOPIC::{topic}</h3></div>
                        </section>

                        {data.map((ele, index1) => (
                            <QuestionNanswer
                                key={ele.id}
                                questionID={ele.id}
                                question={ele.question}
                                index={index1}
                                options={ele.answers}
                                marks={'02'}
                                multianswered={ele.multiple_correct_answers}
                            />
                        ))}

                    </div>
                    <div className="flex center-align">
                        <Buttons type="submit" btnName="submit" borderRadius="5px" fname={submitRequest} />
                    </div>
                </form>
            </Suspense>
        )
    }

    return null;
}

export default Question;
