import React, { useState, useEffect } from "react";
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
        return resp.data.results;
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    fetchUsers().then((randomData) => {
      setUsers(randomData);
    });
  }, []);

  return (
    <div>
      <h2>Random users</h2>
      {!users
        ? ""
        : users.map((user, idx) => (
            <div key={idx}>
              <h3>Name:</h3>
              <p>
                {user.name.first} {user.name.last}
              </p>
              <img src={user.picture.large} alt="profile pic" />
            </div>
          ))}
    </div>
  );
}
