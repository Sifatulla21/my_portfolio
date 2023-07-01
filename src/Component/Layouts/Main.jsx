import Home from '../Home';
import Header from './Header';
import ParticleBg from '../ParticleBg/ParticleBg';

const Main = () => {
    return (
        <div className="container mx-auto">
            <ParticleBg></ParticleBg>
            <Header></Header>
            <Home></Home>
        </div>
    );
};

export default Main;