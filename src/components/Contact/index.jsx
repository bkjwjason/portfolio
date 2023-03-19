import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {

    return (
        <>
            <div className = 'container contact-page'>
                <div className = 'text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>I'm always keen on working on projects together. If you are interested,
                        reach out to me!
                    </p>
                    <a href='mailto:bkjwjason@gmail.com' target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} color = "orange" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact