import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const [secret, setSecret] = useState(null)

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

    if(res.status == 422){
      alert("token invalido")
    }

    const data = await res.json()
    setLoginData(data);
    localStorage.setItem("loginData",JSON.stringify(data))
    localStorage.setItem("token", JSON.stringify({"token": googleData.credential}))
  };

  const handleError = (result) => {
    console.log("error");
    alert(result);
  };

  const handleLogout = () => {
    console.log("logout");
    setLoginData(null);
    localStorage.removeItem("loginData")
    localStorage.removeItem("token")
    setSecret(null)
  };

  const handleSecret = async () => {
    const token = JSON.parse(localStorage.getItem("token"))

    const res = await fetch("http://localhost:8081/api/secret", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.token
      }
    })

    const data = await res.json()
    setSecret(data)
  }
  return (
    <>
      <h1>Google sso</h1>
      {loginData ? (
        <div>
          <h3>Usuario logueado como: {loginData.email}</h3>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleSecret}>Ver secreto</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleLogin}
          onError={handleError}
        ></GoogleLogin>
      )}
      {
        secret && 
        <ul>
          <li>{secret.name}</li>
          <li>{secret.lastName}</li>
          <li>{secret.email}</li>
        </ul>
      }
    </>
  );
}

export default App;
