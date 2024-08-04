import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import "./contact.css";
import { useSession, useUser } from '@descope/react-sdk';
import { Descope } from '@descope/react-sdk';
import { useAuth } from "../auth";

const Contact = ({onLoginSuccess}) => {
  const navigate = useNavigate();
  const {isAuthenticated,login, logout} = useAuth();
  const { isSessionLoading } = useSession();
  const { user, isUserLoading } = useUser();

  const handleLoginSuccess = useCallback((user) => {
    login(user);
    onLoginSuccess(user);
    navigate("/");
  }, [login,onLoginSuccess, navigate]);

  const handleLogout = useCallback(() => {
    logout();
    navigate("/contact");
  }, [logout, navigate]);

  return (
    <div className="color">
    <div className="container">
      {!isAuthenticated && (
        <div>
          <Descope
            flowId="sign-up-or-in"
            onSuccess={(e) => handleLoginSuccess(e.detail.user)}
            onError={(e) => console.log('Could not log in!')}
            options={{ loginMethods: ['email'] }}
          />
        </div>
      )}

      {(isSessionLoading || isUserLoading) && <p>Loading...</p>}

      {!isUserLoading && isAuthenticated && (
        <>
          <img src={user.picture} alt="User profile" />
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <div>{user.name}</div>
          <button onClick={handleLogout}>Logout </button>
        </>
      )}
    </div>
    </div>
  );
};

export default Contact;