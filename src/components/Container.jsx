import PropTypes from 'prop-types'

export default function Container({ children }) {
  return (
    <div className="container py-4">
      <div className="col-md-4 offset-md-4">{children}</div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
