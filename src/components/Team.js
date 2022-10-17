import TeamPlayer from "./TeamPlayer";

const Team = ({ team }) => {
  return (
    <div className="flex gap-4 text-black">
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          <TeamPlayer icon="🐵" player={team.goalkeeper + "%"} />
        </ul>
      </div>
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          {team.defense.map((player) => (
            <TeamPlayer icon="🐮" player={player} />
          ))}
        </ul>
      </div>
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          {team.midfielders.map((player) => (
            <TeamPlayer icon="🐺" player={player} />
          ))}
        </ul>
      </div>
      <div className="flex-1 h-60">
        <ul className="bg-green-400 rounded flex flex-col items-center h-full justify-center gap-4">
          {team.forward.map((player) => (
            <TeamPlayer icon="🐯" player={player} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
