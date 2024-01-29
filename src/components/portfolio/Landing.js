import React from 'react'
import coverPage from '../images/Kara.jpg'


const Landing = () => {
	return (
		<div>
			<h1>Kara R. Peoples</h1>
			<h2>Software Engineer</h2>
			<div className='design'>
				<div className='rotatedBorder'></div>
				<img src={coverPage} className='portrait' alt='A portrait of Kara. She is holding a small puppy named Critter in her slightly-side posed arms. She is wearing a blue and white striped jacket over a blue shirt. Slightly smiling with a teal-colored faux-hawk and gray shaved hair.' />

				<div className='grid'>
					<div data-white></div>
					<div ></div>
					<div></div>
					<div data-white></div>
				</div>

				<div className='blend'>
					<div className='coverPage'></div>
					<img src={coverPage} alt='A portrait of Kara. She is holding a small puppy named Critter in her slightly-side posed arms. She is wearing a blue and white striped jacket over a blue shirt. Slightly smiling with a teal-colored faux-hawk and gray shaved hair.' className='portrait' />

					<div className='grid'>
						<div></div>
						<div data-white></div>
						<div data-white></div>
						<div></div>
					</div>
				</div>
			</div>
			<section className='landWrapper'>
				<div>
					<h4>Specializing in:</h4>
					<h6>Quality Assurance Engineering</h6>
					<h6>Automated Software Testing</h6>
					<h6>Front-End Web Development</h6>
				</div>
			</section>
		</div>
	);
}

export default Landing
