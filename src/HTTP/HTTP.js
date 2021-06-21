
import axios from 'axios';

const urlBase = 'https://jsonplaceholder.typicode.com/posts';
    

export const postInfo = async(object) => {
    const response = await axios.post(`${urlBase}`, object);
    return response;
        
}

export const getAllInfo = async() => {
    let response = await axios.get(`${urlBase}`); 
    console.log(response);
    return response;
}

export const getInfo = async(endpoint) => {
    const response = await axios.get(`${urlBase}/${endpoint}`);
    return response;
}

export const  putInfo = async (endpoint, object) =>{
    const response = await axios.put(`${urlBase}/${endpoint}`, object);
    return response;
}

export const deleteInfo = async (endpoint) =>{
    const response = await axios.delete(`${urlBase}/${endpoint}`);
    return response;
}