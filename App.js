import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

import GlobalStyle from "./styles/Global";

class App extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Home />
      </>
    );
  }
}

export default App;
