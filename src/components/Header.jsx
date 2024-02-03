 import logo from '../assets/images/songofnunu_logo.png'
 import { NavBar } from './NavBar'
 export const Header = () => {
    return(
        <header className=" flex place-content-between items-center mb-8">
            <img src={logo} alt="Logo" className='style="width: 50px; height: 50px;"'/>
            <NavBar/>
        </header>
    )
}