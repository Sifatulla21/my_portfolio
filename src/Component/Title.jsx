import Lottie from 'lottie-react';
import balls from '../assets/balls.json';
import line from '../assets/line.json';

const Title = ({title}) => {
    return (
        <div className="divider flex my-12 py-24">

        <div className="w-[300px] w-[1000px] sm:w-[1000px] lg:w-[300px]">
            <Lottie animationData={balls} loop={true}></Lottie>
        </div>

        <div>
            <div>
                <h1 className="text-6xl font-bold text-[#DAA520]">{title}</h1>
            </div>
        </div>


        <div className="w-[300px] w-[1000px] sm:w-[1000px] lg:w-[300px]">
            <Lottie animationData={balls} loop={true}></Lottie>
        </div>
    </div>
    );
};

export default Title;