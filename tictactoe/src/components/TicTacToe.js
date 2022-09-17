import React, { useState } from "react";
import "./TicTacToe.css";

// objectives
// table design
// player's turn
// onclick function to x or o
// table cells id
// 3d array update
// winner
// reset button

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const check4Winner = (cellData) => {
    let patterns = {
      sides: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let pattern in patterns) {
      patterns[pattern].forEach((element) => {
        if ( cellData[element[0]] === "" ||
          cellData[element[1]] === "" ||
          cellData[element[2]] === "") {
          //do something
        } else if ( cellData[element[0]] === cellData[element[1]] &&
          cellData[element[1]] === cellData[element[2]]) {
          setWinner(cellData[element[0]])
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("alert clicked");
      return;
    }
    let cellData = [...cells];
    if (turn === "X") {
      cellData[num] = "X";
      setTurn("O");
    } else {
      cellData[num] = "O";
      setTurn("X");
    }

    check4Winner(cellData);
    setCells(cellData);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}> {cells[num]} </td>;
  };
  return (
    <div className="container">
      Turn: {turn}
      <table>
        <tbody>
          <tr>
            <Cell num={0} /> <Cell num={1} /> <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} /> <Cell num={4} /> <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} /> <Cell num={7} /> <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
        <p>{winner} is the winner!</p>
        <button onClick={() => {setWinner(null);setTurn("X");setCells(Array(9).fill(""));}}>Play again ?</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
