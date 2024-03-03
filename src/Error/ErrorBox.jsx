import { Link, useNavigate } from "react-router-dom"

const ErrorBox=({icon='',errorText='',navigateTo='',navigateText='',timeOutTime=''})=>{
    let  x
    const navigation=useNavigate()
    return (
        <div style={{width:'100wh',height:'95vh'}} className='flex flex-direction-column center-align'>
            <div>
                {(icon=='')?<p></p>:<img src={icon} alt={errorText} width={'200px'}/>}
            </div>
            <div><h3>{errorText}</h3></div>
            <div>
            {(navigateTo=='')?'':<h4> <Link to={navigateTo}> {navigateText} </Link></h4>}
            {(timeOutTime!='')?x=setTimeout(()=>navigation(navigateTo),timeOutTime='1000'):""}
            </div>
<i class="fa fa-refresh" aria-hidden="true" onclick={()=>location.reload()}></i>    
    </div>
    )
}
export default ErrorBox