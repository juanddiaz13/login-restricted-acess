import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import './Login.scss';

export const Login = () => {
  const url = '/login';
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  useEffect(() => {
    console.log('email cambió');
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const response = await fetch(url,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.    
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached     
      headers: {},
      body: JSON.stringify(formValues) // body data type must match "Content-Type" header
      }).then((response)=>{
        console.log('finish api call - response:::',response);
      }).catch((error)=>{
          console.log('something wrong:::',error);
      });  

  };

  return (
    <>
      <div className='contact-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr/>

        <div className='form-group'>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Tu email'
            autoComplete='off'
            value={email}
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
