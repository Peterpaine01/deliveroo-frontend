const Panier = ({ data, orderTab, setOrderTab }) => {
  const handleClickCounter = (action, index, setOrderTab) => {
    const newOrderTab = [...orderTab];
    if (action === "minus") {
      newOrderTab[index].number = newOrderTab[index].number - 1;
    } else if (action === "plus") {
      newOrderTab[index].number = newOrderTab[index].number + 1;
    }
    setOrderTab(newOrderTab);
  };
  console.log(orderTab);
  return (
    <>
      <div className="panier">
        <button>Valider mon panier</button>
        <div className="order-items">
          {orderTab.map((order, index) => {
            return (
              <article key={order.title}>
                <div className="order-counter">
                  <button
                    onClick={() => {
                      handleClickCounter("minus", index, setOrderTab);
                    }}
                  >
                    -
                  </button>
                  <p>{order.number}</p>
                  <button
                    onClick={() => {
                      handleClickCounter("plus", index, setOrderTab);
                    }}
                  >
                    +
                  </button>
                </div>

                <p>{order.title}</p>
                <p>{order.price}</p>
              </article>
            );
          })}
        </div>
        <div className="fees">
          <article>
            <p>Sous-total</p>
            <p>€</p>
          </article>
          <article>
            <p>Frais de livraison</p>
            <p>2,50 €</p>
          </article>
        </div>
        <div className="total-order">
          <p>Total</p>
          <p>€</p>
        </div>

        <p>Panier</p>
      </div>
    </>
  );
};

export default Panier;
