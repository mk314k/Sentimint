import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sentiment from './Sentiment.jsx'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path ="/" element={<App />} />
                <Route path ="/sentiment" element={<Sentiment />} />
            </Routes>
        </Router>
    </React.StrictMode>,
)
