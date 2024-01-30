import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Loader from '../shared/Loader'

const TextGenerationView = () => {
  const { state } = useContext(AppContext)
  const { textViewState } = state
  const { text, loading, promptText } = textViewState
  return (
    <div>
      {loading ? (
        <div className="form-section rounded-1 fs-5 p-4 text-text-dark">
          <Loader />
        </div>
      ) : text === '' ? (
        <div className="form-section rounded-1 fs-5 p-4 text-text-dark">
          <p>Search for anything...</p>
        </div>
      ) : (
        <div className="form-section rounded-1 fs-5 p-4 text-text-dark">
          <h3 className="search-result-header">
            Here is your search result for{' '}
            <span
              style={{
                textDecoration: 'underline',
                fontStyle: 'italic',
                color: '#0d6efd',
              }}
            >{`"${promptText}"`}</span>
            :
          </h3>
          <p>{text}</p>
        </div>
      )}
    </div>
  )
}

export default TextGenerationView
