import ArrowRightIcon from './icons/arrow-right.svg';
import ArrowUpCircleIcon from './icons/arrow-up-circle.svg';
import ArrowDownCircleIcon from './icons/arrow-down-circle.svg';
import Pie1Icon from './icons/pie1.svg';
import Pie2Icon from './icons/pie2.svg';
import Pie3Icon from './icons/pie3.svg';
import Pie4Icon from './icons/pie4.svg';
import Pie5Icon from './icons/pie5.svg';
import Pie6Icon from './icons/pie6.svg';
import RectangleGreenIcon from './icons/rectangleGreen.svg';
import RectangleRedIcon from './icons/rectangleRed.svg';
import RectangleYellowIcon from './icons/rectangleYellow.svg';

function Overview(props) {
    return (
        <>
        <h1 className='welcome'>Welcome back, Laura</h1>
        <div className='analysis'>
            <div className='trends'>
                <div className='analysis__header'>
                    <div className='analysis__title'>Trends for February</div>
                    <a className='analysis__link'>
                        <span>View details</span>
                        <img src={ArrowRightIcon} className='analysis__link__icon' />
                    </a>
                </div>
                <div className='analysis__content'>
                    <div className='trends__section'>
                        <div className='trends__title'>Average new ratings</div>
                        <div className='trends__number'>4.7</div>
                        <div className='trends__info'>
                            <img src={ArrowUpCircleIcon} className='trends__icon' />
                            <span className='trends__label --success'>0.2 increase</span>
                        </div>
                    </div>
                    <div className='trends__section'>
                        <div className='trends__title'>Number of new reviews</div>
                        <div className='trends__number'>12</div>
                        <div className='trends__info'>
                            <img src={ArrowUpCircleIcon} className='trends__icon' />
                            <span className='trends__label --success'>2 increase</span>
                        </div>
                    </div>
                    <div className='trends__section'>
                        <div className='trends__title'>Positive sentiment</div>
                        <div className='trends__number'>80%</div>
                        <div className='trends__info'>
                            <img src={ArrowDownCircleIcon} className='trends__icon' />
                            <span className='trends__label --error'>12% increase</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sentiment'>
                <div className='analysis__header'>
                    <div className='analysis__title'>Sentiment tracking</div>
                    <div className='analysis__dropdown'>
                        <select name='month' id='month' className='analysis__dropdown__content'>
                            <option value='February'>February</option>
                            <option value='January'>January</option>
                            <option value='December'>December</option>
                            <option value='November'>November</option>
                        </select>
                    </div>
                    <div className='analysis__dropdown'>
                        <select name='location' id='location' className='analysis__dropdown__content'>
                            <option value='All locations'>All locations</option>
                            <option value='Kendall'>Kendall</option>
                            <option value='Central'>Central</option>
                        </select>
                    </div>
                    <a className='analysis__link'>
                        <span>View all</span>
                        <img src={ArrowRightIcon} className='analysis__link__icon' />
                    </a>
                </div>
                <div className='analysis__content'>
                    <div className='sentiment__columnn-label'>Most positive topics</div>
                    <div className='sentiment__columnn-label'>Most negative topics</div>
                    <div className='sentiment__section'>
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
                    </div>
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
                <div className='analysis__content'>content</div>
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
                <div className='analysis__content'>content</div>
            </div>
        </div>
        </>
    );
}

export default Overview