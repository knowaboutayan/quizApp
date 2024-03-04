import { useNavigate } from "react-router-dom"
import Buttons from "../buttons/Buttons"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorBox from "../Error/ErrorBox";
import systemError from '../images/systemError.png'
import { setDisclaimerAccept, setFetchData, setUserResponse } from "../reduxTools/slice";
const Disclaimer = () => {
    const navigate = useNavigate();
    const [checked, setChcked] = useState(false)
    const [topic, difficulty, type, quizID, topicId] = [useSelector(state => state.quizTopic), useSelector(state => state.quizDifficulty), useSelector(state => state.quizType), useSelector(state => state.quizId), useSelector(state => state.topicId)];

    const dispatch = useDispatch()
    if (topic == '' || type == '' || difficulty == '')
        return <ErrorBox icon={systemError} errorText="Quiz Topic or Quiz Type not selected" navigateTo="/" navigateText="home" />

    return (
        <div>
            <h2>Disclaimer and User Protocols</h2>
            <section className="flex flex-direction-row flex-wrap center-align margin-auto " style={{ width: '60%' }}>
                <div className="flex  margin-auto"><h3>{String(type).toUpperCase()}</h3></div>
                </section>
                <section className="flex flex-direction-row flex-wrap justify-space-between margin-auto " style={{ width: '60%' }}>
                <div className="flex margin-auto"><h3>Topic:{topic}</h3></div>|
                <div className="flex margin-auto"><h3>Level:{difficulty}</h3></div>
            </section>
            <div style={{ width: "60%", minWidth: '320px', border: '2px solid gray', padding: '20px', borderRadius: '20px', marginBottom: "25px" }} className="box-shadow background-blur margin-auto">

                <h4>
                    <big>
                        <u> Accuracy and Reliability:</u>
                    </big>
                    The ByteBrain provided in this application are designed for educational and entertainment purposes. While we make every effort to ensure the accuracy and reliability of the information presented, we cannot guarantee the correctness of every answer or the completeness of every topic covered.
                </h4>
                <h4>
                    <big>
                        <u>Accuracy and Reliability:</u></big> The quizzes provided in this application are designed for educational and entertainment purposes. While we make every effort to ensure the accuracy and reliability of the information presented, we cannot guarantee the correctness of every answer or the completeness of every topic covered.
                </h4>
                <h4>
                    <big>
                        <u>Professional Advice:</u></big> The results obtained from the quizzes should not be considered as professional advice. Users are encouraged to verify information from credible sources and consult professionals for specific inquiries or concerns.
                </h4>
                <h4>
                    <big>
                        <u> User Responsibility:</u></big> By proceeding with the quiz, you acknowledge and accept that the developers and creators of this application shall not be held responsible for any inaccuracies, errors, or consequences arising from the use of the information provided in the quizzes.
                </h4> <h4>
                    <big>

                        <u> Cautious Engagement:</u></big> Users are advised to exercise caution and discretion when interpreting quiz results and sharing quiz outcomes with others.
                </h4>  <h4>
                    <big>

                        <u>  Page Refresh Prevention:</u></big> Please note that refreshing the page during the quiz may result in the loss of your progress. To avoid losing your current status, refrain from refreshing the page until you have completed the quiz.
                </h4>


                <h5 className="margin-auto">
                    <label> <input type="checkbox" value={checked} onClick={() => setChcked(prev => !prev)} required/> I have read and accept the disclaimer. </label>
                </h5>
                <div className=" flex center-align margin-auto">
                    <Buttons btnName="Start Quiz" width="250px" bgcolor={(checked) ? 'green' : 'gray'} disable={!checked} fname={(checked) ? () => {
                        dispatch(setDisclaimerAccept(true)); 
                        dispatch(setUserResponse([]));
                        dispatch(setFetchData([])); navigate('/question');
                    } : ''} borderRadius="5px"></Buttons>
                </div>
            </div>
        </div>
    )
}
export default Disclaimer