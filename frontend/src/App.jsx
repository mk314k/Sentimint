import './App.scss';
import Menu from './Menu.jsx';
import Overview from './Overview.jsx';
import MagnifyingGlassIcon from './icons/magnifying-glass.svg';
import CogIcon from './icons/cog.svg';
import BellIcon from './icons/bell.svg';
import LifeAlive from './icons/life-alive.svg';


function App() {

    return (
        <>
            <Menu />
            <div className='content'>
                <div className='search'>
                    <img src={MagnifyingGlassIcon} className='search__icon' />
                    <span className='search__text'>Search</span>
                    <img src={BellIcon} className='search__icon--right' />
                    <img src={CogIcon} className='search__icon--right' />
                    <img src={LifeAlive} className='search__icon--right' />
                </div>
                <Overview />
            </div>
        </>
    )
}

export default App
