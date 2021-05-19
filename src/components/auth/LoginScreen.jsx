import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { starLogin } from '../../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: 'juan@juan.com',
    password: '123456'
  });

  const {email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(starLogin(email, password));
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <>
     <h3 className="auth__title">Login</h3>
     <form onSubmit={ handleLogin } className="animate__animated animate__fadeIn animate__faster">

      <input
        className="auth__input"
        type="text"
        name="email"
        placeholder="email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />
      <input
        className="auth__input"
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleInputChange}
      />
       <button 
        className="btn btn-primary pointer btn-block"
        type="submit"
        disabled={loading}
        >Login</button>
       
       <div className="auth__social-networks">

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Iniciar sesión con Google</b>
            </p>
          </div>
       </div>
       <Link className="link pointer" to="/auth/register">Crear nueva cuenta</Link>
     </form>
    </>
  )
}
