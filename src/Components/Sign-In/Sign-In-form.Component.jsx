import React from "react";
import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithgoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
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
        <div className="grid grid-cols-2 gap-5">
          <button className="btn btn-primary" type="submit">Sign In</button>
          <button className="btn btn-google" onClick={signInWithgoogle}>Google Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
