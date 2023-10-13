import './App.css';
import { Box } from "./button.js"
import { Definewinner } from "./button.js"
import React, { useState } from 'react';

// to decide winner 
let player = [0, 0, 0, 0, 0, 0, 0, 0, 0];


function App() {
  const [plnum, setPlnum] = useState(1);
  const [Sign, setSign] = useState(Array(9).fill(null));

  function updateplnum() {
    setPlnum(plnum + 1);
  }

  // to check every turn has completed 
  function emptyplayer() {
    for (let i = 0; i < 10; i++) {
      if (player[i] == null)
        return 0;
    }
    return 1;
  }

  // to check winner 
  function check_winner() {

    if (player[0] + player[1] + player[2] === 6 || player[3] + player[4] + player[5] === 6 || player[6] + player[7] + player[8] === 6 || player[0] + player[3] + player[6] === 6 || player[1] + player[4] + player[7] === 6 || player[2] + player[5] + player[8] === 6 || player[0] + player[4] + player[8] === 6 || player[2] + player[4] + player[6] === 6) {
      console.log("winner is O");
      return 1;
    }

    else if (player[0] + player[1] + player[2] === 30 || player[3] + player[4] + player[5] === 30 || player[6] + player[7] + player[8] === 30 || player[0] + player[3] + player[6] === 30 || player[1] + player[4] + player[7] === 30 || player[2] + player[5] + player[8] === 30 || player[0] + player[4] + player[8] === 30 || player[2] + player[4] + player[6] === 30) {
      console.log("winner is X")
      return 2;
    }

    else if (emptyplayer() === 1) {
      console.log("Tie");
      return 3;
    }

    else return 0;
  }

  // function display sign in box and move in player
  function define_move(box) {

    const nextSquares = Sign.slice();
    if (plnum % 2 === 0) {
      player[box] = 10;
      console.log(player);
      nextSquares[box] = "X";
      setSign(nextSquares);
    }

    else {
      player[box] = 2;
      console.log(player);
      nextSquares[box] = "O";
      setSign(nextSquares);
    }
  }

  if (check_winner() === 0) {
    return (
      <div className='header'>
        <p>Tic-Tac-Toe</p>
        <div className="app" onClick={updateplnum}>
          <div className="firstrow" >

            <Box style={"but1"} plnum={Sign[0]} onboxClick={() => define_move(0)} />
            <Box style={"but2"} plnum={Sign[1]} onboxClick={() => define_move(1)} />
            <Box style={"but1"} plnum={Sign[2]} onboxClick={() => define_move(2)} />

          </div>

          <div className="secondrow" >

            <Box style={"but2"} plnum={Sign[3]} onboxClick={() => define_move(3)} />
            <Box style={"but1"} plnum={Sign[4]} onboxClick={() => define_move(4)} />
            <Box style={"but2"} plnum={Sign[5]} onboxClick={() => define_move(5)} />

          </div>

          <div className="thirdrow" >

            <Box style={"but1"} plnum={Sign[6]} onboxClick={() => define_move(6)} />
            <Box style={"but2"} plnum={Sign[7]} onboxClick={() => define_move(7)} />
            <Box style={"but1"} plnum={Sign[8]} onboxClick={() => define_move(8)} />

          </div>

        </div>
      </div>
    );
  }

  else if (check_winner() === 1) {
    return (<Definewinner winner={"1"} />)
  }

  else if (check_winner() === 2) {
    return (<Definewinner winner={"2"} />)
  }

  else {
    return (<Definewinner winner={"Tie"} />)
  }
}

export default App;

