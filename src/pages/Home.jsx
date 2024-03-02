import { useEffect} from "react";
import { codequiz, quiz1 } from '../ImagesImport/Images'
import QuizDetailsBox from '../components/QuizDetalsBox'

import '../css/styleGeneral.css'

import Buttons from '../buttons/Buttons'
import { useNavigate } from 'react-router-dom'
const Home = () => {
   useEffect(() => {
  window.scrollTo(0, 0)
}, [])
    const quizTypeDetails = [{
        quizID: 1,
        quizName: "General Knowledge Quiz",
        icon: quiz1
    }, {
        quizID: 2,
        quizName: "Coding Quiz",
        icon: codequiz
    }]
    const navigate = useNavigate()
    return (
        <>
            <div className="margin-auto  border box-shadow ">
                <section className=' background-box ' >
                    <div className='flex flex-direction-row flex-wrap  center-align,' style={{ width: '60%', minWidth: '320px', padding: "10px 20px", boxSizing: 'border-box' }}>
                        <h1 style={{ margin: '15px' }}>
                           <main> ByteBrain:</main> Delve into Coding and General Knowledge!
                        </h1>

                        <h3 style={{ margin: '15px' }}>Dive into coding and general knowledge with interactive quizzes and engaging content. Expand your skills and broaden your horizons!
                        </h3>
                        <div>
                            <Buttons fname={() => navigate('/quiz_process')} btnName='start quiz' borderRadius='10px' />
                        </div>
                    </div>

                </section>
                <div className='flex flex-wrap flex-direction-row center-align transition'>
                    {quizTypeDetails.map((item) => <QuizDetailsBox quizName={item["quizName"]} icon={item['icon']} quizID={item['quizID']} />)}
                </div>
            </div>
        </>)
}

export default Home