import { useDispatch, useSelector } from "react-redux";
import '../css/Result.css'; // Import the CSS file
import resultImg from '../images/result.png'
import Buttons from "../buttons/Buttons";
import ErrorBox from "../Error/ErrorBox";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { setQuizResultShown } from "../reduxTools/slice";
const Result = () => {
    const dispatch=useDispatch()
    const answers = useSelector(state => state.fetchedData);
    const answersRespond = useSelector(state => state.answersRespond);
    console.log(answers, answersRespond)
    let marks = 0;
    let correctAns = 0;
    // Calculate marks obtained
    const marksObtained = () => {
        answers.forEach(ele => {
            for (let i = 0; i < answersRespond.length; i = i + 2) {
                if (ele[0] === answersRespond[i]) {
                    // Check if the response matches and add marks accordingly
                    (ele[1] === `${answersRespond[i + 1].response}_correct`) ? marks = marks+ 2 : '';
                    (ele[1] === `${answersRespond[i + 1].response}_correct`) ? correctAns++: '';
                }
            }
        });
        return marks;
    }
    const navigate=useNavigate()

    // Calculate total marks
    const totalMarks = answers.length * 2;

    // Calculate total attempted questions
    const totalAttempted = answersRespond.length / 2;

    // Calculate grade based on marks obtained
    const calculateGrade = () => {
        const percentage = (marksObtained() / totalMarks) * 100;
        if (percentage >= 80) {
            return 'A';
        } else if (percentage >= 60) {
            return 'B';
        } else if (percentage >= 40) {
            return 'C';
        } else if (percentage >= 20) {
            return 'D';
        } else {
            return 'E';
        }
    }
    {
        if (answers.length == 0) {
            return (
                <div className="flex center-align">
                    <ErrorBox errorText="Form Not submitted" icon="" navigateTo="/" timeOutTime={2000}navigateText="home" />
                </div>
            )

        }
        else {
            localStorage.clear()
            dispatch(setQuizResultShown(true))
            return (
                <div>
                    <h2>RESULT</h2>

                    <div className=" result-container flex flex-direction-row flex-wrap center-align">

                        <div>
                            <h3>Total Marks: {totalMarks}</h3>
                            <h3>Total Questions: {answers.length}</h3>
                            <h3>Total Attempted: {totalAttempted}</h3>
                            <h3>Total Correct Answer: {correctAns}</h3>
                            <h3>Mark Obtained: {marksObtained()}</h3>
                            <h3>Grade: {calculateGrade()}</h3>
                        </div>

                        <div className="flex center-align">
                            <img src={resultImg} width={'50%'} />
                        </div>
                    </div>
                    <div className="flex flex-wrap center-align">
                        <Buttons btnName="print" fname={() => window.print()}></Buttons>
                        <Buttons btnName="Go to Home" fname={() => navigate('/')}></Buttons>
                    </div>
                </div>
               
            );
        }
    }
}
export default Result;