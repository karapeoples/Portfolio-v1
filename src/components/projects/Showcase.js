import React from 'react'
import { Card, Col, Row, Button } from 'reactstrap';






const Showcase = () => {
	return (
		<div>
			<h1>Projects</h1>
			<Button className="project-btn" target='_blank' rel='noopener noreferrer' href='https://codestats.net/users/kararpeoples'>
				Code Stats
			</Button >
			<Button className="project-btn"target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1saZNfU5pbsngdvptPidxZAhBZCH7RBgqX8xBomiCDRM'>
				Resume
			</Button>


			<div>
				<Row>
					<Col lg='12'>
						<div>
							<Card className='sc-card'>
								<span className='sc-card-body'>
									<iframe className='sc-iframe' src='https://med-cabinet.netlify.com/' title='project snapshot' scrolling="no" />
									<div>
									<h3>Med-Cabinet</h3>
									<p>
									Created Landing Page.
									Responsible for linking React Portion to Landing Page.
									Wrote HTML and CSS.
									</p>
									</div>
								</span>
								<span className='sc-card-btns'>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://med-cabinet.netlify.com/'>
									Site
								</Button>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://github.com/med-cabinet'>
									Repo
								</Button>
					        </span>
							</Card>
						</div>
						<div>
							<Card className='sc-card'>
								<span className='sc-card-body'>
									<div className='showCase'>
										<iframe src='https://front-end-schoolr.vercel.app/' title='project snapshot' scrolling="no" />
									</div>
									<div>
                                    									<h3>"School'R"</h3>
                                    									<p>
                                    									Led the team remotely by delegating responsibilities by wants and strengths.
                                                                        Led the team through concepts of Redux in order to deepen the teams understanding of core Redux capabilities and concepts.
                                                                        Implemented, Planned, and Delegated UI/UX Design and Development in ReactStrap.
                                                                        Translated  JS Logic in Rock, Paper, Scissors Game & Memory Game to React Logic  using Local State.
                                                                        Implemented and Pair Programmed Flash Cards.
                                    									</p>
                                    									</div>
								</span>
								<span className='sc-card-btns'>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://front-end-schoolr.vercel.app/'>
									Site
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/School-R/front-end'>
									Repo
								</Button>
								</span>
							</Card>
						</div>
						<div>
							<Card className='sc-card'>
								<span className='sc-card-body'>
									<div className='showCase'>
										<iframe src='https://goldentutors.netlify.com/' title='project snapshot' scrolling="no" />
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
								<span className='sc-card-btns'>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://goldentutors.netlify.com/'>
									Site
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/BW-SchoolInTheCloud1/FrontEnd'>
									Repo
								</Button>
								</span>
							</Card>
						</div>

						<div>
							<Card className='sc-card'>
								<span className='sc-card-body'>
									<div className='showCase'>
										<iframe src='https://optimistic-chandrasekhar-c6d265.netlify.app/' title='project snapshot' scrolling="no" />
									</div>
									<div>
                                    									<h3>Troll-Hub</h3>
                                    									<p>
                                    									Built Endpoints with NodeJS/KNEX.
                                    									Consumed Data Science API.
                                    									Wrote a Matching Table for Quotes to Save Favorite from Data Science API.
                                    									</p>
                                    									</div>
								</span>
								<span className='sc-card-btns'>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://optimistic-chandrasekhar-c6d265.netlify.app/'>
									Site
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/Build-Week-SaltiestHackerNewsTrolls2/back-end'>
									Repo
								</Button>
								</span>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};
export default Showcase;