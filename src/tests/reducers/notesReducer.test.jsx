import { demoNotes } from "../../fixtures/demoNote";
import { notesReducer } from "../../reducers/notesReducer";
import { types } from "../../types/types";

describe('Pruebas en notesReducer', () => {
  
  const initialState = {
    notes: [],
    active: null
  }

  test('Debe de cambiar el estado de la nota a activa', () => {
    
    const action = {
      type: types.notesAactive,
      payload: demoNotes[0]
    }

    const state = notesReducer(initialState, action);
    expect(state.active.id).toBe(demoNotes[0].id);

  });

  test('Debe de agregar una nueva nota', () => {
    
    const newNote = {
      id: '6789',
      fecha: '26 de Agosto',
      titulo: "Adios mundo",
      cuerpo: "probando las pruebas",
      url: "https://res.cloudinary.com/doorgyh8s/image/upload/v1616282833/q3s4eq7k6qf6qq9lrxn5.jpg"
    }

    const action = {
      type: types.notesAddNew,
      payload: newNote
    }
    const state = notesReducer(initialState, action);

    expect(state.notes).not.toEqual({});

  });

  test('Debe de mostrar las notas que existen', () => {

    const action = {
      type: types.notesLoad,
      payload: demoNotes
    }

    const state = notesReducer(initialState, action);
    expect(state.notes.length).toEqual(2);

  });

  test('Debe de actualizar el contenido de la nota', () => {

    const initialState = {
      notes: demoNotes,
      active: null
    }

    const noteUpdated = {
      id: '1234',
      fecha: '30 de Agosto',
      titulo: "Hola mundo otra vez",
      cuerpo: "actualizado",
      url: "https://res.cloudinary.com/doorgyh8s/image/upload/v1616282833/q3s4eq7k6qf6qq9lrxn5.jpg"
    }

    const action = {
      type: types.notesUpdated,
      payload: {
        id:'1234',
        note: noteUpdated
      }
    }
    
    const state = notesReducer(initialState, action);
    expect(state[0]).not.toEqual(demoNotes[0]);
  });

  test('Debe de borrar una nota', () => {
    
    const initialState = {
      notes: demoNotes,
      active: null
    }

    const actionActivar = {
      type: types.notesAactive,
      payload: demoNotes[0]
    }

    const stateOne = notesReducer(initialState, actionActivar);

    const actionBorrar = {
      type: types.notesDelete,
      payload: '1234'
    }
    const stateTwo = notesReducer(initialState, actionBorrar);
    
    expect(stateTwo.notes.length).toEqual(1);
    expect(stateTwo.active).toBe(null);

  });

  test('Debe de limpuar el state de notes', () => {

    const initialState = {
      notes: demoNotes,
      active: null
    }

    const action = {
      type: types.notesLogoutCleaning
    }

    const state = notesReducer(initialState, action)
    expect(state.notes).toEqual([]);
    expect(state.active).toBe(null);
    
  });

});