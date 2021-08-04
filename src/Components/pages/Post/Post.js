
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteInfo } from './../../../HTTP/HTTP';
import Swal from 'sweetalert2';
import './post.css';

const Post = ({id, title, deleteMyPost}) => {


    const deletePost = (e) =>{
        const {id} = e.target;
        e.preventDefault();
        post(id);
    }

    const post = async(id) =>{
        const {status} = await deleteInfo(id);
        status === 200 && alertDelete();
        console.log(id, status);
        deleteMyPost(id);
    }

    const alertDelete = async() =>{
       await new Swal({
            position: 'center',
            title: 'El post fue eliminado',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        });
    }

    return ( 
         <Card className='m-5 post'>
            <h4 className='title'>{title}</h4>
            <Button id={id} onClick={deletePost} className='m-3 button'>Eliminar</Button>
            <Button className='m-3 button'><Link to={`/edit/${id}`} className='link'>Editar</Link></Button>
            <Button className='m-3 button'><Link to={`/detail/${id}`} className='link'>Ver Detalle</Link></Button>
         </Card>
       );
}
 
export default Post;