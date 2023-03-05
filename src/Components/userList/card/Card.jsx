import React from 'react'
import './card.css'

function Card({ id, email, name, phone, photo, position }) {
  return (
    <div className="card">
      {' '}
      <figure>
        <img src={photo} alt="human" loading="lazy" />
      </figure>
      <h3 className="p1">{name}</h3>
      <div className="card_info">
        <h3 className="p1">{position}</h3>
        <h3 className="p1">{email}</h3>
        <h3 className="p1">{phone}</h3>
      </div>
    </div>
  )
}

export default Card
