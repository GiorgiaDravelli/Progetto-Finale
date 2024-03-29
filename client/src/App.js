import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Signup } from "./pages/Signup/Signup.js"
import { UpdateUser } from "./pages/UpdateUser/UpdateUser.js"
import { Login } from "./pages/Login/Login.js"
import { Home } from "./pages/Home/Home.js"
import  Store  from "./pages/Store/Store.js"
import  AddItem  from "./components/AddItem/AddItem.js"
import  Cart  from "./components/Cart/Cart.js"


function App() {
  return (
    <div>
      <Router>
          <HelmetProvider>
            <title>Biodiversity Gardens - Home</title> 
            <meta name='Home Page' content='info sito' />
          </HelmetProvider>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/update" element={<UpdateUser />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
