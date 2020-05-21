import React from 'react';

import SignIn from 'components/SignIn/SignInComponent';
import SignUp from 'components/SignUp/SignUp';

import './SignInSignUpStyles.scss';

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
