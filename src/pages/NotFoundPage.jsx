import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="not-found-container">
            <div className="travolta"></div>
            <h1>404</h1>
            <p>К сожалению, страница, которую вы ищете, не существует.</p>
            <Link to="/" className="home-link">Вернуться на главную</Link>
        </div>
    );
}

export default NotFoundPage;


