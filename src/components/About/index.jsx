import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faPython, faJava, faCss3, faJsSquare} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div className = 'container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <p>
                    I'm currently a Y1 student studying computer science 
                    at the National University of Singapore.
                </p>
                <p>
                    Programming has always felt like magic to me. It feels amazing to be able 
                    to create things out of thin air using programming languages - just like magic.
                </p>
                <p>
                    It is my goal to harness the power of technology to create software that enriches
                    our daily lives.
                </p>
                <p>
                    Some of the skills I'm comfortable using are listed on the right.
                </p>
            </div>
            <ul>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = 'https://www.python.org/'>
                        <FontAwesomeIcon icon = {faPython} color = "#ffe66f" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = 'https://developer.mozilla.org/en-US/docs/Web/HTML'>
                        <FontAwesomeIcon icon = {faHtml5} color = "#F06529" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = 'https://developer.mozilla.org/en-US/docs/Web/CSS'>
                        <FontAwesomeIcon icon = {faCss3} color = "#28A4D9" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                        <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = 'https://react.dev/'>
                        <FontAwesomeIcon icon = {faReact} color = "#5ED4F4" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = "noreferrer" href = 'https://www.java.com/en/'>
                        <FontAwesomeIcon icon = {faJava} color = "#1564be" />
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default About