import * as React from 'react';
import type { IChirp } from '../utils/interfaces';
const Home: React.FC<HomeProps> = (props) => {
    const [chirps, setChirps] = React.useState<IChirp[]>([])
    React.useEffect(() => {
        fetch('/api/chirps')
            .then(res => res.json())
            .then(chirps => setChirps(chirps))
    }, [])
    return (
        <div>
            <h1 className="text-center">Home Page</h1>
            {chirps.map(chirp=>(
                <h1>
                    {chirp.content}
                </h1>
            ))}
        </div>
    );
}


interface HomeProps { }

export default Home;