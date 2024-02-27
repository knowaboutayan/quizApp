import '../css/styleGeneral.css'
import '../css/QuizDetailsBox.css'
import { useDispatch, useSelector } from 'react-redux'
import { setQuizType } from '../reduxTools/slice'
import { useNavigate } from 'react-router-dom'
const QuizDetailsBox = ({ icon = "", quizName = "", quizID = "" }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    {
        if(localStorage.getItem('quizTopic')!=null || localStorage.getItem('quizTopic')!=''){
            localStorage.removeItem('quizTopic')
        }
    }
    return (
        <div className="border margin-auto  background-blur" id='quizBox' onClick={() => { dispatch(setQuizType(quizID)); navigate('quiz_process') }}>
            <div>
                <img src={icon} width="80px" />
            </div>
            <div>
                <h3>
                    {quizName}
                </h3>
            </div>
            <div id='start'> <h3 style={{fontWeight:'lighter'}}>start here <i className="fa fa-arrow-right"></i></h3></div>

        </div>

    )
}
export default QuizDetailsBox