import logo from "../../assets/logo/logo.jpg";
const Home = () => {
  return (
    <div>
      pera
      <img
        className="img-fluid"
        src={process.env.PUBLIC_URL + logo}
        alt="logo"
      />
      ;
    </div>
  );
};

export default Home;
