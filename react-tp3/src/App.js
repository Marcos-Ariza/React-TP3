import React from "react";
import "./App.css";
const subjects = [
  {
    name: "Matemática",
    teacher: "lol",
    marks: [],
    id: 0,
  },
  {
    name: "Lengua",
    teacher: "si",
    marks: [],
    id: 1,
  },
  {
    name: "Programación II",
    teacher: "xd",
    marks: [],
    id: 2,
  },
  {
    name: "Física",
    teacher: "nashe",
    marks: [],
    id: 4,
  },
  {
    name: "Informática Aplicada II",
    teacher: "turi ip ip ip",
    marks: [],
    id: 5,
  },
  {
    name: "Química",
    teacher: "wenamechainthesummer",
    marks: [],
    id: 6,
  },
];

function App() {
  return (
    <div>
      <header className="App-header">
        <h3>Materias ciclo lectivo 2023</h3>
        <ul>
          {subjects.map((subject) => (
            <li key={subject.id}>{subject.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
