import { useDispatch, useSelector } from "react-redux";
import '../css/Result.css'; // Import the CSS file
import Buttons from "../buttons/Buttons";
import ErrorBox from "../Error/ErrorBox";
import { useEffect, useState } from 'react';
import { setQuizResultShown } from "../reduxTools/slice";
import { useNavigate } from "react-router-dom";

const Result = () => {
    
const dispatch=useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const answers = useSelector(state => state.fetchedData);
    const answersRespond = useSelector(state => state.answersRespond);
    let marks = 0;
    let correctAns = 0;
    // Calculate marks obtained
    console.log(answers)
    const marksObtained = () => {
        answers.forEach(element => {
            answersRespond.forEach(responseEle => {
                if (element[0] === responseEle['questionID'] && element[1] === `${responseEle['response']}_correct`) {
                    marks = marks + Number(responseEle['marks']);
                    correctAns++;

                }
            });
        });
        return { marks, correctAns };
    }

    const navigate = useNavigate();

    // Calculate total marks
    const totalMarks = answers.length * 2;

    // Calculate total attempted questions
    const totalAttempted = answersRespond.length;

    // Calculate grade based on marks obtained
    const calculateGrade = () => {
        const percentage = (marksObtained().marks / totalMarks) * 100;
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

    if (answers.length === 0) {
        return (
            <div className="flex center-align">
                <ErrorBox errorText="Form Not submitted" icon={Image.answersRespond} navigateTo="/" timeOutTime={2000} navigateText="home" />
            </div>
        );
    } else {
        localStorage.clear();
        dispatch(setQuizResultShown(true));
        marksObtained();
        return (
            <div>
                <h2>RESULT</h2>
                <div className="result-container flex flex-direction-column flex-wrap">
                    <h3>Total Marks: {totalMarks}</h3>
                    <h3>Total Questions: {answers.length}</h3>
                    <h3>Total Attained: {totalAttempted}</h3>
                    <h3>Total Correct Answer: {correctAns}</h3>
                    <h3>Mark Obtained: {marks}</h3>
                    <h3>Grade: {calculateGrade()}</h3>
                </div>
                <div className="flex flex-wrap center-align">
                    <Buttons btnName="Print" fname={() => window.print()} />
                    <Buttons btnName="Go to Home" fname={() => navigate('/')} />
                </div>
            </div>
        );
    }
}

export default Result;
