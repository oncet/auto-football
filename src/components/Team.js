const Team = ({ team }) => {
  return (
    <div className="flex gap-4 text-black">
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          <li className="bg-white rounded px-2 py-1">🐵 {team.goalkeeper}%</li>
        </ul>
      </div>
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          {team.defense.map((player) => (
            <li className="bg-white rounded px-2 py-1">🐮 {player}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          {team.midfielders.map((player) => (
            <li className="bg-white rounded px-2 py-1">🐺 {player}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          {team.forward.map((player) => (
            <li className="bg-white rounded px-2 py-1">🐯 {player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
