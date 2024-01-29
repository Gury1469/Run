import React from "react";
import ToDoItem from "./ToDoItem";
import EmptyListError from "./EmptyListError";
export default function ToDoList({item}) {
  if(item.length === 0)
  {
    return <EmptyListError/>
  }
 
  return (
    
    <div className="pt-4">
      <table className="table">
        <thead>
          <tr>
            <th className="col-2">Sr. No.</th>
            <th className="col-2">Task Name</th>
            <th className="col-8">Description</th>
          </tr>
        </thead>
        <tbody>
          {item.map((x, index) =>{
              //console.log(x);
              return <ToDoItem todo={x} idx={index}/>
            }
          )
          }
        </tbody>
      </table>
    </div>
  );
}
