const TeamPlayer = ({ player, icon }) => {
  return (
    <li className="bg-white rounded px-2 py-1">
      {icon} {player}
    </li>
  );
};

export default TeamPlayer;
