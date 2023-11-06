import Description from "./Description";

const Header = ({ logo, data }) => {
  return (
    <>
      <header>
        <div className="topBar">
          <div className="container">
            <img src={logo} alt="" />
          </div>
        </div>

        <Description data={data} />
      </header>
    </>
  );
};

export default Header;
