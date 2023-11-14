import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="top-banner">
        <h1 className="hero-message">
          This is my React Flow sandbox! Great job!
        </h1>
      </div>
      <div className="banner-buffer" />
      <div className="body">
        <h3>Links</h3>
        <ul>
          <li>
            <Link to="/org">Org Chart</Link>
          </li>
          <li>
            <Link to="/upload">Roster File Upload</Link>
          </li>
          <li>
            <Link to='/cards'>Personnel Cards</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
