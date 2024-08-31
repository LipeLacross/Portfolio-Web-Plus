import React from 'react';
import '../styles/Header.sass';

function Header() {
    return (
        <header className="cabecalho">
            <nav className="cabecalho__menu">
                <a className="cabecalho__menu__link" href="/">Home</a>
                <a className="cabecalho__menu__link" href="/about">Sobre mim</a>
                <a className="cabecalho__menu__link" href="/portfolio">Portfólio</a>
            </nav>
        </header>
    );
}

export default Header;
