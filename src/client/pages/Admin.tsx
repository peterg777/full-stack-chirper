import * as React from 'react';
import {useParams} from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import {useEffect} from 'react';


const Admin: React.FC<AdminProps> = (props) => {

    const { chirpid } = useParams();


    const [userid, setuserid] = React.useState('')
    const [content, setcontent] = React.useState('')
    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        fetch('/api/chirps', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userid, content })
        }).then(() => this.props.history.push('/'))
    }


    const handleDelete = (e: React.FormEvent<HTMLElement>) => {
        const{chirpid} = useParams()
        e.preventDefault()
        fetch(`/api/chirps/${chirpid}`, {
            method: "DELETE",
        })
        if (res.ok) {
			this.props.history.push('/');
		} else {
			console.log('Deleted!');
		}
	}
    useEffect(() => {
		(async () => {
			let res = await fetch(`/api/chirps/${chirpid}`);
			let chirp = await res.json();
			setuserid(chirp.userid);
			setcontent(chirp.content);
		})();
	}, [chirpid]);
    
    return (
        <Col md={8}>
			<Form className="p-3 my-3 shadow-sm">
				<Form.Group controlId="formSelectUser">
					<Form.Label>Chirp As:</Form.Label>
					<Form.Control 
						type="text"
						value={userid} 
						onChange={e=>setuserid(e.target.value)} 
						className="shadow-sm">
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="formTextArea">
					<Form.Label>Edit Chirp:</Form.Label>
					<Form.Control 
						as="textarea"
						value={content}
						onChange={e=>setcontent(e.target.value)}  
						className="shadow-sm"
						placeholder="Enter Chirp Here..."
					/>
  			</Form.Group>
				<div className="d-flex justify-content-around">
					<Button onClick={handleSubmit} variant="outline-primary" className="w-25 shadow-sm">Save It!</Button>
					<Button onClick={handleDelete} variant="outline-danger" className="w-25 shadow-sm">Delete It!</Button>
				</div>
			</Form>
		</Col>
	);
    
    }


interface AdminProps {}

export default Admin;