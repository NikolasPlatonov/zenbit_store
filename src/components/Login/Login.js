import React, { useState } from 'react';
import { FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';
import s from './Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormControl
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <FormControl
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </FormGroup>
      <Button block bsSize="large" disabled={!validateForm()} type="submit">
        Login
      </Button>
    </form>
  );
};
