import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { getInfo } from './../../../HTTP/HTTP';
import './detailedPost.css';

const DetailedPost = () => {
    
    const [newPost, setNewPost] = useState([]);
    const history = useHistory();
    const id = useParams().id;

    const handlerClick = () =>{
        history.push('/');
    }

    const info = async() =>{
            const response = await getInfo(id);
            const {status} = response.status;
            const {title, body} = response.data;
            setNewPost(...newPost, {title, body, status});
        }

    useEffect(()=>{
        info();
    },[id]);

    return ( 
        <Container className='detPost'>
            <Row>
                <Col>
                    <h4>Titulo: {newPost.title} </h4>
                    <p>Post numero: {id}</p>
                    <p>{newPost.body}</p>
                    <Button onClick={handlerClick}  className='button'>Atras</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default DetailedPost;