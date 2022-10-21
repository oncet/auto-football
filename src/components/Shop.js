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
              <ShopItem player={player} icon="🐮" name="defense" />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col gap-4">
            {shopItems.midfielders.map((player) => (
              <ShopItem player={player} icon="🐺" name="midfielders" />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col gap-4">
            {shopItems.forward.map((player) => (
              <ShopItem player={player} icon="🐯" name="forward" />
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Shop;
