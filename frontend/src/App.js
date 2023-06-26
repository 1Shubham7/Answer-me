import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"

const articles = [
  {
    id: 1,
    title: "Nature walk in the park",
    description: "Visit the park with my friends",
    completed: true
  },

  {
    id: 2,
    title: "Visit",
    description: "Got to my aunt's place",
    completed: true
  },

  {
    id: 3,
    title: "Write",
    description: "Do an article about anthropology",
    completed: true
  },
];

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {articles};
    };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
              {this.state.articles.map(item => (
              <div>
                <h1>{item.title}</h1>
                <span>{item.description}</span>
              </div>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }
  
export default App;
