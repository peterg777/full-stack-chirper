import * as React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import {useEffect} from 'react';


const Admin: React.FC<AdminProps> = () => {

	const { chirpid } = useParams();
	const history = useHistory();


    const [content, setcontent] = React.useState('')
    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        fetch(`/api/chirps/${chirpid}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ content })
        }).then(() => history.push('/'))
    }


    const handleDelete = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        fetch(`/api/chirps/${chirpid}`, {
            method: "DELETE",
        })
		.then(() => history.push('/'))
		.catch(err => console.log(err))
	}
    useEffect(() => {
		(async () => {
			let res = await fetch(`/api/chirps/${chirpid}`);
			let chirp = await res.json();				
			setcontent(chirp.content);
		})();
	}, [chirpid]);

    return (
        <Col md={8}>
            <img src="http://www.citiesmods.com/wp-content/uploads/2017/12/Chirper-HQ-2.jpg"/>

			<Form className="p-3 my-3 shadow-sm">
				<Form.Group controlId="formTextArea">
					<Form.Label>Edit Chirp:</Form.Label>
					<Form.Control 
						value={content}
						onChange={e=>setcontent(e.target.value)}  
						className="shadow-sm"
						placeholder="Enter Chirp Here..."
					/>
  			</Form.Group>
				<div className="d-flex justify-content-around">
					<Button onClick={handleSubmit} variant="outline-primary" className="w-25 shadow-sm">Save !</Button>
					<Button onClick={handleDelete} variant="outline-danger" className="w-25 shadow-sm">Destroy Me!</Button>
				</div>
			</Form>
		</Col>
	);
    
    }


interface AdminProps {}

export default Admin;