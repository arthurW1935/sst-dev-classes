import Typewriter from "../Typewriter/Typewriter";
import "./Hero.css";

function Hero(){
    return (
        <main>
            <h1>My Portfolio</h1>
            <Typewriter
                textArray={[
                    "Hello, World!",
                    "I am a software engineer.",
                    "I am an AI enthusiast."
                ]}
                typingSpeed={100}
                deletingSpeed={50}
            />
        </main>
    )
}
export default Hero;