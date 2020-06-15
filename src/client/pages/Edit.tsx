import * as React from 'react';
import ChirpEdit from '../components/ChirpEdit';


class Edit extends React.Component<EditProps>{

render(){
    return(
        <section className="row justify-content-center">
			<ChirpEdit />
		</section>

    )
}
}

interface EditProps{}

export default Edit;