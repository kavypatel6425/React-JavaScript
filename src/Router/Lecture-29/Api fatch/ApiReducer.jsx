import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./ApiSlice";

function ApiReducer() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await axios.post("http://localhost:3000/user", {
        name,
        email,
        password,
      });

      dispatch(addUser(res.data));
      alert("User added successfully");
    } catch (error) {
      console.error(error);
      alert("Error adding user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button type="submit">Add User</button>
    </form>
  );
}

export default ApiReducer;