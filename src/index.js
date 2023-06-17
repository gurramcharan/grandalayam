import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import {BookContext, BookProvider} from './contexts/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export {BookContext};

root.render(
    <React.StrictMode>
        <BookProvider>
            <Router>
                <App/>
            </Router>
        </BookProvider>
    </React.StrictMode>
);

reportWebVitals();
