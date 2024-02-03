import menu from '../assets/images/icon-menu.svg'
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <>
           <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
                <li>
                <Link to="/Homepage">Inicio</Link>
                </li>
                <li>
                    <a href="http://localhost:3000/login">Login</a>
                </li>

                <li>
                <Link to="/Sobre_Nosotro">Nunu y Nosotros</Link>
                </li>
                <li>
                <Link to="/Noticias_LoL">Noticias</Link>
                </li>   
           </ul>
           <img className="w-10 h-4 cursor-pointer sm:hidden" src={menu} alt="manu" /> 
        </>
    )
}
  
  
  
