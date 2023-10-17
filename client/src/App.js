import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import HomeBg from './components/HomeBg';
import CategoryPg from './pages/CategoryPg';
import AddProduct from './components/AddProduct';
import Productpg from './pages/Productpg';
import Subcategorypg from './pages/Subcategorypg';
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeBg />}> </Route>
          <Route path='/productlisting' element={<HomeBg />}> </Route>
          <Route path='/addcategory' element={<CategoryPg />}></Route>
            <Route path='/addsubcategory' element={<Subcategorypg />}></Route>
            <Route path='/addproducts' element={<Productpg />}></Route>
           
          
          
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
