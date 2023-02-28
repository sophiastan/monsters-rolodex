import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      plants: [
        {
          name: 'Monstera',
          id: '1'
        },
        {
          name: 'Catcus',
          id: '2'
        },
        {
          name: 'Pothos',
          id: '3'
        },
        {
          name: 'Calathea',
          id: '4'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.plants.map((plant) => {
            return (
              <div key={plant.id}>
                <h1>{plant.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default App;
