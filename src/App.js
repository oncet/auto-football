function App() {
  return (
    <div className="container mx-auto flex flex-col h-screen gap-4">
      <header>
        <h1>Auto Football</h1>
      </header>
      <main className="flex flex-col gap-4">
        <h2>Tu equipo</h2>
        <div className="flex gap-4">
          <div className=" flex-1 h-80">
            <ul className="border flex flex-col items-center h-full justify-center gap-4">
              <li className="border px-2 py-1">🐵 25%</li>
            </ul>
          </div>
          <div className=" flex-1 h-80">
            <ul className="border flex flex-col items-center h-full justify-center gap-4">
              <li className="border px-2 py-1">🐮 1-2</li>
              <li className="border px-2 py-1">🐮 1-2</li>
            </ul>
          </div>
          <div className=" flex-1 h-80">
            <ul className="border flex flex-col items-center h-full justify-center gap-4">
              <li className="border px-2 py-1">🐺 1-2</li>
              <li className="border px-2 py-1">🐺 1-2</li>
              <li className="border px-2 py-1">🐺 1-2</li>
            </ul>
          </div>
          <div className=" flex-1 h-80">
            <ul className="border flex flex-col items-center h-full justify-center gap-4">
              <li className="border px-2 py-1">🐯 1-2</li>
              <li className="border px-2 py-1">🐯 1-2</li>
              <li className="border px-2 py-1">🐯 1-2</li>
              <li className="border px-2 py-1">🐯 1-2</li>
            </ul>
          </div>
        </div>
        <h2>Tienda</h2>
        <div className="flex gap-4">
          <div className="flex-1">
            <ul className="flex flex-col gap-4">
              <li className="border px-2 py-1">🐮 1-3</li>
              <li className="border px-2 py-1">🐮 2-2</li>
              <li className="border px-2 py-1">🐮 1-2 c/skill</li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-4">
              <li className="border px-2 py-1">🐺 1-3</li>
              <li className="border px-2 py-1">🐺 2-2</li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-4">
              <li className="border px-2 py-1">🐯 1-3</li>
              <li className="border px-2 py-1">🐯 2-2</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
