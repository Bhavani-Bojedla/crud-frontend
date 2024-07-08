import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
export default function View() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://crud-backend-final.onrender.com/users/getusers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const deleteData=(id)=>{
     axios.delete("https://crud-backend-final.onrender.com/users/deleteUser/"+id).then(res=>{
      console.log(res.data);
      if(res.status===200){
        alert("deleted");
        window.location.reload();
      }
      else{
        Promise.reject()
      }
     }).catch(e=>{
      console.log(e)
     })
  }
  const display = (data) => {
    return data.map((user) => {
      return (
        <tr>
          <td>{user._id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>
            <button onClick={()=>{
              deleteData(user._id)
            }}>delete</button>
            <button>Update</button>
          </td>
        </tr>
      );
    });
  };
  return (
    <Layout>
      <h1>View Page</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>username</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody >{display(users)}</tbody>
      </table>
    </Layout>
  );
}
