import {Link} from "react-router-dom";
import Hero from "../components/Hero.jsx";
import WelcomeButtons from "../components/WelcomeButtons.jsx";

function WelcomePage() {
    return (
        <div>
            <Hero />
            <WelcomeButtons />
        </div>
    )
}

export default WelcomePage;