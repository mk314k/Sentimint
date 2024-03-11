import { useState } from 'react';
import axios from 'axios';

function SentimentAnalysisComponent() {
  const [reviewText, setReviewText] = useState('');
  const [sentimentResult, setSentimentResult] = useState([]);

  const handleApplySentiment = () => {
    axios.post('https://sentimint.onrender.com/absa', { text: reviewText })
      .then(response => {
        const data = response.data.result;
        const combinedAspects = {};

        data.forEach(aspect => {
            if (!(aspect.aspect in combinedAspects)) {
            combinedAspects[aspect.aspect] = { aspect: aspect.aspect, descriptions: [] };
            }
            combinedAspects[aspect.aspect].descriptions.push({
                text: aspect.description,
                sentiment: aspect.sentiment[0]
            });
        });

        setSentimentResult(Object.values(combinedAspects));
      })
      .catch(error => {
        console.error('Error fetching sentiment analysis:', error);
      });
  };

  const getSentimentColor = (sentiment) => {
    // Interpolate color from red to green based on sentiment polarity
    const greenValue = Math.floor((sentiment + 1) * 128);
    const redValue = Math.floor((1 - sentiment) * 128);
    return `rgba(${redValue}, ${greenValue}, 0, 0.7)`;
  };

  return (
    <div className='container flex-vertical'>
      <textarea
        rows={10}
        cols={50}
        value={reviewText}
        onChange={e => setReviewText(e.target.value)}
        placeholder="Enter your review here..."
      />
      <br />
      <button onClick={handleApplySentiment}>Apply Sentiment</button>
      <br />
      {sentimentResult.length >0 && (
        <div className='flex-horizontal'>
            {sentimentResult.map((aspect, index) => (
                <div className="card" key={index}>
                    <h3>{aspect.aspect}</h3>
                    {aspect.descriptions.map((description, idx) => (
                    <div
                        key={idx}
                        className="description"
                        style={{ backgroundColor: getSentimentColor(description.sentiment) }}
                    >
                        {description.text}
                    </div>
                    ))}
                </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SentimentAnalysisComponent;
