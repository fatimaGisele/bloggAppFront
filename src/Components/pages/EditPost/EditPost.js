import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { schema } from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Row, Col } from 'react-bootstrap';
import { putInfo, getInfo } from './../../../HTTP/HTTP';
import Swal from 'sweetalert2';
import './editpost.css';

const EditPost = () => {

  const [post, setPost] = useState({});
  const history = useHistory();
  const id = useParams().id;

  const { register, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
  });

  const info = async() =>{
    const response = await getInfo(id);
    const {status} = response.status;
    const {title, body} = response.data;
    setPost({title, body});
}

  const handlerClick = () =>{
    history.push('/');
  }

  const changePost = async(data) =>{
    console.log(data);
    data === null && notFound();
    const {newTitle, newContents} = data;
    setPost({id, title:newTitle, body:newContents});
    const {status} = await putInfo(id, data);
    status !==(200||201) && alertSubmit();
  }

  const alertSubmit = () =>{
    new Swal({
      position: 'center',
      title: 'Error',
      icon: 'error',
      showConfirmButton: false,
      timer: 2000
  });
  handlerClick();
  }

  const notFound=()=>{
    new Swal({
        position: 'center',
        title: 'No ingresaste los datos pedidos! ponete las pilas',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000
    });
}

  useEffect(()=>{
  info();
  },[id]);

    return ( 
        <Form onSubmit={handleSubmit(changePost)} className='form'>
           <Row>
                <Col>
                    <h3>Titulo:</h3>
                    <p>{post.title}</p>
                    <p>Post numero: {id}</p>
                    <h4>Post:</h4>
                    <p>{post.body}</p>
                </Col>
            </Row>
        <Form.Group className='m-5 group'>
          <Form.Label >Titulo</Form.Label>
          <Form.Control name='newTitle' placeholder={post.title}
           {...register("newTitle", {
              required: "Required",
            })}/>
           {errors.newTitle && (
          <span className="text-danger">{errors.newTitle.message}</span>
        )}
          <Form.Label>Post</Form.Label>
          <Form.Control name='newContents' placeholder={post.body}
           {...register("newContents", {
              required: "Required",
            })}/>
           {errors.newContents && (
          <span className="text-danger">{errors.newContents.message}</span>
        )}
      </Form.Group>
      <Button type="submit" key={post.id} className='button'>Editar</Button> 
      <Button onClick={ handlerClick} className='button'>Atras</Button> 
  </Form>
     );
}
 
export default EditPost;