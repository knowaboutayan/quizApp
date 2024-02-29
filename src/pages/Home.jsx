import { codequiz, quiz1 } from '../ImagesImport/Images'
import QuizDetailsBox from '../components/QuizDetalsBox'

import '../css/styleGeneral.css'

import Buttons from '../buttons/Buttons'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const quizTypeDetails=[{
        quizID:'General Knowledge',
        quizName:"General Knowledge Quiz",
       icon:quiz1
    },{
        quizID:'Coding Knowledge',
        quizName:"Coding Quiz",
        icon:codequiz
    }]
  const navigate=useNavigate()
    return (
        <>
            <div className="margin-auto  border box-shadow ">
                <section className=' background-box ' >
                    <div className='flex flex-direction-row flex-wrap  center-align,' style={{width:'60%',minWidth:'320px',padding:"10px 20px",boxSizing:'border-box'}}>
                        <h1 style={{margin:'15px'}}>
                            CODING QUIZ, CHECK YOUR SKILL AND KNOWLEDGE!
                        </h1>
                        
                        <h5  style={{margin:'15px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam labor
                            e odio adipisci.
                        </h5>
                        <div>
                    <Buttons fname={()=>navigate('/quiz_process')}  btnName='start quiz' borderRadius='10px'   />
                   </div>
                    </div>
                   
                </section>
                <div className='flex flex-wrap flex-direction-row center-align transition'>
                    {quizTypeDetails.map((item)=><QuizDetailsBox quizName={item["quizName"]} icon={item['icon']} quizID={item['quizID']} />)}
                    
                </div>
            </div>
        </>)
}

export default Home