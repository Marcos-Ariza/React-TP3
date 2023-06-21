import React, { useState } from "react";

function SubjectTeacher(props) {
  const subjects = props.list;
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  const handleTeacherSelect = (event) => {
    const selectedTeacher = event.target.value;
    setSelectedTeacher(selectedTeacher);
    const filteredSubjects = subjects.filter(
      (subject) => subject.teacher === selectedTeacher
    );
    setFilteredSubjects(filteredSubjects);
  };

  return (
    <div>
      <select name="teacher" value={selectedTeacher} onChange={handleTeacherSelect}>
        <option value="">Seleccione un/a docente</option>
        <option value="Repezza">Repezza</option>
        <option value="De Michelle">De Michelle</option>
        <option value="García y Picoto">García y Picoto</option>
        <option value="Monti">Monti</option>
        <option value="Virgolini">Virgolini</option>
        <option value="F.F.">F.F.</option>
      </select>
      {selectedTeacher && (
        <div>
          <h3>Asignaturas dictadas por {selectedTeacher}</h3>
          {filteredSubjects.length > 0 ? (
            <ul>
              {filteredSubjects.map((subject) => (
                <li key={subject.name}>{subject.name}</li>
              ))}
            </ul>
          ) : (
            <p>No hay asignaturas para este/a docente</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SubjectTeacher;