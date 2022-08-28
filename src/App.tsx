import React from 'react';
import Board from './Board';

function test() {
  return [1, 2]
}

function App() {

  const [squaresState, setSquaresState] = React.useState<string[]>(['', '', '', '', '', '', '', '', ''])
  const [x, set_x] = React.useState<boolean>(true) 
  const set_square = (index: number) => {
    if (x) {
      squaresState[index] = 'X'
      set_x(false)
    } else{
      squaresState[index] = 'O'
      set_x(true)
    }
    setSquaresState(squaresState)
  }
  return (
      <div className="outer-center container">
          <div className="row">
            <Board squares={squaresState} handler={set_square} />
          </div>
          <div className="game-status row">
              <ul>
                  <li>Next Turn: X</li>
                  <li>Winner: O</li>
              </ul>
          </div>
    </div>
  );
}
 
export default App;