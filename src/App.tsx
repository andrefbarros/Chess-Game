import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-black">
        <ChessBoard />
      </div>
    </div>
  );
}

export default App;
