import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-01-06&sortBy=publishedAt&apiKey=5deb2b3fc6bb42b6a4d5d191d458a8dd"
        );
        const result = await response.json();

        // Update state with the fetched data
        setNewsData(result.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Invoke the async function
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="p-4 text-center text-white font-bold">Latest News</h2>
      <div className="flex flex-wrap justify-center items-center">
        {newsData.map((newsItem, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <NewsItem data={newsItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
