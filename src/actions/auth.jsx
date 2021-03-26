import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishloading, startloading } from './ui';
import Swal from 'sweetalert2';
import { notesLogout } from './notes';

export const starLogin = (email, password) => {
  return (dispatch) => {

    dispatch(startloading());

    setTimeout(() => {

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({user}) => {
          
          dispatch(login(user.uid, user.displayName));
          dispatch(finishloading());

        })
        .catch (e => {
          
          dispatch(finishloading());
          Swal.fire('Error', e.message, 'error');

        })

    }, 1000);

  }
}

export const startRegister = (nombre, email, password) => {
  return (dispatch) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( async ({user}) => {

      await user.updateProfile({displayName: nombre});

      dispatch(
        login(user.uid, user.displayName) 
      )
    })
    .catch (e => {

      Swal.fire('Error', e.message, 'error');

    })
    
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {

    firebase.auth().signInWithPopup(googleAuthProvider)
      .then( ({user}) => {
        dispatch(
          login(user.uid, user.displayName) 
        )
      })
      
  }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName
    }
});

export const startLogout = () => {
  return async ( dispatch ) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch( notesLogout() );
  }
}

export const logout = () => ({
  type: types.logout
})