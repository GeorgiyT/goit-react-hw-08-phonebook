import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../auth/authOperations";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="onSubmit" onSubmit={this.handleSubmit}>
          <label>
            E-mail
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit" onClick={() => {}}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(authOperations.login(user))
});

export default connect(null, mapDispatchToProps)(Login);
