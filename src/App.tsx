import { useState } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';

function App() {
	const [currentPage, setCurrentPage] = useState('home');
  return (

    <div className="App">

      <Header setCurrentPage={setCurrentPage} />
	  {currentPage === 'home' && <Home />}
	  {currentPage === 'contact' && <ContactForm />}
	  {currentPage === 'services' && <Services />}
		{currentPage === 'about' && <About/>}
    </div>
  );
}

export default App;
