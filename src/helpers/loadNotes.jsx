import { db } from '../firebase/firebase-config';


export const loadNotes = async (uid) => {
  
  const notesSnap = await db.collection(`${uid}/journal/notes`).orderBy('fecha', 'desc').get();
  const notes = [];
  notesSnap.forEach( snapHijo => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  });

  return notes;
}