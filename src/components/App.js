//import {Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';

import {Navbar, Home, CreatePost, PostDetail} from './'


function App() {
  return (
    <Router>
    <div className="container">
      <Navbar/>

      <Routes >
        <Route  path = '/' element= {<Home/>} />
        <Route  path = '/post/:postId' element= {<PostDetail/>} />
        <Route  path = '/create-post' element= {<CreatePost/>} />
      </Routes >
      
    </div>
    </Router>
  );
}

export default App;
