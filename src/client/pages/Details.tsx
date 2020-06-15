
import * as React from 'react';
import {useParams} from 'react-router-dom';

const Details: React.FC<DetailsProps> = (props) => {
    const{chirpid} = useParams()
    return (
        <div>
            <h1 className="text-center">Details Page {chirpid}</h1>
        </div>
    );
}


interface DetailsProps { }

export default Details;
