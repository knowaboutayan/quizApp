import '../css/Button.css'
const Buttons=({type='button',width='200px',borderRadius='25px',btnName='button',padding= '',fname='',returnVl=''})=>{
    console.log(fname,returnVl)
    return(
        <button class="quiz-button" type={type} style={{widows:width,borderRadius:borderRadius,padding:padding}} onClick={()=>fname(returnVl)}>{btnName}</button>
    )
}
export default Buttons