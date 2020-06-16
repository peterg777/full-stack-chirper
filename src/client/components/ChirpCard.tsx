
import * as React from 'react';
import type { IChirp } from '../utils/interfaces';
import {Link} from 'react-router-dom';


const ChirpCard: React.FC<ChirpCardProps> = ({chirp}) => {
    return (
        <div>
            <h1 className="text-center">{chirp.name}{chirp.content}</h1>
            <Link to={`/chirps/details/${chirp.id}`}>
                Get Details!
            </Link>
        </div>
    );
}


interface ChirpCardProps { 
    chirp: IChirp;
}

export default ChirpCard;
