import {useForm} from 'react-hook-form';
import {schema} from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from 'react-bootstrap';
import {postInfo} from './../../../HTTP/HTTP';
import Swal from 'sweetalert2';
import './form.css';

const FormPost = () => {


  const { register, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
  });

    const submitNewPost = (data) =>{
      postInfo(data);
      const {status} = data;
      status !== 201 ? alertError() : submitSuccess();
      console.log(data);
    }
 
    const alertError= async(msj) =>{
      await new Swal({
           position: 'center',
           title: msj,
           icon: 'error',
           showConfirmButton: false,
           timer: 2000
       });
   }

   const submitSuccess= async() =>{
    await new Swal({
         position: 'center',
         title: 'El post fue registrado con exito',
         icon: 'success',
         showConfirmButton: false,
         timer: 3000
     });
 }

    return ( 
        <Form onSubmit={handleSubmit(submitNewPost)} className='form'>
              <Form.Group className='m-5 group'>
                <Form.Label >Titulo</Form.Label>{errors.title && alertError(errors.title.message)}
                 <Form.Control name='title' placeholder='Titulo de mi nuevo post' 
                 {...register("title", {
                    required: "Required",
                  })}/> 
                
                <Form.Label className='postForm'>Post</Form.Label>
                <Form.Control name='contents' placeholder='Mi nuevo y emocionante(? post'
                 {...register("contents", {
                    required: "Required",
                  })}/>
                 {errors.contents &&  alertError(errors.contents.message)}
            </Form.Group>
            <Button type="submit" className='button'>Subir Post</Button> 
        </Form>
     );
}
 
export default FormPost;