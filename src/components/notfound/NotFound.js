import React from 'react';
import {Link} from 'react-router-dom'
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound-title">
                Ooops!  Page not found
            </h1>
            <Link to="/" className="NotFound-link">Go to homepage link</Link>
        </div>
    )
}
export default NotFound;