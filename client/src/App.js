import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Shop from './pages/Shop/Shop';
import ProductBySubCategory from './pages/ProductPage/ProductBySubCategory';
import BlogPage from './pages/BlogPage/BlogPage';
import SupportPage from './pages/SupportPage/SupportPage';
// import Login from './components/Auth/Login';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/CartPage/Checkout';
import ConfirmOrder from './pages/CartPage/ConfirmOrder';
import Login from './components/Login/Login';
import ForgetPassword from './components/Login/ForgetPassword';
import SignIn from './components/Login/SignIn';
import OtpSignUp from './components/Login/OtpSignUp';
import SubCategoryByCategory from './pages/ProductPage/SubCategoryByCategory';
import SingleBlogPage from './pages/BlogPage/SingleBlogPage';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/our-category' element={<CategoryPage />} />
        <Route path='/our-products/:category' element={<SubCategoryByCategory />} />
        <Route path='/our-products/:category/:subCategory' element={<ProductBySubCategory />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/:name' element={<SingleBlogPage />} />
        <Route path='/contact' element={<SupportPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-confirm/:orderID' element={<ConfirmOrder />} />

        <Route path="/our-products/:category/:subCategory/:productName" element={<ProductPage />} />


        {/* ==== Authentication ====  */}
        {/* <Route path='/login' element={<Login/>} /> */}
        <Route path='/profile' element={<Profile/>} /> 

        <Route path='/login' element={<Login />} />
        <Route path='/login/forget-password' element={<ForgetPassword />} />
        <Route path='/register' element={<SignIn />} />
        <Route path='/register/confirm-account/:email' element={<OtpSignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
