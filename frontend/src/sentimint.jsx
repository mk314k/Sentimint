import { useState } from 'react';
import axios from 'axios';

function SentimentAnalysisComponent() {
  const [reviewText, setReviewText] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');

  const handleApplySentiment = () => {
    axios.post('https://sentimint.onrender.com/absa', { text: reviewText })
      .then(response => {
        console.log(reviewText);
        setSentimentResult(response.data);
        console.log(sentimentResult);
      })
      .catch(error => {
        console.error('Error fetching sentiment analysis:', error);
      });
  };

  return (
    <div>
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
      {/* {sentimentResult && (
        <div>
          <h3>Sentiment Analysis Result:</h3>
          <p>{sentimentResult}</p>
        </div>
      )} */}
    </div>
  );
}

export default SentimentAnalysisComponent;
