import React from "react";

function NotesList(props) {
  const subjects = props.list;

  const nummarks = subjects.filter((subject) => (subject.marks.length >= 3));

  return (
    <ul>
      {nummarks.map((subject) => {
        return <li key={subject.id}>{subject.name}</li>;
      })}
    </ul>
  );
}

export default NotesList;
