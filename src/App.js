import { useState } from "react";
import Shop from "./components/Shop";
import ShopItem from "./components/ShopItem";
import Team from "./components/Team";

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
      Array.from(form).filter(
        (input) => input.name === "items" && input.checked === true
      )
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container max-w-screen-md mx-auto flex flex-col h-screen gap-4 py-4 text-black dark:text-white">
      <header className="font-bold bg-green-400 px-2 py-1 rounded text-black">
        <h1>Auto Football</h1>
      </header>
      <main className="flex flex-col gap-4 ">
        <h2 className="">Tu equipo</h2>
        <Team team={team} />
        <h2>Tienda</h2>
        <Shop
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          selectedShopItems={selectedShopItems}
          shopItems={shopItems}
        />
      </main>
    </div>
  );
}

export default App;
