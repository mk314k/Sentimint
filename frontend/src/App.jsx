import './App.scss';
import Overview from './Overview.jsx';
import Sentiment from './Sentiment.jsx'
import SentimentAnalysisComponent from './sentimint.jsx';
import MagnifyingGlassIcon from './icons/magnifying-glass.svg';
import CogIcon from './icons/cog.svg';
import BellIcon from './icons/bell.svg';
import LifeAlive from './icons/life-alive.svg';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SentimintLogoLight from './icons/sentimintLogoLight.svg';

function Menu() {
    const location = useLocation();
    let sentimentClass = 'menu__item';
    let homeClass = 'menu__item';

    if (location.pathname == '/sentiment') {
        sentimentClass = 'menu__item active';
    } else {
        homeClass = 'menu__item active';
    }

    // menu items
    const mainMenuItems = [
        { to: '/', icon: 'home', label: 'Overview', class: homeClass },
        { to: '/sentiment', icon: 'favorite', label: 'Sentiment', class: sentimentClass },
        { to: '/', icon: 'star', label: 'Reviews', class: 'menu__item' },
        { to: '/', icon: 'signal_cellular_alt', label: 'Compare', class: 'menu__item' },
    ];

    // pinned items
    const pinnedItems = [
        { to: '/analyze', icon: 'model_training', label: 'ABSA Model', class: 'menu__item' },
        { to: '/', icon: 'location_on', label: 'Locations' },
        { to: '/', icon: 'forum', label: 'Social' },
    ];

    return (
        <div className='menu flex-vertical'>
            <img src={SentimintLogoLight} className='menu__header' />
            <div className='menu__section'>
                <div className='menu__section__header'>MAIN</div>
                {mainMenuItems.map((item, index) => (
                    <Link to={item.to} className={item.class} key={index}>
                        <i className="material-icons menu__item__icon">{item.icon}</i>
                        <div className='menu__item__label'>{item.label}</div>
                    </Link>
                ))}
            </div>

            <div className='menu__section'>
                <div className='menu__section__header'>PINNED</div>
                {pinnedItems.map((item, index) => (
                    <Link to={item.to} className='menu__item' key={index}>
                        <i className="material-icons menu__item__icon">{item.icon}</i>
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
            <main className='content flex-vertical'>
                <div className='search flex-horizontal'>
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
                    <Route path ="/analyze" element={<SentimentAnalysisComponent />} />
                </Routes>
            </main>
        </Router>
    )
}

export default App
