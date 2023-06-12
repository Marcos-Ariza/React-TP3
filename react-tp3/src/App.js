import React from "react";
import "./App.css";
import SubjectList from "./SubjectList";
import Search from "./search";

const subjects = [
  {
    name: "Matemática",
    teacher: "Repezza",
    marks: [],
    id: 0,
  },
  {
    name: "Lengua",
    teacher: "De Michelle.",
    marks: [],
    id: 1,
  },
  {
    name: "Programación II",
    teacher: "Héctor y Picoto",
    marks: [],
    id: 2,
  },
  {
    name: "Física",
    teacher: "Monti",
    marks: [],
    id: 4,
  },
  {
    name: "Informática Aplicada II",
    teacher: "Virgolini",
    marks: [],
    id: 5,
  },
  {
    name: "Química",
    teacher: "F.F.",
    marks: [],
    id: 6,
  },
];
const handleSearch = (event) => {
  console.log(event.target.value);
};

const [searchTerm, setSearchTerm] = React.useState("");
const handleChange = (event) => {
  props.onSearch(event);
};

function App() {
  return (
    <div>
      <header className="App-header">
        <h3>Materias ciclo lectivo 2023</h3>
        <SubjectList list={subjects} />
        <Search onSearch={handleSearch} />
      </header>
    </div>
  );
}

export default App;
