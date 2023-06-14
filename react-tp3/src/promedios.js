import React from "react";

function MarksProm(props) {
  const subjects = props.list;

  const averagemarks = subjects.filter((subject) => {
    const average =
      subject.marks.reduce((sum, mark) => sum + mark, 0) / subject.marks.length;
    return average > 6;
  });

  return (
    <ul>
      {averagemarks.map((subject) => {
        return <li key={subject.id}>{subject.name}</li>;
      })}
    </ul>
  );
}
export default MarksProm;
