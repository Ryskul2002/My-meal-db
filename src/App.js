import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./comp/Home/Home";
import Cart from "./comp/Cart/Cart";
import Product from "./comp/Product/Product";
import NotFound from "./comp/NotFound/NotFound";
import './style.scss'
import Category from "./comp/Category/Category";
import Meal from "./comp/Meal/Meal";
import SignUp from "./comp/SignUp/SignUp";
import Layout from "./Layout/Layout";

function App() {


  return (
    <div className="App">

        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="Cart" element={<Cart/>}/>
                <Route path="Product" element={<Product/>}/>
                <Route path="category/:name" element={<Category/>}/>
                <Route path="category/:name/:id" element={<Meal/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>

        </Routes>

    </div>
  );
}

export default App;
