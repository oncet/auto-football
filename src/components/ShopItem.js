const ShopItem = ({ player, icon, name }) => {
  return (
    <li>
      <button
        className="
          dark:bg-white
          dark:text-black
          flex
          gap-2
          group
          hover:gap-6
          px-2
          py-1
          rounded
          transition-all
          w-full
      "
      >
        <div className="transition-transform group-hover:-rotate-12 group-hover:scale-[2.7]">
          {icon}
        </div>
        <div>{player}</div>
      </button>
    </li>
  );
};

export default ShopItem;
