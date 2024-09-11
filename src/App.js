import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css';
import Nav from './Component/Navbar';
import Home from './Component/Home';

function App() {
  return (
    <>
      
      <Router>

          <Nav />
        <Routes>
          
            
            <Route path='/' element={<Home />}/>

            

            
          
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
