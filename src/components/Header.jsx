import { Link, NavLink } from 'react-router-dom'
import '../css/styleGeneral.css'
import './Header.css'
import Buttons from '../buttons/Buttons'
const Header=({logo=""})=>{
    return(
        <div className="header flex flex-direction-row border justify-space-between">
            <div>
                <img src={logo} alt='logo.png' width={'60px'} className='border'/>
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
            <Buttons btnName='signUp' bgcolor='hotpink'/>
            </div>
        </div>
    )
}

export default Header