import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import './index.scss'


const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact = "True" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "True" activeclassname = "active" className = "about-link" to = "/about">
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "True" activeclassname = "active" className = "project-link" to = "/projects">
                <FontAwesomeIcon icon= {faList} color = "#4d4d4e"/>
            </NavLink>
            <NavLink exact = "True" activeclassname = "active" className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = "noreferrer" href = 'https://www.linkedin.com/in/jason-baek-574276211/'>
                    <FontAwesomeIcon icon = {faLinkedin} color = "4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = "noreferrer" href = 'https://github.com/bkjwjason'>
                    <FontAwesomeIcon icon = {faGithub} color = "4d4d4e" />
                </a>
            </li>
        </ul>
    </div>


)


export default Sidebar