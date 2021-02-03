import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
	return (
		<div className='a-page'>
			<h1>My Story</h1>
			<section>
				<div>
					<img src='https://img.icons8.com/wired/64/000000/mental-health.png' alt='mental health' />
					<img src='https://img.icons8.com/ios/50/000000/sporty-wheelchair-user.png' alt='disabled' />
				</div>
				<p>
					Being Disabled has taught me to appreciate the social experience that a job brings, while being thankful for being
					able to be a productive member of society. It has also allowed me the opportunity to craft and hone my programming
					skills.
				</p>
			</section>
      <hr/>
			<section>
				<p>
					Crafting applies to my programming because it has taught me to have a keen eye and distinct attention for detail.
					Giving me the skill to pinpoint syntax errors with some comfort and patience. It also helps in allowing parts of a
					whole to make a complete picture in my mind. It has taught me both how to follow directions and make my own path.
				</p>
				<div>
					<img src='https://img.icons8.com/ios/50/000000/knitting-ball.png' alt='yarn' />
					<img src='https://img.icons8.com/ios/50/000000/art-book.png' alt='art book' />
				</div>
      </section>
      <hr/>
			<section>
				<div className='div-type1'>
					<img src='https://img.icons8.com/wired/64/000000/lambda.png' alt='lambda' />
					<img src='https://img.icons8.com/ios/50/000000/graduation-scroll.png' alt='diploma' />
				</div>
				<p className='p-type1'>
					Honing my programming skills, with an education at Lambda School which provides much guided learning and project
					apps that could become marketable someday. Please checkout my{' '}
					<Link to='/projects' className='link'>
						Showcase
					</Link>{' '}
					to see all my progress and projects.
				</p>
			</section>
		</div>
	);
};

export default Intro;
