import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import CustomCard from '../Components/CustomCard';

function Home() {
	return (
		<CustomCard title="Business Site">
			<Card.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
					odio eget urna aliquam aliquet. Nulla facilisi. Nullam nec odio eget
			</Card.Text>
		</CustomCard>
	);
}

export default Home;