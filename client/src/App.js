import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
