import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    useEffect(() => {
        const LoggedInfo = localStorage.getItem('isLoggedIn');
    
      if (LoggedInfo === '1'){
        setIsLoggedIn(true);
      }
      },[]);
    
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn','1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };

    return(
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogOut: logoutHandler,
            onLogin: loginHandler,
        }}>{props.children}</AuthContext.Provider>
    )};

export default AuthContext;