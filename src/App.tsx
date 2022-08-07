import React from 'react';
import Board from './Board';

function test() {
  return [1, 2]
}

function App() {

  let [first, second] = test()
  console.log(first, second)
  const [squaresState, setSquaresState] = React.useState<string[]>(['O', 'X', '', '', '', '', '', '', 'X'])

  return (
      <div className="outer-center container">
          <div className="row">
            <Board squares={squaresState} />
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