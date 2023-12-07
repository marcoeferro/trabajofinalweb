import React from 'react'
import './index.scss'

function UserInfo() {
  return (
    <div className="usr-info">
        <div className="column">
          <p>Creador</p>
          <img
            src="https://a.pinatafarm.com/660x495/433e59ffcb/awkward-smiling-old-man.jpg"
            alt="foto"
          />
          <p>Fecha de Creacion</p>
          <p>01/12/23</p>
          <p>Fecha de Inicio</p>
          <p>01/12/23</p>
          <p>Puntos de Historia</p>
          <p>0</p>
        </div>
        <div className="column">
          <p>Responsable</p>
          <img
            src="https://i.pinimg.com/originals/d1/01/f7/d101f76b79b087a0332de3ddbdd27aed.jpg"
            alt="foto"
          />
          <p>Deadline</p>
          <p>03/12/30</p>
          <p>Fecha de Finalizacion</p>
          <p>03/12/30</p>
          <p>Estado</p>
          <p className="state">To Do</p>
        </div>
      </div>
  )
}

export default UserInfo
