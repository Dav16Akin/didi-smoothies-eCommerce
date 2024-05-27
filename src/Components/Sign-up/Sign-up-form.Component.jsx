import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../Store/User/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot sign up user, Email already in use");
        return;
      } else {
        console.log("Error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="email-signup-form-container text-center">
      <h1 className="font-bold">Don't have an account ?</h1>
      <span>Sign up with Email and Password</span>
      <form className="email-signup-form" onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          placeholder="Your Name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          placeholder="shop@gmail.com"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button className="btn btn-primary rounded-full" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
