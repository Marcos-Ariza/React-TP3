import React from "react";


function SubjectList(props) {
  const subjects = props.list;
  return (
    <ul>
      {subjects.map((subject) => (
        <li key={subject.id}>{subject.name} por {subject.teacher}</li>
      ))}
    </ul>
  );
}

export default SubjectList;
