import React from 'react'
import './card.css'

function Card({ data }) {
    const cardSyle = {
        display : "flex",
        flexDirection : "column",
        padding : "50px"
    };
    const colorStyle = {
        backgroundColor : data.color,
        padding : "50px",
        border : "1px solid black",
    };
  return (
    <div style={cardSyle} className='card'>
        <div>{data.name}</div>
        <div style={colorStyle}></div>
        <div>{data.code}</div>
    </div>
  )
}

export default Card