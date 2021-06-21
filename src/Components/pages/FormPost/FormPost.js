import {useForm} from 'react-hook-form';
import {schema} from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from 'react-bootstrap';
import {postInfo} from './../../../HTTP/HTTP';
import './form.css';

const FormPost = () => {

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const submitNewPost = (data) =>{
      postInfo(data);
      console.log(data);
    }


    return ( 
        <Form onSubmit={handleSubmit(submitNewPost)} className='form'>
              <Form.Group className='m-5 group'>
                <Form.Label >Titulo</Form.Label>
                <Form.Control name='title' placeholder='Titulo de mi nuevo post' 
                 {...register("title", {
                    required: "Required",
                  })}/>
                 {errors.title && (
                <span className="text-danger">{errors.title.message}</span>
              )}
                <Form.Label>Post</Form.Label>
                <Form.Control name='contents' placeholder='Mi nuevo y emocionante(? post'
                 {...register("contents", {
                    required: "Required",
                  })}/>
                 {errors.contents && (
                <span className="text-danger">{errors.contents.message}</span>
              )}
            </Form.Group>
            <Button type="submit" className='button'>Subir Post</Button> 
        </Form>
     );
}
 
export default FormPost;