import React from 'react';

import SignIn from 'components/SignIn/SignInComponent';
import SignUp from 'components/SignUp/SignUpComponent';

import { SignInAndSignUpContainer } from './SignInSignUpStyles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
