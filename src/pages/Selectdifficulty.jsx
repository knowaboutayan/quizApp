import { useDispatch } from "react-redux"
import { easy, hard, medium } from "../ImagesImport/Images"
import ChooseTopic from "../components/ChooseTopic"
import { setQuizDifficulty, setQuizResultShown, setQuizType } from "../reduxTools/slice"

const SelectDifficulty = () => {
  const dispatch = useDispatch()
  const difficultyDetails = [{
    image: easy,
    topicName: "EASY"

  }, {
    image: medium,
    topicName: "MEDIUM"
  },
  {
    image: hard,
    topicName: "HARD"
  }
  ]
  dispatch(setQuizResultShown(false))
  return (
    <ChooseTopic methodName={setQuizDifficulty} title={'DIFFICULTY'} topicDetails={difficultyDetails} navigateTo={"question"} />

  )
}
export default SelectDifficulty