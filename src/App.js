import './App.css';
import React, { useState } from 'react';
import CharacterSelect from './components/CharacterSelect';
import uniqid from 'uniqid';

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = () => {
    const pname = prompt('Type Name:');
    const player = { name: pname, team1: [], team2: [], team3: [] };
    setPlayers((prevState) => prevState.concat(player));
  };

  const deletePlayer = (name) => {
    let copy = [...players];
    let playerIndex = copy.findIndex((player) => player.name === name);
    copy.splice(playerIndex, 1);
    setPlayers((prevState) => (prevState = copy));
  };
  return (
    <div className="App">
      <CharacterSelect />
      <button onClick={addPlayer}>Add Player</button>
      <div>
        {players.map((player) => {
          return (
            <div key={uniqid()}>
              <div>{player.name}</div>
              <button onClick={() => deletePlayer(player.name)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
