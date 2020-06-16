import * as React from 'react';
import {useParams} from 'react-router-dom';

const Admin: React.FC<AdminProps> = (props) => {
    const{chirpid} = useParams();
    return (
        <div>
            <h1 className="text-center">Admin Page{chirpid}</h1>
        </div>
    );
}


interface AdminProps {}

export default Admin;