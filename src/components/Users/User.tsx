//render data provided in the props. Fetched from parent component
import React, { FC } from 'react'

export interface IUserData {
  _id: string
  name: string
  userId: string
  email: string
  password: string
  bookings: string[] // list of bookingIds
}

type UserProps = {
  data: IUserData[]
}
export const User: FC<UserProps> = ({ data }) => {
  return (
    <div>
      {data.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </div>
  )
}
