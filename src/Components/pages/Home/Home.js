
import { useState, useEffect } from "react";
import { getAllInfo } from "../../../HTTP/HTTP";
import Post from "../Post";

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
        <>
            {post.length >0 && post.map((post) => (
            <Post key={post.id} {...post} deleteMyPost={deleteMyPost}/>)
            )}
        </>
     );
}
 
export default Home;