import Layout from "./Component/Layout/Layout";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LoginPage from "./Component/Login/LoginPage";

function App(props) {

  const [auth, setAuth] = useState(false);

  const [mail, setMail] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const checkUser = () => {
    const tokenData = JSON.parse(window.localStorage.getItem("token-data"));
    if (tokenData) {
      setAuth(true);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);



  return (
    <Router>


      <div className="App">

        <Routes>
          <Route exact path="/logowanie" element={<LoginPage setAuth={setAuth}
            setMail={setMail}
            setToken={setToken}
            setUserId={setUserId} />} />

          <Route exact path="*" element={<Layout
            auth={auth}
            setAuth={setAuth}
            userId={userId}
            mail={mail} />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
