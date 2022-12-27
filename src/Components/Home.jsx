import { useState } from 'react';

const Home = () => {
	const [buttonText, setButtonText] = useState('Logga In');
	const [buttonColor, setButtonColor] = useState('green');

	const toggle = () => {
		setButtonText('Logga Ut');
		setButtonColor('red');
	};

	return (
		<div>
			<button onClick={toggle} style={{ backgroundColor: buttonColor }}>
				{buttonText}
			</button>
			<ul>
				<li>Test</li>
			</ul>
		</div>
	);
};

export default Home;
