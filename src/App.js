import './App.css';
import Home from './components/home/Home';
import Game from './pages/Game';
import Food from './pages/Food';
import Topbar from './components/topbar/Topbar';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZfVaaM50at7bTEca_YkYdmxqypQaCSKE",
  authDomain: "food-and-game.firebaseapp.com",
  projectId: "food-and-game",
  storageBucket: "food-and-game.appspot.com",
  messagingSenderId: "28656936963",
  appId: "1:28656936963:web:abe7b4f03f74ec67278636",
  measurementId: "G-2S827S6SR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
