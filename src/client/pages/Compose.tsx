import * as React from 'react';



const Compose:React.FC<ComposeProps> = () => {
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
            <input value={userid} onChange={e => setuserid(e.target.value)} />
            <input value={content} onChange={e => setcontent(e.target.value)} />
            <button className="btn btn-outline-Dark" type="submit" onClick={handleSubmit}>Add Chirp At Your Own Risk!</button>
            <img src="http://www.citiesmods.com/wp-content/uploads/2017/12/Chirper-HQ.png" />
        </form>
    )
}




interface ComposeProps { }

export default Compose;