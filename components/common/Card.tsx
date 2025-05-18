import React from 'react'

export interface CardProps {
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="border p-4 rounded shadow-md">
    <h2 className="font-bold text-xl">{title}</h2>
    <p>{description}</p>
  </div>
)

export default Card