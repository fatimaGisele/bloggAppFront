
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { deleteInfo, getInfo } from './../../../HTTP/HTTP';
import './post.css';

const Post = ({id, title, deleteMyPost}) => {

    //const history = useHistory();

    const deletePost = (e) =>{
        const {id} = e.target;
        e.preventDefault();
        post(id);
    }

    const post = async(id) =>{
        await deleteInfo(id);
        console.log(id);
        deleteMyPost(id);
    }

    return ( 
        <Container className='m-5 post'>
            <Row>
                <Col>
                <h3 >{id}{title}</h3>
                <Button id={id} onClick={deletePost} className='m-3 button'>Eliminar</Button>
                <Button className='m-3 button'><Link to={`/edit/${id}`} className='link'>Editar</Link></Button>
                <Button className='m-3 button'><Link to={`/detail/${id}`} className='link'>Ver Detalle</Link></Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Post;