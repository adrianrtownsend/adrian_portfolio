import { BrowserRouter } from 'react-router-dom';

import {
	About,
	Contact,
	Experience,
	//Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-white-100 bg-hero-pattern bg-fixed bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<div className='bg-white-100 bg-cover bg-no-repeat bg-center'>
					<Works />
				</div>
				{/*<Feedbacks />*/}
				<div className='relative z-0'>
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
