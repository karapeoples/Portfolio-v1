import React from 'react'
import { Card, Col, Row, Button, CardBody } from 'reactstrap';






const Showcase = () => {
	return (
		<div>
			<h1>Projects</h1>
			<Button target='_blank' rel='noopener noreferrer' href='https://codestats.net/users/kararpeoples'>
				Code Stats
			</Button>
			<div>
				<Row>
					<Col lg='4' md='6' sm='12'>
						<div>
							<Card className='sc-card'>
								<CardBody>
										<iframe className='sc-iframe' src='https://med-cabinet.netlify.com/' title='project snapshot' />
									<p>I did the HTML/LESS Static Landing Page</p>
								</CardBody>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://med-cabinet.netlify.com/'>
									Med-Cabinet
								</Button>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://github.com/med-cabinet'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4' md='6' sm='12'>
						<div>
							<Card className='sc-card'>
								<CardBody>
									<div className='showCase'>
										<iframe src='https://elegant-aryabhata-cdd64e.netlify.com/index.html' title='project snapshot' />
									</div>
									<p>I did all the work on the About Page</p>
								</CardBody>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://elegant-aryabhata-cdd64e.netlify.com/index.html'>
									Keep Savvy
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/build-week-prisonerSkills'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4' md='6' sm='12'>
						<div>
							<Card className='sc-card'>
								<CardBody>
									<div className='showCase'>
										<iframe src='https://fishfriendsapp.netlify.com/' title='project snapshot' />
										<p>Did the Fishing Spots API Call & Style for React</p>
									</div>
								</CardBody>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://fishfriendsapp.netlify.com/'>
									Fish Friends
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/Fish-Friends-Build'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4' md='6' sm='12'>
						<div>
							<Card className='sc-card'>
								<CardBody>
									<div className='showCase'>
										<iframe src='https://goldentutors.netlify.com/' title='project snapshot' />
									</div>
									<p>Advanced React and State Management</p>
								</CardBody>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://goldentutors.netlify.com/'>
									Golden Tutors
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/BW-SchoolInTheCloud1/FrontEnd'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4' md='6' sm='12'>
						<div>
							<Card className='sc-card'>
								<CardBody>
									<div className='showCase'>
										<iframe src='https://sfr-pearl.vercel.app/' title='project snapshot' />
									</div>
									<p>Advanced React and State Management</p>
								</CardBody>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://sfr-pearl.vercel.app/'>
									Secret Family Recipes
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/karapeoples/cherished-recipes-fe'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4' md='6' sm='12'>
						<div>
							<Card className='sc-card'>
								<CardBody>
									<div className='showCase'>
										<iframe src='https://optimistic-chandrasekhar-c6d265.netlify.app/' title='project snapshot' />
									</div>
									<p>Consumed Data Science API and Built RestAPI</p>
								</CardBody>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://optimistic-chandrasekhar-c6d265.netlify.app/'>
									Troll Hub
								</Button>
								<Button
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/Build-Week-SaltiestHackerNewsTrolls2/back-end'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
					<Col lg='4' md='6' sm='12'>
						<div>
							<Card className='sc-card'>

								<CardBody>
									<div className='showCase'>
										<iframe src='https://co-make.chitowncoder.vercel.app/' title='project snapshot' />
									</div>
									<p>Built RestAPI and Helped Guide React Portion</p>
                </CardBody>
                <Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://co-make.chitowncoder.vercel.app/'>
									Co-Make
								</Button>
								<Button className='sc-btn' target='_blank' rel='noopener noreferrer' href='https://github.com/karapeoples/be_cm'>
									Repo
								</Button>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};
export default Showcase;