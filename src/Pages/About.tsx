import React from 'react';
import { Card } from 'react-bootstrap';
import CustomCard from '../Components/CustomCard';

const About = () => {
	return (
		<CustomCard title="About Our Business">
			<Card.Text>
                    Welcome to our business! We are dedicated to providing high-quality products and services to our customers.
			</Card.Text>
			<Card.Text>
                    Our team of experts is committed to delivering exceptional results and exceeding customer expectations.
			</Card.Text>
			<Card.Text>
                    With our innovative solutions and customer-centric approach, we strive to make a positive impact in the industry.
			</Card.Text>
		</CustomCard>
	);
};

export default About;