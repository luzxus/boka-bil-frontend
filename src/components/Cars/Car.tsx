//render data provided in the props. Fetched from parent component
import React, { FC } from 'react'
import './Car.scss'
export interface ICar {
  _id: string // Assuming ObjectId is a string type in TypeScript
  carId: number
  brand: string
  model: string
  year: number
  color: string
  available: boolean
}

type CarProps = {
  data: ICar[]
}
export const Car: FC<CarProps> = ({ data }) => {
  return (
    <div className="car-list">
      {data.map((car) => (
        <p key={car._id}>{car.brand}</p>
      ))}
    </div>
  )
}
