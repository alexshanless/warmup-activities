import React, { useReducer, useRef } from "react";
import "./App.css";

const TodoList = () => {
  // Placeholder array

  const inputRef = useRef();

  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: state.length * Math.random(), name: action.name },
        ];
      case "remove":
        return state.filter((item, index) => {
          return index !== action.index;
        });
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="form-control"
          placeholder="Start typing what you need to do..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item.id}>
            {item.name}
            <button
              className="btn btn-danger"
              onClick={() => dispatch({ type: "remove", index: index })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
