import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
  const handleLogin = () => {
    console.log("login")
  }

  const handleError = () => {
    console.log("error")
  }

  const handleLogout = () => {
    console.log("logout")
  }

  return (
    <>
      <h1>Google sso</h1>
      <GoogleLogin
        onSuccess={handleLogin}
        onError={handleError}
      >
      </GoogleLogin>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default App;
