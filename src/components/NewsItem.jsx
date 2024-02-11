import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
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

      <span className="text-white">
        By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
      </span>

      <a href={newsUrl} target="_blank" className="text-white">
        Read More
      </a>
    </div>
  );
};

export default NewsItem;
