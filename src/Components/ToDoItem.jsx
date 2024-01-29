import React from "react";

export default function ToDoItem(props) {
  // let index=parseInt(props.indx) + 1;
  let todo = props.todo;
  let index = props.idx;

  //{console.log(todo)}

  return (
    <>
      <tr>
        <td className="col-2">{index}</td>
        <td className="col-2">{todo.Name}</td>
        <td className="col-8">
          <tr className="row">
            <td className="col-9">{todo.desc}</td>
            <td className="col-3">
              <button type="button" className="btn btn-outline-danger">
                Delete
              </button>
            </td>
          </tr>
        </td>
      </tr>
    </>
  );
}
