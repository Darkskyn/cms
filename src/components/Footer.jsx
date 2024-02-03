import './css/estilo.css'
import logo from '../assets/images/songofnunu_logo.png'
import git from '../assets/images/git.png'
import lol from '../assets/images/lol.jpg'
export const Footer = () => {
    return (
        <footer className="footer">
          <img className="logo" src={logo} alt="manu" /> 
           <div className="social-icons-container">
                <a href="https://github.com/Darkskyn">
                <img src={git} className="social-icon"></img>
                </a>
                <a href="https://www.leagueoflegends.com/es-es/">
                    <img src={lol} className="social-icon"></img>
                </a>
           </div>
           <ul className="footer-menu-container">
                <li className="menu-item">WILLUMP Y NUNU</li>
                
           </ul>
           <span className="copyright">&Copy;2024, Darkskyn. All rights reserved</span>
        </footer>
    )
}