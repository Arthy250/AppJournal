
import { types } from "../../types/types";

describe('Pruebas en types', () => {
  
  test('El objeto debe de coincidir', () => {

    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    
      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',
    
      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',
    
      notesAddNew: '[Notes] New note',
      notesAactive: '[Notes] Set active note',
      notesLoad: '[Notes] Load notes',
      notesUpdated: '[Notes] Update note saved',
      notesUploadFile: '[Notes] Note upload image',
      notesDelete: '[Notes] delete note',
      notesLogoutCleaning: '[Notes] logout cleaning'
    });
    
  });
  
});