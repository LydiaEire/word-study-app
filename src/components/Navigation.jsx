import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/" className="logo">
                <img src="/logo.jpeg" alt="Логотип" /> 
            </Link>
            <div className="menu-links">
                <Link to="/" className="menu-link">Главная</Link>
                <Link to="/game" className="menu-link">Карточки</Link>
            </div>
        </nav>
    );
}

export default Navigation;