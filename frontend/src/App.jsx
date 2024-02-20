import './App.scss';
import Menu from './Menu.jsx';
import Overview from './Overview.jsx';
import Search from './Search.jsx';
import MagnifyingGlassIcon from './icons/magnifying-glass.svg';
import CogIcon from './icons/cog.svg';
import BellIcon from './icons/bell.svg';
import LifeAlive from './icons/life-alive.svg';


function App() {

    return (
        <>
            <Menu />
            <div className='content'>
                <Search />
                <Overview />
            </div>
        </>
    )
}

export default App
