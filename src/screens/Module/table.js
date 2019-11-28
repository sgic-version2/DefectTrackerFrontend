import React from "react";

export default function table({ TableData }) {
  
  return (
    <div>
      <table>
        <thead>
          <th>SubModule ID</th>
          <th>SubModule Name</th>
          <th>Edit/Delete</th>
        </thead>
        <tbody>
          {TableData.map((data, index) => {
            return (
            <td>{data.key}</td>,
            <td>{data.modulename}</td>
            // <td><button>edit</button><button>delete</button></td>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
