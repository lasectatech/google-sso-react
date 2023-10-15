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
    const res = await fetch("http://localhost:8081/api/google-sso", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.credential
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json()
    setLoginData(data);
    localStorage.setItem("loginData",JSON.stringify(data))
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
