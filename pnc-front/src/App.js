import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar.js";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser.js';
import NewUser from './users/NewUser';
import ExistingUser from './users/ExistingUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <br></br>
      <Routes>
        <Route exact path='/' element={<AddUser/>}></Route>
        <Route exact path='/newuser' element={<NewUser/>}></Route>
        <Route exact path='/existinguser' element={<ExistingUser/>}></Route>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
