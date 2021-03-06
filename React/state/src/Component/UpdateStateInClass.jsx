import React, {Component} from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jayrajsinh Zala",
      contactno: "8200780738",
      salary:12000
    };
  }
  
  updateSalary = () => {
    this.setState({salary: 25000});
  }
   render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <p>
          My contact no. is {this.state.contactno}
        </p>
        <p>
          My salary/month is {this.state.salary}
        </p>
        <button type="button" onClick={this.updateSalary}>Update Salary</button>
      </div>
    );
  }
}

export default Person;