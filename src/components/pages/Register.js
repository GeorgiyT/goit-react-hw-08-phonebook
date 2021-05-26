import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../auth/authOperations";
import styles from "./Register.module.css";

class Register extends Component {
  state = {
    name: "",
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
    this.props.register(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className={styles.contentBox}>
        <h1>Register</h1>
        <form action="onSubmit" onSubmit={this.handleSubmit}>
          <label>
            Login
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            E-mail
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(authOperations.register(user))
});

export default connect(null, mapDispatchToProps)(Register);
