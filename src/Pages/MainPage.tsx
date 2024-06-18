import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import ContactForm from './ContactForm';

const MainPage = () => {
    const [currentPage, setCurrentPage] = React.useState('home');
    return (
        <div className="container rounded">
            {currentPage === 'home' && <Home />}
            {currentPage === 'contact' && <ContactForm />}
        </div>
    );
};

export default MainPage;