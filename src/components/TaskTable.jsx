import PropTypes from 'prop-types'
import TaskRow from './TaskRow'

export default function TaskTable({
  tasksItems,
  toggleTask,
  showCompleted = false,
}) {
  const taskTableRow = (doneValue) => {
    return tasksItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ))
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>{taskTableRow(showCompleted)}</tbody>
      </table>
    </>
  )
}

TaskTable.propTypes = {
  tasksItems: PropTypes.array.isRequired,
  toggleTask: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool,
}
