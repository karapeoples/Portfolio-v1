import React from 'react'
// import goldenTutors from '../images/goldenTutors.png';
import ResponsiveCard from './ResponsiveCard';




const Showcase = () => {
	return (
		<div>
			<h1>Projects</h1>
			<div className='project-btns'>
				<a className="project-btn" target='_blank' rel='noopener noreferrer' href='https://codestats.net/users/kararpeoples'>
					Code Stats
				</a >
				<a className="project-btn" target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1saZNfU5pbsngdvptPidxZAhBZCH7RBgqX8xBomiCDRM'>
					Resume
				</a>
				</div>
				<div className='sc-section-body'>
					<ResponsiveCard/>
				</div>
		</div >
	);
};
export default Showcase;

{/* <section className='sc-section'>
								<span className='sc-section-body'>
									<div className='showCase'>
									<div className='sc-img-container'>
										<img className="sc-image" src={goldenTutors} alt="Website Snapshot"/>
									</div>
									</div>
									<div>
                                    									<h3>Golden Tutors</h3>
                                    									<p>
                                    									Connected the back end through CRUD operations to create and accept three user types, including:
                                    									<ul>
                                                                        <li>A student user role, which can search for available tutors</li>
                                                                        <li>A tutor user role, which can sign up as a volunteer and be assigned tasks by an administrator and alert the administrator of completed tasks</li>
                                                                        <li>An administrator user role, which can assign tasks to tutors based on student needs and mark a task as complete and remove it or edit it and send it back to the tutor</li>
                                                                        </ul>
                                                                        Designed UX app layout using basic design principles and automatic navigation; implemented design based on thorough feedback from a stakeholder team.

                                    									</p>
                                    									</div>
								</span>
								<span className='sc-section-btns'>
								<button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://goldentutors.netlify.com/'>
									Site
								</button>
								<button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/BW-SchoolInTheCloud1/FrontEnd'>
									Repo
								</button>
								</span>
							</section> */}