const Category = ({ category, index }) => {
  return (
    <>
      <h2>{category.name}</h2>
      {console.log(category.meals)}

      <div className="list-meals">
        {category.meals.map((meals, index) => {
          return (
            <article key={index}>
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
