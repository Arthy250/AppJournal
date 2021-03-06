import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(startLogout());
  }

  const handleAddNew = () => {
    dispatch(startNewNote());
  }

  return (
    <div>
      <aside className="jornaul__sidebar animate__animated animate__fadeInLeft">
        <div className="journal__sidebar-navbar">
          <h3 className="mt-5">
            <i className="far fa-moon"></i>
            <span> {name}</span>
          </h3>
          <button className="btn mt-5" onClick={handleLogout}>Logout</button>
        </div>
        <div className="journal__new-entry pointer" onClick={handleAddNew}>
          <i className="far fa-calendar-plus fa-5x"></i>
          <p className="mt-5">Nueva entrada</p>
        </div>
        <JournalEntries/>
      </aside>
    </div>
  )
}
