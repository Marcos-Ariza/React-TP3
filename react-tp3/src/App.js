import React from "react";
import "./App.css";
import SubjectList from "./SubjectList";
import Search from "./search";
import NotesList from "./cantNotes";
import MarksProm from "./promedios";
import SubjectTeacher from "./SubjectTeacher";

const subjects = [
  {
    name: "Matemática",
    teacher: "Repezza",
    marks: [8],
    id: 0,
  },
  {
    name: "Lengua",
    teacher: "De Michelle.",
    marks: [9, 8, 6],
    id: 1,
  },
  {
    name: "Programación II",
    teacher: "García y Picoto",
    marks: [2, 3, 2, 2],
    id: 2,
  },
  {
    name: "Física",
    teacher: "Monti",
    marks: [9, 10],
    id: 4,
  },
  {
    name: "Informática Aplicada II",
    teacher: "Virgolini",
    marks: [6, 9],
    id: 5,
  },
  {
    name: "Química",
    teacher: "F.F.",
    marks: [3, 8, 9, 6],
    id: 6,
  },
];

function App() {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <header className="App-header">
        <h3>Materias ciclo lectivo 2023</h3>
        <SubjectList list={subjects} />
        <h3>Materias con mas de 3 notas</h3>
        <NotesList list={subjects} />
        <h3>Materias con promedio +6</h3>
        <MarksProm list={subjects} />
        <h3>Docente a cargo</h3>
        <SubjectTeacher list={subjects} />
        <h3>Buscador:</h3>
        <Search onSearch={handleSearch} />
      </header>
    </div>
  );
}

export default App;
