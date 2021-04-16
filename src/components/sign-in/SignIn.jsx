import React, { Component } from "react";
import CustomBtn from "../custom-button/CustomBtn";
import FormInput from "../form/FormInput";
import { signInWithGoogle } from "../../assets/firebase/firebase.utils";

import "./sign-in.scss";

export default class SignIn extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleInput={this.handleInput}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleInput={this.handleInput}
            required
          />
          <div className="btn">
            <CustomBtn type="submit"> Sign In</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In With Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}
