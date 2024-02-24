import react, { useRef, useState } from 'react';
import './App.css';



function App() {
  const [x, setX] = useState([]); // State variable to store the titles
  const [y, setY] = useState([]); // State variable to store the descriptions
  const inputRef = useRef(); // Ref to access the title input value
  const inputRef1 = useRef(); // Ref to access the description input value

  const add = () => {
    const value = inputRef.current.value; // Get the title value from the input
    const value1 = inputRef1.current.value; // Get the description value from the input

    if (value === "") {
      alert("Please enter a title");
    } 
    else if (value1 === "") {
      alert("Please enter a description");
    } 
    else {
      setX([...x, value]); // Add the new title to the array of titles
      setY([...y, value1]); // Add the new description to the array of descriptions

      inputRef.current.value = ""; // Clear the title input field
      inputRef1.current.value = ""; // Clear the description input field
    }
  };

  const deleteItem = (index) => {
    setX(x.filter((_, i) => i !== index)); // Remove the title at the specified index
    setY(y.filter((_, i) => i !== index)); // Remove the description at the specified index
  };

  const deleteAll = () => {
    setX([]); // Clear all the titles
    setY([]); // Clear all the descriptions
  };

  return (
    <div className="todo">
      <h2>My Todos</h2>

      <div className="theForm">
        <div className="title">
          <label>Title:</label>
          <input ref={inputRef} placeholder="What is the title of your To Do?" />
        </div>

        <div className="description">
          <label>Description:</label>
          <input ref={inputRef1} placeholder="What is the description of your To Do?" />
        </div>

        <button onClick={add}>Add</button>
      </div>

      <p className="line"></p>

      <button className="tdo">To Do</button>

      <ul>
        {
        x.map((item, index) => (
          <div className="theList" key={index}>
            <div className="ffbu">
              <li>{item}</li>
              <button className="delete-icon" onClick={() => deleteItem(index)}>
                X
              </button>
            </div>
            <span>{y[index]}</span>
          </div>
        ))
        }
      </ul>

      <button className="delete" onClick={deleteAll}>
        Delete all
      </button>
    </div>
  );
}

export default App;
