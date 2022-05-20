import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { AppContext } from "../../state/StateProvider";
import click from "../../assets/Pressplay.gif";
import getFetchApiUrl from "../../common/fetchApi";
import getFetchApiUrlForDetail from "../../common/fetchApiDetailPage";
import DetailPage from "../DetailPage/DetailPage";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [detailPageData, setDetailPageData] = useState([]);
  const [display, setDisplay] = useState(true);

  const appContext = useContext(AppContext);

  const changeHandler = (e) => {
    if (e.target.value === "") {
      setSearchResults([]);
    }
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = fetch(getFetchApiUrl(searchTerm));
      fetchData
        .then((response) => response.json())
        .then((jsonResponse) => {
          setSearchResults(jsonResponse.hits);
        });
    }
  }, [searchTerm]);

  const onClickHandler = (e, item) => {
    e.preventDefault();
    //we have to update the context
    if (searchTerm !== "") {
      appContext && appContext.updateSearchTerm(searchTerm);
      const fetchDetailPageData = fetch(getFetchApiUrlForDetail(item.objectID));
      fetchDetailPageData
        .then((response) => response.json())
        .then((jsonResponse) => {
          setDetailPageData(jsonResponse);
          setDisplay(false);
        });
    }
  };

  if (display) {
    return (
      <div className="home-comp">
        <form className="home-page">
          <div className="left-items">
            <h1 className="logo">Hacker News</h1>
            <div className="search-box">
              <SearchIcon />
              <input
                className="search"
                type="text"
                placeholder="Lets Hack The News..."
                value={searchTerm}
                onChange={changeHandler}
              />
              <MicIcon />
            </div>
            <div>
              {searchResults &&
                searchResults.map((item, index) => {
                  return (
                    <div
                      className="suggestions"
                      key={index}
                      onClick={(e) => {
                        onClickHandler(e, item);
                      }}
                    >
                      {item.title}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="home-buttons">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={onClickHandler}
            >
              YaYY!!! Hack The News
            </Button>
            <img className="click" src={click} alt="" />
          </div>
        </form>
      </div>
    );
  } else {
    if (detailPageData !== []) {
      return <DetailPage detailPageData={detailPageData} />;
    }
  }
}

export default Home;
