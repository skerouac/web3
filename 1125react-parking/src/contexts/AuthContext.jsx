import { Axios } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/verify", {
          //maakt niet uit welk request je stuurt, je moet gewoon IETS sturen
          credentials: true, //dit zorgt ervoor dat cookies worden meegestuurd -> withCredentials bij Axios;
        });

        //   const responseAxios = await Axios.post(
        //     "http://localhost:3000/login",
        //     { email, password },
        //     { withCredentials: true }
        //   );
        const data = await response.json();
        setUser(data); //als het teruggestuurd object een user is -> hangt af van wat je op je server terugstuurt
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    setUser({ email });
    setIsLoading(false);
    navigate("/users");
    // try {
    //   const response = await fetch("http://localhost:3000/login", {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //     credentials: true, //dit zorgt ervoor dat cookies worden meegestuurd -> withCredentials bij Axios;
    //   });

    //   //   const responseAxios = await Axios.post(
    //   //     "http://localhost:3000/login",
    //   //     { email, password },
    //   //     { withCredentials: true }
    //   //   );
    //   const data = await response.json();
    //   setUser(data); //als het teruggestuurd object een user is -> hangt af van wat je op je server terugstuurt
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
