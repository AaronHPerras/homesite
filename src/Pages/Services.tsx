import React from 'react';
import { Accordion } from 'react-bootstrap';
import CustomCard from '../Components/CustomCard';

const Services = () => {
	return (
		<CustomCard title="Services">
			<Accordion 
				defaultActiveKey=""
				alwaysOpen={false}
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						Busines site redesign
					</Accordion.Header>
					<Accordion.Body>
						If your site hasn&apos;t had an update or redesign in the past decade, maybe it&apos;s time to revisit. Modern trends and mobile-first ratings will affect your business. If your site is ranked lower because it doesn&apos;t meet modern standards, then you&apos;re leaving business behind.
					</Accordion.Body>
					<Accordion.Body>
						We can take your site and breathe new life into it using modern coding and design practices.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						Website Maintenance
					</Accordion.Header>
					<Accordion.Body>
						You&apos;re busy running your business. You have decisions to make, work to do, payroll to manage. At the end of your list is logging on to trhe computer to fiddle with the site to update some small change. We can take that off your plate.
					</Accordion.Body>	
					<Accordion.Body>
						Let us handle the updates, the backups, the security, and the changes. You focus on your business.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						E-commerce Solutions
					</Accordion.Header>
					<Accordion.Body>
						You have a product or service that you want to sell online. You need a shopping cart, a payment processor, and a way to manage your inventory. We can help.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</CustomCard>
	);
};

export default Services;