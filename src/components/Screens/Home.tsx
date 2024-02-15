//Page to display the cars available for booking

import { useData } from '../../hooks/useData'
import CTA from '../CTA/CTA'
import { Car, ICar } from '../Cars/Car'
import FilterSection from '../FilterSection/FilterSection'

export const Home = () => {
  const data = useData<ICar[]>('https://boka-bil-api.onrender.com/api/v1/cars')
  console.log('data', data)
  return (
    <div>
      <FilterSection />

      {data && <Car data={data} />}

      <CTA />
    </div>
  )
}
