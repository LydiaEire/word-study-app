import React from 'react';

function NotFoundPage() {
    return (
        <div className="not-found-container">
            <div className="travolta"></div>
            <h1>404</h1>
            <p>К сожалению, страница, которую вы ищете, не существует.</p>
            <a href="/" className="home-link">Вернуться на главную</a>
        </div>
    );
}

export default NotFoundPage;

