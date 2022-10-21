import { useState } from "react";
import Team from "./components/Team";
import Shop from "./components/Shop";

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
  const [team, setTeam] = useState(teamData);
  const [shopItems, setShopItems] = useState(shopData);
  const [selectedShopItems, setSelectedShopItems] = useState([]);

  const handleOnChange = (event) => {
    const form = event.target.closest("form");

    setSelectedShopItems(
      Array.from(form).filter((input) => input.checked === true)
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const mappedShopItems = selectedShopItems.reduce(
      (accumulatedItems, shopItem) => {
        const newValue = !!accumulatedItems[shopItem.name]
          ? accumulatedItems[shopItem.name].concat(shopItem.value)
          : [shopItem.value];

        accumulatedItems[shopItem.name] = newValue;

        return accumulatedItems;
      },
      {}
    );

    console.log("mappedShopItems", mappedShopItems);
  };

  return (
    <div className="container max-w-screen-md mx-auto flex flex-col h-screen gap-4 py-4 text-black dark:text-white">
      <header className="font-bold bg-green-400 px-2 py-1 rounded text-black">
        <h1>Auto Football</h1>
      </header>
      <main className="flex flex-col gap-4 ">
        <h2>Tu equipo</h2>
        <Team team={team} />
        <h2>Tienda</h2>
        <Shop
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          selectedShopItems={selectedShopItems}
          shopItems={shopItems}
        />
        <div className="text-right">
          <button className="font-bold bg-green-400 text-black text-lg rounded py-2 px-4">
            Continuar &rarr;
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
