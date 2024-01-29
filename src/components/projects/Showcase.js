import React from 'react'
import goldenTutors from '../images/goldenTutors.png';
import schoolR from '../images/schoolR.png';
import oppia from '../images/oppia.png';
import { Card, CardHeader, CardBody, CardFooter, Image, SimpleGrid } from '@chakra-ui/react'


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

			<div>
				<div>
				</div>
				<div className='sc-section-body'>
					<SimpleGrid columns={3} spacing={10} >
						<Card maxW='lg' className='showcase'>
							<span>
								<div className='sc-img-container'>
									<Image className="sc-image" src={schoolR} alt="Website Snapshot" />
								</div>
								<CardBody>
									<CardHeader >
										<h6>This was a School project</h6><br /><h3>"School'R"</h3></CardHeader>
									<p className='sc-card-body'>
										Led the team remotely by delegating responsibilities by wants and strengths.<br />
										Led the team through concepts of Redux in order to deepen the teams understanding of core Redux capabilities and concepts.<br />
										Implemented, Planned, and Delegated UI/UX Design and Development in ReactStrap.<br />
										Translated  JS Logic in Rock, Paper, Scissors Game & Memory Game to React Logic  using Local State.<br />
									</p>

								</CardBody>
							</span>
							<CardFooter className='sc-section-btns'>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://front-end-schoolr.vercel.app/'>
									Site
								</a>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/School-R/front-end'>
									Repo
								</a>
							</CardFooter>
						</Card>

						<Card maxW='lg' className='showcase'>
							<span >
								<div className='sc-img-container'>
									<Image className="sc-image" src={oppia} alt="Website Snapshot" />
								</div>
								<CardBody>
									<CardHeader >
										<h6>Volunteer Project</h6><br /><h3>Oppia</h3></CardHeader>
									<p className='sc-card-body'>
										An open-source Education/Technology Website.<br />
										Free Math Lessons for Everyone<br />
										Angular and Python<br />
										WSL2 and Virtual Machine Environment Exposure<br />
										Blog writing to chronicle what I learn
									</p>
								</CardBody>
							</span>
							<CardFooter className='sc-section-btns'>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://oppia.org'>
									Site
								</a>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/karapeoples/oppia'>
									Repo
								</a>
							</CardFooter>

							<a class="libutton" rel='noopener noreferrer' href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7153949983069638656" target="_blank">Subscribe on LinkedIn</a>
						</Card>
					</SimpleGrid>
					<div>
					</div>

					<div>
					</div>
				</div>
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