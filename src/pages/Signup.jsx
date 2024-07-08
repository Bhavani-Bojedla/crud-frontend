import React from 'react'
import "../Styles/SignUp.css";
import axios from "axios"
import { useState } from 'react';
import Layout from "../components/Layout";
export default function Signup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (event) => {
      let inputObj = { username, email, password };
      console.log(inputObj);
      let url = "http://localhost:4000/users/createuser";
    axios
      .post(url, inputObj)
      .then((res) => { 
        // console.log(res);
        if(res.status===200){
          alert("user created")
        }
        else{
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
      event.preventDefault();
    };
    return (
      <Layout>
        <h1>SignUp page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </Layout>
    );
  }
  //useState() and useEffect() : react hooks
  // react hooks helps us to use class based components into functional components