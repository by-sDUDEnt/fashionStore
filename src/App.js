import React, { Component } from "react";
import "./App.css";
import Signup from "./components/signUp/Signup";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {

    const login = localStorage.getItem("isLoggedIn");

    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />}></Route>
                <Route path="/sign-in" element={<Signin />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

