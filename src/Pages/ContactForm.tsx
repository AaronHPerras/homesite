import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomCard from '../Components/CustomCard';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	return (
		<CustomCard title="Contact Form">
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="message">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={4}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
                    Submit
				</Button>
			</Form>
		</CustomCard>
	);
};

export default ContactForm;