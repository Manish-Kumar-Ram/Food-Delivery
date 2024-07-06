import './App.css';
import Home from './components/Home';
import Navbar from './components/Nabar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart.jsx';
import Footer from './components/Footer.jsx';
import Placeorder from './pages/placeorder/PlaceOrder.jsx';
import Sing from './components/Sing.jsx';
import Login from './components/Login.jsx';
import Review from './components/Review.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipes from './components/Recipes.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='/order' element={<Placeorder></Placeorder>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/signup' element={<Sing></Sing>} />
        <Route path='/review' element ={<Review></Review>}></Route>
        <Route path='/AI' element={<Recipes></Recipes>}></Route>
        </Routes>
       
        <Footer></Footer>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
