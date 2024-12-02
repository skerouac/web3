import React from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <button
        onClick={
          () => login("stan.claeys@student.hogent.be", "wachtwoordTest12345") //eigenlijk de values uit formik of states halen om mee te sturen
        }
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
