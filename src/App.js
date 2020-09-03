import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import TodoItem from "./Components/TodoItem";
import Clock from "./Components/Clock";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <>
      <Calculator />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <div className="todoList">
    //         <h1 className="h1"> Todo List</h1>
    //         <p className="p">A Simple React Todo List App</p>
    //     </div>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
export default App;
