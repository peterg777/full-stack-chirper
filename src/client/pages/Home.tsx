import * as React from 'react';
import type { IChirp } from '../utils/interfaces';
import ChirpCard from '../components/ChirpCard';

const Home: React.FC<HomeProps> = (props) => {
    const [chirps, setChirps] = React.useState<IChirp[]>([])

    React.useEffect(() => {
        fetch('/api/chirps')
            .then(res => res.json())
            .then(chirps => setChirps(chirps))
    }, [])

    return (
        <section className="row justify-content-center">
            {chirps.map(chirp => <ChirpCard key={`chirpcard-${chirp.id}`} chirp={chirp} />)}
        </section>
    );
}


interface HomeProps { }

export default Home;