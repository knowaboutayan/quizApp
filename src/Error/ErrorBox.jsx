import { Link, useNavigate } from "react-router-dom"

const ErrorBox=({icon='',errorText='',navigateTo='',navigateText='',timeOutTime=''})=>{
    const navigation=useNavigate()
    return (
        <div>
            <div>
                {(icon=='')?<p></p>:<img src={icon} alt={errorText} width={'200px'}/>}
            </div>
            <div><h3>{errorText}</h3></div>
            <div>
            {(navigateTo=='')?'':<h4>Redirect to <Link to={navigateTo}> {navigateText} </Link></h4>}
            {(timeOutTime!='')?setTimeout(()=>navigation(navigateTo),timeOutTime):""}
            </div>
        </div>
    )
}
export default ErrorBox