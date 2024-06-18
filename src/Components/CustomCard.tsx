import React from 'react';
import Card from 'react-bootstrap/Card';

interface CustomCardProps {
    title: string;
    children?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children }) => {
	return (
		<Card bg="dark" text="white" className='mx-3 rounded-25' style={{height:'90vh', borderRadius:'25px'} }>
			<Card.Body className="card-body">
				<Card.Title>{title}</Card.Title>
				{children}
			</Card.Body>
		</Card>
	);
};

export default CustomCard;