
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IChirp } from '../utils/interfaces';



const Details: React.FC<DetailsProps> = () => {
    const { chirpid } = useParams();
    const [chirp, setChirps] = useState<IChirp>(null);
    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${chirpid}`);
            let chirp = await res.json();
            setChirps(chirp);
        })();
    }, [chirpid]);
    return (
        <section className="row justify-content-center">
            <h1>
                {chirp?.content}
            </h1>
            {/* <DetailsCard key={`detailscard-${chirp?.id}`} chirp={chirp} /> */}
        </section>
    );

}

interface DetailsProps { }

export default Details;
