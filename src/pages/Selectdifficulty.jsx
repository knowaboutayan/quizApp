import { easy, hard, medium } from "../ImagesImport/Images"
import ChooseTopic from "../components/ChooseTopic"
import { setQuizDifficulty, setQuizType } from "../reduxTools/slice"


const SelectDifficulty=()=>{
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
    return(
        <ChooseTopic methodName={setQuizDifficulty} title={'DIFFICULTY'} topicDetails={difficultyDetails} navigateTo={"question"}/>

    )
}
export default SelectDifficulty