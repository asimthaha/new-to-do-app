import React, { useState, useEffect } from "react";
import axios from "axios";
import NewTodoNavbar from "./NewTodoNavbar";

const NewTodoView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://dummyjson.com/todos").then((response) => {
      changeData(response.data.todos);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NewTodoNavbar />
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {data.map((value, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 card-group">
                  {value.completed ? (
                    <div class="card border-success border-2">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">{value.todo}</li>
                        <li class="list-group-item">
                          {value.completed.toString()}
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div class="card border-danger">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">{value.todo}</li>
                        <li class="list-group-item">
                          {value.completed.toString()}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTodoView;
