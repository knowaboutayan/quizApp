import '../css/Button.css'
const Buttons = ({ type = 'button', width = '200px', borderRadius = '25px', btnName = 'button', padding = '', bgcolor = '', fname = '', returnVl = '',disable=false }) => {
    return (
        <button className="quiz-button" type={type} style={{ widows: width, borderRadius: borderRadius, backgroundColor: bgcolor, padding: padding }} disabled={disable} onClick={() => fname(returnVl)}   >{btnName}</button>
    )
}
export default Buttons