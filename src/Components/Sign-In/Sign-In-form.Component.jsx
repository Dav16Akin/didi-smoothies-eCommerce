import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { googleSignInStart, emailSignInStart } from "../../Store/User/user.action";
// import { showNotification } from "../../Store/Notification/notification.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithgoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     dispatch(emailSignInStart(email, password))
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Login credentials do not exist");
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
    <div className="email-signup-form-container text-center mx-4">
      <p className="font-bold">Already have an Account ?</p>
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
        <div className="flex justify-between space-x-6">
          <button className="btn btn-primary rounded-full" type="submit" >
            Sign In
          </button>
          <button
            type="button"
            className="btn btn-google rounded-full w-1/3"
            onClick={signInWithgoogle}
          >
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
