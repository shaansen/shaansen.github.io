import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const App = () => {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<div className={darkTheme ? 'darkContainer' : 'lightContainer'}>
			<div className='header'>
				<button onClick={() => setDarkTheme(!darkTheme)}>Light Theme</button>
			</div>
			<div className='main-content'>
				<img className='profile-picture' src='src/profile.jpg' alt='Girl in a jacket' />
				<h1>Shantanu Sengupta</h1>
				<p>Front End Engineer @ AWS</p>
			</div>
		</div>
	);
};

const wrapper = document.getElementById('container');
ReactDOM.render(<App />, wrapper);
