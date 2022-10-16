import { useState } from "react";

function App() {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    const form = event.target.closest("form");

    setCheckedItems(
      Array.from(form).filter(
        (input) => input.name === "items" && input.checked === true
      )
    );
  };

  return (
    <div className="container max-w-screen-md mx-auto flex flex-col h-screen gap-4 py-4">
      <header className="font-bold bg-green-400 px-2 py-1 rounded">
        <h1>Auto Football</h1>
      </header>
      <main className="flex flex-col gap-4 ">
        <h2>Tu equipo</h2>
        <div className="flex gap-4">
          <div className=" flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              <li className="bg-white rounded px-2 py-1">🐵 25%</li>
            </ul>
          </div>
          <div className=" flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              <li className="bg-white rounded px-2 py-1">🐮 1-2</li>
              <li className="bg-white rounded px-2 py-1">🐮 1-2</li>
              <li className="bg-white rounded px-2 py-1">🐮 1-2</li>
            </ul>
          </div>
          <div className=" flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              <li className="bg-white rounded px-2 py-1">🐺 1-2</li>
              <li className="bg-white rounded px-2 py-1">🐺 1-2</li>
              <li className="bg-white rounded px-2 py-1">🐺 1-2</li>
              <li className="bg-white rounded px-2 py-1">🐺 1-2</li>
            </ul>
          </div>
          <div className=" flex-1 h-60">
            <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
              <li className="bg-white rounded px-2 py-1">🐯 1-2</li>
              <li className="bg-white rounded px-2 py-1">🐯 1-2</li>
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
                <li className="border rounded px-2 py-1">
                  <label className="flex justify-between cursor-pointer">
                    <span>🐮 1-3</span>
                    <input type="checkbox" name="items" value="🐮1" />
                  </label>
                </li>
                <li className="border rounded px-2 py-1">
                  <label className="flex justify-between cursor-pointer">
                    <span>🐮 2-2</span>
                    <input type="checkbox" name="items" value="🐮2" />
                  </label>
                </li>
                <li className="border rounded px-2 py-1">
                  <label className="flex justify-between cursor-pointer">
                    <span>🐮 1-2 c/skill</span>
                    <input type="checkbox" name="items" value="🐮3" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <ul className="flex flex-col gap-4">
                <li className="border rounded px-2 py-1">
                  <label className="flex justify-between cursor-pointer">
                    <span>🐺 1-3</span>
                    <input type="checkbox" name="items" value="🐺1" />
                  </label>
                </li>
                <li className="border rounded px-2 py-1">
                  <label className="flex justify-between cursor-pointer">
                    <span>🐺 2-2</span>
                    <input type="checkbox" name="items" value="🐺2" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <ul className="flex flex-col gap-4">
                <li className="border rounded px-2 py-1">
                  <label className="flex justify-between cursor-pointer">
                    <span>🐯 1-3</span>
                    <input type="checkbox" name="items" value="🐯1" />
                  </label>
                </li>
                <li className="border rounded px-2 py-1">
                  <label className="flex justify-between cursor-pointer">
                    <span>🐯 2-2</span>
                    <input type="checkbox" name="items" value="🐯2" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-right">
            <button
              type="submit"
              disabled={!checkedItems.length}
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
