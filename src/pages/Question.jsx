import { useDispatch, useSelector } from "react-redux";
import { Suspense, useState } from "react";
import { setFetchData, setQuizResultShown } from "../reduxTools/slice";
import { Link, useNavigate } from "react-router-dom";
import ErrorBox from "../Error/ErrorBox";
import serverError from '../images/serverError.png';
import done from '../images/done.png';
import systemError from '../images/systemError.png';
import loading from '../images/loading.gif';
import Buttons from "../buttons/Buttons";
import { lazy } from "react";
import codingQuizAPI from "../hook/codingQueAPI";
import generalKnowledgeAPI from "../hook/generelKnowledAPI";



const QuestionNanswer = lazy(() => import("../components/QuestionNanswer"));
const Question = () => {
    const [topic, difficulty, type, quizID, topicId] = [useSelector(state => state.quizTopic), useSelector(state => state.quizDifficulty), useSelector(state => state.quizType), useSelector(state => state.quizId), useSelector(state => state.topicId)];
    const navigate = useNavigate()
    const isQuizResultShown = useSelector(state => state.quizResultShown)
    const data = (() => {
        switch (Number(quizID)) {
            case 1:

                return generalKnowledgeAPI(topicId, difficulty)
            case 2:
                return codingQuizAPI(topicId, difficulty)
            default:
                return 'error'
        }
    })()
    console.log(data)
    if (data.length == 0) {
        return <div className="flex center-align"><ErrorBox icon={loading} errorText="please wait...."  ></ErrorBox></div>
    }
    else if (type== '' ||topicId == '' || difficulty == "") {
        return (
            <div className="flex center-align">
                <ErrorBox icon={systemError} errorText="Quiz Topic or Quiz Type not selected" navigateTo="/" navigateText="home" />
            </div>
        )
    } else if (data === 'error' || data == false||data["response_code"]==1) {
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
                if (String(options[i]) === 'true') {
                    return (keys[i])
                }
            }
        }

        let correctAnswerData = data.map((ele) => [ele.id, correctAnswer(ele.correct_answers)])
        dispatch(setFetchData(correctAnswerData))
        dispatch(setQuizResultShown(false))
        const submitRequest = () => {
            confirm('Are you sure to submit?') ? navigate('/result') : '';
        }

        return (
            <>
                <div>
                    <h2>{type}</h2>
                </div>
                <div>
                    <section className="flex flex-direction-row flex-wrap justify-space-between margin-auto" style={{ width: '60%' }}>
                        <div className="flex center-align"><h4>FULL MARKS :{data.length * 2}</h4></div>
                        <div className="flex center-align"><h4>TOPIC:{topic}</h4>
<h4>LEVEL:{difficulty}</h4></div>
                    </section>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" onSubmit={(e) => { e.preventDefault() }}>
                    <input type="hidden" name="apikey" value="f713cda-77c2-464f-9705-99654497ad48" />
                    <input type="hidden" name="subject" value="quizTopic submission" />
                    <div>
                        {data.map((ele, index1) => (
                            <Suspense fallback={<div>Loading...</div>}>  <QuestionNanswer
                                key={ele.id}
                                questionID={ele.id}
                                question={ele.question}
                                index={index1}
                                options={ele.answers}
                                marks={'02'}
                                multianswered={ele.multiple_correct_answers}
                            /></Suspense>
                        ))}

                    </div>
                    <div className="flex center-align">
                        <Buttons type="submit" btnName="submit" borderRadius="5px" fname={submitRequest} />
                    </div>
                </form>

            </>)
    }

    return null;
}

export default Question;
