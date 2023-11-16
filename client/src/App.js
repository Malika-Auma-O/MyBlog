import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import NavbarPage from "./components/NavbarPage";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Portfolio from "./components/Portfolio";
import Register from "./components/Register";
import Login from "./components/Login";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarPage/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/blog-form" element={<PostForm />}/>
            <Route path="/post" element={<PostDetails />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
library.add(fab, fas, far)