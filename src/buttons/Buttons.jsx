import '../css/Button.css'
const Buttons=({type='button',width='200px',borderRadius='25px',btnName='button',padding= '',bgcolor='',fname='',returnVl=''})=>{
    return(
        <button className="quiz-button" type={type} style={{widows:width,borderRadius:borderRadius,backgroundColor:bgcolor,padding:padding}} onClick={()=>fname(returnVl)}>{btnName}</button>
    )
}
export default Buttons