
 /**
 * @jest-environment node
 */

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: 'Testing'
  }
}

let store = mockStore(initState)

describe('Pruebas con las acciones de notes', () => {

  beforeEach ( () => {
    store = mockStore(initState);
  })

  test('Debe de crear una nueva nota con startNewNote ', async() => {
    
    await store.dispatch(startNewNote());
    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.notesAactive,
      payload: {
        id: expect.any(String),
        titulo: '',
        cuerpo: '',
        fecha: expect.any(Number)
      }
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        titulo: '',
        cuerpo: '',
        fecha: expect.any(Number)
      }
    });
    const docId = actions[0].payload.id;
    await db.doc(`/Testing/journal/notes/${docId}`).delete();


  });

  test('Debe cargar las notas con startLoadingNotes', async() => {
    
    await store.dispatch(startLoadingNotes('Testing'));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    });

    const expected = {
      id: expect.any(String),
      titulo: expect.any(String),
      cuerpo: expect.any(String),
      fecha: expect.any(Number)
    }
    expect(actions[0].payload[0]).toMatchObject(expected);

  });

  test('Debe de actualizar la nota con startSaveNote', async () => {
    
    const note = {
      id: '1iQAadxKzXkU9wBsbV1G',
      titulo: 'titulo',
      cuerpo: 'cuerpo'
    }

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();
    
    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`/Testing/journal/notes/${note.id}`).get();

    expect(docRef.data().titulo).toBe(note.titulo);

  });  

});