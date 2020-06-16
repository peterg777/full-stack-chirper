import * as React from 'react';
import e from 'express';

const Compose: React.FC<ComposeProps> = (props) => {
    const [userid, setuserid] = React.useState('')
    const [content, setcontent] = React.useState('')
    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userid, content })
        }).then(() => this.props.history.push('/'))
    }

    return (
        <form>
            <input value={userid} onChange={e=>setuserid(e.target.value)} />
            <input value={content} onChange={e=>setcontent(e.target.value)} />
            <button></button>
        </form>
    )
}




interface ComposeProps { }

export default Compose;