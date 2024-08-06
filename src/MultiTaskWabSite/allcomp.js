import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './auth';
import Novbar from "./navnar/navbar";
import Home from "./home/hame";
import Services from "./services/services";
import About from "./about/about";
import Contact from "./contact/contact";
import Cleaning from "./cleaning/cleaning";
import Repair from "./repair/repair";
import Painting from "./painting/painting";
import Shifting from "./shifting/shifting";
import Plumbing from "./plumbing/plumbing";
import Electric from "./electric/electric";
import Book from "./booknow/book";
import { useState } from "react";

const AllComponents = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Novbar isAuthenticated={isAuthenticated} user={user} />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact onLoginSuccess={handleLoginSuccess} />} />
        <Route path="cleaning" element={<Cleaning/>} />
        <Route path="repair" element={<Repair/>} />
        <Route path="painting" element={<Painting/>} />
        <Route path="shifting" element={<Shifting/>} />
        <Route path="plumbing" element={<Plumbing/>} />
        <Route path="electric" element={<Electric/>} />
        <Route path="book" element={<Book />} />
      </Route>
    )
  );

  return (
    <div>
      <AuthProvider>
      <RouterProvider router={router} />
      
      </AuthProvider>
    </div>
  );
};

export default AllComponents;
