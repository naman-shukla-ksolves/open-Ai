import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="fw-fw-bolder">404 Not Found</h1>
      <Link to="/" className="fs-5 mt-2">
        Go Back
      </Link>
    </div>
  )
}

export default NotFound
