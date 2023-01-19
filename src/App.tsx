import { useEffect, useState, MouseEvent } from "react";

function App() {
  const defaultBoard = [
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
  ];

  const [currentPlayer, setCurrentPlayer] = useState("white");

  const [chessBoard, setChessBoard] = useState<string[][]>(defaultBoard);

  const handleClick = (e: MouseEvent<HTMLElement>) => {};

  return (
    <div className="flex flex-cols-1 flex-rows-1 grid-flow-col w-fit h-2/5 border-2 border-black ml-96 mt-10">
      <div className="flex-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
      </div>
      <div className="grid-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
      </div>
      <div className="grid-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
      </div>
      <div className="grid-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
      </div>
      <div className="grid-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
      </div>
      <div className="grid-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
      </div>
      <div className="grid-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
      </div>
      <div className="grid-row items-center mt-0">
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
        <div className="grid-col h-16 w-16 bg-white border-2 border-black"></div>
        <div className="grid-col h-16 w-16 bg-black"></div>
      </div>
    </div>
  );
}

export default App;
