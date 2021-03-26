import { authReducer } from "../../reducers/authReduces";
import { types } from "../../types/types";


describe('Purebas en el authReduces', () => {
  
  test('Debe de ralizar el login ', () => {
    
    const initState = {};
    
    const action = {
      type: types.login,
      payload: {
        uid: '123456789',
        displayName:'Arturo'
      }
    }

    const state = authReducer (initState, action);
    
    expect(state).toEqual({
      uid:'123456789',
      name: 'Arturo'
    });

  });

  test('Debe de realizar el logout ', () => {
    
    const initState = {
      uid:'123456789',
      name: 'Arturo'
    };
    const action = {
      type: types.logout
    }

    const state = authReducer (initState, action);
    
    expect(state).toEqual({});

  });

  test('Debe de retornar el estado inicial cuando se envia un action desconocido ', () => {
    
    const initState = {
      uid:'123456789',
      name: 'Arturo'
    };
    const action = {
      type: '1235456'
    }

    const state = authReducer (initState, action);
    
    expect(state).toEqual(initState);

  });

});