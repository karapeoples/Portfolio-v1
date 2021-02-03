import React, {useState} from 'react'
import { Navbar, Nav, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import emailjs from 'emailjs-com';
import apiKeys from './apiKeys';

const Footer = () => {
  const bodyObj = {
			from_name: '',
			to_name: 'Kara',
			user_email: '',
			message: '',
  };

  const [text, setText] = useState(bodyObj);
	const [modal, setModal] = useState(false);

	 const toggle = () => setModal(!modal);

		const handleSubmit = (e) => {
			e.preventDefault();
			text !== bodyObj
				? emailjs
						.send('kara_contact', apiKeys.TEMPLATE_ID, text, apiKeys.USER_ID)
						.then((res) => {
							console.log('SUCCESS!', res.status, res.text);
						})
						.then((res) => {
							setText(bodyObj);
						})
						.catch((err) => {
							console.log('FAILED...', err);
						})
				: console.log('No Information Supplied');
			toggle()
		};

		const handleChange = (e) => {
			setText({ ...text, [e.target.name]: e.target.value });
    };
      const twitter = 'https://twitter.com/SpookRazorII';
			const linkedIn = 'https://www.linkedin.com/in/karapeoples1978';
  return (
			<div>
				<Navbar color='dark'>
					<Nav className='c-nav-footer'>
						<div className='contact'>
							<Button target='_blank' rel='noopener noreferrer' className='c-btn' href={twitter}>
								<img src='https://img.icons8.com/carbon-copy/100/000000/twitter--v1.png' alt='twitter' /> Twitter
							</Button>
							<Button target='_blank' rel='noopener noreferrer' className='c-btn' href={linkedIn}>
								<img src='https://img.icons8.com/carbon-copy/100/000000/linkedin.png' alt='linkedIn' /> LinkedIn
							</Button>
							<Button onClick={toggle} className='c-btn'>
								<img src='https://img.icons8.com/wired/64/000000/email.png' alt='email' /> Email Me
							</Button>
						</div>
						<div>
							<h5 className='copyright'>©2021~~Kara R. Peoples </h5>
						</div>
					</Nav>
				</Navbar>
				<Modal isOpen={modal}>
					<ModalHeader toggle={toggle}>Contact Me</ModalHeader>
					<ModalBody>
					<form id='contact-form' onSubmit={handleSubmit}>
					<label>Name</label>
					<input placeholder='Name' type='text' name='from_name' onChange={handleChange} value={text.from_name} />
					<br />
					<label>Email</label>
					<input placeholder='Email..' type='email' name='user_email' onChange={handleChange} value={text.user_email} />
					<br />
					<label>Message</label>
					<textarea placeholder='Write me a Note...' type='text' name='message' onChange={handleChange} value={text.message} />
						<Button className='s-btn'>
							Send
						</Button>
				</form>
					</ModalBody>



				</Modal>
			</div>
		);
}

export default Footer
