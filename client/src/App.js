import React, { Component } from "react";
import "./App.css";
import logo from "./space-x-logo.jpg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={logo}
            alt="spacex"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
