// Novbar.js
import { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from '../auth';

const Novbar = () => {
  const { isAuthenticated, user } = useAuth();
  const [color, setcolor] = useState("");

  const handlecolor = (event) => {
    setcolor(event.target.value)
  }

  useEffect(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setcolor(randomColor);
  }, []);

  return (
    <div className={{color}} style={{backgroundColor:color}}>
      
      <div>
        <div className="flex justify-between">
          <div>
            <div className="flex">
              <div className="mt-4 ml-1 md:ml-4 font-extrabold text-purple-800">Multi-Task-site</div>
              <div className="md:flex flex-auto">
                <NavLink to="/">
                  <div className="m-4 hover:scale-105 shadow-lg hover:text-purple-600 cursor-pointer">Home</div>
                </NavLink>
                <NavLink to="services">
                  <div className="m-4 hover:scale-105 shadow-lg hover:text-purple-600 cursor-pointer">Services</div>
                </NavLink>
                <NavLink to="about">
                  <div className="m-4 hover:scale-105 shadow-lg hover:text-purple-600 cursor-pointer">About-Us</div>
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              {!isAuthenticated ? (
                <NavLink to="contact">
                  <button className="m-4 hover:scale-105 shadow-lg hover:text-purple-600 cursor-pointer">
                    Login/SignUp
                  </button>
                </NavLink>
              ) : (
                <NavLink to="contact">
                  <div className="flex justify-between m-4 hover:scale-105 shadow-lg hover:text-purple-600 cursor-pointer">
                    <div><img className="picture" src={user.picture} alt="User profile" /></div>
                    <div className="vipin">{user.name}</div>
                  </div>
                </NavLink>
              )}
              <div className="md:m-4 hover:scale-105 shadow-lg hover:text-purple-600 cursor-pointer">
                <input type="text" value={color} placeholder="enter color" onChange={handlecolor}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Novbar;
