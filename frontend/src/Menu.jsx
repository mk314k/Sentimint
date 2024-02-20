import { Link } from 'react-router-dom';

import SentimintLogoLight from './icons/sentimintLogoLight.svg';

function Menu() {
    return (
        <div className='menu'>
            <img src={SentimintLogoLight} className='menu__header' />
            <div className='menu__section'>
                <div className='menu__section__header'>MAIN</div>
                <Link to='/' className='menu__item'>
                    <i className="material-icons">home</i>
                    <div className='menu__item__label'>Overview</div>
                </Link>
                <a className='menu__item'>
                    <i className="material-icons">star</i>
                    <div className='menu__item__label'>Reviews</div>
                </a>
                <a className='menu__item'>
                    <i className="material-icons">forum</i>
                    <div className='menu__item__label'>Social</div>
                </a>
                <a className='menu__item'>
                    <i className="material-icons">signal_cellular_alt</i>
                    <div className='menu__item__label'>Compare</div>
                </a>
            </div>

            <div className='menu__section'>
                <div className='menu__section__header'>PINNED</div>
                <Link to='/sentiment' className='menu__item'>
                    <i className="material-icons">favorite</i>
                    <div className='menu__item__label'>Sentiment</div>
                </Link>
                <a className='menu__item'>
                    <i className="material-icons">location_on</i>
                    <div className='menu__item__label'>Locations</div>
                </a>
            </div>
        </div>
    );
}

export default Menu