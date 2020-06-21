import * as React from 'react';
import { IChirp } from '../utils/interfaces';
import { Link, useHistory } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';


const Details: React.FC<DetailsProps> = (props) => {
	const history = useHistory();
	
	return (
		<Col md={7}>
			<Card className="shadow-sm my-3">
				<Card.Body>
					<Card.Title>@{props.chirp?.name}:</Card.Title>
					<Card.Text>{props.chirp?.content}</Card.Text>
					<div className="row justify-content-around">
						<Button variant="outline-primary" className="shadow-sm" size="sm" onClick={() => history.goBack()}>Go Back You Chirper SOB!</Button>
						<Link to={`/chirps/edit/${props.chirp?.id}`} className="d-flex justify-content-center align-items-center btn btn-sm btn-outline-success shadow-sm">Edit if you must <FaRegEdit className="ml-2" /></Link>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}


interface DetailsProps {
	chirp: IChirp;
}

export default Details;
