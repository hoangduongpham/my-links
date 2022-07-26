import React from 'react';
import Header from './components/Header';
import LinksWrapper from './components/LinksWrapper';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
		<div className='app'>
			<Header />
			<LinksWrapper />
			<Footer />
		</div>
	);
}

export default App
