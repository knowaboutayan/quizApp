import { useDispatch } from "react-redux"
import { useEffect} from "react";
import { easy, hard, medium } from "../ImagesImport/Images"
import ChooseTopic from "../components/ChooseTopic"
import { setQuizDifficulty, setQuizResultShown } from "../reduxTools/slice"

const SelectDifficulty = () => {
   useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  const dispatch = useDispatch()
  const difficultyDetails = [{
    image: easy,
    topicId: "EASY",
    topicName: "EASY"

  }, {
    image: medium,
    topicId: "MEDIUM",
    topicName: "MEDIUM"
  },
  {
    image: hard,
    topicId: "HARD",
    topicName: "HARD"
  }
  ]
  dispatch(setQuizResultShown(false))
  return (
    <ChooseTopic methodName={setQuizDifficulty} title={'DIFFICULTY'} topicDetails={difficultyDetails} navigateTo={"disclaimer"} />

  )
}
export default SelectDifficulty