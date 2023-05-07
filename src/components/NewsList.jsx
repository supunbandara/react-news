import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchNews();
      setNews(newsFromServer.data);
    };

    getNews();
  }, [selectedCategory]);

  const fetchNews = async () => {
    const res = await fetch(
      `https://inshorts.deta.dev/news?category=${selectedCategory}`
    );
    const data = await res.json();

    return data;
  };

  const hanadleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col py-10">
          <h1 className="text-3xl font-semibold pb-4">Our News</h1>

          <div className="flex flex-wrap justify-start items-center mb-4">
            <button
              className={`rounded-lg py-2 px-4 mx-2 my-1 ${
                selectedCategory == "all"
                  ? "bg-green-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => hanadleCategoryClick("all")}
            >
              All
            </button>
            <button
              className={`rounded-lg py-2 px-4 mx-2 my-1 ${
                selectedCategory == "national"
                  ? "bg-green-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => hanadleCategoryClick("national")}
            >
              National
            </button>
            <button
              className={`rounded-lg py-2 px-4 mx-2 my-1 ${
                selectedCategory == "business"
                  ? "bg-green-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => hanadleCategoryClick("business")}
            >
              Business
            </button>
            <button
              className={`rounded-lg py-2 px-4 mx-2 my-1 ${
                selectedCategory == "sports"
                  ? "bg-green-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => hanadleCategoryClick("sports")}
            >
              Sports
            </button>
          </div>
        </div>
        <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-6">
          {news.map((newsItem, index) => (
            <NewsItem key={index} newsItem={newsItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
