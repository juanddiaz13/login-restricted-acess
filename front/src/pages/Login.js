import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import './Login.scss';

export const Login = () => {
  const url = 'api/auth/login';
  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  const { username, password} = formValues;

  useEffect(() => {
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(url,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.    
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached     
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues) // body data type must match "Content-Type" header
      })
      const data = await response.json()
      console.log(data)
  };

  return (
    <>
      <div className='contact-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr/>

        <div className='form-group'>
          <input
            type='text'
            name='username'
            className='form-control'
            placeholder='Tu usuario'
            autoComplete='off'
            value={username}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='micontraseña123...'
            autoComplete='off'
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Iniciar sesión
        </button>
      </form>
    </div>
    </>
  );
};
