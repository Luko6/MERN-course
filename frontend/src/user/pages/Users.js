import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const DANNY =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg";

  const USERS = [
    { id: "u1", image: DANNY, name: "John Doe", places: 6 },
    { id: "u2", image: DANNY, name: "Danny Doe", places: 9 },
    { id: "u3", image: DANNY, name: "Bobby Doe", places: 1 },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
