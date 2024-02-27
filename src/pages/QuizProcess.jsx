import { useSelector } from "react-redux"
import ChooseTopic from "../components/ChooseTopic"
import * as img from '../ImagesImport/Images'
import { setQuizTopic } from "../reduxTools/slice"
const QuizProcess = () => {
  const topicDetails = [{
    image: img.python,
    topicName: "PYTHON"

  }, {
    image: img.java,
    topicName: "JAVA"
  },
  {
    image: img.js,
    topicName: "JavaScript"
  },
  {
    image: img.css,
    topicName: "CSS"
  },
  {
    image: img.html,
    topicName: "HTML"
  },
  {
    image: img.sql,
    topicName: "SQL"
  },
  {
    image: img.linux,
    topicName: "LINUX"
  },
  {
    image: img.docker,
    topicName: "DOCKER"
  },
  {
    image: img.bash,
    topicName: "BASH"
  },
  {
    image: img.devops,
    topicName: "DEVOPS"
  },]


  return (
    <>
      <div>
        <ChooseTopic title={'TOPIC'} methodName={setQuizTopic} topicDetails={topicDetails} navigateTo={"choose_difficulty"} />

      </div>

    </>
  )
}
export default QuizProcess