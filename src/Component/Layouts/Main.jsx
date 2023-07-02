import { useContext } from 'react';
import Home from '../Home';
import { ThemeContext } from '../Provider/ThemeProvider';
import Header from './Header';

const Main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Home></Home>
        </div>
    );
};

export default Main;