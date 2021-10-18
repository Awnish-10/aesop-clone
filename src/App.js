import './App.css';
import Banner from './components/Banner';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			<Banner />
			<Navbar />
			<Content1 />
			<Content2 />
			<Content3 />
			<Footer />
			<Footer2 />
		</div>
	);
}

export default App;
