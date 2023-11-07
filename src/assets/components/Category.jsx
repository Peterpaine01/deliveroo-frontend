const Category = ({ category, index, setOrderTab, orderTab }) => {
  return (
    <>
      <h2>{category.name}</h2>

      <div className="list-meals">
        {category.meals.map((meals, index) => {
          //   console.log(orderTab);
          const handleClick = async () => {
            const { title, id, url, price, decription } = meals;
            let isOrdered = await orderTab.find((elem) => elem.id === id);
            const newOrderTab = [...orderTab];
            if (!isOrdered) {
              console.log("jamais ajouté");
              const order = {
                id: id,
                title: title,
                number: 1,
                price: price,
                url: url,
                decription: decription,
              };
              newOrderTab.push(order);
            } else {
              console.log("déjà ajouté 1 fois");
              newOrderTab[index].number = newOrderTab[index].number + 1;
            }
            setOrderTab(newOrderTab);
          };
          return (
            <article key={index} onClick={handleClick}>
              <div className="meal-description">
                <h3>{meals.title}</h3>
                {meals.description && <p>{meals.description}</p>}
                <div className="bottom-meal">
                  <div className="price">
                    <p>{meals.price} €</p>
                  </div>
                  {meals.popular && (
                    <div className="popular">
                      <p>popular</p>
                    </div>
                  )}
                </div>
              </div>

              {meals.picture && (
                <aside>
                  <img src={meals.picture} alt="" />
                </aside>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Category;
