import './index.scss';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import {Link} from 'react-router-dom'
const Home = () => {
        const [text, count] = useTypewriter({
            words: [
                'coding.', 
                'hanging out with friends.',
                'learning new things.', 
                'exploring the world.',
                'eating good food.',
                'my family.'
            ], 
            loop: true,
            delaySpeed:2000
        });

    return (
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                    Hi, I'm Jason! <br></br>
                </h1>
                <h3>
                    Student at NUS / Aspiring SWE
                </h3>
                <h2>
                    <span> I love {text}</span>
                    <Cursor cursorColor = "#000000" />
                </h2>
                <Link to = "/About" className = "flat-button">About Myself</Link>
            </div>
        </div>

    );
}


export default Home