import { Link, NavLink } from 'react-router-dom'
import '../css/styleGeneral.css'
import './Header.css'
import Buttons from '../buttons/Buttons'
const Header = ({ logo = "" }) => {
    return (
        <div className="header flex flex-direction-row border justify-space-between" style={{zIndex:"3"}}>
            <div>
                <img src={logo} alt='logo.png' width={'60px'} className='border' />
            </div>
            <div >
                <nav className='flex flex-direction-row flex-wrap'>
                    <NavLink id='NavLink' to={"/"}>
                        HOME
                    </NavLink>
                    <NavLink id='NavLink' to={"quiz_process"}>
                        TOPIC
                    </NavLink>
                </nav>
            </div>
            <div className='flex flex-direction-row'>
                <Buttons btnName='LinkedIn' bgcolor='#0A66C2' padding='10px' borderRadius='5px' />
            </div>
        </div>
    )
}

export default Header