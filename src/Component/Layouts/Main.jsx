import Home from '../Home';
import { ThemeContext } from '../Provider/ThemeProvider';
import Header from './Header';
import Skills from '../Skills/Skills';
import Title from '../Title';
import ScrollableImage from '../ScrollableImage';
import AboutMe from '../AboutMe';
import Contact from '../Contact/Contact';
import Bottom from '../Bottom';
import Projects from '../Projects/Projects';

const Main = () => {
    return (
        <div>
            <div className='container mx-auto overflow-hidden'>
                <Header></Header>
                <Home></Home>
                <Title title={"About Me"}></Title>
                <AboutMe></AboutMe>
                <Title title={"Skills"}></Title>
                <Skills></Skills>
                <Title title={"Projects"}></Title>
                <Projects></Projects>
                <Title title={"Contact"}></Title>
                <div className="mb-24">
                    <Contact></Contact>
                </div>
                <Bottom></Bottom>
            </div>
        </div>

    );
};

export default Main;