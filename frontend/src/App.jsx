import './App.scss';
import Overview from './Overview.jsx';
import Sentiment from './Sentiment.jsx'
import Search from './Search.jsx';
import MagnifyingGlassIcon from './icons/magnifying-glass.svg';
import CogIcon from './icons/cog.svg';
import BellIcon from './icons/bell.svg';
import LifeAlive from './icons/life-alive.svg';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SentimintLogoLight from './icons/sentimintLogoLight.svg';

function Menu() {
    // menu items
    const mainMenuItems = [
        { to: '/', icon: 'home', label: 'Overview' },
        { to: '/', icon: 'star', label: 'Reviews' },
        { to: '/', icon: 'forum', label: 'Social' },
        { to: '/', icon: 'signal_cellular_alt', label: 'Compare' },
    ];

    // pinned items
    const pinnedItems = [
        { to: '/sentiment', icon: 'favorite', label: 'Sentiment' },
        { to: '/', icon: 'location_on', label: 'Locations' },
    ];

    return (
        <div className='menu'>
            <img src={SentimintLogoLight} className='menu__header' />
            <div className='menu__section'>
                <div className='menu__section__header'>MAIN</div>
                {mainMenuItems.map((item, index) => (
                    <Link to={item.to} className='menu__item' key={index}>
                        <i className="material-icons">{item.icon}</i>
                        <div className='menu__item__label'>{item.label}</div>
                    </Link>
                ))}
            </div>

            <div className='menu__section'>
                <div className='menu__section__header'>PINNED</div>
                {pinnedItems.map((item, index) => (
                    <Link to={item.to} className='menu__item' key={index}>
                        <i className="material-icons">{item.icon}</i>
                        <div className='menu__item__label'>{item.label}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}




function App() {

    return ( 
        <Router>
            <Menu />
            <div className='content'>
                <div className='search'>
                    <img src={MagnifyingGlassIcon} className='search__icon' />
                    <span className='search__text'>Search</span>
                    <img src={BellIcon} className='search__icon--right' />
                    <img src={CogIcon} className='search__icon--right' />
                    <img src={LifeAlive} className='search__icon--right' />
                </div>
                <Routes>
                    <Route path ="/" element={<Overview />} />
                    <Route path ="/Google-PM-Hackathon-2024/" element={<Overview />} />
                    <Route path ="/sentiment" element={<Sentiment />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
