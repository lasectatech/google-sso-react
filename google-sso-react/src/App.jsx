import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleLogin = async (googleData) => {
    console.log(googleData);
    setLoginData({ email: "mail@mail.com" });
    localStorage.setItem("loginData",JSON.stringify({ email: "mail@mail.com" }))
  };

  const handleError = (result) => {
    console.log("error");
    alert(result);
  };

  const handleLogout = () => {
    console.log("logout");
    setLoginData(null);
    localStorage.removeItem("loginData")
  };

  return (
    <>
      <h1>Google sso</h1>
      {loginData ? (
        <div>
          <h3>Usuario logueado como: {loginData.email}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleLogin}
          onError={handleError}
        ></GoogleLogin>
      )}
    </>
  );
}

export default App;
