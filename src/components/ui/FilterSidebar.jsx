import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import ImageFilters from '../ImageModel/ImageFilters'
import TextFilters from '../TextModel/TextFilters'

const FilterSidebar = () => {
  const { state } = useContext(AppContext)
  const { generationMode } = state

  return (
    <aside className="filter">
      <h3 className="text-center my-4">Filters</h3>
      <form className="d-grid form-section rounded-1">
        {generationMode === 'image' ? <ImageFilters /> : <TextFilters />}
      </form>
    </aside>
  )
}

export default FilterSidebar
