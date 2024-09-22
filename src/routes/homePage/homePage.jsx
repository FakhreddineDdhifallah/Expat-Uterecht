import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          
            <h1 className="title"> Find Real Estate & Get your Perfect Place</h1>
            <p>this is the right place to search for the dream house</p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>CPP40307</h1>
                <h2>Verified</h2>
              </div>

              <div className="box">
                <h1>10</h1>
                <h2>province</h2>
              </div>

              <div className="box">
                <h1>+1200</h1>
                <h2>property ready</h2>
              </div>
            </div>
          </div>
        
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default HomePage;
