import { useState, useEffect } from "react";
import { getAllInfo } from "../../../HTTP/HTTP";
import Post from "../Post";
import { Container, Col, Row } from "react-bootstrap";

const Home = () => {

    const[post, setPost] = useState([]);

    const AllPost = async() =>{
        const info = await getAllInfo();
        setPost(info.data);
    }
    
    const deleteMyPost = (id) =>{
        const cosa = post.filter((p)=>p.id !== id);
        setPost(cosa);
    }

    useEffect(()=>{
        AllPost();
    },[])

    return ( 
        <Container>
            <Row>
                {post.length >0 && post.map((post) => (
                    <Col xs={12} md={6}>
                        <Post key={post.id} {...post} deleteMyPost={deleteMyPost}/>
                    </Col>)
                    )}
             </Row>
        </Container>
       
     );
}
 
export default Home;