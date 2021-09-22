import React from 'react';
import { FormInput } from '../components/Footer/FooterElements';
import { Container, Form, FormButton, FormContent, FormH1, FormLabel, FormWrap, Icon, Text } from './SigninElements';

function SignIn() {
  return (
    <>
    <Container>
      <FormWrap>
        <Icon to='/'>TaxiStake</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Sign into your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container> 
    </>
  )
}

export default SignIn;
