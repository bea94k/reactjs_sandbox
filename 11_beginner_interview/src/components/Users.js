import React, { useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState();

  const fetchUsers = () => {
    return axios
      .get("https://randomuser.me/api/")
      .then((resp) => {
        console.log(resp);
        console.log(resp.data.results);
        // setUsers(resp.data.results); // you need to RETURN!
        return JSON.stringify(resp.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const clickFetch = () => {
    fetchUsers().then((randomData) => {
      setUsers(randomData);
    });
  };

  /* const displayUsers = (users) => {
    users.forEach((user) => {
      return (
        <div>
          <h3>Name:</h3>
          <p>
            {user.name.first} {user.name.last}
          </p>
          <img src={user.picture.medium} alt="profile photograph" />
        </div>
      );
    });
  }; */

  return (
    <div>
      <h2>Fetching users</h2>
      <button onClick={clickFetch}>Fetch users</button>
      {!users ? <p>No users fetched yet.</p> : users}
    </div>
  );
}
