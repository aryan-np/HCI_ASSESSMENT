import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Homepage from './Pages/Homepage';
import CarsListing from './Pages/CarsListing';
import CarDetail from './Pages/CarDetail';
import OffersPromotions from './Pages/OffersPromotions';
import ContactSupport from './Pages/ContactSupport';
import FeaturedCars from './Pages/FeaturedCars';
import Favourites from './Pages/Favourites'; 
import AboutUs from './Pages/AboutUs';
import CarCustomization from './Pages/CarCustomization';
import BookTestDrive from './Pages/BookTestDrive';
import Profile from './Pages/Profile';
import Purchase from './Pages/Purchase';
import Settings from './Pages/Settings';
// import NotFound from './pages/NotFound';
import PreBook from './Pages/PreBook';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="models" element={<CarsListing />} />
          <Route path="offers" element={<OffersPromotions />} />
          <Route path="contact" element={<ContactSupport />} />
          <Route path="featured" element={<FeaturedCars />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="car/:carid" element={<CarDetail />} />
          <Route path="/prebook/:id" element={<PreBook />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="book-test-drive/:id" element={<BookTestDrive />} />
          <Route path="purchase/:carId" element={<Purchase />} />
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/customize/:id" element={<CarCustomization />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
