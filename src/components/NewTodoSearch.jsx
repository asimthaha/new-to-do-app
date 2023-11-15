import React, { useState } from "react";
import NewTodoNavbar from "./NewTodoNavbar";

const NewTodoSearch = () => {
  const [inputField, setInputField] = useState({
    title: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
  };

  return (
    <>
      <NewTodoNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Search Todo
                </label>
                <input
                  type="text"
                  name="title"
                  id=""
                  placeholder="Enter Todo Name..."
                  className="form-control"
                  value={inputField.title}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readVal} className="btn btn-success">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTodoSearch;
