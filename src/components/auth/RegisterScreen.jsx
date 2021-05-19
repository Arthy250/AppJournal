import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    nombre: 'Juan',
    email: 'juan@juan.com',
    password: '123456',
    passwordConfirm: '123456'
  });

  const {nombre, email, password, passwordConfirm} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegister(nombre, email, password));
    }

  }

  const isFormValid = () => {

    if(nombre.trim().length === 0){
      dispatch( setError( 'El nombre es obligatorio' ) );
      return false;
    } else if ( !validator.isEmail(email)){
      dispatch( setError( 'El email es obligatorio' ) );
      return false;
    } else if ( password !== passwordConfirm || password < 5 ) {
       dispatch( setError( 'La contraseña debe de tener al menos 6 caracteres y deben ser iguales' ) )
      return false;
    }
    dispatch(removeError());

    return true
  }

  return (
    <>
      <h3 className="auth__title">Registro</h3>
     <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">

      {msgError &&  (<div className="auth__alert-error"> {msgError} </div>) }

      <input 
        className="auth__input" 
        type="text" 
        name="nombre" 
        placeholder="nombre"
        autoComplete="off"
        value={nombre}
        onChange={handleInputChange}
      />
      <input 
        className="auth__input" 
        type="text" 
        name="email" 
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />
      <input
        className="auth__input"
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={handleInputChange}
      />
      <input
        className="auth__input"
        type="password"
        name="passwordConfirm"
        placeholder="Confirmar Contraseña"
        value={passwordConfirm}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary pointer btn-block mb-5" type="submit">Registrarse</button>

      <Link className="link pointer" to="/auth/login">Iniciar sesión</Link>
     </form>
    </>
  )
}
