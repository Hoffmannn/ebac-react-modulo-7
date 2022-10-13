import React from "react";
import "./App.css";
import DataList from "./components/dataList/DataList";
import Form from "./components/form/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      gender: null,
      submittedData: null,
    };
  }

  handleChangeInput = (event, field) => {
    this.setState({ ...this.state, [field]: event.target.value });
  };

  handleSubmit = () => {
    const { name, age, gender } = this.state;
    this.setState({
      name: "",
      age: 0,
      gender: null,
      submittedData: { name, age, gender },
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          name={this.state.name}
          age={this.state.age}
          gender={this.state.gender}
          handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
        />
        <DataList submittedData={this.state.submittedData} />
      </div>
    );
  }
}

export default App;
