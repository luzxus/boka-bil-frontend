import "./FilterSection.scss";
const FilterSection = () => {
  const filters = ['All makes', 'All models', 'All years']
  return (
    <div className='filter-section'>
      {filters.map((filter) => (
        <button> {filter}</button>
      ))}
    </div>
  )
}

export default FilterSection
