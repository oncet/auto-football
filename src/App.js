function App() {
  return (
    <div className="border-8 container mx-auto flex flex-col h-screen">
      <header className="border">
        <h1>Auto Football</h1>
      </header>
      <main>
        <h2>Tu equipo</h2>
        <div className="flex">
          <div className="border flex-1 h-80">
            <ul className="border border-red-500 flex flex-col items-center h-full justify-center">
              <li className="border">25%</li>
            </ul>
          </div>
          <div className="border flex-1 h-80">
            <ul className="border border-red-500 flex flex-col items-center h-full justify-center">
              <li className="border">25%</li>
              <li className="border">25%</li>
            </ul>
          </div>
          <div className="border flex-1 h-80">
            <ul className="border border-red-500 flex flex-col items-center h-full justify-center">
              <li className="border">25%</li>
              <li className="border">25%</li>
              <li className="border">25%</li>
            </ul>
          </div>
          <div className="border flex-1 h-80">
            <ul className="border border-red-500 flex flex-col items-center h-full justify-center">
              <li className="border">25%</li>
              <li className="border">25%</li>
              <li className="border">25%</li>
              <li className="border">25%</li>
            </ul>
          </div>
        </div>
        <h2>Tienda</h2>
        <div className="flex">
          <div className="border flex-1">
            <ul className="border border-red-500">
              <li className="border">25%</li>
              <li className="border">25%</li>
            </ul>
          </div>
          <div className="border flex-1">
            <ul className="border border-red-500">
              <li className="border">25%</li>
              <li className="border">25%</li>
              <li className="border">25%</li>
            </ul>
          </div>
          <div className="border flex-1">
            <ul className="border border-red-500">
              <li className="border">25%</li>
              <li className="border">25%</li>
              <li className="border">25%</li>
              <li className="border">25%</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
