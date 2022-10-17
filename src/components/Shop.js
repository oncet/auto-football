import ShopItem from "./ShopItem";

const Shop = ({
  handleOnChange,
  handleOnSubmit,
  selectedShopItems,
  shopItems,
}) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
    >
      <div className="flex gap-4">
        <div className="flex-1">
          <ul className="flex flex-col gap-4">
            {shopItems.defense.map((player) => (
              <ShopItem player={player} icon="🐮" />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col gap-4">
            {shopItems.midfielders.map((player) => (
              <ShopItem player={player} icon="🐺" />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col gap-4">
            {shopItems.forward.map((player) => (
              <ShopItem player={player} icon="🐯" />
            ))}
          </ul>
        </div>
      </div>
      <div className="text-right text-black">
        <button
          type="submit"
          disabled={!selectedShopItems.length}
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
  );
};

export default Shop;
