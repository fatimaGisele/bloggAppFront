import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return ( 
        <>
        <div className='nav'>
        <Link className='m-3 p-3 link' to='/'>Home</Link>
        <Link className='m-3 p-3 link' to='/form'>Nuevo Post</Link>
        </div>
        </>
     );
}
 
export default Nav;