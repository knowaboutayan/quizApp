import { Link, NavLink } from 'react-router-dom'
import '../css/styleGeneral.css'
import './Header.css'
const Header=(logo="")=>{
    return(
        <div className="header flex flex-direction-row border justify-space-between">
            <div>
                <img src={logo} alt='logo.png' width={'200px'} className='border'/>
            </div>
            <div >
                <nav className='flex flex-direction-row flex-wrap'>
                    <NavLink to={""}>
                        HOME
                    </NavLink>
                    <NavLink>
                        About
                    </NavLink>
                    <NavLink >
                        contact
                    </NavLink>
                </nav>
            </div>
            <div className='flex flex-direction-row'>
                <i className='fa fa-facebook'></i>
               
            </div>
        </div>
    )
}

export default Header