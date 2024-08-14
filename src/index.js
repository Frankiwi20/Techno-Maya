import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename="/Techno-Maya"> {/* Set basename to match your GitHub repo name */}
            <App />
        </Router>
    </React.StrictMode>
);
