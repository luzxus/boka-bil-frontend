//render data provided in the props. Fetched from parent component
import { FC } from 'react'

export interface IBooking {
  _id: string // Assuming ObjectId is a string type in TypeScript
  bookingId: string
  carId: string
  userId: string
  bookingDate: string
  bookingTime: string
  status: string
}

type BookingProps = {
  data: IBooking[]
}
export const Car: FC<BookingProps> = ({ data }) => {
  return (
    <div>
      {data.map((booking) => (
        <p key={booking._id}>{booking.bookingDate}</p>
      ))}
    </div>
  )
}
