import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
function isWinner(board, symbol) {
    if (board[0] == board[1] && board[1] == board[2] && board[2] == symbol) return symbol;
    if (board[3] == board[4] && board[4] == board[5] && board[5] == symbol) return symbol;
    if (board[6] == board[7] && board[7] == board[8] && board[8] == symbol) return symbol;

    if (board[0] == board[3] && board[3] == board[6] && board[3] == symbol) return symbol;
    if (board[1] == board[4] && board[4] == board[7] && board[4] == symbol) return symbol;
    if (board[2] == board[5] && board[5] == board[8] && board[5] == symbol) return symbol;

    if (board[0] == board[4] && board[4] == board[8] && board[4] == symbol) return symbol;
    if (board[2] == board[4] && board[4] == board[6] && board[4] == symbol) return symbol;

    return "";

}
function Grid({ noOfCards }) {
    const [turn, setTurn] = useState(true);
    const [board, setBoard] = useState(Array(noOfCards).fill(""));
    const [winner, setWinner] = useState(null);
    function play(index) {
        if (turn == true) {
            board[index] = "o";
        } else {
            board[index] = "x";
        }
        const win = isWinner(board, turn ? 'o' : 'x');
        if (win) {
            setWinner(win);
            toast.success(`Congratulations ${win} won the game`, {
                position: "bottom-right",
            });
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset() {
        setBoard(Array(noOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return (
        <div className="grid-wrapper">
            <ToastContainer/>
            {winner && (
                <>
                    <h1 className="white">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset game</button>

                </>
            )}
            <h1 className="white">Current Turn: {(turn) ? '0' : 'x'}</h1>
            <div className="grid">
                {board.map((key, index) => {
                    return <Card onPlay={play} player={key} key={index} index={index} />
                })};
            </div>
        </div>
    )
}
export default Grid;