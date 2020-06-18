
import * as React from 'react';
import type { IChirp } from '../utils/interfaces';
import {Link} from 'react-router-dom';
import{Col, Card} from 'react-bootstrap';


const ChirpCard: React.FC<ChirpCardProps> = ({chirp}) => {
    return (
        <Col as="article" md={7}>
			<Card className="shadow-sm my-2">
				<Card.Body>
					<Card.Title>@{chirp.userid}:</Card.Title>
					<Card.Text>{chirp.content}</Card.Text>
					<Link to={`/details/chirps/${chirp.id}`} className="btn btn-sm btn-outline-primary shadow-sm">Get Details</Link>
				</Card.Body>
			</Card>
		</Col>
        // <div>
        //     <h1 className="text-center">{chirp.name}{chirp.content}</h1>
        //     <Link to={`/chirps/details/${chirp.id}`}>
        //         Get Details!
        //     </Link>
        // </div>
    );
}


interface ChirpCardProps { 
    chirp: IChirp;
}

export default ChirpCard;
