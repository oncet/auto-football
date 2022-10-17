const ShopItem = ({ player, icon }) => {
  return (
    <li className="dark:bg-white dark:text-black rounded px-2 py-1 group">
      <label className="flex justify-between cursor-pointer">
        <div className="flex gap-2 group-hover:gap-6 transition-all">
          <div className="transition-transform group-hover:-rotate-12 group-hover:scale-[2.7]">
            {icon}
          </div>{" "}
          <div>{player}</div>
        </div>
        <input type="checkbox" name="items" value={icon + 1} />
      </label>
    </li>
  );
};

export default ShopItem;
