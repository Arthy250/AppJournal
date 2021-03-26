import { finishloading, removeError, setError, startloading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas en <ui/>', () => {
  
  test('Todas las acciones deben funcionar', () => {
    
    const action = setError ('HELP!!!')

    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'HELP!!!'
    });


    const removeErrorAction = removeError();
    const startloadingAction = startloading();
    const finishloadingAction = finishloading();

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError
    });
    
    expect(startloadingAction).toEqual({
      type: types.uiStartLoading
    });
    
    expect(finishloadingAction).toEqual({
      type: types.uiFinishLoading
    });
  });
  
})
