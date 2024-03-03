

import Topic from './Topic'

const ChooseTopic = ({ methodName = "", title = "", navigateTo = null, topicDetails = [{}] ,setTopicName=''}) => {

    return (
        <div className='flex  flex-direction-column '>
            <h2 className='box-shadow'>CHOOSE A {title}</h2>
            <div className="flex flex-wrap flex-direction-row center-align" >
                {topicDetails.map((item) => <Topic  setTopicName={(setTopicName)?setTopicName:''}  methodName={methodName} key={topicDetails.indexOf(item)} topicDetails={item} navigateTo={navigateTo}  />)}
            </div>
        </div>
    )
}
export default ChooseTopic