import './App.css'
import NavBarContainer from './components/NavBar/NavBarContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';


function App() {
  return (
    
    <div>
      <NavBarContainer />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/category/:id" element={<Category/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
  
    </div> 
  )
}

export default App
