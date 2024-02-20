import './App.scss';
import { useState } from "react";
import ArrowRightWhite from './icons/arrow-right-white.svg';
import SparklesIcon from './icons/sparkles.svg';
import Pie1Icon from './icons/pie1.svg';
import Pie2Icon from './icons/pie2.svg';
import Pie3Icon from './icons/pie3.svg';
import Pie4Icon from './icons/pie4.svg';
import Pie5Icon from './icons/pie5.svg';
import Pie6Icon from './icons/pie6.svg';
import PieBreakfast from './icons/pieBreakfast.svg';
import PieWifi from './icons/pieWifi.svg';
import DocumentIcon from './icons/document.svg';
import InsightPos from './icons/insightPos.svg';
import InsightNeg from './icons/insightNeg.svg';
import PosReview1 from './icons/posReview1.svg';
import PosReview3 from './icons/posReview3.svg';
import NegReview1 from './icons/negReview1.svg';
import RectangleGreenIcon from './icons/rectangleGreen.svg';
import RectangleRedIcon from './icons/rectangleRed.svg';
import RectangleYellowIcon from './icons/rectangleYellow.svg';
import Yelp from './icons/yelp.svg';
import CameraIcon from './icons/camera.svg';
import Google from './icons/google.svg';
import TripAdvisor from './icons/tripAdvisor.svg';
import Rating3 from './icons/rating3.svg';
import Rating4 from './icons/rating4.svg';
import Rating5 from './icons/rating5.svg';

function SentimentBody() {
    const [sortDir, setSortDir] = useState("positive");
    const DropDown = ({ setSortDir }) => (
        <select value={sortDir} onChange={(e) => setSortDir(e.target.value)} className='feedback__dropdown__content'>
            <option value='positive'>Most positive</option>
            <option value='negative'>Most negative</option>
        </select>
    );

    const Feedback = ({ sortDir }) => {
        if (sortDir == 'positive') {
            return (
                <div className='feedback__content'>
                    <div className='feedback__section'>
                        <img src={Pie1Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Atmosphere</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Beautiful interior</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Spacious</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Welcoming</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Comfortable</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Cozy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Aesthetic</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={Pie3Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Grain bowls</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Buddha bowl</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Green goddess</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Good portion</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Acai</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Teriyaki</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Falafel bowl</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Hard rice</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={Pie5Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Food taste</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Nourishing</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Delicious</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Healthy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Vegetables</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Wellness</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Vegan</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={PieBreakfast} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Breakfast</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Good variety</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Quick</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Pastries</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Golden latte</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Cold</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={PieWifi} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Wifi</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Fast</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Easy to connect</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Time limit</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Drops easily</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={Pie6Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Superfood lattes</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Good options</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Healthy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Matcha Latte</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Golden latte</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Blue algae</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Clumpy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Too sweet</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={Pie4Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Prices</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Good value</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Decent price</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Comparable</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Expensive coffee</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Pricey</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={Pie2Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Wait time</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Worth the wait</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Busy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Slow</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Long line</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>No seating</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='feedback__content'>
                    <div className='feedback__section'>
                        <img src={Pie2Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Wait time</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Worth the wait</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Busy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Slow</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Long line</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>No seating</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={Pie4Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Prices</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Good value</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Decent price</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Comparable</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Expensive coffee</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Pricey</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={Pie6Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Superfood lattes</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Good options</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Healthy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Matcha Latte</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Golden latte</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Blue algae</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Clumpy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Too sweet</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={PieWifi} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Wifi</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Fast</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Easy to connect</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Time limit</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleRedIcon} className='feedback__section__bar' />
                                    <span>Drops easily</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='feedback__section'>
                        <img src={PieBreakfast} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Breakfast</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Good variety</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Quick</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Pastries</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Golden latte</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Cold</span>
                                </span>
                            </div>
                        </div>
                    </div>   
                    <div className='feedback__section'>
                        <img src={Pie5Icon} className='feedback__section__graphic' />
                        <div className='feedback__section__info'>
                            <div className="feedback__section__label">Food taste</div>
                            <div className="feedback__section__content">
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Nourishing</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Delicious</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Healthy</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Vegetables</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleGreenIcon} className='feedback__section__bar' />
                                    <span>Wellness</span>
                                </span>
                                <span className="feedback__section__item">
                                    <img src={RectangleYellowIcon} className='feedback__section__bar' />
                                    <span>Vegan</span>
                                </span>
                            </div>
                        </div>
                    </div>        
                </div>
            );
        }
    };

    const Insight = ({ sortDir }) => {
        if (sortDir == 'positive') {
            return (
                <div className='sentiment__insight'>
                    <div className='sentiment__insight__content'>
                        <div className='sentiment__insight__kicker'>
                            <span className='sentiment__insight__ai'>AI powered business insights</span>
                            <img src={SparklesIcon} className='sentiment__insight__kicker__icon' />
                        </div>
                        <div className='sentiment__insight__text'>
                            Visitors love the <span className='sentiment__insight__keywords'>beautiful and cozy interior</span>, especially at the Kendall Square location. Here are some photos we think best represent what visitors love.
                        </div>
                        <div className='sentiment__insight__button'>
                            <span className='sentiment__insight__button__text'>
                                Use recommended photos
                            </span>
                            <img src={ArrowRightWhite} className='sentiment__insight__button__icon' />
                        </div>
                    </div>
                    <img src={InsightPos} className='sentiment__insight__image' />
                </div>
            );
        } else {
            return (
                <div className='sentiment__insight'>
                    <div className='sentiment__insight__content'>
                        <div className='sentiment__insight__kicker'>
                            <span className='sentiment__insight__ai'>AI powered business insights</span>
                            <img src={SparklesIcon} className='sentiment__insight__kicker__icon' />
                        </div>
                        <div className='sentiment__insight__text'>
                            While visitors generally have a great experience, many point to the <span className='sentiment__insight__keywords'>long wait time</span> as a reason why they wouldn’t visit as often as they’d like. Consider operational or staffing changes to improve wait times.
                        </div>
                        <div className='sentiment__insight__link'>
                            <img src={DocumentIcon} className='sentiment__insight__link__icon' />
                            <span className='sentiment__insight__link__text'>
                                How to improve wait times
                            </span>
                        </div>
                        <div className='sentiment__insight__link'>
                            <img src={DocumentIcon} className='sentiment__insight__link__icon' />
                            <span className='sentiment__insight__link__text'>
                                Optimizing your staffing schedule
                            </span>
                        </div>
                    </div>
                    <img src={InsightNeg} className='sentiment__insight__image' />
                </div>
            );
        }
    }

    const Reviews = ({ sortDir }) => {
        if (sortDir == 'positive') {
            return (
                <div className='sentiment__reviews'>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Yelp} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Braintree, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Today</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Kendall Square</span>
                            </div>
                            <div className='recent-reviews__photos'>
                                <span className='recent-reviews__photos-number'>1</span> 
                                <img src={CameraIcon} className='recent-reviews__photos-icon' />
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__bottom'>
                            <div className='recent-reviews__text'>
                                Life Alive is my favorite restauraunt and I&apos; m so glad they opened this location next to the MIT campus! The <span className='recent-reviews__highlight'>&nbsp;interior environment is really nice&nbsp;</span> and service was very quick and friendly. The food here is INCREDIBLE. I&apos; m vegan and eating whole foods is very important to me, so I love the menu here. I brought meat eater friends and they loved the food as well. The portion sizes here are also very generous and filling. Highly highly recommend.
                            </div>
                            <img src={PosReview1} className='recent-reviews__image' />
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Yelp} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>San Francisco, CA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Feb 18</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Brookline</span>
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            I used to get my lunch from here at least twice a week, and was always very happy with the delicious food, fast service and <span className='recent-reviews__highlight'>&nbsp;cozy atmosphere&nbsp;</span> of the place. The food is very tasty, so don’t hesitate to go in even if, just like me, you are not vegan.
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Google} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Cambridge, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Jan 14</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Kendall Square</span>
                            </div>
                        </div>
                        <img src={Rating3} className='recent-reviews__rating' />
                        <div className='recent-reviews__bottom'>
                            <div className='recent-reviews__text'>
                            Service: Food was fast! <br/><br/>Ambiance: <br/><span className='recent-reviews__highlight'>&nbsp;It&apos;s so nice here. The store is super nice and modern, there&apos;s tons of natural light, very clean.&nbsp;</span> Definitely one of the nicer Life Alives. It&apos;s in a great area as well!
                            </div>
                            <img src={PosReview3} className='recent-reviews__image' />
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={TripAdvisor} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Boston, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Feb 18</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Kendall Square</span>
                            </div>
                            
                        </div>
                        <img src={Rating4} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            This place is conveniently located right next to the Kendall T stop. It has a good amount of seating and, as always, impeccable aesthetic. The lofted ceilings create an <span className='recent-reviews__highlight'>&nbsp;airy atmosphere.&nbsp;</span> 
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
                            Super healthy and tasty! The warm bowls are excellent- fresh flavorful and you feel good about eating one! <span className='recent-reviews__highlight'>&nbsp;Great atmosphere and chill vibe&nbsp;</span>  if you eat inside downstairs.
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
                            Amazing organic fare! I had the falafel wrap, my partner had the rainbow bowl, and we both had a best raspberry iced tea on the planet. <span className='recent-reviews__highlight'>&nbsp;Very comfortable and welcoming atmosphere.&nbsp;</span>  Will 100% be back!
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='sentiment__reviews'>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Google} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Fenway-Kenmore, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Today</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Kendall Square</span>
                            </div>
                        </div>
                        <img src={Rating5} className='recent-reviews__rating' />
                        <div className='recent-reviews__bottom'>
                            <div className='recent-reviews__text'>
                                This cafe is a gem for anyone looking to nourish their body without sacrificing taste. Their vegan options are inventive and satisfying, and the staff's knowledge about their menu's nutritional benefits is impressive. The ambiance is cozy and inviting, making it a perfect spot for a relaxed meal. The <span className='recent-reviews__lowlight'>&nbsp;only drawback is the wait time for your order,&nbsp;</span> which can be a bit lengthy. Planning a visit during off-peak times might be the key to a quicker experience.
                            </div>
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={TripAdvisor} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Concord, NH</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Feb 18</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Brookline</span>
                            </div>
                            <div className='recent-reviews__photos'>
                                <span className='recent-reviews__photos-number'>1</span> 
                                <img src={CameraIcon} className='recent-reviews__photos-icon' />
                            </div>
                        </div>
                        <img src={Rating4} className='recent-reviews__rating' />
                        <div className='recent-reviews__bottom'>
                            <div className='recent-reviews__text'>
                                The Avocado Toast and the Berry Blast Smoothie stand out for their taste and nutritional value. It's a fantastic spot for health-conscious individuals seeking variety and quality. However, the popularity of the place does <span className='recent-reviews__midlight'>&nbsp;lead to longer wait times than one might expect.&nbsp;</span> If you're not in a rush, the quality of the meals is definitely worth the wait.
                            </div>
                            <img src={NegReview1} className='recent-reviews__image' />
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Google} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Wooster, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Jan 14</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Kendall Square</span>
                            </div>
                        </div>
                        <img src={Rating3} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            Great food, but the <span className='recent-reviews__lowlight'>&nbsp;wait makes it a rare treat rather than a regular stop.&nbsp;</span>
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={Yelp} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Jamaica Plain, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Feb 20</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Kendall Square</span>
                            </div>
                            
                        </div>
                        <img src={Rating4} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            This place is conveniently located right next to the Kendall T stop, but it's always <span className='recent-reviews__lowlight'>&nbsp;busy and understaffed.&nbsp;</span>
                        </div>
                    </div>
                    <div className='recent-reviews__tile'>
                        <div className='recent-reviews__header'>
                            <img src={TripAdvisor} className='recent-reviews__logo' />
                            <div className='recent-reviews__city'>Cambridge, MA</div>
                            <div className='recent-reviews__details'>
                                <span className='recent-reviews__date'>Yesterday</span>
                                <span> • </span>
                                <span className='recent-reviews__location'>Back Bay</span>
                            </div>
                        </div>
                        <img src={Rating4} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            What happened to Life Alive? I used to love this place. Today it took 45 minutes to get my dine-in order. Fantastic atmosphere, but there <span className='recent-reviews__lowlight'>&nbsp;aren't enough seats and I can never find a place to sit down.&nbsp;</span>
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
                        <img src={Rating3} className='recent-reviews__rating' />
                        <div className='recent-reviews__text'>
                            There's always a <span className='recent-reviews__lowlight'>&nbsp;really long line&nbsp;</span> at this location.
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='sentiment__body'>
        <div className='sentiment__left'>
            <h1 className='sentiment__header'>Sentiment</h1>
            <div className='feedback__header'>
                <div className='feedback__title'>Feedback topics</div>
                <div className='feedback__dropdown'>
                    <DropDown setSortDir={setSortDir} />
                </div>
            </div>
            <Feedback sortDir={sortDir} />
        </div>
        <div className='sentiment__right'>
            <Insight sortDir={sortDir} />
            <Reviews sortDir={sortDir} />
        </div>
        </div>
    );
}


export default SentimentBody
