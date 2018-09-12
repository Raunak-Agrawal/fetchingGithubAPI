import React, { Component } from "react";
import Userform from "./userForm";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    repos: "",
    profile_url: "",
    name: ""
  };
  getuser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`).then(res => {
      // console.log(res);
      const repo = res.data.public_repos;
      const profile_url = res.data.repos_url;
      const name = res.data.name;
      this.setState({ repos: repo, profile_url: profile_url, name: name });
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Request in GitHub</h1>
        </header>
        <Userform getUser={this.getuser} />
        {this.state.repos ? (
          <div>
            <p>Number of repos: {this.state.repos}</p>
            <p>Profile Url :{this.state.profile_url}</p>
            <p>Name: {this.state.name}</p>
          </div>
        ) : (
          <p>Please enter a username.</p>
        )}
      </div>
    );
  }
}

export default App;
