import React from 'react';
import Button from 'react-bootstrap/Button';

function TaskItem(props) {
  return (
    <tr>
      <td>{props.task.name}</td>
      <td className="text-center">
        <Button
          variant="danger"
          onClick={() => props.deleteTask(props.task._id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TaskItem;
