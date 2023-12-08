import React from "react";
import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../Utils/Firebase/firebase.utils";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithgoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
     switch (error.code) {
      case "auth/invalid-login-credentials":
        alert("Login credentials do not exist")
        break;
      default:
        console.log(error);
        break;
     }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="email-signup-form-container">
      <h1 className="font-bold">Already have an Account ?</h1>
      <span>Sign In with Email and Password</span>
      <form className="email-signup-form" onSubmit={handleSubmit}>
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
        <div className="grid grid-row-2">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
          <button
            type="button"
            className="btn btn-google"
            onClick={signInWithgoogle}
          >
            Google Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
