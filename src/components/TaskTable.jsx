import PropTypes from 'prop-types'
import TaskRow from './TaskRow'

export default function TaskTable({ tasksItems, toggleTask }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
          ))}
        </tbody>
      </table>
    </>
  )
}

TaskTable.propTypes = {
  tasksItems: PropTypes.array.isRequired,
  toggleTask: PropTypes.func.isRequired,
}
