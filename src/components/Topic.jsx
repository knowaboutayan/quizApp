
import { useDispatch } from 'react-redux';
import '../css/TopicBox.css'
import '../css/styleGeneral.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../buttons/Buttons';
const Topic = ({ methodName = null, topicDetails = {}, navigateTo = null }) => {
    const { image, topicName } = topicDetails
    const [isTopicSelected, setTopicSelected] = useState(false)
    const dispatch = useDispatch()
    const styleOnSelected = {
        zindex: '0',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        visibility: 'visible',

    }
    const navigate = useNavigate()

    return (
        <>

            <div id="topicBox" style={isTopicSelected ? { styleOnSelected } : {}} className="flex background-blur justify-space-between flex-direction-column box-shadow  transition" onClick={() => { dispatch(methodName(topicName)); { setTopicSelected((current) => !current); navigate(`/${navigateTo}`) } }}>
                {(isTopicSelected) ? <div><i className='fa fa-check' style={{ fontSize: '35px', color: "green" }}></i></div> : ""}
                <div className='flex center-align'>
                    <img src={image} alt='' />
                </div>
                <div className="flex center-align">
                    <h3>{topicName}</h3>
                </div>
                <div id='selectTopic' style={{ position: isTopicSelected ? 'fixed' : 'absolute' }} className='flex center-align'>
                    <Buttons type='button'  btnName={isTopicSelected ? "selected" : "select"} padding={'20px'} width={"250px"} borderRadius={'20px'} />
                </div>
            </div>
        </>)
}
export default Topic