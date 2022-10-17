const ShopItem = ({ player, icon }) => {
  return (
    <li className="dark:bg-white dark:text-black rounded px-2 py-1">
      <label className="flex justify-between cursor-pointer">
        <span>
          {icon} {player}
        </span>
        <input type="checkbox" name="items" value={icon + 1} />
      </label>
    </li>
  );
};

export default ShopItem;
