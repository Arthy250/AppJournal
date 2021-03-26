import React from 'react';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, fecha, titulo, cuerpo, url }) => {

  const dispatch = useDispatch();

  const noteDate = moment(fecha).locale('es');

  const handleActiveNote = () => {
    dispatch(
      activeNote(id, {
        fecha, titulo, cuerpo, url
      })
    );
  }

  return (
    <div className="journal__entry pointer animate__animated animate__fadeIn" onClick={handleActiveNote}>
      
      {
        url &&
        <div 
        className="journal__entry-picture"
        style={{ backgroundSize:'cover', backgroundImage: `url(${url})`}}
        />
      }

      <div className="journal__entry-body">
        <p className="journal__entry-title">{titulo}</p>
        <p className="journal__entry-content">{cuerpo}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('ddd')}</span>
        <h4>{noteDate.format('D')}</h4>
      </div>
    </div>
  )
}
