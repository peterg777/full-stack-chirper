import * as React from 'react';
import {useState, useEffect} from 'react';
import type { IChirp } from '../utils/interfaces';
import ChirpCard from '../components/ChirpCard';

const Home: React.FC<HomeProps> = () => {
    const [chirps, setChirps] = React.useState<IChirp[]>([])

    React.useEffect(() => {
        fetch('/api/chirps')
            .then(res => res.json())
            .then(chirps => setChirps(chirps))
    }, [])

    // useEffect(() => {
    //     setChirps();

    // },[setChirps]);

    return (
        <section className="row justify-content-center">
            <img src="http://www.citiesmods.com/wp-content/uploads/2017/12/Chirper-HQ.jpg"/>
            {chirps.map(chirp => <ChirpCard key={`chirpcard-${chirp.id}`} chirp={chirp} />)}
        </section>
    );
}


interface HomeProps { }

export default Home;