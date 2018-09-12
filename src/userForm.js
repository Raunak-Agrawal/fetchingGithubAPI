import React, { Component } from "react";

const Userform = props => {
  return (
    <div>
      <form onSubmit={props.getUser}>
        <input
          type="text"
          placeholder="Enter UserName"
          name="username"
          style={{ margin: "20px auto" }}
        />
        {/* <p>{props.repos}</p>
        <p>{props.profile_url}</p>
        <p>{props.name}</p> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Userform;
