import './App.css';
import Home from './components/home/Home';
import Game from './pages/Game';
import Food from './pages/Food';
import Topbar from './components/topbar/Topbar';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
            <Router>
          
      <Topbar/>

      <Routes>
      <Route path="/" element={<Home/>}/>

           <Route path="/Home" element={<Home/>}/>

         <Route path="/Game" element={<Game/>}/>
        <Route path="/Food" element={<Food/>}/>
          
           </Routes>
     
      </Router>
    </div>
  );
}

export default App;
