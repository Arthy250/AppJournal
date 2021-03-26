import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import {  NotesAppBar} from './NotesAppBar';

export const NoteScreen = () => {

  const dispatch = useDispatch();
  const {active: note} = useSelector(state => state.notes)
  const [formValues, handleInputChange, reset] = useForm( note );
  const {cuerpo, titulo, url, id} = formValues;

  const activeId = useRef( note.id );

  useEffect(() => {
    if (note.id !== activeId.current){
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    
    dispatch(activeNote(formValues.id, {...formValues}));
    
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  }

  return (
    <div className="notes__main-content animate__animated animate__fadeIn">
      
      <NotesAppBar/>

      <div className="notes__content">
          <input 
            type="text"
            name="titulo"
            className="notes_title-input"
            autoComplete="off"
            placeholder="Titulo"
            value = {titulo}
            onChange={handleInputChange}
          />
          <textarea 
            placeholder="¿Qué sucedio hoy?" 
            className="notes__textarea" 
            name="cuerpo"
            value = {cuerpo}
            onChange={handleInputChange}>
          </textarea>

          {
            url &&
            <div className="notes__imagen">
              <img src={url} alt="imagen de prueba"/>
            </div>
          }
          
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>Borrar</button>
      
    </div>
  )
}
