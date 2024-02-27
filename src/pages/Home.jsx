import { codequiz, quiz1 } from '../ImagesImport/Images'
import QuizDetailsBox from '../components/QuizDetalsBox'

import '../css/styleGeneral.css'
import code from'../images/html.png'
const Home = () => {
    const quizTypeDetails=[{
        quizID:1,
        quizName:"General Knowledge Quiz",
       icon:quiz1
    },{
        quizID:2,
        quizName:"Coding Quiz",
        icon:codequiz
    }]
    return (
        <>
            <div className="margin-auto  border box-shadow ">
                <section>
                    <div>
                        <h1>
                            CODING QUIZ, CHECK YOUR SKILL AND KNOWLEDGE!
                        </h1>
                        <h5>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam labore odio adipisci.
                        </h5>
                    </div>
                    <div id='imagBox'>
                        <imag src={code} width='20px'/>
                    </div>
                </section>
                <div className='flex flex-wrap flex-direction-row center-align transition'>
                    {quizTypeDetails.map((item)=><QuizDetailsBox quizName={item["quizName"]} icon={item['icon']} quizID={item['quizID']} />)}
                    
                </div>
            </div>
        </>)
}

export default Home