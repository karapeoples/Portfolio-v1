import React from 'react';
import schoolR from '../images/schoolR.png';
import oppia from '../images/oppia.png'
import { HStack, Card, CardBody, CardFooter, CardHeader, Image } from '@chakra-ui/react';


const ResponsiveCard = () => {


	if (window.innerWidth <= 500){
		return(
			<HStack spacing= '24px'>
			<div className='showcase'>
				<Card>
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
						</div>

						<div className='showcase'>
							<Card>
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
						</div>
				</HStack>
		)
	} else{
		return (
			<HStack spacing='50px'>
				<div className='showcase'>
				<Card>
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
						</div>

						<div className='showcase'>
						<Card>
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
						</div>
			</HStack>
		)
	}
};

export default ResponsiveCard;
