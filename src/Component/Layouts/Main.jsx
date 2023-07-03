import Home from '../Home';
import { ThemeContext } from '../Provider/ThemeProvider';
import Header from './Header';
import Skills from '../Skills/Skills';
import Title from '../Title';
import ScrollableImage from '../ScrollableImage';
import AboutMe from '../AboutMe';

const Main = () => {
    return (
        <div className='container mx-auto overflow-hidden'>
            <Header></Header>
            <Home></Home>
            <Title title={"About Me"}></Title>
            <AboutMe></AboutMe>
            <Title title={"Skills"}></Title>
            <Skills></Skills>
            <Title title={"Projects"}></Title>
            <ScrollableImage></ScrollableImage>

        </div>
    );
};

export default Main;