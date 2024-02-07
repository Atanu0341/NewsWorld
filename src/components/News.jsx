import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    console.log("Hello");
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5deb2b3fc6bb42b6a4d5d191d458a8dd";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div>
        <h2 className="p-4 text-center text-white font-bold">Latest News</h2>
        <div className="flex flex-wrap justify-center items-center">
          {this.state.articles.map((element) => {
            return (
              <div
                key={element.url}
                className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
