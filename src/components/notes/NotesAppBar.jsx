import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import moment from 'moment';
import 'moment/locale/es';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const {active} = useSelector(state => state.notes);

  const {fecha} = active;
  const noteDate = moment(fecha);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  }

  const handleUploadImage= () => {
    document.querySelector('#fileSelector').click();
  }

  const handeFileChange = (e) => {
    const file = (e.target.files[0]);
    if (file) {
      dispatch(startUploading(file));
    }
  }


  return (
    <div className="notes__appbar">
      <span>{noteDate.format(`D-MMMM-Y`)}</span>
      <input 
        type="file"
        style={{display:'none'}}
        target="file"
        onChange={handeFileChange}
        id="fileSelector"/>
      <div>
        <button onClick={handleUploadImage} className="btn">
          Imagen
        </button>
        <button className="btn" onClick={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  )
}
