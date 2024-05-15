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
    <div>
      <input
        type="checkbox"
        name="show"
        id="show"
        onChange={(e) => setShowCompleted(e.target.checked)}
        checked={isChecked}
      />
      <label htmlFor="show">Show Tasks Done</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  )
}

VisibilityControl.propTypes = {
  setShowCompleted: PropTypes.func.isRequired,
  cleanTasks: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
}
