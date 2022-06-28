import Home from "./Amazon/Home/Home";
import Header from "./Amazon/Layout/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Amazon/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
