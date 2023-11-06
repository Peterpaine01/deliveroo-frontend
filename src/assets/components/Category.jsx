const Category = ({ category, index }) => {
  return (
    <>
      <div key={index} className={category.name}>
        <h2>{category.name}</h2>
      </div>
    </>
  );
};

export default Category;
