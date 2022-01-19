import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsBox(props) {
  const [newsArticles, setnewsArticles] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const [loading, setloading] = useState(false);
  const [totalResults, settotalResults] = useState(null);

  const getdata = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&pageSize=${props.pageSize}&page=${pageNumber}&apiKey=${props.apiKey}`;

    // -------------Method 1-----------------
    document.title = `News Bee | Top ${props.category} headlines News Bee`;
    setloading(true);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    setnewsArticles(parsedData.articles);
    setloading(false);
    settotalResults(parsedData.totalResults);
    // -------------Method 2-----------------{No need of async function}
    // fetch(apiUrl).then(response => response.json()).then((parsedData)=>{
    //   setState({newsArticles: parsedData.articles})
    // })
  };
  useEffect(() => {
    getdata();
  }, []);

  const fetchMoreData = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?category=${
      props.category
    }&country=in&pageSize=${props.pageSize}&page=${pageNumber + 1}&apiKey=${
      props.apiKey
    }`;
    setpageNumber(pageNumber + 1);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    setnewsArticles(newsArticles.concat(parsedData.articles));
    setloading(false);
  };
  const capatalize = (text) => {
    //This function capatalize each Word of a string
    const arr = text.split(" ");
    let newArr = arr.map((ele) => {
      return ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase());
    });
    let str = newArr.join(" ");
    return str;
  };

  return (
    <>
      <div className="container">
        {!loading && (
          <div className="d-flex align mt-5 mb-3 mx-2 px-2">
            <h2 className="d-inline-flex ">
              <strong>News Bee </strong>{" "}
            </h2>
            <h2 className="d-inline-flex">
              {" "}
              &nbsp;:{" "}
              {capatalize(
                props.category === "general" ? "Top" : props.category
              )}{" "}
              Headlines
            </h2>
          </div>
        )}

        <div>
          <InfiniteScroll
            dataLength={newsArticles.length}
            next={fetchMoreData}
            // hasMore={Math.ceil(totalResults / pageSize) <=
            //   pageNumber}
            hasMore={
              Math.ceil(newsArticles.length / 8) < Math.ceil(totalResults / 8)
            }
            loader={<Spinner />}
          >
            <div className=" d-flex flex-row  flex-wrap ">
              {newsArticles.map(function (ele) {
                return (
                  <div key={ele.url}>
                    <NewsItems
                      title={ele.title}
                      description={ele.description}
                      img={ele.urlToImage}
                      url={ele.url}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
NewsBox.propTypes = {
  apiKey: PropTypes.string.isRequired,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
NewsBox.defaultProps = {
  category: "general",
  pageSize: 8,
};
