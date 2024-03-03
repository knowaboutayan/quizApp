import { useDispatch, useSelector } from "react-redux"
import ChooseTopic from "../components/ChooseTopic"
import * as img from '../ImagesImport/Images'
import { setQuizId, setQuizTopic, setTopicId } from "../reduxTools/slice"
const QuizProcess = () => {
  const dispatch = useDispatch()
  const quizId = useSelector(state => state.quizId)

  class Topic {
    constructor(image = '', topicName = '',topicId=null) {
      this.image = image;
      this.topicId=topicId;
      this.topicName = topicName.split('_').join(" ").toLocaleUpperCase();
      
    }
  }

  const codingTopicList = [
    new Topic(img.sql, 'SQL', 'SQL'),
    new Topic(img.linux, 'LINUX', 'LINUX'),
    new Topic(img.docker, 'DOCKER', 'DOCKER'),
    new Topic(img.bash, 'BASH', 'BASH'),
    new Topic(img.devops, 'DEVOPS', 'DEVOPS'),
    new Topic(img.python, 'PYTHON', 'PYTHON'),
    new Topic(img.java, 'JAVA', 'JAVA'),
    new Topic(img.js, 'JavaScript', 'JavaScript'),
    new Topic(img.css, 'CSS', 'CSS'),
    new Topic(img.html, 'HTML', 'HTML')
];

const generalKnowledgeQuizTopicList= [
  new Topic(img.general_knowledge, 'GK', 9),
  new Topic(img.flim, 'Flim', 11),
  new Topic(img.arts, 'arts', 25),
  new Topic(img.history, 'history', 23),
  new Topic(img.polytics, 'polytics', 24),
  new Topic(img.geo, 'geography', 'geography'),
  new Topic(img.math, 'mathematics', 19),
  new Topic(img.sports, 'sports', 21),
  new Topic(img.nature, 'NATURE', 17)
];


  const selectTopicList = (quizId) => {
    switch (Number(quizId)) {
      case 1:
        dispatch(setQuizId(1))

        return generalKnowledgeQuizTopicList
        
      case 2:

        dispatch(setQuizId(2))
        return codingTopicList
      default:
        return generalKnowledgeQuizTopicList
    }
  }

  

  return (
    <>
      <div>
        <ChooseTopic title={'TOPIC'} setTopicName={(res)=>setQuizTopic(res)}  methodName={setTopicId} topicDetails={selectTopicList(quizId)} navigateTo={"choose_difficulty"} />

      </div>

    </>
  )
}
export default QuizProcess