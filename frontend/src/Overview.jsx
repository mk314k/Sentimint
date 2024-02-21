import ArrowRightIcon from './icons/arrow-right.svg';
import ArrowUpCircleIcon from './icons/arrow-up-circle.svg';
import ArrowDownCircleIcon from './icons/arrow-down-circle.svg';
import Pie1Icon from './icons/pie1.svg';
import Pie2Icon from './icons/pie2.svg';
import Pie3Icon from './icons/pie3.svg';
import Pie4Icon from './icons/pie4.svg';
import Pie5Icon from './icons/pie5.svg';
import Pie6Icon from './icons/pie6.svg';
import Legend from './icons/legend.svg';
import Graph from './icons/graph.svg';
import Yelp from './icons/yelp.svg';
import CameraIcon from './icons/camera.svg';
import Google from './icons/google.svg';
import TripAdvisor from './icons/tripAdvisor.svg';
import Rating4 from './icons/rating4.svg';
import Rating5 from './icons/rating5.svg';
import RectangleGreenIcon from './icons/rectangleGreen.svg';
import RectangleRedIcon from './icons/rectangleRed.svg';
import RectangleYellowIcon from './icons/rectangleYellow.svg';

import { Link } from 'react-router-dom';

const analysisContent = [
    { title: 'Average new ratings', number: '4.7', change: '0.2'},
    { title: 'Number of new reviews', number: '12', change: '2'},
    { title: 'Positive sentiment', number: '80%', change: '-12%'}
]

function Overview() {
    return (
        <>
        <h1 className='welcome'>Welcome back, Laura</h1>
        <div className='analysis'>
            <div className="analysis__left">
                <div className='trends'>
                    <div className='analysis__header'>
                        <div className='analysis__title'>Trends for February</div>
                        <a className='analysis__link'>
                            <span>View details</span>
                            <img src={ArrowRightIcon} className='analysis__link__icon' />
                        </a>
                    </div>
                    <div className='analysis__content'>
                        {analysisContent.map((item, index)=>{
                            const isIncrease = parseFloat(item.change) >= 0;
                            const icon = isIncrease ? ArrowUpCircleIcon : ArrowDownCircleIcon;
                            const labelClassName = isIncrease ? '--success' : '--error';

                            return (
                                <div className='trends__section' key={index}>
                                    <div className='trends__title'>{item.title}</div>
                                    <div className='trends__number'>{item.number}</div>
                                    <div className='trends__info'>
                                        <img src={icon} className='trends__icon' />
                                        <span className={`trends__label ${labelClassName}`}>
                                            {isIncrease ? item.change : item.change.slice(1,)}
                                            {isIncrease ? ' increase' : ' decrease'}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='sentiment'>
                    <div className='analysis__header'>
                        <div className='analysis__title'>Sentiment tracking</div>
                        <div className='analysis__dropdown'>
                        <select name='month' id='month' className='analysis__dropdown__content'>
                            {['February', 'January', 'December', 'November'].map((month, index) => (
                                <option key={index} value={month}>{month}</option>
                            ))}
                        </select>
                        </div>
                        <div className='analysis__dropdown'>
                        <select name='location' id='location' className='analysis__dropdown__content'>
                            {['All locations', 'Kendall Square', 'Central Square', 'Back Bay', 'Brookline', 'Harvard Square', 'Davis Square'].map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                        </div>
                        <a className='analysis__link'>
                            <span>View all</span>
                            <img src={ArrowRightIcon} className='analysis__link__icon' />
                        </a>
                    </div>
                    <div className='analysis__content'>
                        <div className='sentiment__column-label'>Most positive topics</div>
                        <div className='sentiment__column-label'>Most negative topics</div>
                        <Link to='/sentiment' key='9' className='sentiment__section'>
                            <img src={Pie1Icon} className='sentiment__section__graphic' />
                            <div className='sentiment__section__info'>
                                <div className="sentiment__section__label">Atmosphere</div>
                                <div className="sentiment__section__content">
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Beautiful interior</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Spacious</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Welcoming</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Comfortable</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Cozy</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Aesthetic</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <div className='sentiment__section'>
                            <img src={Pie2Icon} className='sentiment__section__graphic' />
                            <div className='sentiment__section__info'>
                                <div className="sentiment__section__label">Wait time</div>
                                <div className="sentiment__section__content">
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Worth the wait</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Busy</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>Slow</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>Long line</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>No seating</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='sentiment__section'>
                            <img src={Pie3Icon} className='sentiment__section__graphic' />
                            <div className='sentiment__section__info'>
                                <div className="sentiment__section__label">Grain bowls</div>
                                <div className="sentiment__section__content">
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Buddha bowl</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Green goddess</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Good portion</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Acai</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Teriyaki</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Falafel bowl</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>Hard rice</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='sentiment__section'>
                            <img src={Pie4Icon} className='sentiment__section__graphic' />
                            <div className='sentiment__section__info'>
                                <div className="sentiment__section__label">Prices</div>
                                <div className="sentiment__section__content">
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Good value</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Decent price</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Comparable</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>Expensive coffee</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>Pricey</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='sentiment__section'>
                            <img src={Pie5Icon} className='sentiment__section__graphic' />
                            <div className='sentiment__section__info'>
                                <div className="sentiment__section__label">Food taste</div>
                                <div className="sentiment__section__content">
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Nourishing</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Delicious</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Healthy</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Vegetables</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Wellness</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Vegan</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='sentiment__section'>
                            <img src={Pie6Icon} className='sentiment__section__graphic' />
                            <div className='sentiment__section__info'>
                                <div className="sentiment__section__label">Superfood lattes</div>
                                <div className="sentiment__section__content">
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Good options</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Healthy</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleGreenIcon} className='sentiment__section__bar' />
                                        <span>Matcha Latte</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Golden latte</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleYellowIcon} className='sentiment__section__bar' />
                                        <span>Blue algae</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>Clumpy</span>
                                    </span>
                                    <span className="sentiment__section__item">
                                        <img src={RectangleRedIcon} className='sentiment__section__bar' />
                                        <span>Too sweet</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-volume'>
                    <div className='analysis__header'>
                        <div className='analysis__title'>Review volume</div>
                        <div className='analysis__dropdown'>
                            <select name='month-volume' id='month-volume' className='analysis__dropdown__content'>
                                <option value='February'>February</option>
                                <option value='January'>January</option>
                                <option value='December'>December</option>
                                <option value='November'>November</option>
                            </select>
                        </div>
                    </div>
                    <div className='analysis__content'>
                        <img src={Legend} className='review-volume__legend' />
                        <img src={Graph} className='review-volume__graph' />
                    </div>
                </div>
            </div>
            <div className='recent-reviews'>
                <div className='analysis__header'>
                    <div className='analysis__title'>Recent reviews</div>
                    <div className='analysis__dropdown'>
                        <select name='recent' id='recent' className='analysis__dropdown__content'>
                            <option value='All reviews'>All reviews</option>
                        </select>
                    </div>
                </div>
                <div className='analysis__content'>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Yelp} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Boston, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Today</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Central Square</span>
                            </div>
                            <div className='recent-reviews__photos'>
                                <span className='recent-reviews__photos-number'>4</span> 
                                <img src={CameraIcon} className='recent-reviews__photos-icon' />
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            One of my favorite options in Central Square. When I first tried Life Alive, I was skeptical as a carnivore and picky salad eater... but now I come by at least once a week! The Emperor is my favorite, so umami and unique...
                            <span className='recent-reviews__more'> More</span>
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Google} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>New York, NY</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Today</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Kendall Square</span>
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            Life Alive Cafe is a gorgeous plant-forward cafe with delicious food and beautiful interiors. They have locations all over Boston: Back Bay, South End, Brookline, Harvard Square, Central Square, Kendall Square...
                            <span className='recent-reviews__more'> More</span>
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Google} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Quincy, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Yesterday</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Central Square</span>
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            Amazing organic fare! I had the falafel wrap, my partner had the rainbow bowl, and we both had a best raspberry iced tea on the planet. Very comfortable and welcoming atmosphere. Will 100% be back!
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Yelp} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Quincy, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Feb 22</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Central Square</span>
                            </div>
                            <div className='recent-reviews__photos'>
                                <span className='recent-reviews__photos-number'>2</span> 
                                <img src={CameraIcon} className='recent-reviews__photos-icon' />
                            </div>
                        </div>
                        <img src={Rating4} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            This place is conveniently located right next to the Kendall T stop. It has a good amount of seating and, as always, impeccable aesthetic. The lofted ceilings create an airy atmosphere that is somehow both...
                            <span className='recent-reviews__more'> More</span>
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={TripAdvisor} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Richmond, VA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Feb 20</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Back Bay</span>
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            Super healthy and tasty! The warm bowls are excellent- fresh flavorful and you feel good about eating one! Great atmosphere and chill vibe if you eat inside downstairs.
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Google} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Cambridge, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Feb 20</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Brookline</span>
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            Amazing organic fare! I had the falafel wrap, my partner had the rainbow bowl, and we both had a best raspberry iced tea on the planet. Very comfortable and welcoming atmosphere. Will 100% be back!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Overview