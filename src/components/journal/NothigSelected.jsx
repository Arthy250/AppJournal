import React from 'react'

export const NothigSelected = () => {
  return (
    <div className="nothing__main-content animate__animated animate__fadeInRight animate__fast">
      <p>
        Selecciona algo
        <br/>
        O agrega una nueva tarea!
      </p>
      <i className="far fa-star fa-4x mt-5"></i>
    </div>
  )
}
