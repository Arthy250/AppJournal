import { uiReducer } from "../../reducers/uiReducer";
import { types } from "../../types/types";

describe('Pruebas en uiReducer', () => {
  
  const initialState = {
    loading: false,
    msgError: null
  }

  test('Debe de mostrar el error', () => {
    

    const action = {
      type: types.uiSetError,
      payload: 'Este es un error'
    }

    const state = uiReducer(initialState, action);

    expect(state.msgError).toBe('Este es un error');
  });

  test('Debe de remover el error', () => {

    const action = {
      type: types.uiRemoveError
    }

    const state = uiReducer(initialState, action);
    expect(state.msgError).toBe(null);

  });

  test('Debe de inicia el loading', () => {

    const action = {
      type: types.uiStartLoading
    }

    const state = uiReducer(initialState, action);
    expect(state.loading).toBe(true);

  });

  test('Debe de inicia el loading', () => {

    const action = {
      type: types.uiFinishLoading
    }

    const state = uiReducer(initialState, action);
    expect(state.loading).toBe(false);

  });

});