import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({setCurrentPage}: {setCurrentPage: (page: string) => void}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-brand" onClick={() => setCurrentPage('home')}>Your Logo</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <button className="nav-link" onClick={() => setCurrentPage('home')}>Home <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setCurrentPage('about')}>About</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setCurrentPage('services')}>Services</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setCurrentPage('contact')}>Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;