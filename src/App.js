import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/layout/Header';
import Nav from './Components/layout/Nav';
import Home from './Components/pages/Home';
import Post from './Components/pages/Post';
import FormPost from './Components/pages/FormPost';
import EditPost from './Components/pages/EditPost';
import DetailedPost from './Components/pages/DetailedPost';
import Footer from './Components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
       <div className='app'>
      <Header/>
      <Nav/>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/post' exact>
        <Post/>
      </Route>
      <Route path='/form' exact>
        <FormPost/>
      </Route>
      <Route path='/edit/:id' exact>
        <EditPost/>
      </Route>
      <Route path='/detail/:id' exact>
        <DetailedPost/>
      </Route>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
