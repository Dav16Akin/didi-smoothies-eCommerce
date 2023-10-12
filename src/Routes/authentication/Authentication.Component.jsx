import React from "react";

import SignUpForm from "../../Components/Sign-up/Sign-up-form.Component";
import SignInForm from "../../Components/Sign-In/Sign-In-form.Component";

const SignIn = () => {

  return (
    <div className="grid grid-cols-2 mt-8 gap-4 divide-x-2">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default SignIn;
