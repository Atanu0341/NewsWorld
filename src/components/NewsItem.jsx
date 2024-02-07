import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="flex flex-col overflow-hidden border-2 border-white rounded-md w-full mb-8">
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt="news"
            className="object-cover w-full h-full hover:scale-110 hover:duration-200"
          />
        </div>

        <h2 className="text-white font-bold">{title} ...</h2>

        <p className="text-white">{description} ....</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="text-white">author</span>
            <span className="text-white">publishedAt</span>
          </div>

          <a href={newsUrl} target="_blank" className="text-white">Read More</a>
        </div>
      </div>
    );
  }
}
