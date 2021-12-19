import React from 'react';
import './App.css';
import HeadNav from './components/navigation/HeadNav';
import Footer from './components/navigation/Footer'
import Landing from './components/portfolio/Landing';
import Intro from './components/portfolio/Intro';
import Showcase from './components/projects/Showcase'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
			<section className='body'>
			<div className='app'>
				<HeadNav />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/about' component={Intro} />
					<Route path ='/projects' component={Showcase}/>
				</Switch>
				<Footer />
				</div>

			</section>
		);
}

export default App;
