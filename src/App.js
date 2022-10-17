import { useState } from "react";
import ShopItem from "./components/ShopItem";

const teamData = {
  goalkeeper: 25,
  defense: ["1-2", "1-2", "1-2"],
  midfielders: ["1-2", "1-2", "1-2", "1-2"],
  forward: ["1-2", "1-2"],
};

const shopData = {
  defense: ["1-3", "2-2", "1-2 c/skill"],
  midfielders: ["1-3", "2-2"],
  forward: ["1-3", "2-2"],
};

function App() {
  const [selectedShopItems, setSelectedShopItems] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    const form = event.target.closest("form");

    setSelectedShopItems(
      Array.from(form).filter(
        (input) => input.name === "items" && input.checked === true
      )
    );
  };

  return (
    <div className="container max-w-screen-md mx-auto flex flex-col h-screen gap-4 py-4 text-black dark:text-white">
      <header className="font-bold bg-green-400 px-2 py-1 rounded text-black">
        <h1>Auto Football</h1>
      </header>
      <main className="flex flex-col gap-4 ">
        <h2 className="">Tu equipo</h2>
        <div className="flex gap-4 text-black">
          <div className="flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              <li className="bg-white rounded px-2 py-1">
                🐵 {teamData.goalkeeper}%
              </li>
            </ul>
          </div>
          <div className="flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              {teamData.defense.map((player) => (
                <li className="bg-white rounded px-2 py-1">🐮 {player}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              {teamData.midfielders.map((player) => (
                <li className="bg-white rounded px-2 py-1">🐺 {player}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              {teamData.forward.map((player) => (
                <li className="bg-white rounded px-2 py-1">🐯 {player}</li>
              ))}
            </ul>
          </div>
        </div>
        <h2>Tienda</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
        >
          <div className="flex gap-4">
            <div className="flex-1">
              <ul className="flex flex-col gap-4">
                {shopData.defense.map((player) => (
                  <ShopItem player={player} icon="🐮" />
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <ul className="flex flex-col gap-4">
                {shopData.midfielders.map((player) => (
                  <ShopItem player={player} icon="🐺" />
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <ul className="flex flex-col gap-4">
                {shopData.forward.map((player) => (
                  <ShopItem player={player} icon="🐯" />
                ))}
              </ul>
            </div>
          </div>
          <div className="text-right text-black">
            <button
              type="submit"
              disabled={!selectedShopItems.length}
              className="
                bg-green-400
                disabled:bg-gray-300
                disabled:cursor-not-allowed
                disabled:text-gray-600
                font-bold
                px-2
                py-1
                rounded
              "
            >
              Comprar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
