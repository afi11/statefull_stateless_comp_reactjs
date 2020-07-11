import React from "react";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "My title",
    };
  }

  changeTitle = () => {
      this.setState({
        title: 'Title has been changed',
      });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Header />
        {/* <p>Title : {this.state.title}</p> */}
        <p>Title : {title}</p>
        <h1>Home Page</h1>
        <button onClick={this.changeTitle}>Change Title</button>
        <Footer />
      </div>
    );
  }
}

export default Home;
