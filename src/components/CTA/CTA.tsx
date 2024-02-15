import React from 'react'

const CTA = () => {
  const sample = {
    carId: '102',
    userId: '1002',
    bookingDate: '2024-02-15',
    bookingTime: '15:15 AM',
  }

  const book = () => {
    fetch('https://boka-bil-api.onrender.com/api/v1/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(sample),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to book')
        }
        // Handle success response here if needed
      })
      .catch((error) => {
        console.error('Error booking:', error)
      })
  }

  return (
    <div style={{ float: 'right', margin: '20px' }}>
      <button onClick={book}>Book now!</button>
    </div>
  )
}

export default CTA
