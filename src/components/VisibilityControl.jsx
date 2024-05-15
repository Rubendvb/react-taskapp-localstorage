import PropTypes from 'prop-types'

export default function VisibilityControl({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) {
  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      cleanTasks()
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          name="show"
          id="show"
          onChange={(e) => setShowCompleted(e.target.checked)}
          checked={isChecked}
        />
        <label htmlFor="show">Show Tasks Done</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  )
}

VisibilityControl.propTypes = {
  setShowCompleted: PropTypes.func.isRequired,
  cleanTasks: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
}
