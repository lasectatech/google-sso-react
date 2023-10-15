import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Google sso</h1>
      <GoogleLogin></GoogleLogin>
    </>
  );
}

export default App;
