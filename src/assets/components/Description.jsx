const Description = ({ data }) => {
  return (
    <>
      <div className="restaurant-infos">
        <div className="container">
          <div className="description">
            <div>
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>
            <div>
              <img src={data.restaurant.picture} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
