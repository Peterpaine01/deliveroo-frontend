import Description from "./Description";

const Header = ({ logo, data }) => {
  return (
    <>
      <header>
        <div className="topBar">
          <div className="container">
            <div className="logo">
              <img id="logo-deliveroo" src={logo} alt="" />
            </div>
          </div>
        </div>

        <Description data={data} />
      </header>
    </>
  );
};

export default Header;
