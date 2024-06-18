import { useState } from 'react';
import './App.css';
import ContactForm from './Pages/ContactForm';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import React from 'react';

function App() {
	const [currentPage, setCurrentPage] = useState('home');
	return (
		<div className="App text-light">
			<Header setCurrentPage={setCurrentPage} />	  		{currentPage === 'home' && <Home />}	  		{currentPage === 'contact' && <ContactForm />}	  		{currentPage === 'services' && <Services />}
			{currentPage === 'about' && <About/>}
		</div>
	);
}

export default App;
