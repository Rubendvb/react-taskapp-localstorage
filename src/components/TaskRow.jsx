import PropTypes from 'prop-types'

export default function TaskRow({ task, toggleTask }) {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}{' '}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}

TaskRow.propTypes = {
  task: PropTypes.object.isRequired,
  toggleTask: PropTypes.func.isRequired,
}
