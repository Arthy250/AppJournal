import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    //return 'https://hola-mundo.com/foto.jpg';
    return Promise.resolve('https://hola-mundo.com/foto.jpg');
  })
}));

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: 'Testing'
  },
  notes: {
    active: {
      id: '1iQAadxKzXkU9wBsbV1G',
      fecha :1616557332746,
      titulo :'Hola',
      cuerpo :'mundo',
    }
  }
}

let store = mockStore(initState)

describe('Pruebas con archivos en notes', () => {

  beforeEach ( () => {
    store = mockStore(initState);
  })

  test('Debe de actualizar la url de la entrada con startUploading', async() => {
    
    const file = new File([], 'foto.jpg');
    await store.dispatch (startUploading(file));

    const docRef = await db.doc(`/Testing/journal/notes/${initState.notes.active.id}`).get();
    console.log(docRef);

  });
  
});