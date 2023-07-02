import { useContext } from 'react';
import Home from '../Home';
import { ThemeContext } from '../Provider/ThemeProvider';
import Header from './Header';
import Lottie from 'lottie-react';
import balls from '../../assets/balls.json';
import line from '../../assets/line.json';
import Skills from '../Skills/Skills';

const Main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Home></Home>
            <div className="divider flex my-12 py-24">
                
                    <div className="w-[300px] w-[40px] sm:w-[40px] lg:w-[300px]">
                        <Lottie animationData={balls} loop={true}></Lottie>
                    </div>
                
                <div>
                    <div>
                        <h1 className="text-6xl font-bold text-[#DAA520]">Skills</h1>
                    </div>
                    <div className="w-[150px] w-[40px] sm:w-[40px] lg:w-[150px]">
                        <Lottie animationData={line} loop={true}></Lottie>
                    </div>
                </div>
            
            
                <div className="w-[300px] w-[40px] sm:w-[40px] lg:w-[300px]">
                    <Lottie animationData={balls} loop={true}></Lottie>
                </div>
                </div>
                <Skills></Skills>
        </div>
    );
};

export default Main;